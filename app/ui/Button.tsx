interface Props {
  onloading: boolean;
  signUp: boolean;
  forgotPassword: boolean;
}
const Button = ({ onloading, signUp, forgotPassword }: Props) => {
  return (
    <button
      disabled={onloading}
      type="submit"
      className={`bg-green-400 w-[70%] rounded-lg p-2 md:w-[70%]  ${
        forgotPassword ? "lg:w-70%" : "lg:w-[50%]"
      } hover:bg-green-600 duration-300 cursor-pointer`}
    >
      {onloading
        ? "Loading..."
        : forgotPassword
        ? "Send Reset Link"
        : signUp
        ? "Sign Up"
        : "Login"}
    </button>
  );
};

export default Button;
