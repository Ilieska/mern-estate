import React from 'react'

export default function CreateList() {
    return (
      <main className='p-3 max-w-3xl mx-auto'> 
          <h1 className='text-3xl font-semibold text-center my-7'>
              CreateListing
          </h1>
          <form className='flex flex-col sm:flex-row gap-4'>
              <div className='flex flex-col gap-4 flex-1'>
                <input type="text" placeholder='Name' className='border p-3
                rounded-lg'id='name' maxLength='62' minLength='10' required />  
                <input type="text" placeholder='Description' className='border p-3
                rounded-lg'id='description' maxLength='62' minLength='10' required />  
                <input type="text" placeholder='Address' className='border p-3
                rounded-lg'id='address' required />  

                <div className='flex gap-2 flex-wrap justify-between'>
                  <div className='flex gap-2'>
                    <input type="checkbox" id='sale' className='w-4' />
                    <span>Sell</span>
                  </div>
                  <div className='flex gap-2'>
                    <input type="checkbox" id='Rent' className='w-4' />
                    <span>Rent</span>
                  </div>
                  <div className='flex gap-2'>
                    <input type="checkbox" id='Parking' className='w-4' />
                    <span>Parking spot</span>
                  </div>
                  <div className='flex gap-2'>
                    <input type="checkbox" id='Furnished' className='w-4' />
                    <span>Furnished</span>
                  </div>
                  <div className='flex gap-2'>
                    <input type="checkbox" id='Offer' className='w-4' />
                    <span>Offer</span>
                  </div>
                </div>

                <div className='flex flex-wrap gap-6'>  
                  <div className='flex items-center gap-2'>
                      <input type="Number" id='Bedrooms' min='1' max='10' 
                      className='p-2 border border-gray-300 rounded-lg' required />
                      <p>Beds</p>
                  </div>
                  <div className='flex items-center gap-2'>
                      <input type="Number" id='Bathrooms' min='1' max='10' 
                      className='p-2 border border-gray-300 rounded-lg' required />
                      <p>Baths</p>
                  </div>
                  <div className='flex items-center gap-2'>
                      <input type="Number" id='RegularPrice' min='0' max='10000000'
                      className='p-2 border border-gray-300 rounded-lg' required />
                      <div className='flex flex-col items-center'>
                        <p>Regular Price</p>
                        <span className='text-xs'>($ / month)</span>
                      </div>
                  </div>
                  <div className='flex items-center gap-2'>
                      <input type="Number" id='DiscountPrice' min='0' max='10000000'
                      className='p-2 border border-gray-300 rounded-lg' required />
                      <div className='flex flex-col items-center'>
                      <p>Discount Price</p>
                      <span className='text-xs'>($ / month)</span>
                      </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col flex-1 gap-4'>
                <p className='font-semibold'>Images:
                <span className='font-normal text-gray-700 ml-2'>
                  The first image will be the cover (max 6)</span>
                </p>
                <div className='flex gap-4 items-center'>
                  <input className='p-3 border border-gray-200 rounded w-full' type="file" id='images' accept='image/*' multiple  />
                  <button className='h-10 p-2 bg-green-50 text-green-700 border border-green-700 text-center
                  rounded uppercase hovershadow-lg disabled:opacity-80 '> Upload</button>
                </div>
                <button className='bg-slate-700 text-white p-3 rounded-xl 
         uppercase text-center hover:opacity-95 disabled:opacity-80'> Create Listing</button>
              </div>
              
          </form>
      </main>
    ) 
  }
