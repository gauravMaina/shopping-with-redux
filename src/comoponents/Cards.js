import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardsData from './CardsData';
// import './style.css'
function Cards() {
  const [data, setData] = useState(CardsData)
  console.log('data', data)
  return <div>
    <h3> Add to cart </h3>
    <div className='row d-flex  align-items-center mx-2'>
      {data?.map((item, index) =>
        <Card style={{ width: '22rem', border: 'none' }} id={index} className='mx-2 mt-4 card_style'>
          <Card.Img variant="top" src={item?.imgdata} style={{ height: '16rem' }} className='mt-3' />
          <Card.Body>

            <Card.Title>{item.rname}</Card.Title>
            <Card.Text>
              Price : ₹ {item.price}
            </Card.Text>
            <div className="div_button   col-lg-12" >

              <Button variant="primary" className='col-lg-12 d-flex justify-content-center'>Add to cart</Button>
            </div>
          </Card.Body>
        </Card>
      )}

    </div>
  </div>
}

export default Cards
