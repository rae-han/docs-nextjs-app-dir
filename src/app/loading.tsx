import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-black">
      <span className="text-white">loading...</span>
    </div>
  );
};

export default Loading;