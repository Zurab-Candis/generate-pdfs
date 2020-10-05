import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import './App.css';


class App extends Component {
    state = {
        name: '',
        receiptId: 0,
        price1: 0,
        price2: 0,
        price3: 0,
    }
    handleChange = ({target: { value, name }}) => this.setState({ [name]: value })

    createAndDownloadPdf = () => {
        axios.post('https://test-pdf-generator.herokuapp.com/create-pdf', this.state)
            .then(() => axios.get('https://test-pdf-generator.herokuapp.com/fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf'})
                saveAs(pdfBlob, 'newPdf.pdf');
            })
    }

    render() {
      return (
        <div className="App">
         <input className="Invoice-Field" type='text' placeholder='Name' name='name' onChange={this.handleChange} />
         <input className="Invoice-Field" type='text' placeholder='Receipt ID' name='receiptId' onChange={this.handleChange} />
         <input className="Invoice-Field" type='number' placeholder='Price' name='price1' onChange={this.handleChange} />
         <button className="Download-Button" onClick={this.createAndDownloadPdf}>Download Invoice</button>
        </div>
      );
     }
    }
export default App;
