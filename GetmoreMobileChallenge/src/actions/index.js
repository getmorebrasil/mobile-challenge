export const getLista = (lojas) => {
    return {
        type: 'fetch-lojas',
        payload: lojas
    };
};

export const getID = (id) => {
    return {
        type: 'select-id',
        payload: id
    };
};