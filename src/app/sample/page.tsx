'use client'

import React from 'react';

interface Props {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const Page = () => {

  return (
    <div>
      <h1>Test Page</h1>
    </div>
  );
};

export default Page;