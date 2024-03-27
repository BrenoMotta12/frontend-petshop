import './ProductRegister.css'

function ProductRegister () {

    
    const name = "Breno"

    // Variavel criada para testes - Aguardando API ficar pronta
    const dados = [
        {
            "idItem": 1,
            "product": "Ração para gatos",
            "quantity": 30,
            "value": 12.50,
            "unit": "Gramas"

        },
        {
            "idItem": 2,
            "product": "Shampoo",
            "quantity": 40,
            "value": 12.50,
            "unit": "Vidro"
        },
        {
            "idItem": 3,
            "product": "Ração para cachorro",
            "quantity": 50,
            "value": 12.50,
            "unit": "Pacote"
        }
    ]
    

    return (

        
        <div className="body">

            <div className='buttons'>
                <h1>Olá, {name}</h1>
                <div>
                    <button className='button-new' onClick={() => console.log('Clicou')}>
                        ADICIONAR
                    </button>
                </div>
                <div>
                    <button className='button-report' onClick={() => console.log('Clicou')}>
                        <p>GERAR</p>
                        <p>RELATÓRIO</p>
                    </button>
                </div>
            </div>
            <h1 className='text-realeases'>Lançamentos</h1>

            <table className='table-products'>
                <thead>
                    <tr>
                        <th>CÓDIGO</th>
                        <th>PRODUTO</th>
                        <th>QUANTIDADE</th>
                        <th>PREÇO UNITÁRIO</th>
                        <th>UNIDADE DE MEDIDA</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item, index) => (
                        <tr key={index}>
                            <td className='column-id'>{item.idItem}</td>
                            <td className='column-product'>{item.product}</td>
                            <td className='column-quantity'>{item.quantity}</td>
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