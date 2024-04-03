import React from 'react'
import './Modal.css'
import { useForm } from 'react-hook-form'

export default function Modal({isOpen, setOpenModal}) {

  // const [dataForm, setDataForm] = useState({
  //   tutor: '',
  //   name: '',
  //   specie: '',
  //   breed: '',
  //   service: '',
  // })

  const { register, handleSubmit, formState: { errors } } = useForm();

 

  const onSubmit = (data) => {
    /* CHAMAR A API */
    console.log(data) 
  }  

  if (isOpen) {
    return (
      <div className='background'>
        <div className='modal'>
          <div className='content-container'>
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
