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
              <span class="transition-save"></span>
              <span class="gradient"></span>
              <span class="label">Salvar</span>
          </button>
          <button className='button-style' onClick={() => {setOpenModal(false), reset()}}>
              <span class="transition-cancel"></span>
              <span class="gradient"></span>
              <span class="label">Cancelar</span>
          </button>
      </div>
    </>
    
  )
}
