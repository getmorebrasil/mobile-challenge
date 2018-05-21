export const getLista = (lojas) => {
    return {
        type: 'fetch-lojas',
        payload: lojas
    };
};

export const getLoja = (id,name) => {
    return {
        type: 'select-id',
        payload: [id,name]
    };
};

export const getLojaInfo = (loja) => {
    return {
        type: 'loja-info',
        payload: loja
    };
};