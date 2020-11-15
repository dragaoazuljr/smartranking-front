import axios from '../../config/axios.instance';
import jwt from 'jsonwebtoken';

export class UserService {
    constructor() {}

    async getUserById(_id){
        return axios.get('/jogadores', {params: {_id}})
    }

    async getuserByEmail(email){
        return axios.get('/jogadores/email', {params: {email}})
    }

    async getUserLoged(){
        let accessToken = localStorage.getItem('accessToken');
        let decoded = await jwt.decode(accessToken);
        console.log(decoded)
        return decoded
    }
}