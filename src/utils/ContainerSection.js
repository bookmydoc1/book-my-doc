import React from 'react';

const ContainerSection = ({children, className}) => {
  return (
    <div className={`container m-auto ${className}`}>
      {children}
    </div>
  );
}

export default ContainerSection;
