const intialState = 0;
const changeNumber = (state = intialState, action) => {
    switch (action.type) {
        case "INCRIMENT": return state + 1
        case "DECRIMENT": return state - 1;
        default: return state;
    }
}
export default changeNumber;