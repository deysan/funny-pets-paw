import { nanoid } from 'nanoid';

export const user = () => {
  try {
    const savedUser = localStorage.getItem('userId');

    if (savedUser === null) {
      const newUser = nanoid();
      localStorage.setItem('userId', newUser);
      return newUser;
    }

    return savedUser;
  } catch (error) {
    return nanoid();
  }
};
