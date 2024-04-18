import { Children, useEffect, useState } from 'react'
import './ProductRegister.css'
import Modal from '../../components/Modal/Modal'
import FormProducts from '../../components/FormProducts/FormProductsRegister'
import { useSelector } from 'react-redux'
import Api from '../../services/Api'
import trashIcon from '../../img/img_trash.svg'
import pencilIcon from '../../img/img_pencil.svg'

function ProductRegister () {

    const auth = useSelector(state => state.auth)
    const [openModal, setOpenModal] = useState(false)
    const [data, setData] = useState([''])
    const [dataForm, setDataForm] = useState([''])
    const [loading, setLoading] = useState(true)
    const name = JSON.parse(sessionStorage.getItem('auth')).user_name

    useEffect(() =>{
        if(openModal == false) {
            setDataForm('')
            setLoading(true)
        }
    }, [openModal])

    useEffect(() => {
        Api
        .get("product/list/")
        .then((response) => {
            setData(response.data), 
            setLoading(false)})
        .catch((err) => {console.error("Ocorreu um erro na API " + err)})
    }, [loading])

    function deleteProduct(index) {
        const jsonData = {
            product_id: index
        }
        Api
        .delete("product/delete/", {
            data: jsonData
        })
        .then(() => {setLoading(true)})
        .catch((err) => {console.error("Ocorreu um erro na API " + err)})

    }
    

    return (
        <div className="body">
            
            <div className='buttons'>
                <h1>Olá, {name}</h1>
                <div>
                    <button className='button-new' onClick={() => setOpenModal(true)}>
                        ADICIONAR
                    </button>
                    <Modal isOpen={openModal}  children={<FormProducts setOpenModal={setOpenModal} dataForm={dataForm}/>}/>
                </div>
                <div>
                    <button className='button-report' onClick={() => {}}>
                        <p>GERAR</p>
                        <p>RELATÓRIO</p>
                    </button>
                </div>
            </div>
            <h1 className='text-realeases'>Cadastro de Produtos</h1>

            {loading ? (
                <div className="typing-indicator">
                    <div className="typing-circle"></div>
                    <div className="typing-circle"></div>
                    <div className="typing-circle"></div>
                    <div className="typing-shadow"></div>
                    <div className="typing-shadow"></div>
                    <div className="typing-shadow"></div>
                </div>
            ) : (
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
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className='column-code'>{item.product_code}</td>
                                <td className='column-product'>{item.product_name}</td>
                                <td className='column-quantity'>{item.quantity}</td>
                                <td className='column-price'>R${item.price}</td>
                                <td className='column-trash'>
                                    <img 
                                    className='img-pencil' 
                                    src={pencilIcon} 
                                    alt="" 
                                    onClick={() => {setOpenModal(true), setDataForm(item)}} 
                                    />
                                    <img 
                                    className='img-trash' 
                                    src={trashIcon} 
                                    alt="" 
                                    onClick={() => deleteProduct(item.id)} 
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                )}
        </div>    
        
    )
}

export default ProductRegister