import axios from '../../config/axios.instance'

export class LoginSerivce {

    constructor(){ }

    async login(email, senha){
        return axios.post(`/auth/login`, {email, senha})
    }

    async signup(email, senha, nome, telefoneCelular){
        return axios.post('/auth/registro', {email, senha, nome, telefoneCelular})
    }
}