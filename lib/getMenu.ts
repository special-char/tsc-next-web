import { MenusMenuEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export const getMenuData = async () => {
  return await axiosInstance.get<MenusMenuEntityResponse>(
    '/api/menus/1?nested&populate=*',
  );
};
