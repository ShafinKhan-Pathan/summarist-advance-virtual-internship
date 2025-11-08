import { useDispatch } from "react-redux";
import { openLogin } from "../redux/ModalSlice";
const LoginTriggerButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="submit"
      onClick={() => dispatch(openLogin())}
      className={`bg-green-400 w-[70%] rounded-lg p-2 md:w-[70%] hover:bg-green-600 duration-300 cursor-pointer`}
    >
      Login
    </button>
  );
};

export default LoginTriggerButton;
