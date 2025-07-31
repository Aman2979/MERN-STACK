const LoginWapper = () => {
  return (
    <>
      <div className="wapper-container">
        <div class="card loginContainer" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title loginText">
              Login <span>Student | Faculty</span>
            </h5>

            <div>
              <ul className="inputs-container">
                <li>
                  <h5 className="input1">User Name/Enrollment No </h5>
                </li>
                <li>
                  <input type="text" className="input1 input1-2" />
                </li>

                <li>
                  <h5 className="input1">Password </h5>
                </li>
                <li>
                  <input type="password" className="input1 input1-2" />
                </li>
              </ul>
            </div>

            <div class="form-check check-box">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="checkDefault"
              />
              <label class="form-check-label checkbox-text" for="checkDefault">
                Remember Me
              </label>
            </div>

            <div className="LoginBtn">
              <button className="inputBtn">Login</button>
              <h5><a className="loginAtag" href="https://portal2.tmu.ac.in/" target="_blank">Click here to Login Medical/Dental Academic Portal</a></h5>
            </div>
          </div>
          
        </div>
        <img src="https://portal2.tmu.ac.in/images/TMU1-img.jpg" alt="" className="imageChanger"/>
      </div>
    </>
  );
};

export default LoginWapper;
