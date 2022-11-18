'use client';

import useDynamicSVGImport from '@/hooks/useDynamicSVGImport';
import { UseDynamicSVGImportOptions } from 'types/UseDynamicSVGImportOptions';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  onCompleted?: UseDynamicSVGImportOptions['onCompleted'];
  onError?: UseDynamicSVGImportOptions['onError'];
}

const Icon: React.FC<IconProps> = ({
  name,
  onCompleted,
  onError,
  ...rest
}): React.ReactNode | null => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError,
  });
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
