import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import maintenance from '@/assets/images/maintenance.png'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { validator } from '@/utils/validator'

interface Inputs {
  email: string
}
function Maintenance() {
  const { register, handleSubmit } = useForm<Inputs>({
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
    <div className="flex flex-col items-center justify-center">
      <img alt="Maintenance" className="pt-40" src={maintenance} />
      <div className="flex flex-col items-center justify-center w-full py-16 mt-2 text-white bg-primary">
        <p className="text-4xl font-bold">Hang on! We are under maintenance</p>
        <p className="mt-4 text-base font-normal">
          It will not take a long time till we get the error fiked. We wii live again in
        </p>
        <p className="mt-4 text-3xl font-bold leading-tight">00 : 04 : 13 : 39</p>
        <form className="flex gap-2 mt-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            className="text-white placeholder-white bg-transparent border border-white"
            inputSize="small"
            placeholder="Enter your mail"
            type="email"
            {...register('email', {
              pattern: {
                message: 'Please enter a valid email',
                value: validator.email
              },
              required: 'Email is required'
            })}
          />
          <Button className="whitespace-nowrap h-fit" size="small">
            Notify Me
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Maintenance
