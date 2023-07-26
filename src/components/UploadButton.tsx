import { forwardRef } from 'react'
import Button from './Button'
import Loading from './Loading'

type UploadButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isLoading?: boolean
}

const UploadButton = (
  { className, isLoading, ...props }: UploadButtonProps,
  ref: React.LegacyRef<HTMLInputElement>
): JSX.Element => {
  return (
    <div className="overflow-hidden relative">
      <Button disabled={isLoading} intent="primary" className="w-full inline-flex items-center" type="button">
        {isLoading ? (
          <Loading />
        ) : (
          <svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
          </svg>
        )}
        <span className="ml-2">Upload Document</span>
      </Button>
      <input
        className="cursor-pointer absolute block top-0 h-full w-full opacity-0 pin-r pin-t"
        type="file"
        {...props}
        ref={ref}
      />
    </div>
  )
}

export default forwardRef(UploadButton)
