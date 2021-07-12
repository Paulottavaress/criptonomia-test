import Axios from 'axios';

const createApi = () => {
  const config = {
    baseURL: process.env.VUE_APP_ROOT_API,
    headers: {
      common: {
        'Content-Type': 'application/json',
      },
    },
  };

  const instance = Axios.create(config);

  return instance;
};

export default createApi;