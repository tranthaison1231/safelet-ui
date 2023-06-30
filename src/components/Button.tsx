import { type VariantProps, cva } from 'class-variance-authority'

const btn = cva('button', {
  compoundVariants: [{ className: ['rounded-lg'] }],
  defaultVariants: {
    intent: 'primary'
  },
  variants: {
    intent: {
      maintain: ['bg-white', 'text-primary', 'placeholder-primary', 'border', 'border-white', 'px-2', 'py-4', 'h-14'],
      primary: ['bg-primary', 'text-white', 'placeholder-white', 'px-8', 'py-4'],
      secondary: ['bg-secondary', 'px-8', 'py-4']
    }
  }
})

export interface InputProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof btn> {}

function Button({ intent, className, ...rest }: InputProps) {
  // eslint-disable-next-line react/button-has-type
  return <button className={btn({ className, intent })} {...rest} />
}
export default Button
