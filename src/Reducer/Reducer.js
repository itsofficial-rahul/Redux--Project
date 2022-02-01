const intialstate=0;

const changeTheNumber = (state = intialstate, action) => {
    switch (action.type) {
        case "INCREMET": return state+1;
        case "DINCREMENT": return state -1;
            
    
        default: return state;
    }
}
export default changeTheNumber;