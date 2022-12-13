import axiosInstance from './axiosInstance';

export const getMenuData = async () => {
  try {
    return await axiosInstance.get<any>('/api/menus/1?nested&populate=*');
  } catch (error) {}
};
