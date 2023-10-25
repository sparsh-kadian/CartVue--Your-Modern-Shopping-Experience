import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import {remove} from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast";


const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.decription}</h1>
          <div>
            <p>{item.price}</p>
          </div>
          <div
          onClick={removeFromCart}>
            <MdDeleteForever/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
