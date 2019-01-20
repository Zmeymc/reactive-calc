import Promise from 'promise'
export function getHistory(callback) {
    setTimeout(() => callback('42'), 2000);
}

export function evaluate(callback) {
    setTimeout(() => callback('42'), 1000);
}