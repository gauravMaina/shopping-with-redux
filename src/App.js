import './App.css'
import Header from './comoponents/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cards from './comoponents/Cards'
import CardsDetails from './comoponents/CardsDetails'
import './comoponents/style.css'
function App () {
  return (
    <div className='text-center'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/cart' element={<CardsDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
