import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { cartActions } from "../../store/cartSlice";

export default function DeleteItem({pizzaId}){
    const dispatch = useDispatch();
    function handleDeleteItem(){
        dispatch(cartActions.deleteItem(pizzaId))
    }
    return <Button type="small" onClick={handleDeleteItem}>Delete</Button>
}