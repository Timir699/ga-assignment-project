import { baseProfileInfo } from '../api';
import axios from 'axios';
import auth from '../auth';

const profileInfo = (token: any) => {
  const user = auth.userInfo(token);
  return user.then((data) => {
    console.log(data.data.UserId);
    const getProflieInfo = axios.get(
      `${baseProfileInfo}/v2/profile/parent-privileged/e1e0322c-acb0-4a24-958c-23b2ad912a2c/${data.data.UserId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          deviceid: 123456,
        },
      }
    );
    return getProflieInfo;
  });
};
const profileUpdate = (token: any, payload: any) => {
  const user = auth.userInfo(token);
  return user.then((data) => {
    console.log(data.data.UserId);
    const updateProfileInfo = axios.put(
      `${baseProfileInfo}/v2/profile`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          deviceid: 123456,
        },
      }
    );
    return updateProfileInfo;
  });
};

const profileInformation = {
  profileInfo,
  profileUpdate,
};

export default profileInformation;
