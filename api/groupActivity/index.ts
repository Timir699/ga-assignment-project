import { baseGroupUrl } from '../api';
import axios from 'axios';

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

const GroupActivity = {
  getOwnGroupList,
  getGroupList,
  groupDetails,
};

export default GroupActivity;
