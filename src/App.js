import logo from './logo.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { addToCart } from './redux/action'

function App () {
  const dispatch = useDispatch()
  const product = {
    model: 'I phone 11 pro',
    // type: 'mobile',
    price: '50000'
  }
  return (
    <div className='text-center'>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  )
}

export default App
