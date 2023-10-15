'use client';

import Link from 'next/link';
import { PuffLoader } from 'react-spinners';

import usePolicyList from '@/hooks/usePolicyList';

function PolicyTable() {
  const { data, isLoading, error } = usePolicyList();

  return (
    <>
      {isLoading && (
        <div className="flex flex-col items-center text-center">
          <PuffLoader />
          <p>Loading policies...</p>
        </div>
      )}
      {!isLoading && error && (
        <p className="text-center text-red-500">
          There was an error while loading the policies
        </p>
      )}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {!isLoading && data && (
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Policy name
                </th>
                <th scope="col" className="px-6 py-3">
                  Product/Service
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Revision
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Update
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.results.map(
                ({ id, name, product, lastRevision, lastUpdateDate }) => (
                  <tr className="border-b bg-white hover:bg-gray-50" key={id}>
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                    >
                      {name}
                    </th>
                    <td className="px-6 py-4">{product}</td>
                    <td className="px-6 py-4">{lastRevision}</td>
                    <td className="px-6 py-4">
                      {new Date(lastUpdateDate).toLocaleString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/policies/${id}`}
                        className="font-medium text-blue-600 hover:underline "
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default PolicyTable;
