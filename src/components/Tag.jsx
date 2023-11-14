import React from 'react'

export default function Tag({ tag }) {
  return (
    <div key={tag} className='tag'>
      <p className='tag__text'>{tag}</p>
    </div>
  )
}
