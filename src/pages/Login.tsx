const Login = () => {
  return (
    <div>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter Your Email" />
        <br />
        <label>Password</label>
        <input type="text" placeholder="Enter Your Password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
