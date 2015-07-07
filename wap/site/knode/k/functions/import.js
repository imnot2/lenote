module.exports = function(){
    return {
        date: require('./date'),
        encrypt: require('./encrypt'),
        detect: require('./mobile-detect'),
        h: require('./helper')
    };
};