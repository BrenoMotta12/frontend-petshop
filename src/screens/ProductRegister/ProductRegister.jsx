import { Children, useState } from 'react'
import './ProductRegister.css'
import Modal from '../../components/Modal/Modal'
import FormProducts from '../../components/FormProducts/FormProductsRegister'

function ProductRegister () {

    const [openModal, setOpenModal] = useState(false)
    const name = "Breno"

    // Variavel criada para testes - Aguardando API ficar pronta
    const dados = [
        {
            "idItem": 1,
            "product": "Ração para gatos - pacote",
            "quantity": 12,
            "value": 12.50
        },
        {
            "idItem": 2,
            "product": "Shampoo",
            "quantity": 12,
            "value": 12.50
        },
        {
            "idItem": 3,
            "product": "Ração para cachorro",
            "quantity": 12,
            "value": 12.50
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
                    <Modal isOpen={openModal}  children={<FormProducts setOpenModal={setOpenModal}/>}/>
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
                        <th>QUANTIDADE</th>
                        <th>PREÇO UNITÁRIO</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item, index) => (
                        <tr key={index}>
                            <td className='column-id'>{item.idItem}</td>
                            <td className='column-product'>{item.product}</td>
                            <td className='column-quantity'>{item.quantity}</td>
                            <td className='column-value'>R${item.value}</td>
                        
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>    
        
    )
}

export default ProductRegister