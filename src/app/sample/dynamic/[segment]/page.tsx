import React from 'react';

const DynamicRoutes = ({ params }: { params: { slug: string } }) => {
  console.log(params)

  return (
    <div>
      dynamic routes
    </div>
  );
};

export default DynamicRoutes;