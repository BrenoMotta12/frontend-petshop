import { useState } from 'react'
import './Pets.css'
import Modal from '../../components/Modal/Modal'

function Pets () {

    const [openModal, setOpenModal] = useState(false)
    const name = "Breno"

    // Variavel criada para testes - Aguardando API ficar pronta
    const dados = [
        {
            "id": 1,
            "tutor": "japones safado",
            "name": "pinduca",
            "specie": "ave",
            "breed": "paragaio",
            "service": "tiro ao alvo"
        },
        {
            "id": 2,
            "tutor": "alex",
            "name": "ronaldo",
            "specie": "cachorro",
            "breed": "pastor alemão",
            "service": "procurador de droga"
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
                    {dados.map((item, index) => (
                        <tr key={index}>
                            <td className='column-tutor'>{item.tutor}</td>
                            <td className='column-name'>{item.name}</td>
                            <td className='column-specie'>{item.specie}</td>
                            <td className='column-breed'>{item.breed}</td>
                            <td className='column-service'>{item.service}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>    
        
    )
}

export default Pets