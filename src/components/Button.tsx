import { type VariantProps, cva } from 'class-variance-authority'

const btn = cva('button', {
  compoundVariants: [{ className: ['rounded-lg'] }],
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

export interface InputProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof btn> {}

function Button({ intent, size, className, ...rest }: InputProps) {
  // eslint-disable-next-line react/button-has-type
  return <button className={btn({ className, intent, size })} {...rest} />
}
export default Button
