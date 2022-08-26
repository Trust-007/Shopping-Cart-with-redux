import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartLogicAction } from '../../store/cartLogicSlice';


const CartItem = (props) => {

  //const cart = useSelector(state => state.cartLogic.cart)
  const dispatch = useDispatch();

  const { title,  total, price, itemQuantity, id} = props.item;
  const addItemHandler = () =>{
     dispatch(cartLogicAction.addItem({
      id,
      title,
      price
     }))
  }
   const removeItemHandler = () =>{
    dispatch(cartLogicAction.removeItem(id))
  }
   
  

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3> 
        <div className={classes.price}>
          ${total.toFixed(2)}{total}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{itemQuantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
