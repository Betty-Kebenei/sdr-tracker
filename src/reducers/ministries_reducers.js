export default function(state={},action){
    switch(action.type){
      case "MINISTRIES_LIST":
        return {...state, ministries:action.payload}
      default:
        return state
    }
  }