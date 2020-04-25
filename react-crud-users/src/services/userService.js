const axios = require('axios')
let baseURL = 'http://localhost:8000/api/user/';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

class UserService {
    //static baseUrl = 'http://localhost:8000/api/user';

    static async getUser(id) {
        return axios.get(baseURL + id);
    }

    static async createUser(data) {
        let httpData = {
            'name': data.name,
            'email': data.email
        };
        return axios.post(baseURL, httpData, { headers });
    }

    static async updateUser(id, value) {
        return axios.put(baseURL + id, value, { headers });
    }

    static async deleteUser(id) {
        return axios.delete(baseURL + id);
    }

    static async getUserList() {
        return axios.get(baseURL, {headers});
    }
}

module.exports = UserService;