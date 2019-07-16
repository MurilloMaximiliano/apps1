import React from 'react';
import ReactDOM from 'react-dom';

import Pai from './componente/Pai' 
import Filho from './componente/Filho' 

ReactDOM.render( 
     <div>
       <Pai nome = 'Murillo' />
            <Filho nome = 'Ana' />
            <Filho nome = 'Júlia' />
        </Pai>
    </div>
    ,  document.getElementById('root'))