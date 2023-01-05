import React, { useState, createRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { exportComponentAsPNG } from 'react-component-export-image'
import Text from '../components/Text'
import Footer from '../components/Footer'

const Edit = () => {
  const memeRef = createRef()
  const [params] = useSearchParams()
  const [count, setCounts] = useState(0)

  const addText = () => {
    setCounts(count + 1)
  }
  return (
    <div className='flex flex-col'>
      <div><p className='font-semibold text-4xl my-12 text-center'>Meme Editor</p></div>
      <div className='w-full flex flex-col items-center my-16'>
        <div className='flex flex-col items-center' ref={memeRef}>
          <img className='w-[80%]' src={params.get('url')} alt="meme" />
          {Array(count).fill(0).map((e) => <Text />)}
        </div>
        <div className='flex flex-col items-center'>
          <button className='outline-none bg-[#845EC2] hover:bg-[#593b8a] px-4 md:px-20 p-2 my-4 rounded-lg'
            onClick={() => exportComponentAsPNG(memeRef)}>After Editing, click Here to Download the Meme</button>
          <button className='outline-none bg-[#845EC2] hover:bg-[#593b8a] w-[240px] px-20 p-2 my-4 rounded-lg' onClick={addText}>+ Add Text</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Edit