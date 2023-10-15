import { useState } from 'react';
import useSWR from 'swr';

import type { IPolicy, IPolicyRevision } from '@/interfaces/Policy';
import fetcher from '@/utils/fetcher';

function usePolicyDetails(policyId: string) {
  const [revision, setRevision] = useState<number>();
  const { data, error, isLoading } = useSWR<IGetResponse>(
    revision
      ? `/api/policies/${policyId}?revision=${revision}`
      : `/api/policies/${policyId}`,
    fetcher,
  );

  return {
    data,
    isLoading,
    error,
    setRevision,
    revision,
  };
}

interface IGetResponse {
  policy: IPolicy;
  revision: IPolicyRevision;
  revisionList: number[];
}

export default usePolicyDetails;
