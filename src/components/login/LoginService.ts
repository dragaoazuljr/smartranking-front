import axios from '../../config/axios.instance'

export class LoginSerivce {

    constructor(){ }

    async login(email: string, senha: string): Promise<any>{
        return axios.post(`/auth/login`, {email, senha})
    }
}