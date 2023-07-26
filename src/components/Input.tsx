import { forwardRef } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'

const input = cva('input', {
  compoundVariants: [{ className: ['w-full', 'outline-none', 'rounded-lg'] }],
  defaultVariants: {
    inputSize: 'medium',
    intent: 'default'
  },
  variants: {
    inputSize: {
      medium: ['px-4', 'py-6'],
      small: ['px-4', 'py-2']
    },
    intent: {
      default: ['text-primary', 'placeholder-primary'],
      primary: ['bg-primary', 'text-white', 'placeholder-white', 'border-none'],
      secondary: ['bg-secondary', 'border-none']
    }
  }
})

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof input> {}

function Input({ intent, inputSize, className, ...rest }: InputProps, ref: React.LegacyRef<HTMLInputElement>) {
  return <input className={input({ className, inputSize, intent })} {...rest} ref={ref} />
}
export default forwardRef(Input)
