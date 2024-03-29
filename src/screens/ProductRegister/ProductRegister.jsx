import { useState } from 'react'
import './ProductRegister.css'
import Modal from '../../components/Modal/Modal'
import FormProductRegister from '../../components/Modal/FormProductRegister/FormProductRegister'

function ProductRegister () {

    const [openModal, setOpenModal] = useState(false)
    const name = "Breno"

    // Variavel criada para testes - Aguardando API ficar pronta
    const dados = [
        {
            "idItem": 1,
            "product": "Ração para gatos",
            "value": 12.50,
            "unit": "Gramas"
        },
        {
            "idItem": 2,
            "product": "Shampoo",
            "value": 12.50,
            "unit": "Vidro"
        },
        {
            "idItem": 3,
            "product": "Ração para cachorro",
            "value": 12.50,
            "unit": "Pacote"
        }
    ]
    

    return (
        <div className="body">
            
            <div className='buttons'>
                <h1>Olá, {name}</h1>
                <div>
                    <button className='button-new' onClick={() => setOpenModal(true)}>
                        ADICIONAR
                    </button>
                    <Modal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)} children={<FormProductRegister/>}/>
                </div>
                <div>
                    <button className='button-report' onClick={() => {}}>
                        <p>GERAR</p>
                        <p>RELATÓRIO</p>
                    </button>
                </div>
            </div>
            <h1 className='text-realeases'>Cadastro de Produtos</h1>

            <table className='table-products'>
                <thead>
                    <tr>
                        <th>CÓDIGO</th>
                        <th>PRODUTO</th>
                        <th>PREÇO UNITÁRIO</th>
                        <th>UNIDADE DE MEDIDA</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item, index) => (
                        <tr key={index}>
                            <td className='column-id'>{item.idItem}</td>
                            <td className='column-product'>{item.product}</td>
                            <td className='column-value'>R${item.value}</td>
                            <td className='column-unit'>{item.unit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>    
        
    )
}

export default ProductRegister