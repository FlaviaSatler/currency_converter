import React, { useState } from 'react';
import './CurrencyConverter.css';
import {
  Jumbotron, Button, Form, Col, Spinner, Alert
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CurrencyList from '../CurrencyList/CurrencyList';
import axios from 'axios';

function CurrencyConverter() {

  const FIXER_URL = 'http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3';

  const [value, setValue] = useState('');
  const [currencyFrom, setCurrencyFrom] = useState('BRL');
  const [currencyTo, setCurrencyTo] = useState('USD');
  const [showSpinner, setShowSpinner] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [conversionResult, setConversionResult] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  function handleValue(event) {
    setValue(event.target.value.replace(/\D/g, ''));
  }

  function handleCurrencyFrom(event) {
    setCurrencyFrom(event.target.value);
  }

  function handleCurrencyTo(event) {
    setCurrencyTo(event.target.value);
  }

  function convert(event) {
    event.preventDefault();
    if (event.currentTarget.checkValidity() === true) {
      setShowSpinner(true);
      axios.get(FIXER_URL)
        .then(res => {
          const quotation = getQuotation(res.data);
          if (quotation) {
            setConversionResult(`${value} ${currencyFrom} = ${quotation} ${currencyTo}`);
            setShowResult(true);
            setShowSpinner(false);
            setShowErrorMessage(false);
          } else {
            showError();
          }
        }).catch(err => showError());
    }
  }

  function getQuotation(quotationData) {
    if (!quotationData || quotationData.success !== true) {
      return false;
    }
    const quotationFrom = quotationData.rates[currencyFrom];
    const quotationTo = quotationData.rates[currencyTo];
    const quotation = (1 / quotationFrom * quotationTo) * value;
    return quotation.toFixed(2);
  }

  function showError() {
    setShowErrorMessage(true);
    setShowSpinner(false);
  }

  return (
    <div className="currencyConverter">

      <div className="currencyConverter-header">
        <h1 className="currencyConverter-title">Conversor de Moedas</h1>
        <Alert variant="danger" show={showErrorMessage}>
          Erro ao obter dados de conversão, tente novamente.
        </Alert>
      </div>

      <div className='currencyConverter-content'>
        <Jumbotron>
          <Form onSubmit={convert}>
            <Form.Row>
              <Col className='col-sm-12 mb-3'>
                <Form.Control
                  placeholder="0"
                  value={value}
                  onChange={handleValue}
                  required />
              </Col>
              <Col className='col-sm-5 mb-5'>
                <Form.Control as="select"
                  value={currencyFrom}
                  onChange={handleCurrencyFrom}>
                  <CurrencyList />
                </Form.Control>
              </Col>
              <Col className="text-center col-sm-2 mb-5" style={{ paddingTop: '5px' }}>
                <FontAwesomeIcon icon={faArrowRight} />
              </Col>
              <Col className='col-sm-5 mb-5'>
                <Form.Control as="select"
                  value={currencyTo}
                  onChange={handleCurrencyTo}>
                  <CurrencyList />
                </Form.Control>
              </Col>
              <Col sm="2" className='col-sm-12'>
                <Button variant="success" type="submit" data-testid="btn-converter">
                  <span className={showSpinner ? null : 'hidden'}>
                    <Spinner animation="border" size="sm" />
                  </span>
                  <span className={showSpinner ? 'hidden' : null}>
                    Converter
                  </span>
                </Button>
              </Col>
            </Form.Row>
            {showResult &&
            <div className='currencyConverter-result'>
              <Col className='col-sm-12'>
                {conversionResult}
              </Col>
            </div>
            }
          </Form>
        </Jumbotron>
      </div>

    </div>
  );
}

export default CurrencyConverter;
