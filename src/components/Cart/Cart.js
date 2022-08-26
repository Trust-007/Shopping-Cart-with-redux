import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
 
  
  const cart = useSelector(state => state.cartLogic.cart);
 

  const showCartItem = cart.length > 0;
  //console.log(quantity,total,cart,title,price,itemQuantity)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {showCartItem &&
        cart.map(item => {
          return(
          <CartItem 
          key={item.id}
          item={{ title: item.title,  total: item.total, price: item.price,itemQuantity: item.itemQuantity, id:item.id}}
        />
        )})
        }
      </ul>
    </Card>
  ); 
};

export default Cart;
