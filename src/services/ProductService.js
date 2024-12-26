import instance from "../utils/Axios";


export const ProductService = {
    async fetchLatestProduct() {
        try {
            const response = await instance.get('api/products/')
            return {success:true, data: response.data.results}
        } catch (error) {
            console.log(error)
            const errorMessage = error.response?.data || "Internal server error. Please try again.";
            return {success:false, message: errorMessage}
        }
    },

    async fetchProductVariant(id){
        try {
            const response = instance.get('api/products/variants/')
            return {success:true, data: response.data}
        } catch (error) {
            console.log(error)
            const errorMessage = error.response?.data || "Internal server error. Please try again.";
            return {success:false, message: errorMessage}
        }
    }
}