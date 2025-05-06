import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'lime' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  isLoading?: boolean;
  loadingText?: string;
  'aria-label'?: string;
}

const buttonVariants = {
  primary: 'bg-[#78F6A2] text-white hover:bg-green-500',
  secondary: 'bg-blue-500 text-white hover:bg-blue-600',
  outline: 'border-[0.85px] border-[#b8ff01] text-[#b8ff01] hover:bg-[#b8ff01]/10',
  text: 'text-gray-600 hover:text-blue-500',
  lime: 'bg-[#b8ff01] text-[#19311E] hover:bg-[#b8ff01]/70',
  dark: 'bg-[#19311E] text-white hover:bg-[#19311E]/90'
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-lg'
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  isLoading = false,
}: ButtonProps) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        ${buttonVariants[variant]}
        ${buttonSizes[size]}
        ${fullWidth ? 'w-full' : ''}
        inline-flex items-center justify-center text-sm font-semibold whitespace-nowrap gap-2 cursor-pointer
        rounded-full transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
    >
      {isLoading ? (
          <span className="flex-shrink-0">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0v4c3.314 0 6.363 1.178 8.807 3.193z"></path>
            </svg>
          </span>
      ) : (
        <>
          {!isLoading && children}
          {!isLoading && icon && <span className="flex-shrink-0">{icon}</span>}
        </>
      )}
    </motion.button>
  );
};

export default Button; 