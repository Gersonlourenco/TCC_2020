const axios = require('./node_modules/axios');
const baseURL = 'http://localhost:8000/api/user/';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

class Project {

  

  static async store (data) {
    /*let ax = axios.create({
      //baseURL: 'http://3.217.213.39:9081',
      baseURL: 'http://localhost:8000/api/user/',
      headers: headers,
      proxy: false
    });*/

    let httpData = {
      'name': data.name,
      'email': data.email
    };

    return axios.post(baseURL, httpData, {headers});
  }
}

module.exports = Project;