import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  helpText?: string
}

export default function Input({
  label,
  error,
  helpText,
  disabled = false,
  id,
  className = '',
  ...rest
}: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')
  const errorId = `${inputId}-error`
  const helpId = `${inputId}-help`

  /* aria-describedby: hem helpText hem error varsa ikisini de bağla */
  const describedBy = [
    helpText ? helpId : null,
    error ? errorId : null,
  ]
    .filter(Boolean)
    .join(' ') || undefined

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {/* Label */}
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>

      {/* Input */}
      <input
        id={inputId}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={`
          w-full rounded-lg border px-4 py-2.5 text-base
          transition-colors duration-200 outline-none
          focus:ring-2 focus:ring-offset-1
          disabled:opacity-50 disabled:cursor-not-allowed
          dark:bg-gray-800 dark:text-white
          ${
            error
              ? 'border-error text-error focus:ring-error/50 dark:border-red-400'
              : 'border-gray-300 text-gray-900 focus:border-primary focus:ring-primary/50 dark:border-gray-600'
          }
        `}
        {...rest}
      />

      {/* Yardım Metni */}
      {helpText && !error && (
        <p id={helpId} className="text-sm text-muted">
          {helpText}
        </p>
      )}

      {/* Hata Mesajı */}
      {error && (
        <p id={errorId} role="alert" className="text-sm text-error font-medium">
          {error}
        </p>
      )}
    </div>
  )
}
