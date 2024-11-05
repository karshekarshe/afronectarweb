import instance from "./Axios";

export const VariantService = {
    async fetchAllVariants() {
        try {
            const response = await instance.get('api/variants/')
            return response.data;
        } catch (error){
            console.log(error)
            return undefined
        }
    }
}