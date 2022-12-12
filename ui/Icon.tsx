'use client';

import useDynamicSVGImport from '@/hooks/useDynamicSVGImport';
import { UseDynamicSVGImportOptions } from 'types/UseDynamicSVGImportOptions';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  ...rest
}): React.ReactNode | null => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name);

  if (error) {
    return error.message;
  }

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

  if (SvgIcon) {
    return <SvgIcon {...rest} />;
  }

  return null;
};

export default Icon;
