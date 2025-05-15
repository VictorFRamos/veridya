import { Link } from 'react-router-dom';
// import CountdownTimer from './CountdownTimer';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      {product.isOnSale && <div className="sale-badge">PROMOÇÃO</div>}
      
      <img src={product.image} alt={product.title} />
      
      <div className="product-info">
        <h3>{product.title}</h3>
        
        <div className="product-badge">
          {product.type}
        </div>
        
        <div className="product-pricing">
          {product.isOnSale ? (
            <>
              <p className="original-price">De: R$ {product.originalPrice.toFixed(2).replace('.', ',')}</p>
              <p className="price">Por: R$ {product.price.toFixed(2).replace('.', ',')}</p>
              <p className="discount">
                {Math.round((1 - product.price/product.originalPrice) * 100)}% OFF
              </p>
              {/* <CountdownTimer endTime={product.discountEnds} /> */}
            </>
          ) : (
            <p className="price">R$ {product.price.toFixed(2).replace('.', ',')}</p>
          )}
        </div>
        
        <Link 
          to={`/produto/${product.id}`} 
          className="btn" 
          // style={{ backgroundColor: product.type === 'A1' ? '#7C7F38' : '#DD7126' }}
        >
          Detalhes
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;