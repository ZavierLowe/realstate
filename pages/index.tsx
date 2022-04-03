import type { NextPage } from 'next'
import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard'


const Home: NextPage = () => {
  return (
    <div>
      <NavBar/>
      <ProductCard/>

    </div>
  )
}

export default Home
