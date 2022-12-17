import "./register.css"

const Register = () => {
  return (
      <div className="login">
          <div className="loginWrapper">
              <div className="loginLeft">
                  <h3 className="loginLogo">BarnikDev</h3>
                  <span className="loginDesc">
                      Connect with friends and the world around you on BarnikDev.
                  </span>
              </div>
              <div className="loginRight">
                  <div className="loginBox">
                      <input placeholder="Username" className="loginInput"></input>
                      <input placeholder="Email" className="loginInput"></input>
                      <input placeholder="Password" className="loginInput"></input>
                      <input placeholder="Confirm Password" className="loginInput"></input>
                      <button className="loginButton">Sign Up</button>
                      <button className="loginRegButton">Log into Account</button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Register