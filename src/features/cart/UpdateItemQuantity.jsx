import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { cartActions } from "../../store/cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(cartActions.decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(cartActions.increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
