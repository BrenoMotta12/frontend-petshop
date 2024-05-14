import { Children, useEffect, useState } from 'react'
import './ProductRegister.css'
import Modal from '../../components/Modal/Modal'
import ReportModal from '../../components/Modal/ReportModal'
import FormProducts from '../../components/FormProducts/FormProductsRegister'
import { useSelector } from 'react-redux'
import Api from '../../services/Api'
import trashIcon from '../../img/img_trash.svg'
import pencilIcon from '../../img/img_pencil.svg'
import sellIcon from '../../img/img_sell.svg'

function ProductRegister () {

    const auth = useSelector(state => state.auth)
    const [openModal, setOpenModal] = useState(false)
    const [openReportModal, setOpenReportModal] = useState(false)
    const [data, setData] = useState([''])
    const [dataForm, setDataForm] = useState([''])
    const [sell, setSell] = useState(false)
    const [loading, setLoading] = useState(true)
    const name = JSON.parse(sessionStorage.getItem('auth')).user_name

    useEffect(() =>{
        if(openModal == false) {
            setDataForm('')
            setLoading(true)
            setSell(false)
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
                    <Modal isOpen={openModal}  children={<FormProducts setOpenModal={setOpenModal} dataForm={dataForm} sell={sell}/>}/>
                </div>
                <div>
                    <button className='button-report' onClick={() => setOpenReportModal(true)}>
                        <p>GERAR</p>
                        <p>RELATÓRIO</p>
                    </button>
                    <ReportModal isOpen={openReportModal} setOpenReportModal={setOpenReportModal}/>
                </div>
            </div>
            <h1 className='text-realeases'>Produtos</h1>

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
                            <th>ID</th>
                            <th>CÓDIGO</th>
                            <th>PRODUTO</th>
                            <th>QUANTIDADE</th>
                            <th>PREÇO UNITÁRIO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className='column-id'>{item.id}</td>
                                <td className='column-code'>{item.product_code}</td>
                                <td className='column-product'>{item.product_name}</td>
                                <td className='column-quantity'>{item.quantity}</td>
                                <td className='column-price'>R${item.price}</td>
                                <td className='column-trash'>
                                    <img 
                                    className='img-sell' 
                                    src={sellIcon} 
                                    alt="" 
                                    onClick={() => {setOpenModal(true), setDataForm(item), setSell(true)}} 
                                    />
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