import { createStoreService, getStoreService } from "../services/store.service";

export default {
  async createStore(request, response) {
    try {
      if (!request.name || !request.url) {
        return response.status(422).json({
          status: "fail",
          message: "name or url is required"
        });
      }
      const data = await createStoreService(request);

      return response.status(201).json({
        status: "success",
        data
      });
    } catch (error) {
      return response.status(500).json({
        status: "fail",
        message: error
      });
    }
  },
  async getStore(request, response) {
    try {
      const {storeId} = request.params
      const data = await getStoreService(storeId);

      if (!data) {
        return response.status(200).json({
          status: "success",
          message: "store not found"
        });
      }

      return response.status(200).json({
        status: "success",
        data
      });
    } catch (error) {
      return response.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  }
};
