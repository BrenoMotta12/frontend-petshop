import React, { useState, useEffect } from 'react';
import './ReportModal.css';
import Api from '../../services/Api';
import exitIcon from '../../img/img_exit.svg'

export default function ReportModal({ isOpen, setOpenReportModal }) {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [reportData, setReportData] = useState([]); // Inicializa o estado com uma matriz vazia

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    setYear(currentYear.toString());
    setMonth(currentMonth);
  }, []);

  const handleMonthChange = (e) => {
    let value = e.target.value;
    if (value.length === 1 && parseInt(value) > 1) {
      value = '0' + value;
    }
    if (parseInt(value) > 12) {
      value = '12';
    }
    setMonth(value);
  };

  const handleYearChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      setYear(e.target.value);
    }
  };

  const handleFilterClick = () => {
    const url = "product/report?month=" + month + "&year=" + year;
    console.log(url)
    Api
    .get(url)
    .then((response) => {
      console.log(response.data)
      setReportData(response.data)})
      
    .catch((err) => {console.error("Ocorreu um erro na API " + err)})
    }

  const handleKeyPress = (e) => {
    if (e.keyCode === 38 || e.keyCode === 40) {
      e.preventDefault();
    }
  };

  if (isOpen) {
    return (
      <div className="background">
        <div className="report-modal shadow">
          <img 
            className='img-exit' 
            src={exitIcon} 
            onClick={() => {setOpenReportModal(false)}} 
            />
          <div className='filter-bar'>
            <div className='month'>
              <label>MÊS</label>
              <input
                type="text"
                pattern="[0-9]*"
                value={month}
                onChange={handleMonthChange}
                onKeyDown={handleKeyPress}
                maxLength="2"
              />
            </div>
            <div className='year'>
              <label >ANO</label>
              <input
                type="text"
                pattern="[0-9]*"
                value={year}
                onChange={handleYearChange}
                onKeyDown={handleKeyPress}
                maxLength="4"
              />
            </div>
            <button className='button-filter' onClick={handleFilterClick}>
              FILTRAR
            </button>
          </div>
          
          {reportData.length > 0 ? ( 
            <div className='content-data'>
              <h2>Dados do Relatório</h2>
              <ul>
                {reportData.map((item, index) => (
                  <li className='item-list' key={index}>
                    <p>ID: {item.product_id}</p>
                    <p>Nome do Produto: {item.product_name}</p>
                    <p>Quantidade Vendida: {item.quantity_sold}</p>
                    <p>Preço unitário: {item.unit_price}</p>
                    <p>Preço Total: R$ {item.total_price}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className='mesage-no-data'>
              <h1>Não há dados para visualizar</h1>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
