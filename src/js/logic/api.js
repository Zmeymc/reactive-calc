export function getHistory(callback) {
    setTimeout(() => callback('42'), 2000);
}

export function evaluate(expression,callback) {
    console.log('api request: '+expression);
    setTimeout(() => callback({state:'OK',value:'42'}), 1000);
}