export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);
  if (!res.ok) {
    const message = await res.json();
    throw Error(JSON.stringify(message));
  }
  return res.json();
}
