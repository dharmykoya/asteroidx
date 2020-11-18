import model from '../database/models';


export const createStoreService = async data => {
  return await model.Store.create({ name: data.name, url: data.url });
};