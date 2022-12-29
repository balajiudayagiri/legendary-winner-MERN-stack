import classes from "./CartButton.module.css";
import { uiActions } from "../../PracticeComponent/store/ui_slice";
import { useDispatch } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  return (
    <button
      className={classes.button}
      onClick={() => dispatch(uiActions.toggle())}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
