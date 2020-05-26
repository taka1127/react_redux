export const todoActionsNames = {
  ADD_TODO: 'ADD_TODO',
  COMPLETE_TODO: 'COMPLETE_TOD',
  DELETE_TODO: 'DELETE_TODO'
}



export const todoActions = {
  addTodo: (label, selectedGroup) => {
    return {
      type: todoActionsNames.ADD_TODO,
      payload: {
        label: label,
        selectedGroup: selectedGroup
      }
    }
  },
  completeTodo: (id, selectedGroup) => {
    return {
      type: todoActionsNames.COMPLETE_TODO,
      payload: {
        id: id,
        selectedGroup: selectedGroup
      }
    }
  },
  deleteTodo: (id, selectedGroup) => {
    return {
      type: todoActionsNames.DELETE_TODO,
      payload: {
        id: id,
        selectedGroup: selectedGroup
      }
    }
  }
}