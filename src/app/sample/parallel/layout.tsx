'use client';

import React, {PropsWithChildren} from 'react';
import {useSelectedLayoutSegment} from "next/navigation";

interface Props extends PropsWithChildren {
  one: React.ReactNode,
  two: React.ReactNode,
  header: React.ReactNode,
}

const Layout = ({ children, one, two, header  }: Props) => {
  const oneSegment = useSelectedLayoutSegment('one')
  const twoSegment = useSelectedLayoutSegment('two')
  console.log({ oneSegment, twoSegment })

  return (
    <div>
      <h2>Parallel layout</h2>
      <>{one}</>
      <>{children}</>
      <>{two}</>
    </div>
  );
};

export default Layout;