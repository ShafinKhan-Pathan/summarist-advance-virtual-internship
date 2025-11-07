import { useDispatch } from "react-redux";
import { openLogin } from "../redux/ModalSlice";
interface Props {
  onloading: boolean;
  signUp: boolean;
}
const Button = ({ onloading, signUp }: Props) => {
  const dispatch = useDispatch();
  return (
    <button
      disabled={onloading}
      onClick={() => dispatch(openLogin())}
      className={`bg-green-400 w-[50%] rounded-lg p-2 md:w-[70%] lg:max-w-[50%] hover:bg-green-600 duration-300 cursor-pointer`}
    >
      {onloading ? "Loading..." : signUp ? "Sign Up" : "Login"}
    </button>
  );
};

export default Button;
