export interface IPolicy {
  id: string;
  name: string;
  product: string;
  lastUpdateDate: string;
  lastRevision: number;
}

export interface IPolicyRevision {
  id: number;
  policyId: string;
  date: string;
  content: string;
}
