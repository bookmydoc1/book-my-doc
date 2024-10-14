import React from 'react';

const Button = ({
  children,
  title,
  onClick,
  type = 'submit',
  variant = 'primary',
  disabled = false,
  size = 'medium',
  className = '',
  form
}) => {
  const baseStyles = `font-medium focus:outline-none rounded-full relative overflow-hidden w-max
    before:absolute before:top-0 before:left-full before:w-full before:h-full
    hover:before:left-0 before:transition-all before:duration-1000 before:ease-in-out
  transition-all duration-1000 ease-in-out`;

  const variantStyles = {
    primary: `bg-primary text-white before:bg-secondary`,
    secondary: `bg-transparent border border-primary text-primary before:bg-secondary hover:text-black`,
    success: `bg-green-500 text-white before:bg-green-600`,
    danger: `bg-red-500 text-white before:bg-red-600`,
    warning: `bg-yellow-500 text-white before:bg-yellow-600`,
    transparent: `bg-transparent text-black border border-gray-200 before:bg-gray-100`,
  };

  const sizeStyles = {
    small: "text-sm px-3 py-1",
    medium: "text-sm md:text-md px-4 py-2",
    large: "text-lg px-5 py-3",
  };

  const classes = `
    ${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} 
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    whitespace-nowrap w-full transition-all duration-300 ease-in-out
  `;

  return (
    <button
      form={form}
      title={title}
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
