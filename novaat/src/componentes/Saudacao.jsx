import React, {Component} from 'react'

export default class Saudação extends Component{
   
  state = {
      tipo: this.props.tipo,
      nome: this.props.nome
  }
   setTipo(e) {
     this.setState({ tipo: e.target.value })
   }
   setName(e) {
       this.setState({nome: e.target.value})
   }
   
    render() {
      const { tipo, nome } = this.state 
      return (
        <div>
             <h1>{tipo} {nome}</h1>
             <hr/>
             <input type='text' placeholder='tipo...'value={tipo} onChange={e => this.setTipo(e)}/>
             <input type='text' placeholder='Nome...'value={nome} onChange={e => this.setName(e)}/>
         </div>
      )
    }
}