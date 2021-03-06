import { groupActionNames } from '../actions/groupActions';
import _ from 'lodash';


const groupInitState = {
  groupList: [
    {
      id:"inbox",
      label:"受信箱"
    },
    {
      id:"group-1",
      label:"目標"
    },
    {
      id:"group-2",
      label:"買い物"
    },
    {
      id:"group-3",
      label:"仕事"
    },
    {
      id:"group-4",
      label:"スケジュール"
    },
    {
      id:"group-5",
      label:"旅行"
    },
    {
      id:"group-6",
      label:"習いごと"
    }
  ],
  groupCount: 1,
  selectedGroup: "group-1"
}

function groupReducer(state = groupInitState, action){
  let _state = _.cloneDeep(state); {/*stateのコピー(stateは直接触れない)*/}
  switch(action.type){
    case groupActionNames.ADD_GROUP:
      _state.groupCount++;
      let groupItem = {
        id: action.payload.groupId,
        label: action.payload.data
      }
      _state.groupList.push(groupItem);
      return _state;

    case groupActionNames.SELECT_GROUP:
      _state.selectedGroup = action.payload.id;
      return _state;

    case groupActionNames.EDIT_GROUP:
      for(var i = 0; i < _state.groupList.length; i++){
        if(_state.groupList[i].id == action.payload.id){
          _state.groupList[i].label = action.payload.groupName;
          break;
        }
      }
      return _state;

    case groupActionNames.DELETE_GROUP:
      for(var i = 0; i < _state.groupList.length; i++){
        if( _state.groupList[i].id == action.payload.id){
          _state.groupList.splice(i, 1);
          break;
        }
      }
      if(_state.selectedGroup == action.payload.id) {
        _state.selectedGroup = _state.groupList[0].id;
      }
      return _state;
    default:
      return state;
  }
}

export default groupReducer;