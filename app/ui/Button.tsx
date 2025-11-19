interface Props {
  onloading?: boolean;
  signUp?: boolean;
  forgotPassword?: boolean;
  subscription?:boolean;
  selectedPlan?:string;
}
const Button = ({ onloading, signUp, forgotPassword, subscription, selectedPlan }: Props) => {
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
        : subscription
        ? selectedPlan === "monthly" ? "Start your first month" : "Start your free 7-day trial"
        : "Login"}
    </button>
  );
};

export default Button;
