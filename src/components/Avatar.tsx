import user from '@/assets/svgs/user.svg'
import { VariantProps, cva } from 'class-variance-authority'

const img = cva('input', {
  compoundVariants: [{ className: ['rounded-full', 'object-cover'] }],
  defaultVariants: {
    size: 'small'
  },
  variants: {
    size: {
      small: ['w-10', 'h-10'],
      medium: ['w-20', 'h-20']
    }
  }
})

export interface AvatarProps extends React.ImgHTMLAttributes<Element>, VariantProps<typeof img> {
  url: string
  onRemove?: () => void
}

const Avatar = ({ size, url, onRemove }: AvatarProps) => {
  return (
    <div className="relative w-fit">
      <img alt="avatar" className={img({ size })} src={url || user} />
      {onRemove && (
        <div
          className="bg-red-500 cursor-pointer  absolute top-0 right-2 w-5 h-5 rounded-full text-white"
          onClick={onRemove}
          html-role="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      )}
    </div>
  )
}

export default Avatar
