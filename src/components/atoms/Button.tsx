import { ButtonHTMLAttributes, forwardRef } from 'react';
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}
const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30',
  secondary: 'bg-gradient-to-r from-secondary-400 to-secondary-500 text-white hover:from-secondary-500 hover:to-secondary-600 shadow-lg shadow-secondary-500/25',
  outline: 'border-2 border-neutral-200 text-neutral-700 hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50',
  ghost: 'text-primary-600 hover:bg-primary-50',
};
const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-6 py-2.5 text-base rounded-xl',
  lg: 'px-8 py-3.5 text-lg rounded-2xl',
};
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth, className = '', children, ...props }, ref) => (
    <button ref={ref} className={`inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`} {...props}>{children}</button>
  )
);
Button.displayName = 'Button';
export default Button;
