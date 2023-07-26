import { getProfile, updateProfile } from '@/api/auth'
import { uploadImage } from '@/api/upload'
import { ReactComponent as ButtonIcon } from '@/assets/svgs/button.svg'
import { showError } from '@/utils/showError'
import { removeToken } from '@/utils/token'
import { getFullName } from '@/utils/tools'
import { validator } from '@/utils/validator'
import React, { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Avatar from './Avatar'
import Button from './Button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './Dialog'
import FormItem from './FormItem'
import Input from './Input'
import UploadButton from './UploadButton'
import { useQueryClient, useMutation } from 'react-query'

interface Inputs {
  phoneNumber: string
  avatarURL: string
}

interface Props {
  onClose?: () => void
}

function UploadProfile({ onClose }: Props) {
  const client = useQueryClient()
  const { isLoading: isUpdateProfileLoading, mutateAsync: updateProfileMutate } = useMutation(updateProfile)
  const { isLoading: isUploadImageLoading, mutateAsync: uploadImageMutate } = useMutation(uploadImage)

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
    control
  } = useForm<Inputs>({
    defaultValues: {
      phoneNumber: '',
      avatarURL: ''
    },
    mode: 'onBlur'
  })

  const avatarURL = useWatch({
    control,
    name: 'avatarURL'
  })

  const onSubmit = async (input: Inputs) => {
    try {
      const data = await updateProfileMutate(input)
      onClose?.()
      client.setQueryData('profile', data)
      toast.success('Update profile successfully')
    } catch (error) {
      showError(error)
    }
  }

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      clearErrors('avatarURL')
      const file = e.target.files?.[0]
      if (!file) return
      const formData = new FormData()
      formData.append('file', file)
      const { data } = await uploadImageMutate(formData)
      setValue('avatarURL', data.url)
    } catch (error) {
      showError(error)
    }
  }

  const handleRemoveAvatar = () => {
    setValue('avatarURL', '')
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormItem error={errors.phoneNumber?.message} label="Phone Number">
            <Input
              intent="secondary"
              placeholder="Phone Number"
              {...register('phoneNumber', {
                required: 'Phone number is required',
                pattern: {
                  value: validator.phoneNumber,
                  message: 'Phone number is invalid'
                }
              })}
              inputSize="small"
            />
          </FormItem>
          <FormItem error={errors.avatarURL?.message} className="mt-3" label="Avatar URL">
            {avatarURL ? (
              <Avatar size="medium" url={avatarURL} onRemove={handleRemoveAvatar} />
            ) : (
              <UploadButton
                isLoading={isUploadImageLoading}
                accept="image/*"
                {...register('avatarURL', {
                  required: 'Avatar is required',
                  pattern: {
                    value: validator.url,
                    message: 'Avatar is invalid'
                  }
                })}
                onChange={onUpload}
              />
            )}
          </FormItem>
        </div>
        <DialogFooter>
          <Button intent="primary" size="small" type="submit" className="mt-3" loading={isUpdateProfileLoading}>
            Save
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { data } = useQuery('profile', () => getProfile())

  const navigate = useNavigate()
  const handleLogout = () => {
    removeToken()
    navigate('/login')
  }

  return (
    <div className="flex items-center justify-between p-6">
      {React.createElement(ButtonIcon, {
        className: 'cursor-pointer'
      })}
      <div className="relative flex items-center h-12 gap-2 py-2 pl-4 pr-2 bg-black cursor-pointer rounded-3xl group ">
        <span className="text-white min-w-[64px]">{getFullName(data?.data.user)}</span>
        <Avatar url={data?.data.user.avatarURL ?? ''} />
        <div className="absolute right-0 min-w-[120px] border border-gray-200 rounded-md shadow-md top-full dropdown p-2 hidden group-hover:flex flex-col bg-white z-999">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger>
              <button className="px-4 py-2 rounded-md hover:bg-primary hover:text-white" type="button">
                Profile
              </button>
            </DialogTrigger>
            <UploadProfile onClose={() => setIsOpen(false)} />
          </Dialog>
          <button
            className="px-4 py-2 rounded-md hover:bg-primary hover:text-white "
            onClick={handleLogout}
            type="button"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
