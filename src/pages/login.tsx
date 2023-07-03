import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import bg from '@/assets/images/left-bg.png'
import logo from '@/assets/images/logo.png'
import Button from '@/components/Button'
import FormItem from '@/components/FormItem'
import Input from '@/components/Input'
import { showError } from '@/utils/showError'
import { setToken } from '@/utils/token'
import { validator } from '@/utils/validator'

interface Inputs {
  email: string
  password: string
}

function Login() {
  const navigate = useNavigate()
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

  const onSubmit: SubmitHandler<Inputs> = ({ email, password }: Inputs) => {
    try {
      if (email === 'son.tran@enouvo.com' && password === '!12ABCDabcd') {
        setToken('123456789')
        navigate('/')
      }
    } catch (error) {
      showError('Login failed')
    }
  }
  return (
    <div className="flex items-center h-screen mx-auto">
      <img alt="bg" className="w-1/2" src={bg} />
      <div className="flex flex-col items-center justify-center w-1/2">
        <img alt="logo" className="mb-24" src={logo} />
        <form className="flex flex-col items-center w-2/3" onSubmit={event => void handleSubmit(onSubmit)(event)}>
          <h1 className="mb-5 text-4xl text-center">Login</h1>
          <p className="text-center text-primary mb-7">Sign into your account</p>
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
          <Button className="w-52 mt-12" intent="primary">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
