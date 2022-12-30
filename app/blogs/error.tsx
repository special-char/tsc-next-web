'use client';

import React from 'react';

export default function Error({ error }: any) {
  React.useEffect(() => {
    console.log('logging error:', error);
  }, [error]);

  return (
    <div className="space-y-4">
      <div className="text-vercel-pink text-sm">
        <strong className="font-bold">Error:</strong> {error?.message}
      </div>
    </div>
  );
}
