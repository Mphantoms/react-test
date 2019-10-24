
import axios from 'axios';
import qs from 'qs'
import { Message } from '@alifd/next';

const debug = 'dev'      //环境,dev: 开发，pro：生产
const debugDict = {
    dev: {
        DOMIN: 'http://47.111.93.170:4567',
        Login: 'login.html',
    },
    pro: {
        DOMIN: 'http://emoji.biaoqingmm.com:4567',
        Login: '../login',
    }
}
const defaultHeaders = { 'Content-type': 'application/x-www-form-urlencoded' }
const { DOMIN, Login } = debugDict[debug]

let _httpError = (error) => {
    Message.error(error || '网络错误');
}

Promise.prototype.complete = function (callback) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};

let callHttp = ({ url, data = {}, method = 'post', headers = defaultHeaders }) => {
    if (!/^http:/.test(url)) {
        url = DOMIN + url
    }
    let uid = localStorage.getItem('uid')
    let token = localStorage.getItem('token')
    if (!uid || !token) {
        window.open(Login, '_self')
        return
    }
    data = { ...data, uid, token }
    let option = { method, headers, url, data }
    if (method == 'get') {
        option.params = data
    } else {
        option.data = qs.stringify(data)
    }
    return new Promise((resolve, reject) => {
        axios(option).then(({ data }) => {
            let { code, error, result } = data
            if (code == 1) {
                resolve(result)
            } else if (error.indexOf('登录') != -1) {
                window.open(Login, '_self')
            } else {
                reject()
                _httpError(error)
            }
        }).catch(() => {
            reject()
            _httpError()
        })
    })
}

export { callHttp, DOMIN, _httpError }