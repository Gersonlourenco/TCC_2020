const axios = require('axios')
const baseURL = 'http://localhost:8000/api/user/';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

class UserService {
    //baseUrl = 'http://localhost:8000/api/user';

    /*static async getUser(id) {
        return axios.get(baseUrl + id);
    }

    static async createUser(data) {
        let httpData = {
            'name': data.name,
            'email': data.email
        };
        return axios.post(baseURL, httpData, { headers });
    }

    static async updateUser(id, value) {
        return axios.put(baseUrl + id, value, { headers });
    }

    static async deleteUser(id) {
        return axios.delete(baseUrl + id);
    }
*/
    static async getUserList() {
        return axios.get({baseURL}, {headers});
    }
}

module.exports = UserService;