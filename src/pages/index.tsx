import Link from 'next/link'
import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { setProducts } from '../redux/slices/productsSlice'

interface Product {
  id: number
  name: string
  price: number
}

interface HomeProps {
  products: Product[]
}

const Home = ({ products }: HomeProps) => {
  const dispatch = useDispatch()
  const productList = useSelector((state: RootState) => state.products.products)

  useEffect(() => {
    dispatch(setProducts(products))
  }, [dispatch, products])

  if (!productList.length) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/cart">Go to Cart</Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
  ]

  return {
    props: {
      products,
    },
    revalidate: 10,
  }
}

export default Home
