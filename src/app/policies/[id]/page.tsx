import type { IRouteParams } from '@/interfaces/Routes';

import PolicyDetail from './PolicyDetail';

function PolicyDetailPage({ params }: IRouteParams<IPolicyDetailParams>) {
  const { id } = params;
  return <PolicyDetail id={id} />;
}

interface IPolicyDetailParams {
  id: string;
}

export default PolicyDetailPage;
