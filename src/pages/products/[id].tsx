import { GetStaticPaths, GetStaticProps } from 'next'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { addItemToCart } from '../../redux/slices/cartSlice'

interface Product {
  id: number
  name: string
  price: number
}

interface ProductProps {
  product: Product
}

const ProductPage = ({ product }: ProductProps) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...product, quantity }))
    router.push('/cart')
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <div>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
          -
        </button>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products: Product[] = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
  ]

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.id
  const product: Product = {
    id: Number(productId),
    name: `Product ${productId}`,
    price: 100 * Number(productId),
  }

  return {
    props: {
      product,
    },
    revalidate: 10,
  }
}

export default ProductPage
