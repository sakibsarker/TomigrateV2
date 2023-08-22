export const isProductionEnv = () => {
    //eslint-disable-next-line no-undef
    return process.env.NODE_ENV === 'production';
};
