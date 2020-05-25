import React from 'react';
import Header from './header';
import Footer from './footer';
import ListItem from './listItem';

export default class MainArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoInputValue: ""
    }
  }

  onChangeTodoInput(event) {
    console.log("onChangeTodoInput", event.target.value);

    this.setState({todoInputValue:event.target.value});
  }

  onClickAddButton(event) {
    console.log("onClickAddButton");

    let addItem = {label: this.state.todoInputValue};
    let todos = this.state.todos.slice();
    todos.push(addItem);

    this.setState({
      todos: todos,
      todoInputValue: "",
    });
  }

  onCompleteTodo(id) {
    let _state = Object.assign({}, this.state);
    for (var i=0; i < _state.todos.length; i++) {
      if(_state.todos[i].id == id) {
        _state.todos[i].completed = true;
        break;
      } 
    }

    this.setState(_state);
  }

  onDeleteTodo(id) {
    let _state = Object.assign({}, this.state);
    for (var i = 0; i < _state.todos.length; i++) {
      if(_state.todos[i].id == id) {
        _state.todos.splice(i, 1);  {/*spliceメソッドでi番目のオブジェクトを1コ削除*/}
        break;
      } 
    }

    this.setState(_state);
  }

  renderTodoItems() {
    let todoItemDom = [];
    for(var i = 0; i < this.props.todoList.length; i++) {
      if(!this.props.todoList[i].completed) {
        let todoItem = <ListItem
          key={"item-"+i}
          data={this.props.todoList[i]}
          completeTodo={this.onCompleteTodo.bind(this)}
          deleteTodo={this.onDeleteTodo.bind(this)}
        />;
        todoItemDom.push(todoItem);
      }
    }
    return todoItemDom;
  }

  render() {
    return(
      <div className="main-area">
        <Header />
        <main className="list-area">
          <div className="todo-input-area">
            <input type="text"
                    className="todo-input"
                    placeholder="Todoを追加"
                    value={this.state.todoInputValue}
                    onChange={this.onChangeTodoInput.bind(this)}/>
            <button className="add-button"
                    onClick={this.onClickAddButton.bind(this)}>登録</button>
          </div>
          <ul className="todo-list">
            {this.renderTodoItems()}
          </ul>
        </main>
        <Footer />
    </div>
    )
  }
}