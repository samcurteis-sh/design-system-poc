import React from 'react';

const Button = ({ className, isLoading, children, ...props }) => {
  return (
    <button className={`button button--${className}`} {...props}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
