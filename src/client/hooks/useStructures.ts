import { StructureEntry } from '../contentful';
import { useFetchData } from './useFetchData';

export const useStructures = () => {
    return useFetchData<StructureEntry[]>(`/api/structures`);
};
