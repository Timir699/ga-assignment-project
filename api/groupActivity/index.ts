import { baseGroupUrl } from '../api';
import axios from 'axios';
import auth from '../auth';

const getOwnGroupList = (token: any) =>
  axios.get(`${baseGroupUrl}/api/v1/group`, {
    headers: { Authorization: `Bearer ${token}` },
  });
const getGroupList = (
  pageIndex: number,
  pageSize: number,
  applicationId: any,
  tenantId: any
) =>
  axios.get(`${baseGroupUrl}/api/v1/group/library`, {
    params: {
      pageIndex,
      pageSize,
      applicationId,
      tenantId,
    },
  });

const groupDetails = (id: any) => {
  return axios.get(`${baseGroupUrl}/api/v1/group/${id}`);
};
const groupRoles = () => {
  return axios.get(`${baseGroupUrl}/api/v1/group/roles`, {
    params: {
      applicationId: 'e1e0322c-acb0-4a24-958c-23b2ad912a2c',
      tenantId: 'af3baf1d-7aae-462c-9d1e-051cef459b86',
    },
  });
};
const joinGroupSearch = (token: any, SearchQuery: any) => {
  const activitySearch = axios.get(
    `${baseGroupUrl}/api/v1/group/search-for-join-request`,
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
};

const joinGroup = (token: any, data: any) => {
  const groupId = [data.groupId];
  const roles = data.roles;
  const user = auth.userInfo(token);
  return user.then((data) => {
    const joinInGroup = axios.post(
      `${baseGroupUrl}/api/v1/group/collections/join/${roles}`,
      groupId,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          deviceid: 123456,
        },
      }
    );
    return joinInGroup;
  });
};

const GroupActivity = {
  getOwnGroupList,
  getGroupList,
  groupDetails,
  groupRoles,
  joinGroupSearch,
  joinGroup,
};

export default GroupActivity;
