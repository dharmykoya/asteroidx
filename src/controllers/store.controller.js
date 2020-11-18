import {
  createStoreService,
  getStoreService,
  getAllStoreService,
  deleteStoreService
} from "../services/store.service";

export default {
  async createStore(request, response) {
    try {
      const {name, url} = request.body
      if (!name || !url) {
        return response.status(422).json({
          status: "fail",
          message: "name or url is required"
        });
      }
      const data = await createStoreService(request.body);

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
      const { storeId } = request.params;
      if (!storeId) {
        return response.status(422).json({
          status: "fail",
          message: "storeId is required"
        });
      }
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
        message: error.message
      });
    }
  },
  async getAllStore(request, response) {
    try {
      const data = await getAllStoreService();

      if (!data) {
        return response.status(200).json({
          status: "success",
          message: "no store available"
        });
      }

      return response.status(200).json({
        status: "success",
        data
      });
    } catch (error) {
      return response.status(500).json({
        status: "fail",
        message: error.message
      });
    }
  },
  async deleteStore(request, response) {
    try {
      const { storeId } = request.params;
      if (!storeId) {
        return response.status(422).json({
          status: "fail",
          message: "storeId is required"
        });
      }
      const data = await deleteStoreService(storeId);

      if (!data) {
        return response.status(400).json({
          status: "failed",
          message: "no store found"
        });
      }

      return response.status(200).json({
        status: "success",
        message: 'store deleted successfully'
      });
    } catch (error) {
      return response.status(500).json({
        status: "fail",
        message: error.message
      });
    }
  }
};
