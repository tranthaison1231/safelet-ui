import { forwardRef } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'

const input = cva('input', {
  compoundVariants: [
    {
      className: ['w-full', 'outline-none', 'border-none', 'rounded-lg', 'px-4', 'py-4']
    }
  ],
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

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof input> {}

function Input({ intent, className, ...rest }: InputProps, ref: React.LegacyRef<HTMLInputElement>) {
  return <input className={input({ className, intent })} {...rest} ref={ref} />
}
export default forwardRef(Input)
