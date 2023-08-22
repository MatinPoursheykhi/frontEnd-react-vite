import axios from "axios"

// pls use (yarn server) to start json-server {https://www.npmjs.com/package/json-server}
// and run project on different terminal through (yarn dev)
// on an other terminanl simultaneously
let API = 'jsonServer'
let baseUrl

switch (API) {
  case 'jsonServer':
    baseUrl = `http://localhost:3000/`
  break;
  case 'local':
    baseUrl = `http://localhost:8000/`
  break;
}

function setHeaders(_auth) {
    let config = {
        headers: {
            'content-type': 'application/json'
        }
    }
    if (_auth)
        config.headers['Authorization'] = 'bearer tokenCode'
    return config
}

function pickMethod(_method) {
    switch (_method) {
        case 'post':
            return axios.post
        case 'put':
            return axios.put
        case 'get':
            return axios.get
        case 'delete':
            return axios.delete
    }
}

export default async function callApi(_method, _route, _body = {}, _auth = false) {
    let route = baseUrl + _route
    let headers = setHeaders(_auth)
    let Api = pickMethod(_method)
    let response = await Api(route, _body, headers)
    return response
}
