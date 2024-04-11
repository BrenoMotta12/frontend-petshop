import React from 'react'
import './Modal.css'

export default function Modal({isOpen, children}) {


  if (isOpen) {
    return (
      <div className='background'>
        <div className='modal'>
          <div className='content-container'>
            {children}
          </div>
        </div>
      </div>
    )
  } 

  return null
}