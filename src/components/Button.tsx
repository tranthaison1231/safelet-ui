import { type VariantProps, cva } from 'class-variance-authority'

const btn = cva('button', {
  compoundVariants: [{ className: ['rounded-lg'] }],
  defaultVariants: {
    intent: 'default',
    size: 'medium'
  },
  variants: {
    size: {
      small: ['px-4', 'py-2'],
      medium: ['px-8', 'py-4']
    },
    intent: {
      primary: ['bg-primary', 'text-white', 'placeholder-white'],
      secondary: ['bg-secondary'],
      default: ['bg-white', 'text-primary']
    }
  }
})

export interface InputProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof btn> {}

function Button({ intent, size, className, ...rest }: InputProps) {
  return <button className={btn({ className, intent, size })} {...rest} />
}
export default Button
