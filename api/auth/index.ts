import client from "../client";
import { baseUrl } from "../api";
import axios from 'axios';
const querystring = require('querystring');


const signIn = (data: any) => client.post('/oauth2/token/v2', data);
const signUp = (data: any) => client.post('/api/v2/register/user', data);
const userInfo = (token: any) => axios.post(`${baseUrl}/v2/verify?clientside=true`, querystring.stringify({ Token: token}));


const auth = {
    signIn,
    signUp,
    userInfo
};

export default auth;