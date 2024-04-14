import React from 'react'
import { useForm } from 'react-hook-form'
import Api from '../../services/Api';

export default function FormProducts({ setOpenModal }) {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    var jsonData = JSON.stringify(data)
    // Chama a API
  }  

  return (
    <>
      <form className='form-pets' onSubmit={handleSubmit}>
          <div>
              <label htmlFor='name'>NOME DO PRODUTO</label>
              <input 
                  className={errors?.name && "input-error"}
                  type="text"
                  {...register('name', { required: true })}
              />
          </div>

          <div>
              <label htmlFor='price'>PREÇO</label>
              <input 
                  className={errors?.price && "input-error"}
                  type="text" 
                  {...register("price", { required: true })}
              />

          </div>
          <div>
              <label htmlFor='quantity'>QUANTIDADE INICIAL NO ESTOQUE</label>
              <input 
                  className={errors?.quantity && "input-error"}
                  type="text" 
                  {...register("quantity", { required: true })}
              />
          </div>
      </form>
          

      <div className='buttons-container'>
          <button className='button-style'onClick={() => handleSubmit(onSubmit)()} >
              <span className="transition-save"></span>
              <span className="gradient"></span>
              <span className="label">Salvar</span>
          </button>
          <button className='button-style' onClick={() => {setOpenModal(false), reset()}}>
              <span className="transition-cancel"></span>
              <span className="gradient"></span>
              <span className="label">Cancelar</span>
          </button>
      </div>
    </>
    
  )
}
