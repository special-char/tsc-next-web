type ValidationParamsType = {
  value: string | [];
  message?: string;
  validation?: string;
};

const required = ({ value, message }: ValidationParamsType) =>
  !value && (message || 'Required...');

const email = ({ value, message }: ValidationParamsType) =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value as string) &&
  (message || 'Please enter valid email');

const tel = ({ value, message }: ValidationParamsType) =>
  !/^\d{10}$/.test(value as string) &&
  (message || 'Please enter valid email');

const url = ({ value, message }: ValidationParamsType) =>
  (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value as string) &&
    message) ||
  'Please enter valid email';

const min = ({ value, validation, message }: ValidationParamsType) =>
  value.length < Number(validation) &&
  (message || `min ${validation} items required...`);

const max = ({ value, message, validation }: ValidationParamsType) =>
  value.length > Number(validation) &&
  (message || `min ${validation} items required...`);

const length = ({ value, message, validation }: ValidationParamsType) =>
  value.length !== Number(validation) &&
  (message || `min ${validation} items required...`);

const pattern = ({ value, message, validation }: ValidationParamsType) => {
  if (validation) {
    const reg = new RegExp(validation);
    return (
      !reg.test(value as string) && (message || 'Please enter valid email')
    );
  }
  return false;
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
