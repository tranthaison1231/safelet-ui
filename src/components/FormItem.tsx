import React from 'react'

interface Props {
  children: React.ReactNode
  error?: string
  label?: string
  className?: string
}

function FormItem({ children, label, error, className }: Props) {
  return (
    <div className={`w-full ${className ?? ''}`}>
      <label className="flex flex-col gap-2">
        {label ? <span className="font-normal text-base leading-7 text-[#8A92A6]">{label}</span> : null}
        {children}
      </label>
      {error ? <p className="text-error">{error}</p> : null}
    </div>
  )
}

export default FormItem
