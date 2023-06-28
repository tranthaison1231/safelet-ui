import { type VariantProps, cva } from 'class-variance-authority'

const btn = cva('button', {
  compoundVariants: [{ className: ['rounded-lg', 'px-8', 'py-4'] }],
  defaultVariants: {
    intent: 'primary'
  },
  variants: {
    intent: {
      primary: ['bg-primary', 'text-white', 'placeholder-white'],
      secondary: ['bg-secondary']
    }
  }
})

export interface InputProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof btn> {}

function Button({ intent, className, ...rest }: InputProps) {
  // eslint-disable-next-line react/button-has-type
  return <button className={btn({ className, intent })} {...rest} />
}
export default Button
