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

const profileInformation = {
  profileInfo,
};

export default profileInformation;
