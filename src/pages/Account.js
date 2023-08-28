import React from 'react'
import SavedShows from '../components/SavedShows'

function Account() {
  return (
  <>
<div className='w-full text-white'>
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/bf6f5dab-8a85-48af-be22-de3a0cfd4ea7/PK-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
       alt=""
       className='w-full h-[400px] object-cover'
       />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My shows</h1>

      </div>
  </div>
  <SavedShows/>
     </>
  )
}

export default Account