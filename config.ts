import axios from 'axios';
import { nanoid } from 'nanoid';

const userId = () => {
  try {
    const savedUserId = localStorage.getItem('userId');

    if (savedUserId === null) {
      const newUserId = nanoid();
      localStorage.setItem('userId', newUserId);
      return newUserId;
    }

    return savedUserId;
  } catch (error) {
    return nanoid();
  }
};

export default axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_CAT_API_KEY || '',
  },
  params: {
    sub_id: userId(),
  },
});
