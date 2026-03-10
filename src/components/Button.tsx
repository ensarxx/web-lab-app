import type { ButtonHTMLAttributes } from 'react'

/* ── Varyant ve boyut tipleri ── */
type Variant = 'primary' | 'secondary' | 'danger' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

/* ── Renk varyant sınıfları ── */
const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-blue-900 focus:ring-primary/50',
  secondary:
    'bg-secondary text-white hover:bg-blue-700 focus:ring-secondary/50',
  danger:
    'bg-error text-white hover:bg-red-700 focus:ring-error/50',
  ghost:
    'bg-transparent text-primary hover:bg-primary/10 focus:ring-primary/50 dark:text-blue-300 dark:hover:bg-blue-300/10',
}

/* ── Boyut sınıfları ── */
const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3.5 text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`
        inline-flex items-center justify-center rounded-lg font-semibold
        transition-colors duration-200 cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  )
}
