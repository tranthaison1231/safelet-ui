import bg from '@/assets/images/left-bg.png'
import rd from '@/assets/images/rendit.png'
import Button from '@/components/Button'

function Resetpass() {
  return (
    <>
      <div className="overflow-hidden bg-white relative flex items-center h-screen mx-auto">
        <div className="flex flex-col items-center justify-center w-1/2">
          <div className="flex flex-col justify-start gap-2 relative w-2/3 items-center ">
            <div className="self-start flex flex-row justify-start mb-4 gap-2 relative items-center">
              <img alt="rd" className="min-h-0 min-w-0 relative w-6 shrink-0" src={rd} />
              <h2 className="whitespace-nowrap text-3xl font-['Inter'] leading-[42.9px] text-[#232d42] relative w-32">
                Hope Ui
              </h2>
            </div>
            <h3 className="whitespace-nowrap text-4xl font-['Inter'] font-medium text-[#04040b] mb-2 relative w-2/3">
              Reset Password
            </h3>
            <p className="text-center font-['Poppins'] text-[#8a92a6] self-stretch relative mb-2 mx-1">
              Enter your email address and we’ll send you an email with instructions to reset your password
            </p>
            <div className="font-['Inter'] leading-[28px] text-[#8a92a6] self-start relative w-10">Email</div>
            <input className="border-solid border-primary bg-white self-stretch mb-8 relative h-10 shrink-0 border rounded" />
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

export default Resetpass
