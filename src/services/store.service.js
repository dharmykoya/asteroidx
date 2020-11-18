import model from '../database/models';


export const createStoreService = async data => {
  return await model.Store.create({ name: data.name, url: data.url });
};

export const getStoreService = async storeId => {
  const store = await model.Store.findByPk(storeId);
  return store;
};