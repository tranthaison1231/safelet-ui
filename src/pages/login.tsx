import bg from "@/assets/images/left-bg.png"
import logo from "@/assets/images/logo.png"

function Login(){
  return (
    <div className="flex h-screen items-center">
      <img src={bg} className="w-1/2" />
      <div className="flex justify-center items-center w-1/2">
        <form>
          <img src={logo} className="mb-24" />
          <h1>Login</h1>
          <p className="text-primary">Sign into your account</p>
        </form>
      </div>
    </div>
  )
}

export default Login
