import React, { useContext } from 'react'
import { ShoppingCartIcon } from 'lucide-react'
import { CartContext } from '../context/CartContext'

const ProductCard = ({allProducts}) => {

  const {addToCart, cart} = useContext(CartContext)
  console.log(cart)
  const handleAddToCart = (product) => {
    console.log(product)
    addToCart(product)
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6'>
      {allProducts.map(product => {
        return (
          <div key={product.id} className=" pt-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 bg-white">
            <div className='px-4'>
              <a href="/products">
                <img className="w-full h-[250px] object-contain rounded-md mb-4" src={product.image} alt={product.title}/>
                <h2 className="text-lg font-semibold mb-2 line-clamp-1 dark:text-[#333]">{product.title}</h2>
                <p className="text-sm text-gray-400 line-clamp-3">{product.description}</p>
                <h4 className="dark:text-[#333]">Rating: {product.rating.rate}/5</h4>
              </a>
            </div>
            <div className='flex justify-between text-lg font-semibold mt-2 bg-[#F2F0F1] px-4 py-2'>
              <h4 className="text-blue-500">${product.price}</h4>
              <button onClick={() => handleAddToCart({...product, qty: 1})}>
                {<ShoppingCartIcon className={`${cart.find(prod => prod.id === product.id) ? 'text-yellow-500' : 'text-blue-700'}`}/>}
              </button>
            </div>
            
          </div>
        )
      })}
    </div>
  )
}

export default ProductCard