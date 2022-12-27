import { FormEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export const getFormDetails = async (id: number) => {
  try {
    return await axiosInstance.get<FormEntityResponse>(
      `/api/forms/${id}?populate=fields,fields.validation`,
    );
  } catch (error) {}
};
