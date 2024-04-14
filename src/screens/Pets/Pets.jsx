import { useEffect, useState } from 'react'
import './Pets.css'
import Modal from '../../components/Modal/Modal'
import Api from '../../services/Api'
import trashIcon from '../../img/img_trash.svg'
import pencilIcon from '../../img/img_pencil.svg'
import FormPets from '../../components/FormPets/FormPets'
import { Form } from 'react-hook-form'
import { useSelector } from 'react-redux'

function Pets () {

    const auth = useSelector(state => state.auth)
    const [openModal, setOpenModal] = useState(false)
    const [data, setData] = useState([''])
    const [dataForm, setDataForm] = useState([''])
    const [loading, setLoading] = useState(true)
    const name = JSON.parse(sessionStorage.getItem('auth')).name

    useEffect(() =>{
        if(openModal == false) {
            setDataForm('')
            setLoading(true)
        }
    }, [openModal])

    useEffect(() => {
        Api
        .get("animal/list/")
        .then((response) => {
            setData(response.data), 
            setLoading(false)})
        .catch((err) => {console.error("Ocorreu um erro na API " + err)})
    }, [loading])

    function deleteAnimal(index) {
        const jsonData = {
            animal_id: index
        }
        Api
        .delete("animal/delete/", {
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
                    <Modal isOpen={openModal} children={<FormPets setOpenModal={setOpenModal} dataForm={dataForm}/>}/>
                </div>
                <div>
                    <button className='button-report' onClick={() => {}}>
                        <p>GERAR</p>
                        <p>RELATÓRIO</p>
                    </button>
                </div>
            </div>
            <h1 className='text-realeases'>Animais</h1>
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
                            <th>TUTOR</th>
                            <th>NOME PET</th>
                            <th>ESPÉCIE</th>
                            <th>RAÇA</th>
                            <th>SERVIÇOS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className='column-tutor'>{item.tutor}</td>
                                <td className='column-name'>{item.name}</td>
                                <td className='column-specie'>{item.specie}</td>
                                <td className='column-breed'>{item.breed}</td>
                                <td className='column-service'>{item.service}</td>
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
                                    onClick={() => deleteAnimal(item.id)} 
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

export default Pets