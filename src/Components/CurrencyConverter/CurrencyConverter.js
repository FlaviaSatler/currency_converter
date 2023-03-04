import React, { useState } from 'react';
import './CurrencyConverter.css';
import {
  Jumbotron, Button, Form, Col, Spinner, Alert, Modal
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import CurrencyList from '../CurrencyList/CurrencyList';
import axios from 'axios';

function CurrencyConverter() {

  const FIXER_URL = 'http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3';

  const [value, setValue] = useState('1');
  const [currencyFrom, setCurrencyFrom] = useState('BRL');
  const [currencyTo, setCurrencyTo] = useState('USD');
  const [showSpinner, setShowSpinner] = useState(false);
  const [formValidated, setFormValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);
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

  function handleCloseModal(event) {
    setValue('1');
    setCurrencyFrom('BRL');
    setCurrencyTo('USD');
    setFormValidated(false);
    setShowModal(false);
  }

  function convert(event) {
    event.preventDefault();
    setFormValidated(true);
    if (event.currentTarget.checkValidity() === true) {
      setShowSpinner(true);
      axios.get(FIXER_URL)
        .then(res => {
          const quotation = getQuotation(res.data);
          if (quotation) {
            setConversionResult(`${value} ${currencyFrom} = ${quotation} ${currencyTo}`);
            setShowModal(true);
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
    <div>
      <h1>Conversor de moedas</h1>
      <Alert variant="danger" show={showErrorMessage}>
        Erro obtendo dados de conversão, tente novamente.
      </Alert>
      <Jumbotron>
        <Form onSubmit={convert} noValidate validated={formValidated}>
          <Form.Row>
            <Col sm="3">
              <Form.Control
                placeholder="0"
                value={value}
                onChange={handleValue}
                required />
            </Col>
            <Col sm="3">
              <Form.Control as="select"
                value={currencyFrom}
                onChange={handleCurrencyFrom}>
                <CurrencyList />
              </Form.Control>
            </Col>
            <Col sm="1" className="text-center" style={{paddingTop:'5px'}}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Col>
            <Col sm="3">
              <Form.Control as="select"
                value={currencyTo}
                onChange={handleCurrencyTo}>
                <CurrencyList />
              </Form.Control>
            </Col>
            <Col sm="2">
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
        </Form>
        <Modal show={showModal} onHide={handleCloseModal} data-testid="modal">
          <Modal.Header closeButton>
            <Modal.Title>Conversão</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {conversionResult}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleCloseModal}>
              Nova conversão
            </Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>
    </div>
  );
}

export default CurrencyConverter;
