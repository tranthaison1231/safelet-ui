import { resetPassword } from '@/api/auth'
import bg from '@/assets/images/left-bg.png'
import Button from '@/components/Button'
import FormItem from '@/components/FormItem'
import Input from '@/components/Input'
import { showError } from '@/utils/showError'
import { validator } from '@/utils/validator'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useSearchParams } from 'react-router-dom'

interface Inputs {
  password: string
}

function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    defaultValues: {
      password: ''
    },
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<Inputs> = async ({ password }: Inputs) => {
    try {
      setIsLoading(true)
      const token = searchParams.get('token')
      if (!token) return showError('Invalid token')
      const data = await resetPassword({
        password,
        token
      })
      toast.success(data.data.message)
    } catch (error) {
      showError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="overflow-hidden bg-white relative flex items-center h-screen mx-auto">
        <div className="flex flex-col items-center justify-center w-1/2">
          <form
            className="flex flex-col justify-start gap-2 relative w-2/3 items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="whitespace-nowrap text-4xl font-['Inter'] font-medium text-[#04040b] mb-2 relative w-2/3">
              Reset Password
            </h3>
            <p className="text-center font-['Poppins'] text-[#8a92a6] self-stretch relative mb-2 mx-1">
              Enter your new password
            </p>
            <div className="font-['Inter'] leading-[28px] text-[#8a92a6] self-start relative">New Password</div>
            <FormItem className="mt-4" error={errors.password?.message}>
              <Input
                intent="secondary"
                placeholder="Password"
                type="password"
                {...register('password', {
                  pattern: {
                    message: 'Please enter a valid password',
                    value: validator.password
                  },
                  required: 'Password is required'
                })}
              />
            </FormItem>
            <Button className="w-52 mt-12" intent="primary" loading={isLoading}>
              Reset
            </Button>
          </form>
        </div>
        <img alt="bg" className="w-1/2" src={bg} />
      </div>
    </>
  )
}

export default ResetPassword
