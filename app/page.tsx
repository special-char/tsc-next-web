'use client';

import { demos } from '@/lib/demos';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';
import Icon from '@/ui/Icon';

export default function Page() {
  const [list, setList] = useState(['A', 'B', 'C']);

  const changeList = (item: string) => {
    setList((list) => {
      const index = list.findIndex((x) => x === item);
      return [item, ...list.slice(0, index), ...list.slice(index + 1)];
    });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Icon name="email" height={42} width={42} />
      <ul>
        {list.map((x) => (
          <li key={x} role="button" onClick={() => changeList(x)}>
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}
