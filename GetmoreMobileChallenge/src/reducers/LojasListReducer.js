export default (state = null, action) => {
    switch(action.type) {
        case 'fetch-lojas':
            return action.payload;
        default:
            return state;
    }
}