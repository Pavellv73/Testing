import './Products.scss';

export const Products = ({ className, list }) => {
  return (
    <div className={`${className} products`}>
      {list &&
        list.map((product) => {
          return (
            <div className="products__item" key={product.title}>
              <p className="product__item--number">{product.number}</p>
              <p className="products__item--title">{product.title}</p>
              <p className="products__item--category">{product.category}</p>
              <p className="products__item--quanlity">Кол-во: {product.quantity}</p>
              <p className="products__item--price">{product.price} р.</p>
            </div>
          );
        })}
    </div>
  );
};
