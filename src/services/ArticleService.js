import instance from "../utils/Axios";

export const ArticleService = {
    async fetchAllArticles() {
        try {
            const response = await instance.get('api/blog/articles/')
            return response.data;
        } catch (error){
            return null
        }
    },

    async fetchLatestArticles() {
        try {
            const response = await instance.get('api/blog/articles/latest/')
            return response.data;
        } catch (error){
            return null
        }
    },

    async fetchArticleBySlug(slug) {
        try {
            const response = await instance.get(`api/blog/articles/${slug}`)
            return response.data;
        } catch (error){
            return null
        }
    }

}