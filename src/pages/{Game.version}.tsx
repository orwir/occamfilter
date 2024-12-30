import Layout from '@/components/layout';
import Seo from '@/components/seo';
import { IconButton } from '@/components/widgets';
import { obtainFilters } from '@/lib/utils';
import clsx from 'clsx';
import { Link, navigate } from 'gatsby';
import React from 'react';

export default function GamePage({
  pageContext,
}: {
  pageContext: GameMetadata;
}) {
  const filters = obtainFilters(pageContext.version);

  return (
    <Layout>
      <div className="flex h-full flex-col items-center">
        <div className="w-[480px]">
          {filters.length > 0 && (
            <div className="flex flex-col items-center space-y-1">
              {filters.map((filter) => (
                <Link
                  key={filter.id}
                  className="w-full rounded-md border border-amber-600 bg-neutral-950 hover:brightness-150"
                  to={`/${pageContext.version}/filter/${filter.id}`}
                >
                  <div className="flex flex-row justify-between rounded-t-md bg-neutral-900 px-2 py-2">
                    <div className="font-bold text-amber-600">
                      {filter.name}
                    </div>
                    <IconButton
                      icon="mingcute:delete-2-line"
                      onClick={(event) => {
                        event.preventDefault();
                        alert('filter is removed. Or maybe not');
                      }}
                    />
                  </div>
                  <div className="flex flex-col py-2 pe-2 ps-4">
                    <div className="line-clamp-2 overflow-hidden text-ellipsis break-words">
                      {filter.description}
                    </div>
                    <div className="pt-1 text-sm text-gray-400">
                      {filter.league} ({filter.version})
                    </div>
                    <div className="text-sm text-gray-400">
                      {filter.lastUpdated
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' ')}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {!filters.length && (
            <div className="flex h-96 w-full flex-col justify-center space-y-8 rounded-md border border-amber-600 bg-neutral-950 px-8 text-center text-lg">
              <div>Filters created are saved locally to the browser.</div>
              <div>
                Import any filter that works in Path of Exile or create a new
                one.
              </div>
            </div>
          )}
          <div className="flex w-full flex-row justify-between space-x-4 pt-4">
            <button
              className="w-1/2 rounded-md border p-2 hover:bg-neutral-900 hover:text-amber-600"
              onClick={() => {
                navigate(`/${pageContext.version}/filter`);
              }}
            >
              Create
            </button>
            <button
              className="w-1/2 rounded-md border p-2 hover:bg-neutral-900 hover:text-amber-600"
              onClick={importFilter}
            >
              Import
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const Head = ({ pageContext }: { pageContext: GameMetadata }) => (
  <Seo title={pageContext.name} />
);

type GameMetadata = {
  version: string;
  name: string;
};

function importFilter() {
  alert('import filter');
}