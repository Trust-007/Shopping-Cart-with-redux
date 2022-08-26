import ProductItem from './ProductItem';
import classes from './Products.module.css';

const items = [
  {
    id: '1',
    title: 'pencil',
    price: 6,
    description: 'This is a first product - amazing!'
  },
  {
    id: '2',
    title: 'Book',
    price: 12,
    description: 'Enjoy a good book!'
  },
  {
    id: '3',
    title: 'Apple',
    price: 9,
    description: 'An apple a day!'
  },
  {
    id: '4',
    title: 'kunai',
    price: 27,
    description: 'For Uzumaki!'

  }
]
console.log(items[3].id + 1)
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {items.map((item) => {
        return( 
        <ProductItem
          key = {item.id}
          id = {item.id}
          title={item.title}
          price= {item.price}
          description={item.description}
        />)})}
       
      </ul>
    </section>
  );
};

export default Products;
