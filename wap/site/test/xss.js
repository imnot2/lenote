var request = require('request'),
    token = process.argv.splice(2).shift(),
    content = '<div onclick="alert(\'haha\')">xss测试用例，你敢不敢<a href="javascript:alert(\'hello\');">点</a>？哈哈哈</div><script type="text/javascript">alert(\'脚本\')</script>"><img src=1 onerror=alert(123);>';

if(token){
    request('http://test2.lenote.com/a/note/createNote', {
        method: 'POST',
        encoding: 'utf8',
        timeout: 10000,
        body: JSON.stringify({
            title: '<img src=1 onerror=alert(1);>', content: content, summary: '<a href="javascript:alert(\'hello\');">点</a>', tags: [{tagName: 'test', tagIcon: 0}]
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'AuthToken': token,
            'Collect-Data': '1.0.0/web///web///' + token + '/web/0'
        }
    }, function(error, response, body){
        if(!error && response.statusCode == 200){
            var body = JSON.parse(body);
            if(body.returnCode == 200){
                console.info('create new note: ' + body.noteID);
            }else{
                console.info('error:', body);
            }
        }else{
            console.error(error);
        }
    });
}