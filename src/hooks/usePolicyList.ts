import useSWR from 'swr';

import type { IAPIListResponseWrapper } from '@/interfaces/API';
import type { IPolicy } from '@/interfaces/Policy';
import fetcher from '@/utils/fetcher';

function usePolicyList() {
  const { data, error, isLoading } = useSWR<IAPIListResponseWrapper<IPolicy>>(
    `/api/policies`,
    fetcher,
  );

  return {
    data,
    isLoading,
    error,
  };
}

export default usePolicyList;
