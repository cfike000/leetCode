var reverse = function(x) {
    if(x === 0){
        return 0
    }else if(x > 0){
        const num = x.toString().split('').reverse().join('')
        return num < 2147483647 ? num : 0
    }else if(x < 0){
        const num = -(-x).toString().split('').reverse().join('')
        return num > -2147483647 ? num : 0
    }
};
