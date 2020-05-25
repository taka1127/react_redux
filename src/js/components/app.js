import React from 'react';
import SideArea from './sideArea';
import MainArea from './mainArea';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groupList: [
        {
          id:"inbox",
          label:"受信箱"
        },
        {
          id:"group-1",
          label:"グループ1"
        }
      ],
      todoList: {
        "inbox": [
                    {
                      id:"item-1",
                      label:"Todo1",
                      completed: false
                    },
                    {
                      id:"item-2",
                      label:"Todo2",
                      completed: false
                    }
                  ],
        "group-1": [
                    {
                      id:"item-3",
                      label:"Todo3",
                      completed: false
                    },
                    {
                      id:"item-4",
                      label:"Todo4",
                      completed: false
                    }
                  ]
      },
      todoCount: 4,
      groupCount: 1,
      selectedGroup: "inbox"
    }
  }

  onAddTodo(label){
    let _state = Object.assign({}, this.state); {/*stateのコピー(stateは直接触れない)*/}
    _state.todoCount++;
    let todoList = _state.todoList[_state.selectedGroup];
    let todoItem = {
      id: "item-" + _state.todoCount,
      label: label,
      completed: false
    }
    todoList.push(todoItem);
    this.setState(_state);

  }

  onCompleteTodo(id){
    let _state = Object.assign({}, this.state);
    let todoList = _state.todoList[_state.selectedGroup];
    for (var i = 0; i < todoList.length; i++){
      if(todoList[i].id == id){
        todoList[i].completed = true;
        break;
      }
    }
    this.setState(_state);
  }

  onDeleteTodo(id){
    let _state = Object.assign({}, this.state);
    let todoList = _state.todoList[_state.selectedGroup];
    for (var i = 0; i < todoList.length; i++){
      if(todoList[i].id == id){
        todoList.splice(i, 1); {/*spliceメソッドでi番目のオブジェクトを1コ削除*/}
        break;
      }
    }
    this.setState(_state);
  }

  onSelectGroup(id) {
    console.log("onSelectGroup", id);
    this.setState({selectedGroup: id});
  }

  onAddGroup(groupName) {
    let _state = Object.assign({}, this.state);
    _state.groupCount++;
    let groupId = "group-" + _state.groupCount;
    let groupItem = {
      id:"group-" + _state.groupCount,
      label: groupName
    }
    _state.groupList.push(groupItem);

    _state.todoList["group-" + _state.groupCount] = [];
    this.setState(_state);
  }

  render() {
    return (
      <div className="wrap">
        <SideArea 
          groupList={this.state.groupList}
          onSelect={this.onSelectGroup.bind(this)}
          onAddGroup={this.onAddGroup.bind(this)}/>
        <MainArea 
          todoList={this.state.todoList[this.state.selectedGroup]}
          onAddTodo={this.onAddTodo.bind(this)}
          onCompleteTodo={this.onCompleteTodo.bind(this)}
          onDeleteTodo={this.onDeleteTodo.bind(this)}/>
      </div>
    )
  }
}