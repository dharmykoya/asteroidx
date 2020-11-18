import model from "../database/models";

export const createStoreService = async data => {
  return await model.Store.create({ name: data.name, url: data.url });
};

export const getStoreService = async storeId => {
  const store = await model.Store.findByPk(storeId);
  return store;
};

export const getAllStoreService = async () => {
  const store = await model.Store.findAll();
  return store;
};
export const deleteStoreService = async storeId => {
  const store = await model.Store.destroy({
    where: {
      id: storeId
    }
  });
  return store;
};
