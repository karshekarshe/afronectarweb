import instance from "../utils/Axios";

export const VariantService = {
    async fetchAllVariants() {
        try {
            const response = await instance.get('api/variants/')
            return response.data.results;
        } catch (error){
            console.log(error)
            return undefined
        }
    },
    async fetchVarientBySlug(slug){
       try {
           const response = await instance.get(`api/variants/${slug}`)
           return {success:true, data:response.data}
       } catch (error){
           console.log(error)
           const message = error.response?.data || "Internal server error. Please try again.";
           return {success:false, message:message}
       }
    },
}