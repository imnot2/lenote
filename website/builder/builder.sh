#!/bin/bash

#######################
#usage: open Git Bash Shell and run builder.sh
#bash builder.sh
#######################

#Variable Set
BuilderDir=`pwd`
AppDir=${BuilderDir}/../
TargetDir="${BuilderDir}/package"
CompressJar=${BuilderDir}/yuicompressor.jar
Version=`date +%s`

#Create Target Dir
[ -d $TargetDir ] && rm -rf $TargetDir
mkdir -p $TargetDir

#Copy Source
SourceDir=( assets lenote migrate notes user comingsoon.html help.html index.html suggest.html download.html favicon.ico )
for dir in ${SourceDir[@]}
do
    echo "Copy $dir..."
    cp -R "$AppDir/$dir" "$TargetDir/"
done

#Remove annotate of HTML's file
remove_html_annotate() {
    local allowDir=( package user notes migrate )
    for file in $( find $1 -type f -iname *.html)
    do 
        local tmp=`dirname $file | xargs basename`
        #if [[ "${allowDir[@]/$tmp/}" != "${allowDir[@]}" ]]
        if echo "${allowDir[@]}" | grep -Fwq "$tmp"
        then
            echo 'process: ' ${file##$TargetDir/}
            #sed -ne '/<!--.\+\?-->/p' $file
            #sed -i '/<!--.\+\?-->/d' $file
            #sed -i '/<!--.\+\?-->//g' $file
            sed -i -e ':begin /<!--/,/-->/ { /-->/! { $! { N; b begin }; }; s/<!--.\+\?-->//g; };' $file
            #sed -i -e '/^\s*$/d' -e '/^\s*\/\//d' -e "s/\.js/&?v${Version}/g; s/\.css/&?v${Version}/g" $file
            sed -i -e '/^\s*$/d' -e '/^\s*\/\//d' -e "s/\.\(js\|css\)\(\s*\?[\'\"]\)/.\1?v${Version}\2/g" $file
            #sed -i -e "s/\.\(png\|ico\|gif\|jpg\)/&?v${Version}/g" $file
            sed -i -e "s/\.\(png\|ico\|gif\|jpg\)\(\s*\?[\'\"]\)/.\1?v${Version}\2/g" $file
        fi
    done
}

#editor handler
editor_process() {
    local ueditor=$TargetDir/assets/js/ueditor
    #add version controls
    local attachment="$ueditor/dialogs/attachment/attachment.html"
    sed -i -e '/^\s*$/d' -e '/^\s*\/\//d' -e "s/\.\(js\|css\)\(\s*\?[\'\"]\)/.\1?v${Version}\2/g" $attachment
    sed -i -e "s/\([^*]\)\.\(png\|swf\|gif\|jpg\)\(\s*\?[\'\"]\)/\1.\2?v${Version}\3/g" $attachment
    local image="$ueditor/dialogs/image/image.html"
    sed -i -e '/^\s*$/d' -e '/^\s*\/\//d' -e "s/\.\(js\|css\)\(\s*\?[\'\"]\)/.\1?v${Version}\2/g" $image
    sed -i -e "s/\([^*]\)\.\(png\|swf\|gif\|jpg\)\(\s*\?[\'\"]\)/\1.\2?v${Version}\3/g" $image
}

#compress css
compress_css() {
    for file in $( find "$TargetDir/assets/css" "$TargetDir/assets/js" -type f -iname *.css )
    do
        echo 'compress:' ${file##$TargetDir/}
        local outfile=${file##$BuilderDir/}.min
        sed -i -e "s/\.\(png\|ico\|gif\|jpg\)\(\s*\?[\'\"]\)/.\1?v${Version}\2/g" $file
        java -jar $CompressJar --charset utf-8 --type css $file -o $outfile
        mv -f $outfile ${outfile%\.min*}
    done
}

#compress js and add version
compress_js() {
    for file in $( find "$TargetDir/assets/js" -path "$TargetDir/assets/js/ueditor" -prune -o -type f -iname *.js )
    do
        #echo 'compress:' $file
        #if [ -f $file ]; then sed -i -e "s/\.\(css\|js\)/&?v${Version}/g" $file; fi
        if [ -f $file ] && ! echo "$file"|grep -iqE '\.min\.'; then
            echo 'compress:' ${file##$TargetDir/}
            #sed -i -e "s/\.\(css\|js\)/&?v${Version}/g" $file
            sed -i -e "s/\.\(js\|css\)\(\s*\?[\'\"]\)/.\1?v${Version}\2/g" $file
            local outfile=${file##$BuilderDir/}.min
            java -jar $CompressJar --charset utf-8 --type js $file -o $outfile
            mv -f $outfile ${outfile%\.min*}
        fi
    done
    for file in $( find "$TargetDir/assets/js/ueditor" -maxdepth 1 -type f -iname *.js )
    do
        if [ -f $file ] && ! echo "$file"|grep -iqE '\.min\.'; then
            echo 'compress:' ${file##$TargetDir/}
            sed -i -e "s/\.\(js\|css\)\(\s*\?[\'\"]\)/.\1?v${Version}\2/g" $file
            local outfile=${file##$BuilderDir/}.min
            java -jar $CompressJar --charset utf-8 --type js $file -o $outfile
            mv -f $outfile ${outfile%\.min*}
        fi
    done
}

obfuscate_js() {
    local baseURL="$TargetDir/assets/js"
    cp -f "$baseURL/jquery.min.js" "$baseURL/source/lib/jquery.js"
    #for all.js
    local targetFile="$baseURL/all.js"
    local jsfile=( 'source/lib/jquery.js' 'source/lib/jquery.cookie.js' 'ueditor/ueditor.config.js' 'ueditor/ueditor.all.min.js' 'source/lib/uuid.js' 'source/lib/md5.js' 'source/lib/base64.js' 'zclip/jquery.zclip.js' 'source/lib/jquery.lenote.js' 'source/config.js' 'source/utils.js' 'parser/parser.js' 'parser/swfobject.js' 'source/analyze.js' 'source/user.js' 'source/lenote.js' 'source/event.js' 'source/observer.js' 'source/tag.js' 'source/dom.js' 'source/view.js' 'source/main.js' )
    :>$targetFile
    for file in ${jsfile[@]}
    do
        cat "$baseURL/$file" >> $targetFile
    done
    
    #for comingsoon.js
    targetFile="$baseURL/comingsoon.js"
    jsfile=( 'source/lib/jquery.js' 'source/lib/jquery.cookie.js' 'source/lib/jquery.lenote.js' 'source/config.js' 'source/utils.js' 'source/user.js' )
    :>$targetFile
    for file in ${jsfile[@]}
    do
        cat "$baseURL/$file" >> $targetFile
    done
    
    #for index.js
    targetFile="$baseURL/index.js"
    jsfile=( 'source/lib/jquery.js' 'source/lib/jquery.cookie.js' 'source/lib/jquery.lenote.js' 'source/lib/slider/jquery.nivo.slider.js' 'parser/swfobject.js' 'source/config.js' 'source/utils.js' 'source/user.js' 'source/home.js' )
    :>$targetFile
    for file in ${jsfile[@]}; do cat "$baseURL/$file" >> $targetFile;done
    
    #for migrate.js
    targetFile="$baseURL/migrate.js"
    jsfile=( 'source/lib/jquery.js' 'source/lib/jquery.cookie.js' 'source/lib/jquery.lenote.js' 'source/config.js' 'source/utils.js' 'source/user.js' 'source/migrate.js' )
    :>$targetFile
    for file in ${jsfile[@]}; do cat "$baseURL/$file" >> $targetFile;done
    
    #for share.js
    targetFile="$baseURL/share.js"
    jsfile=( 'source/lib/jquery.js' 'source/lib/jquery.cookie.js' 'source/lib/jquery.lenote.js' 'source/config.js' 'source/utils.js' 'parser/parser.js' 'parser/swfobject.js' 'source/analyze.js' 'source/user.js' 'source/lenote.js' 'source/tag.js' 'source/share.js' )
    :>$targetFile
    for file in ${jsfile[@]}; do cat "$baseURL/$file" >> $targetFile;done
}

remove_html_annotate $TargetDir
editor_process
compress_css
compress_js
obfuscate_js
#zip -q -r web.zip $TargetDir/*
#./grunt