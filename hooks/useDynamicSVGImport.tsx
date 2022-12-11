import { useEffect, useRef, useState } from 'react';
import { UseDynamicSVGImportOptions } from 'types/UseDynamicSVGImportOptions';

function useDynamicSVGImport(
  name: string,
  options: UseDynamicSVGImportOptions = {},
) {
  const [iconModule, setIconModule] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    import(`@/public/icons/${name}.svg`)
      .then((module) => {
        setIconModule(module);
        // onCompleted(name, module);
      })
      .catch((error) => {
        setError(error);
        // onError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { error, loading, SvgIcon: iconModule?.default };
}

export default useDynamicSVGImport;
