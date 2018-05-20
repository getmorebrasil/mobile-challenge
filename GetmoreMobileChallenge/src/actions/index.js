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

export const getLojaInfo = (loja) => {
    return {
        type: 'loja-info',
        payload: loja
    };
};