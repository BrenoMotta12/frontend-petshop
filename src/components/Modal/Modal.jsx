import React from 'react'
import './Modal.css'
import { useForm } from 'react-hook-form'
import Api from '../../services/Api';

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