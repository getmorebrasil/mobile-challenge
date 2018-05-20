export default (state = null, action) => {
    switch(action.type) {
        case 'select-id':
            return action.payload;
        default:
            return state;
    }
}