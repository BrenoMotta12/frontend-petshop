import React from 'react'
import { useForm } from 'react-hook-form'
import Api from '../../services/Api';
import './FormPets.css'

export default function FormPets({setOpenModal}) {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    var jsonData = JSON.stringify(data)
    Api
    .post("/save/", jsonData)
    .then(() => {setOpenModal(false), reset()})
    .catch((err) => {console.error("Ocorreu um erro na API " + err)})
  }  
  return (
        <>
            <form className='form-pets' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='tutor'>TUTOR</label>
                    <input 
                        className={errors?.tutor && "input-error"}
                        type="text" 
                        {...register('tutor', { required: true })}
                    />
                </div>

                <div>
                    <label htmlFor='name'>NOME PET</label>
                    <input 
                        className={errors?.name && "input-error"}
                        type="text" 
                        {...register("name", { required: true })}
                    />

                </div>

                <div>
                    <label htmlFor='specie'>ESPÉCIE</label>
                    <input 
                        className={errors?.specie && "input-error"}
                        type="text" 
                        {...register("specie", { required: true })}
                    />
                </div>

                <div>
                    <label htmlFor='breed'>RAÇA</label>
                    <input 
                        className={errors?.breed && "input-error"}
                        type="text" 
                        {...register("breed", { required: true })}
                    />
                </div>

                <div>
                    <label htmlFor='service'>SERVIÇOS</label>
                    <input 
                        className={errors?.service && "input-error"}
                        type="text" 
                        {...register("service", { required: true })}
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
