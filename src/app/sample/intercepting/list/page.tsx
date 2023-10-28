import React from 'react';
import Link from "next/link";

const ListPage = () => {
  return (
    <div>
      {Array.from({length: 10}).map((_, index) => <div key={index.toString()}><Link  href={`/sample/intercepting/detail/${index}`}>{(index+1).toString()}번째 아이템</Link></div>)}
    </div>
  );
};

export default ListPage;