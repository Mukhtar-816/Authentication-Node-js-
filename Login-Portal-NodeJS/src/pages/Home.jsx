import React from 'react'

const Home = ({params}) => {

  const name = params;

  return (
    <div className='bg-black  h-[100vh] w-full flex justify-center items-center'>
      <h1 className='text-white text-3xl text-bold'>Welcome Mr. {name}</h1>
    </div>
  )
}

export default Home