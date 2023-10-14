import { NextResponse } from 'next/server';

import type { IAPIListResponseWrapper } from '@/interfaces/API';
import type { IPolicy } from '@/interfaces/Policy';

const MOCK_POLICIES_LIST: IPolicy[] = [
  {
    id: 'policy-001',
    name: 'Termns and Conditions',
    product: 'Product 1',
    lastUpdateDate: new Date(2023, 9, 1).toString(),
    lastRevision: 1,
  },
  {
    id: 'policy-002',
    name: 'Privacy Policy',
    product: 'Product 1',
    lastUpdateDate: new Date(2023, 9, 14).toString(),
    lastRevision: 3,
  },
  {
    id: 'policy-003',
    name: 'User manual',
    product: 'Service 2',
    lastUpdateDate: new Date(2023, 0, 15).toString(),
    lastRevision: 10,
  },
];

export async function GET() {
  const response: IAPIListResponseWrapper<IPolicy> = {
    page: 1,
    totalPages: 1,
    results: MOCK_POLICIES_LIST,
  };
  return NextResponse.json(response, { status: 200 });
}
