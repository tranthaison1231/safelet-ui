import bg from '@/assets/images/left-bg.png'
import Button from '@/components/Button'

function ResetPassword() {
  return (
    <>
      <div className="overflow-hidden bg-white relative flex items-center h-screen mx-auto">
        <div className="flex flex-col items-center justify-center w-1/2">
          <div className="flex flex-col justify-start gap-2 relative w-2/3 items-center ">
            <h3 className="whitespace-nowrap text-4xl font-['Inter'] font-medium text-[#04040b] mb-2 relative w-2/3">
              Reset Password
            </h3>
            <p className="text-center font-['Poppins'] text-[#8a92a6] self-stretch relative mb-2 mx-1">
              Enter your new password and 
            </p>
            <div className="font-['Inter'] leading-[28px] text-[#8a92a6] self-start relative">New Password</div>
            <input className="border-solid border-primary bg-white self-stretch mb-8 relative h-10 shrink-0 border rounded px-3" type="password" />
            <Button className="w-52 mt-12" intent="primary">
              Reset
            </Button>
          </div>
        </div>
        <img alt="bg" className="w-1/2" src={bg} />
      </div>
    </>
  )
}

export default ResetPassword
