import { useEffect, useRef, useState } from 'react';
import { UseDynamicSVGImportOptions } from 'types/UseDynamicSVGImportOptions';

function useDynamicSVGImport(
    name: string,
    options: UseDynamicSVGImportOptions = {},
) {
    const [fieldModule, setFieldModule] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        setLoading(true);

        import(`../ui/${name}`)
            .then((module) => {
                setFieldModule(module);
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

    return { error, loading, SvgIcon: fieldModule?.default };
}

export default useDynamicSVGImport;
