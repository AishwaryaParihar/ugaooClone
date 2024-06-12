import React, { useState } from 'react'
import { UploadProduct } from './UploadProduct';

function Products() {
  const [ openUploadProduct , setOpenUploadProduct] = useState(false)
  return (
    <>
  <div className='bg-white shadow d-flex justify-content-between align-items-center p-3 mt-2'>
    <h2 className='fw-bolder ps-3'>Product</h2>
    <button className='btn bg-success text-white fw-bolder rounded-5' onClick={()=>setOpenUploadProduct(true)}>Upload Products</button>
  </div>

  {/* upload product component */}
 {
openUploadProduct && (
  <UploadProduct  onClose={()=>setOpenUploadProduct(false)}/>
)
 }

    </>
  )
}

export default Products;