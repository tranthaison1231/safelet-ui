import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import bg from '@/assets/images/left-bg.png'
import logo from '@/assets/images/logo.png'
import Button from '@/components/Button'
import FormItem from '@/components/FormItem'
import Input from '@/components/Input'
import { validator } from '@/utils/validator'

interface Inputs {
  email: string
  password: string
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    try {
      console.log(email, password)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex h-screen items-center">
      <img alt="bg" className="w-1/2" src={bg} />
      <div className="flex justify-center items-center w-1/2 flex-col">
        <img alt="logo" className="mb-24" src={logo} />

        <form className="w-2/3 flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="mb-5 text-4xl text-center">Login</h1>
          <p className="text-primary mb-7 text-center">Sign into your account</p>
          <FormItem error={errors.email?.message}>
            <Input
              intent="secondary"
              placeholder="Email"
              type="email"
              {...register('email', {
                pattern: {
                  message: 'Please enter a valid email',
                  value: validator.email
                },
                required: 'Email is required'
              })}
            />
          </FormItem>
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
          <Button className="w-52 mt-12"> Login </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
