
export const Endpoints = {
    getAllArticlesticlesEndpont() {
        return 'http://localhost:8000/api/blog/articles/'
    },
    getLatestArticlesEnpoint() {
        return 'http://localhost:8000/api/blog/articles/latest/'
    },
    getArticleBySlugEnpoint(slug) {
       return 'http://localhost:8000/api/blog/articles/${slug}`'
    },
}


