import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Api from '../../services/Api';
import './FormPets.css';
import { json } from 'react-router-dom';

export default function FormPets({ setOpenModal, dataForm }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: dataForm // Defina os valores padrão com base nos dados fornecidos
  });

  // Função para lidar com o envio do formulário
  const onSubmit = (data) => {
    var jsonData = data;
    
    if(dataForm["id"]) {
        jsonData.id = dataForm["id"]
        Api.put("/update/", JSON.stringify(jsonData))
        .then(() => { setOpenModal(false); }) // Chame o reset após a operação de sucesso
        .catch((err) => { console.error("Ocorreu um erro na API " + err); });
    } else {
        Api.post("/save/", JSON.stringify(jsonData))
        .then(() => { setOpenModal(false); }) // Chame o reset após a operação de sucesso
        .catch((err) => { console.error("Ocorreu um erro na API " + err); });
    }
    
  };

  return (
    <>
      <form className='form-pets' onSubmit={handleSubmit(onSubmit)}>
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
        <button className='button-style' onClick={handleSubmit(onSubmit)} >
          <span class="transition-save"></span>
          <span class="gradient"></span>
          <span class="label">Salvar</span>
        </button>
        <button className='button-style' onClick={() => { setOpenModal(false); }}>
          <span class="transition-cancel"></span>
          <span class="gradient"></span>
          <span class="label">Cancelar</span>
        </button>
      </div>
    </>
  );
}
