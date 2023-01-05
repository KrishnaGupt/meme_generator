import React, { useState } from 'react'
import Draggable from 'react-draggable'

const Text = () => {
  const [editMode, setEditMode] = useState(false)
  const [color, setColor] = useState('#000')
  const [val, setVal] = useState("Double click to edit")
  return (
    <Draggable>
      <div >
        {
          editMode ?
            (<div> <input className="outline-none text-[2.5rem] bg-transparent" style={{ color: `${color}` }} onDoubleClick={e => setEditMode(false)} value={val} onChange={(e) => setVal(e.target.value)} />
              <input onChange={(e) => {
                setColor(e.target.value)
                console.log(color)
              }} type="color" /> </div>)
            : (<h1 onDoubleClick={e => setEditMode(true)} className='text-[2.5rem]' style={{ color: `${color}` }}>{val}</h1>)
        }
      </div>
    </Draggable>
  )
}

export default Text