import React from 'react'
import { useForm } from 'react-hook-form'
import Api from '../../services/Api';
import { json } from 'react-router-dom';

export default function FormProducts({ setOpenModal, dataForm  }) {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: dataForm // Defina os valores padrão com base nos dados fornecidos
  });

  const onSubmit = (data) => {
    data.price = parseFloat(data.price);
    data.quantity = parseFloat(data.quantity);
    data.product_code = parseInt(data.product_code);
    var jsonData = data;
    console.log(JSON.stringify(jsonData))
    if(dataForm["id"]) {
        
        jsonData.id = dataForm["id"]
        Api.put("product/update/", JSON.stringify(jsonData))
        .then(() => { setOpenModal(false); }) 
        .catch((err) => { console.error("Ocorreu um erro na API " + err); });

    } else {
        
        Api.post("product/save/", JSON.stringify(jsonData))
        .then(() => { setOpenModal(false); })
        .catch((err) => { console.error("Ocorreu um erro na API " + err); });
    }
  }  

  return (
    <>
      <form className='form-pets' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='product_code'>CÓDIGO DO PRODUTO</label>
          <input
            className={errors?.product_code && "input-error"}
            type="number"
            
            {...register('product_code', { required: true, pattern: /^[0-9]+$/ })}
          />
        </div>
        <div>
          <label htmlFor='product_name'>NOME DO PRODUTO</label>
          <input
            className={errors?.product_name && "input-error"}
            type="text"
            {...register('product_name', { required: true  })}
          />
        </div>

        <div>
          <label htmlFor='price'>PREÇO</label>
          <input
            className={errors?.price && "input-error"}
            type="number"
            step="0.01"
            {...register("price", { required: true, pattern: /^\d+(\.\d{1,2})?$/ })}
          />
        </div>
        <div>
          <label htmlFor='quantity'>QUANTIDADE INICIAL NO ESTOQUE</label>
          <input
            className={errors?.quantity && "input-error"}
            type="number" // Definir o tipo como "number"
            {...register("quantity", { required: true, pattern: /^[0-9]+$/ })}
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
