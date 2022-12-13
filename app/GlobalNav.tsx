'use client';

import { demos } from '@/lib/demos';
import clsx from 'clsx';
import { useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';
import Button from '@/ui/Button';

export default function GlobalNav() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <div className="space-y-5">
      {demos.map((demo) => {
        return (
          <div key={demo.name}>
            <div className="text-zinc-500 mb-2 px-3 text-xs font-semibold uppercase tracking-wider">
              <div>{demo.name}</div>
            </div>

            {demo.items.map((item) => {
              const isActive = item.slug === selectedLayoutSegments;

              return (
                <div key={item.slug}>
                  {item.isDisabled ? (
                    <div
                      className="text-zinc-600 block rounded-md px-3 py-2 text-sm font-medium"
                      title="Coming Soon"
                    >
                      {item.name}
                    </div>
                  ) : (
                    <Button
                      as={Link}
                      href={`/${item.slug}`}
                      className={clsx(
                        'hover:bg-zinc-800 hover:text-zinc-100 block rounded-md px-3 py-2 text-sm font-medium',
                        { 'text-zinc-400': !isActive, 'text-white': isActive },
                      )}
                    >
                      {item.name}
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
