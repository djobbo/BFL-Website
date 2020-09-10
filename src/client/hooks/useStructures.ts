import { useEffect, useState } from 'react';
import { getStructures, StructureEntry } from '../contentful';

export const useStructures = (): [StructureEntry[], boolean] => {
    const [structures, setStructures] = useState<StructureEntry[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getStructures().then((data) => {
            setStructures(data);
            setLoading(false);
        });
    }, []);

    return [structures, isLoading];
};
