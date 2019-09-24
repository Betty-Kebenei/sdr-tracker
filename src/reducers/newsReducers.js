export default function(state={},action){
  switch(action.type){
    case "EVENTS_LIST":
      return {...state, news:action.payload}
    default:
      return state
  }
}