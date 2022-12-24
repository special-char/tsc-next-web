'use client';

import useDynamicFieldImport from '@/hooks/useDynamicFieldImport';
import { Field } from 'formik';
import dynamic from 'next/dynamic';

const TextInput = dynamic(() => import('./TextInput'), {
  loading: () => 'Loading...',
});

const TextArea = dynamic(() => import('./TextArea'), {
  loading: () => 'Loading...',
});

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

const FieldItem: React.FC<IconProps> = ({
  component,
  field_id,
  initialvalue,
  ...rest
}): React.ReactNode | null => {
  return <Field component={[component]} {...rest} />;
};

export default FieldItem;
