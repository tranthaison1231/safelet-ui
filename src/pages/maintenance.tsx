import maintenance from '@/assets/images/maintenance.png'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { validator } from '@/utils/validator'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

interface Inputs {
  email: string
}
function Maintenance() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    defaultValues: {
      email: ''
    },
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<Inputs> = ({ email }) => {
    try {
      console.log(email)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <img alt="Maintenance" className="pt-40" src={maintenance} />
      <div className="w-full flex flex-col justify-center items-center bg-primary mt-2 text-white py-16">
        <p className="text-4xl font-bold">Hang on! We are under maintenance</p>
        <p className="text-base font-normal mt-4">
          It will not take a long time till we get the error fiked. We wii live again in
        </p>
        <p className="text-3xl font-bold leading-tight mt-4">00 : 04 : 13 : 39</p>
        <form className="flex mt-6 gap-2" onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="Enter your mail"
              type="email"
              inputSize="small"
              className="bg-transparent border border-white placeholder-white text-white"
              {...register('email', {
                pattern: {
                  message: 'Please enter a valid email',
                  value: validator.email
                },
                required: 'Email is required'
              })}
            />
          <Button size="small" className="whitespace-nowrap h-fit">
            Notify Me
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Maintenance
