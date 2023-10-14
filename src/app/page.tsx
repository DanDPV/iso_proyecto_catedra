import type { Metadata } from 'next';

import PolicyTable from '@/components/PolicyTable';

export const metadata: Metadata = {
  title: 'Homepage',
};

function Page() {
  return (
    <>
      <section className="py-5">
        <h1 className="text-center text-2xl font-bold">List of policies</h1>
        <h2 className="text-center text-gray-600">
          List of all the policies registered in the system.
        </h2>
      </section>
      <section className="py-5">
        <PolicyTable />
      </section>
    </>
  );
}

export default Page;
