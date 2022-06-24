import { baseActivityUrl } from "../api";
import axios from 'axios';
import auth from "../auth";


const allLibraryActivity = ({pageIndex,pageSize,data}: any) => axios.post(`${baseActivityUrl}/v1/activity/library`,data,{ params: {
    pageIndex,
    pageSize
  }});

const getOwnLibraryActivity = (token: any) => {
    const user = auth.userInfo(token)
    return user.then(data =>{
      console.log(data)
      const actvities = axios.get(`https://api-globalalohaservice-dev.saams.xyz/V1/activity/recent`,{ params: {
        userid:data.data.UserId
      }});
      return actvities
    })
   
}

const LibraryActivity = {
    allLibraryActivity,
    getOwnLibraryActivity
};

export default LibraryActivity;