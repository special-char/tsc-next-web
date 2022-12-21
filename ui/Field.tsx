'use client';

import useDynamicFieldImport from '@/hooks/useDynamicFieldImport';
import { Field } from 'formik'
import TextInput from './TextInput';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
}

const FieldItem: React.FC<IconProps> = ({
    component,
    ...rest
}): React.ReactNode | null => {
    const { error, loading, SvgIcon } = useDynamicFieldImport(component);

    if (loading) {
        return (
            <div
                className="rounded-full bg-neutral-400"
                style={{
                    height: rest?.height || 0,
                    width: rest?.width || 0,
                    backgroundColor: rest?.fill || '#000',
                }}
            ></div>
        );
    }

    if (error) {
        return <Field component={TextInput} {...rest} />;
    }



    if (SvgIcon) {
        return <Field component={SvgIcon} {...rest} />;
    }

    return <Field component={TextInput} {...rest} />;
};

export default FieldItem;
