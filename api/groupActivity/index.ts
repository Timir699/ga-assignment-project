import { baseGroupUrl } from "../api";
import axios from 'axios';

const getOwnGroupList = (token:any) =>  axios.get(`${baseGroupUrl}/api/v1/group` , { headers: {"Authorization" : `Bearer ${token}`} })
const getGroupList = () => axios.get(`${baseGroupUrl}/api/v1/group`)

const GroupActivity = {
    getOwnGroupList,
    getGroupList
};

export default GroupActivity;