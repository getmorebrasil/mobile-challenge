export default (state = null, action) => {
    switch(action.type) {
        case 'loja-info':
            return action.payload;
        default:
            return null;
    }
}