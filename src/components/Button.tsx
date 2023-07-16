import { type VariantProps, cva } from 'class-variance-authority'
import Loading from './Loading'

const btn = cva('button', {
  compoundVariants: [{ className: ['rounded-lg', 'flex', 'justify-center'] }],
  defaultVariants: {
    intent: 'default',
    size: 'medium'
  },
  variants: {
    intent: {
      default: ['bg-white', 'text-primary'],
      primary: ['bg-primary', 'text-white', 'placeholder-white'],
      secondary: ['bg-secondary']
    },
    size: {
      medium: ['px-8', 'py-4'],
      small: ['px-4', 'py-2']
    }
  }
})

export interface InputProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof btn> {
  loading?: boolean
}

function Button({ intent, loading, children, size, className, ...rest }: InputProps) {
  return (
    <button className={btn({ className, intent, size })} {...rest}>
      {loading && <Loading />}
      {children}
    </button>
  )
}
export default Button
