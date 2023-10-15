'use client';

import { PuffLoader } from 'react-spinners';

import usePolicyDetails from '@/hooks/usePolicyDetails';

function PolicyDetail({ id }: IPolicyDetailProps) {
  const { data, error, isLoading, setRevision, revision } =
    usePolicyDetails(id);

  return (
    <section className="main-container my-5">
      {isLoading && (
        <div className="flex flex-col items-center text-center">
          <PuffLoader />
          <p>Loading policy...</p>
        </div>
      )}
      {!isLoading && error && (
        <p className="text-center text-red-500">
          There was an error while loading the policy details, please try again
          later
        </p>
      )}
      {!isLoading && data && (
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Policy No: {data.policy.id}
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                {data.policy.name} - {data.policy.product}
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="revision"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Revision
                  </label>
                  <div className="mt-2">
                    <select
                      id="revision"
                      name="revision"
                      onChange={(event) => {
                        setRevision(parseInt(event.target.value, 10));
                      }}
                      value={revision}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      {data.revisionList.map((rev) => (
                        <option value={rev} key={rev}>
                          {rev}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Content
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      readOnly
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={data.revision.content}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Policy Content
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add new revision
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

interface IPolicyDetailProps {
  id: string;
}

export default PolicyDetail;
