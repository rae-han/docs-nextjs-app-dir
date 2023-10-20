import React, {PropsWithChildren} from 'react';

const Modal = ({ children }: PropsWithChildren) => {
  return (
    <div className="absolute bottom-0">
      {children}
    </div>
  );
};

export default Modal;