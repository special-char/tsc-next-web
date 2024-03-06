import { FormEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type FormDetailsType = (id: number) => Promise<FormEntityResponse>;

export const getFormDetails: FormDetailsType = async (id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/forms/${id}?populate=fields,fields.validation,fields.options`,
      {
        cache: 'no-store',
      },
    );
    return await res.json();
  } catch (error) {}
};
