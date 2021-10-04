import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './calculator';
import { Provider } from 'react-redux';
import  store  from '../src/store'


import 'bootswatch/dist/darkly/bootstrap.min.css';
import './index.css';

const App = () => {
  return ( 
    <Provider store={store}>
      <Calculator />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root')
);

