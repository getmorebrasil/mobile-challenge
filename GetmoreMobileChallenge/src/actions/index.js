export const getLista = (lojas) => {
    return {
        type: 'fetch-lojas',
        payload: lojas
    };
};