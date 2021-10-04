import axios from 'axios';
import { store } from '..';

export const apiReq = {
  create: () => axios.create({
    headers: {
      common: {
        'X-CSRF-Token': store.getState().csrf,
      },
    },
    withCredentials: true,
  }),
};
