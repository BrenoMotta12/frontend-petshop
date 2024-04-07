import { useEffect, useState } from 'react'
import './Pets.css'
import Modal from '../../components/Modal/Modal'
import Api from '../../services/Api'
import trashIcon from '../../img/img_trash.svg'

function Pets () {

    const [openModal, setOpenModal] = useState(false)
    const [data, setData] = useState([''])
    const [loading, setLoading] = useState(true)
    const name = "Breno"
    
    useEffect(() => {
        Api
        .get("/list/")
        .then((response) => {
            setData(response.data), 
            setLoading(false)})
        .catch((err) => {console.error("Ocorreu um erro na API " + err)})
    }, [openModal])

    function deleteAnimal(index) {
        Api
        .delete("/delete?animal_id=" + index)
        .then(() => {})
        .catch((err) => {console.error("Ocorreu um erro na API " + err)})
        console.log("/delete?animal_id=" + index)
    }

    return (
        <div className="body">
            <div className='buttons'>
                <h1>Olá, {name}</h1>
                <div>
                    <button className='button-new' onClick={() => setOpenModal(true)}>
                        ADICIONAR
                    </button>
                    <Modal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)}/>
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
                <div class="typing-indicator">
                    <div class="typing-circle"></div>
                    <div class="typing-circle"></div>
                    <div class="typing-circle"></div>
                    <div class="typing-shadow"></div>
                    <div class="typing-shadow"></div>
                    <div class="typing-shadow"></div>
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
                                    <img src={trashIcon} alt="" onClick={() => deleteAnimal(item.id.toString())} />
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