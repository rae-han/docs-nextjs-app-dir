'use client';

import React, {useEffect} from 'react';

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const Error = ({ error, reset}: ErrorProps) => {

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      Error
    </div>
  );
};

export default Error;