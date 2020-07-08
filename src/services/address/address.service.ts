import axiosInstance from '../../shared/utils/api.util';

class AddressService {
  public static async getAddress(addressId: string) {
    try {
      const response = await axiosInstance.get(`/addresses/${addressId}`);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default AddressService;
