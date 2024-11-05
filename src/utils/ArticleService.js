import instance from "./Axios";

export const ArticleService = {
    async fetchAllVariants() {
        try {
            const response = await instance.get('api/articles/')
            return response.data;
        } catch (error){
            console.log(error)
            return undefined
        }
    },
    async fetchLatestArticles() {
        try {
            const response = await instance.get('api/articles/latest/')
            return response.data;
        } catch (error){
            console.log(error)
            return undefined
        }
    }
}