const initialState=0;
const operate=(state=initialState,action)=>{
    switch (action.type) {
      case "ADD":
        return action.payload[0] + action.payload[1];
      case "SUBTRACT":
        return action.payload[0] - action.payload[1];
      case "MULTIPLY":
        return action.payload[0] * action.payload[1];
      case "DIVIDE":
        return action.payload[0] / action.payload[1];
      case "SIN":
        return Math.sin(action.payload[0]);
      case "COS":
        return Math.cos(action.payload[0]);
      case "TAN":
        return Math.tan(action.payload[0]);
      case "EXP":
        return Math.exp(action.payload[0]);
      case "LOG":
        return Math.log(action.payload[0]);
      case "POW":
        return Math.pow(action.payload[0], action.payload[1]);
      case "CLEAR":
        return 0;
      default:
        return state;
    }
}
export default operate;