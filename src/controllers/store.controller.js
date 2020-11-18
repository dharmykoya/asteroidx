import { createStoreService } from "../services/store.service";

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
  }
};
