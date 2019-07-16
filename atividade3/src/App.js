import React from "react";

class App extends React.Component {
  state = {
    todoList: [],
    tarefa: "",
    detalheTarefa: "",
    editingId: null,
    stylesInput: {
      marginRight: '8px'
    },
    stylesDetalhe:{
      marginLeft: '15px',
      marginRight: '8px'
    },
    stylesButton: {
      margin: '10px'
    },
    mode:'view'
  };

  onChangeText = evento => {
    this.setState({
      tarefa: evento.target.value
    });
  };
  onChangeDetalhe = evento => {
    this.setState({
      detalheTarefa: evento.target.value
    });
  };

  onAddTodo = evento => {
    evento.preventDefault();
    const { tarefa, todoList, editingId, detalheTarefa } = this.state;
    if (editingId === null) {
      const newTodo = {
        id: todoList.length + 1,
        ativo: true,
        tarefa: tarefa,
        detalheTarefa: detalheTarefa
      };
      this.setState({
        tarefa: "",
        detalheTarefa: "",
        todoList: [...todoList, newTodo]
      });
      return;
    }

    const editingTodo = todoList.find(todo => todo.id === editingId);
    const editTodoObject = {
      ...editingTodo,
      tarefa: tarefa,
      detalheTarefa: detalheTarefa
    };

    const newTodo = todoList.map(todo =>
      todo.id === editingId ? editTodoObject : todo
    );
    this.setState({
      todoList: newTodo,
      tarefa: "",
      detalheTarefa: "",
      editingId: null
    });
  };
  
  removeTodo = id => () => {
    const { todoList } = this.state;
    const newTodoList = todoList.filter(todo => todo.id !== id);
    this.setState({
      todoList: newTodoList
    });
  };
  
  editTodo = id => () => {
    // id sendo iditado = id
    const { todoList } = this.state;
    const newTodoList = todoList.find(todo => todo.id === id);
    this.setState({
      tarefa: newTodoList.tarefa,
      detalheTarefa: newTodoList.detalheTarefa,
      editingId: id,
      mode: 'edit'
    });
  }

  buttonAlterar = () => {
    this.setState({
      mode: 'view'
    })
  }

  render() {
    const { todoList, tarefa, detalheTarefa, stylesInput, stylesButton, stylesDetalhe } = this.state;
        
   if(this.state.mode == 'edit') {
     return (
      <div>
        {todoList.map(todo => (
        <p key={todo.id}>
          {todo.tarefa} - {todo.detalheTarefa} 
          <button onClick={this.editTodo(todo.id)} style={stylesButton}>Editar</button>
          <button onClick={this.removeTodo(todo.id)} style={stylesButton}>Remover</button>
         </p> ))}

        <form onSubmit={this.onAddTodo}>
          <span style={stylesInput}>text:</span>
          <input type="text" value={tarefa} onChange={this.onChangeText} /> 
          <span style={stylesDetalhe}>text2:</span>
          <input type="text" value={detalheTarefa} onChange={this.onChangeDetalhe} />
          <button type="submit" onClick={this.buttonAlterar} style={stylesButton}>Alterar</button>
        </form>
      </div>  
      )
    } else {
       return (
        <div>
          {todoList.map(todo => (
          <p key={todo.id}>
           {todo.tarefa} - {todo.detalheTarefa} 
           <button onClick={this.editTodo(todo.id)} style={stylesButton}>Editar</button>
           <button onClick={this.removeTodo(todo.id)} style={stylesButton}>Remover</button>
           </p> ))}

          <form onSubmit={this.onAddTodo}>
           <span style={stylesInput}>Texto:</span>
           <input type="text" value={tarefa} onChange={this.onChangeText} /> 
           <span style={stylesDetalhe}>Tarefa:</span>
           <input type="text" value={detalheTarefa} onChange={this.onChangeDetalhe} />
           <button type="submit"  style={stylesButton}>Cadastrar</button>
           </form>
        </div>
       )
      }
        
  }


}
export default App;///////////////////
