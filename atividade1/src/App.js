import React from 'react';


// stateless, [{nome:cadaum, idade:cadaum}] <listaUsuario/> dica:map()
//retorno div Nome: varnome, idade:varIdade

//class, conster state => [{id: numero, nome:cadaum, idade:Cadaum}]
const lista = [
  { id:1,
    nome:'Murillo',
   idade: 27},
  { id:2,
    nome: 'João',
    idade: 21}, 
  { id:3,
    nome:'Rogerio',
    idade: 24}]


        class App extends React.Component{

  render() {
    return  (
    <div>
     <ListaUsuario usuario={lista} />
    </div>)
  }
}

export default App;
