import { type NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import type { IPolicy, IPolicyRevision } from '@/interfaces/Policy';
import type { IRouteParams } from '@/interfaces/Routes';

const MOCK_POLICY: IPolicy = {
  id: 'policy-002',
  name: 'Privacy Policy',
  product: 'Product 1',
  lastUpdateDate: new Date(2023, 9, 14).toString(),
  lastRevision: 3,
};

const MOCK_REVISIONS_DATA: IPolicyRevision[] = [
  {
    id: 1,
    policyId: 'policy-002',
    date: new Date(2023, 9, 1).toString(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    policyId: 'policy-002',
    date: new Date(2023, 9, 5).toString(),
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Neque aliquam vestibulum morbi blandit cursus risus at ultrices.`,
  },
  {
    id: 3,
    policyId: 'policy-002',
    date: new Date(2023, 9, 14).toString(),
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Quam lacus suspendisse faucibus interdum.`,
  },
];

const MOCK_REVISIONS_LIST: number[] = [3, 2, 1];

export async function GET(
  request: NextRequest,
  { params }: IRouteParams<IPolicyDetailsParams>,
) {
  const { id } = params;
  const { searchParams } = request.nextUrl;
  let revision = parseInt(searchParams.get('revision') || '3', 10);

  if (Number.isNaN(revision) || revision < 1) {
    revision = 3;
  }

  const revisionData = MOCK_REVISIONS_DATA.find(
    (rev) => rev.id === revision && rev.policyId === id,
  );

  if (!revisionData) {
    return NextResponse.json(
      { message: 'Policy or revision Not Found' },
      { status: 404 },
    );
  }

  const response: IGetResponse = {
    policy: MOCK_POLICY,
    revision: revisionData,
    revisionList: MOCK_REVISIONS_LIST,
  };
  return NextResponse.json(response, { status: 200 });
}

interface IPolicyDetailsParams {
  id: string;
}

interface IGetResponse {
  policy: IPolicy;
  revision: IPolicyRevision;
  revisionList: number[];
}
