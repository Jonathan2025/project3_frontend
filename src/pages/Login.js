import LoginButton from "../components/Authentication/Login";

const Login = (props) => {

return (
  <>

    <section className='loginForm'>
        <div>
            <h1>Sign In to Access JXFunds!</h1>
            <LoginButton className="loginButton"/>
        </div>
      </section>


    </>
    )
} 
export default Login;