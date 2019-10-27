import React from 'react';
import App from 'next/app';
import ApiContext from '../context/ApiContext';
import {get} from 'axios'
import Router from 'next/router';

const initialState = {
    itemList: null,
    ads: null
};

class MyApp extends App {

  constructor(props){
    super(props);
    this.state = initialState
  }

  componentDidMount = () => {
    if (this.state.itemList == null) {
    //can use 'fetch' as well
      get('http://localhost:3001/api/products?_page=1&_limit=60').then((response) => {
          console.log(response.data);
          let x = response.data
          this.setState({itemList:x})
      }).catch((error) => {
          console.log(error)
      })
    }
    
  };

  setlist = (typex, page) => {
    if (typex == null) {
        get(`http://localhost:3001/api/products?_page=${page}&_limit=60`).then((response) => {
            console.log(response.data);
            let x = response.data
            this.setState({itemList:x})
        }).catch((error) => {
            console.log(error)
        })
    }else{
        get(`http://localhost:3001/api/products?_page=${page}&_limit=60?&_sort=${typex}`).then((response) => {
            console.log(response.data);
            let x = response.data
            this.setState({itemList:x})
        }).catch((error) => {
            console.log(error)
        })
    }
  }
  


  render() {
    const { Component, pageProps } = this.props;
    return (
        <ApiContext.Provider value={{list:this.state.itemList, setlist:this.setlist}}>
            <Component {...pageProps} />
        </ApiContext.Provider>
         
    );
  }
}

export default MyApp