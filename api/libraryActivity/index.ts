import { baseActivityUrl } from '../api';
import axios from 'axios';
import auth from '../auth';

const allLibraryActivity = (pageIndex: any, pageSize: number, data: any) =>
  axios.post(`${baseActivityUrl}/v1/activity/library`, data, {
    params: {
      pageIndex,
      pageSize,
    },
  });

const activityLibraryDetails = (id: any) => {
  return axios.get(`${baseActivityUrl}/v1/activity/${id}/settings`);
};

const joinActivitySearch = (token: any, SearchQuery: any) => {
  const user = auth.userInfo(token);
  return user.then((data) => {
    console.log(data.data.UserId);
    const activitySearch = axios.get(
      `${baseActivityUrl}/V1/activity/user/${data.data.UserId}/search-for-join-request`,
      {
        params: {
          searchTerm: SearchQuery,
        },
      }
    );
    return activitySearch;
  });
};

const getOwnLibraryActivity = (token: any) => {
  const user = auth.userInfo(token);
  return user.then((data) => {
    console.log(data.data.UserId);
    const actvities = axios.get(
      `https://api-globalalohaservice-dev.saams.xyz/V1/activity/recent`,
      {
        params: {
          userid: data.data.UserId,
        },
      }
    );
    return actvities;
  });
};

const LibraryActivity = {
  allLibraryActivity,
  getOwnLibraryActivity,
  activityLibraryDetails,
  joinActivitySearch,
};

export default LibraryActivity;
