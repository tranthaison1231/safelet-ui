import { type SubmitHandler, useForm } from 'react-hook-form'
import bg from '@/assets/images/left-bg.png'
import Button from '@/components/Button'
import FormItem from '@/components/FormItem'
import Input from '@/components/Input'
import { validator } from '@/utils/validator'
import { showError } from '@/utils/showError'
import { RegisterParams, signUp } from '@/api/auth'
import toast from 'react-hot-toast'

interface FromRegister extends RegisterParams {
  confirmPassword: string
  agree: boolean
}
export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FromRegister>({
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<FromRegister> = async ({ agree, confirmPassword, ...params }) => {
    try {
      if (!agree) return showError('Please agree with the terms and conditions.')
      await signUp(params)
      toast.success('Sign up successfully! Please check your email to verify your account.')
    } catch (error) {
      showError(error)
    }
  }
  return (
    <div className="mx-auto flex items-center h-screen px-4">
      <img alt="bg" className="hidden w-1/2 sm:block" src={bg} />
      <div className="w-1/2 flex justify-center">
        <form className="flex flex-col items-center gap-5 w-2/3" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl font-medium">Sign Up</h1>
          <p className="text-primary">Create your Hope UI account</p>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            <FormItem error={errors.firstName?.message} label="First Name">
              <Input
                intent="secondary"
                placeholder="First name"
                type="text"
                {...register('firstName', {
                  minLength: {
                    message: 'First name must be at least 2',
                    value: 2
                  },
                  required: 'first name is require!'
                })}
              />
            </FormItem>
            <FormItem error={errors.lastName?.message} label="Last Name">
              <Input
                intent="secondary"
                placeholder="Last name"
                type="text"
                {...register('lastName', {
                  minLength: {
                    message: 'Last name must be at least 2',
                    value: 2
                  },
                  required: 'Last name is require!'
                })}
              />
            </FormItem>
            <FormItem error={errors.phoneNumber?.message} label="Phone number">
              <Input
                intent="secondary"
                placeholder="Phone number"
                type="text"
                {...register('phoneNumber', {
                  pattern: {
                    message: 'Phone number not valid!',
                    value: validator.phoneNumber
                  },
                  required: 'Phone number is require!'
                })}
              />
            </FormItem>
            <FormItem error={errors.email?.message} label="Email">
              <Input
                intent="secondary"
                placeholder="Email"
                type="text"
                {...register('email', {
                  pattern: {
                    message: 'Email  not valid!',
                    value: validator.email
                  },
                  required: 'Email is require!'
                })}
              />
            </FormItem>
            <FormItem error={errors.password?.message} label="Password">
              <Input
                intent="secondary"
                placeholder="password"
                type="password"
                {...register('password', {
                  required: 'Password is require!'
                })}
              />
            </FormItem>
            <FormItem error={errors.confirmPassword?.message} label="Confirm Password">
              <Input
                intent="secondary"
                placeholder="Confirm Password"
                type="password"
                {...register('confirmPassword', {
                  required: {
                    message: 'Confirm password is require!',
                    value: true
                  },
                  validate: v => (getValues('password') !== v ? 'Confirm password not same!' : undefined)
                })}
              />
            </FormItem>
          </div>
          <div className="flex flex-col self-start gap-2">
            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"
                id="link-checkbox"
                type="checkbox"
                value=""
                {...register('agree', {
                  required: {
                    message: 'Agree is require!',
                    value: true
                  }
                })}
              />
              <label
                className="text-sm font-medium text-gray-900 cursor-pointer dark:text-gray-400"
                htmlFor="link-checkbox"
              >
                I agree with the terms and conditions.
              </label>
            </div>
            {errors.agree ? <p className="text-error">{errors.agree.message}</p> : null}
          </div>

          <Button className="w-full" intent="primary">
            Register
          </Button>
        </form>
      </div>
    </div>
  )
}
