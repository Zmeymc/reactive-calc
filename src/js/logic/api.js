const apiEndpoint = 'http://172.18.0.2:9200';
const storageName = 'calc_history';

const historySkeleton = {values:[]};

const pushBody = (expression) => {
    return {
        script: {
            inline: "ctx._source.values.add(params.value)",
            params: {"value": expression}
        }
    }
};


export function getHistory(uuid) {
    const url = [apiEndpoint,storageName,'doc',uuid].join('/');
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.response)
                } else {
                    reject(xhr.status)
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send();
    });


}

export function pushHistory(uuid,expression) {
    const url = [apiEndpoint,storageName,'doc',uuid,'_update'].join('/');
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if ((xhr.status === 200)||(xhr.status === 201)) {
                    resolve(xhr.response)
                } else {
                    reject(xhr.status)
                }
            }
        };
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send(JSON.stringify(pushBody(expression)));
    });


}

export function createHistory() {
    const url = [apiEndpoint,storageName,'doc'].join('/');

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 201) {
                    resolve(xhr.response)
                } else {
                    reject(xhr.status)
                }
            }
        };
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send(JSON.stringify(historySkeleton));
    });
}