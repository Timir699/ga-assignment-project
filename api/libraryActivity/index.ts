import { baseActivityUrl, baseGroupUrl, baseSearchurl, baseUrl } from '../api';
import axios from 'axios';
import auth from '../auth';

const allLibraryActivity = (pageIndex: any, pageSize: number, data: any) => {
  return axios.post(`${baseActivityUrl}/v1/activity/library`, data, {
    params: {
      pageIndex,
      pageSize,
    },
  });
};

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

const getOwnLibraryActivity = (token: any, page: any, pageSize: any) => {
  const user = auth.userInfo(token);
  return user.then((data) => {
    console.log(data.data.UserId);
    const actvities = axios.get(
      `https://api-globalalohaservice-dev.saams.xyz/v1/activity/user/${data.data.UserId}/activity`,
      {
        params: {
          pageIndex: page,
          pageSize: pageSize,
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

const getClassYear = (token: any) => {
  const classYear = axios.get(`${baseSearchurl}/v1/classyear/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
      deviceid: 123456,
    },
  });
  return classYear;
};

const createActivity = (token: any, data: any) => {
  console.log(data);

  const payload = {
    ApplicationId: 'e1e0322c-acb0-4a24-958c-23b2ad912a2c',
    TenantId: 'af3baf1d-7aae-462c-9d1e-051cef459b86',
    Name: data.Name,
    ActivityType: data.ActivityType,
    GroupId: data.GroupId,
    classYearId: data.classYearId,
  };
  const user = auth.userInfo(token);
  return user.then((data) => {
    const createAnActivity = axios.post(
      `${baseActivityUrl}/v1/activity/create/${data.data.UserId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          deviceid: 123456,
        },
      }
    );
    return createAnActivity;
  });
};

const LibraryActivity = {
  allLibraryActivity,
  getOwnLibraryActivity,
  activityLibraryDetails,
  joinActivitySearch,
  getActivityRoles,
  joinLibrary,
  getClassYear,
  createActivity,
};

export default LibraryActivity;
