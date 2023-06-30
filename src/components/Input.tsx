import { forwardRef } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'

const input = cva('input', {
  compoundVariants: [{ className: ['outline-none', 'rounded-lg'] }],
  defaultVariants: {
    intent: 'primary'
  },
  variants: {
    intent: {
      maintain: [
        'bg-transparent',
        'text-white',
        'placeholder-white',
        'border',
        'border-white',
        'px-2',
        'py-4',
        'w-96',
        'h-14'
      ],
      primary: ['bg-primary', 'text-white', 'placeholder-white', 'border-none', 'px-4', 'py-6'],
      secondary: ['bg-secondary', 'border-none', 'px-4', 'py-6']
    }
  }
})

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof input> {}

function Input({ intent, className, ...rest }: InputProps, ref: React.LegacyRef<HTMLInputElement>) {
  return <input className={input({ className, intent })} {...rest} ref={ref} />
}
export default forwardRef(Input)
