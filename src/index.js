import React from 'react'
import ReactDOM from 'react-dom';
import Routes from './Routes';

import PokeContext from './Context/PokeContext'
import MediaQueryContext from './Context/MediaQueryContext'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <MediaQueryContext.Provider>
      <PokeContext.Provider>
        <Routes />
      </PokeContext.Provider>
    </MediaQueryContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

