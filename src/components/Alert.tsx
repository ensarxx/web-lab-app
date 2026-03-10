import { useState, type ReactNode } from 'react'

type Variant = 'info' | 'success' | 'warning' | 'error'

interface AlertProps {
  variant?: Variant
  dismissible?: boolean
  children: ReactNode
  className?: string
}

const variantClasses: Record<Variant, string> = {
  info:    'bg-blue-50  text-blue-900  border-blue-300  dark:bg-blue-900/30  dark:text-blue-200  dark:border-blue-700',
  success: 'bg-green-50 text-green-900 border-green-300 dark:bg-green-900/30 dark:text-green-200 dark:border-green-700',
  warning: 'bg-yellow-50 text-yellow-900 border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-200 dark:border-yellow-700',
  error:   'bg-red-50   text-red-900   border-red-300   dark:bg-red-900/30   dark:text-red-200   dark:border-red-700',
}

const icons: Record<Variant, string> = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  error: '❌',
}

export default function Alert({
  variant = 'info',
  dismissible = false,
  children,
  className = '',
}: AlertProps) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div
      role="alert"
      className={`
        flex items-start gap-3 rounded-lg border p-4
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {/* İkon */}
      <span className="text-lg flex-shrink-0" aria-hidden="true">
        {icons[variant]}
      </span>

      {/* Mesaj */}
      <div className="flex-1 text-sm leading-relaxed">{children}</div>

      {/* Kapat butonu */}
      {dismissible && (
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Kapat"
          className="ml-auto flex-shrink-0 rounded p-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer focus:outline-none focus:ring-2 focus:ring-current"
        >
          ✕
        </button>
      )}
    </div>
  )
}
