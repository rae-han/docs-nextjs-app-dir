import React from 'react';

const DynamicRoutes = ({ params }: { params: { slug: string } }) => {
  console.log(params.slug)

  return (
    <div>
      dynamic routes
    </div>
  );
};

  export default DynamicRoutes;