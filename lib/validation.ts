type ValidationParamsType = {
  value: string | [];
  message?: string;
};

const required = ({ value, message }: ValidationParamsType) =>
  !value && (message || 'Required...');

const email = ({ value, message }: ValidationParamsType) =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value as string) &&
  (message || 'Please enter valid email');

const tel = ({ value, message }: ValidationParamsType) =>
  (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value as string) &&
    message) ||
  'Please enter valid email';

const url = ({ value, message }: ValidationParamsType) =>
  (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value as string) &&
    message) ||
  'Please enter valid email';

const min = ({
  value,
  limit,
  message,
}: ValidationParamsType & { limit: number }) =>
  value.length < limit && (message || `min ${limit} items required...`);

const max = ({
  value,
  message,
  limit,
}: ValidationParamsType & { limit: number }) =>
  value.length > limit && (message || `min ${limit} items required...`);

const length = ({
  value,
  message,
  limit,
}: ValidationParamsType & { limit: number }) =>
  value.length !== limit && (message || `min ${limit} items required...`);

const pattern = ({
  value,
  message,
  pattern,
}: ValidationParamsType & { pattern: string }) => {
  const reg = new RegExp(pattern);
  return !reg.test(value as string) && (message || 'Please enter valid email');
};

export default {
  required,
  email,
  tel,
  url,
  min,
  max,
  length,
  pattern,
};
