import type { ReactNode } from 'react'

type Variant = 'elevated' | 'outlined' | 'filled'

interface CardProps {
  variant?: Variant
  title?: string
  imageSrc?: string
  imageAlt?: string
  children: ReactNode
  className?: string
}

const variantClasses: Record<Variant, string> = {
  elevated:
    'bg-white shadow-lg dark:bg-gray-800',
  outlined:
    'bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700',
  filled:
    'bg-surface dark:bg-gray-700',
}

export default function Card({
  variant = 'elevated',
  title,
  imageSrc,
  imageAlt = '',
  children,
  className = '',
}: CardProps) {
  return (
    <article
      className={`
        rounded-xl overflow-hidden transition-transform duration-300
        hover:-translate-y-1
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {/* Opsiyonel görsel */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-48 object-cover"
        />
      )}

      {/* İçerik */}
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
        )}
        <div className="text-gray-600 dark:text-gray-300">{children}</div>
      </div>
    </article>
  )
}
