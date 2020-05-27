import { todoActionNames } from '../actions/todoActions';
import { groupActionNames } from '../actions/groupActions';
import _ from 'lodash';


const todoInitState = {
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
                  label:"ダイエット",
                  completed: false
                },
                {
                  id:"item-4",
                  label:"読書（１ヶ月に３冊）",
                  completed: false
                }
              ],
    "group-2": [
                {
                  id:"item-5",
                  label:"牛肉",
                  completed: false
                },
                {
                  id:"item-6",
                  label:"玉ねぎ",
                  completed: false
                }
              ],
    "group-3": [
                {
                  id:"item-7",
                  label:"レポート(~5/15)",
                  completed: false
                },
                {
                  id:"item-8",
                  label:"会議(5/20,15:00)",
                  completed: false
                }
              ],
    "group-4": [
                {
                  id:"item-9",
                  label:"銀行へ行く",
                  completed: false
                },
                {
                  id:"item-10",
                  label:"洗車",
                  completed: false
                }
              ],
    "group-5": [
                {
                  id:"item-11",
                  label:"温泉",
                  completed: false
                },
                {
                  id:"item-12",
                  label:"テーマパーク",
                  completed: false
                }
              ],
    "group-6": [
                {
                  id:"item-13",
                  label:"英会話",
                  completed: false
                },
                {
                  id:"item-14",
                  label:"フットサル ",
                  completed: false
                }
              ]
  },
  todoCount: 14
}

function todoReducer(state = todoInitState, action){
  let _state = _.cloneDeep(state); {/*stateのコピー(stateは直接触れない)*/}
  let todoList = [];
  switch(action.type){
    case todoActionNames.ADD_TODO:
      _state.todoCount++;
      todoList = _state.todoList[action.payload.selectedGroup];
      let todoItem = {
      id: "item-" + _state.todoCount,
      label: action.payload.label,
      completed: false
      }
      todoList.push(todoItem);
      return _state;

    case todoActionNames.COMPLETE_TODO:
      todoList = _state.todoList[action.payload.selectedGroup];
      for (var i = 0; i < todoList.length; i++){
        if(todoList[i].id == action.payload.id){
          todoList[i].completed = true;
          break;
        }
      }
      return _state;

    case todoActionNames.DELETE_TODO:
      todoList = _state.todoList[action.payload.selectedGroup];
      for (var i = 0; i < todoList.length; i++){
        if(todoList[i].id == action.payload.id){
          todoList.splice(i, 1); {/*spliceメソッドでi番目のオブジェクトを1コ削除*/}
          break;
        }
      }
      return _state;
    case groupActionNames.ADD_GROUP:
      _state.todoList[action.payload.groupId] = [];
      return state;
    case groupActionNames.DELETE_GROUP:
      delete _state.todoList[action.payload.id];
      return _state;
    default:
      return state;
  }
}

export default todoReducer;