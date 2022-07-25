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
      `${baseActivityUrl}/v1/activity/user/${data.data.UserId}/search-for-join-request`,
      {
        params: {
          searchTerm: SearchQuery,
        },
        headers: {
          Authorization: `Bearer ${token}`,
          deviceid: 123456,
        },
      }
    );
    return activitySearch;
  });
};

const getActivityRoles = () => {
  return axios.get(`${baseActivityUrl}/v1/activity/activityroles`);
};

const getOwnLibraryActivity = (token: any) => {
  const user = auth.userInfo(token);
  return user.then((data) => {
    console.log(data.data.UserId);
    const actvities = axios.get(
      `https://api-globalalohaservice-dev.saams.xyz/v1/activity/user/${data.data.UserId}/activity`,
      {
        params: {
          pageIndex: 0,
          pageSize: 12,
          filterActivityType: -1,
        },
        headers: {
          Authorization: `Bearer ${token}`,
          deviceid: 123456,
        },
      }
    );
    return actvities;
  });
};

const joinLibrary = (token: any, data: any) => {
  const activityId = data.activityId;
  const roles = data.Roles;
  const user = auth.userInfo(token);
  return user.then((data) => {
    const payload = {
      UserId: data.data.UserId,
      Roles: roles,
    };
    const joinInLibrary = axios.post(
      `${baseActivityUrl}/v1/activity/${activityId}/members/join`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          deviceid: 123456,
        },
      }
    );
    return joinInLibrary;
  });
};

const LibraryActivity = {
  allLibraryActivity,
  getOwnLibraryActivity,
  activityLibraryDetails,
  joinActivitySearch,
  getActivityRoles,
  joinLibrary,
};

export default LibraryActivity;
