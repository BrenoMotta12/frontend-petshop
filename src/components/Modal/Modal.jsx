import React from 'react'
import './Modal.css'

export default function Modal({isOpen, setOpenModal, children}) {
  if (isOpen) {
    return (
      <div className='background'>
        <div className='modal'>
          <div className='content-container'>
            <div className='form-container'>
              {children}
            </div>

            <div className='buttons-container'>
              <button className='button-style' >
                <span class="transition-save"></span>
                <span class="gradient"></span>
                <span class="label">Salvar</span>
              </button>
              <button className='button-style' onClick={setOpenModal}>
                <span class="transition-cancel"></span>
                <span class="gradient"></span>
                <span class="label">Cancelar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  } 

  return null
}
