import instance from "../utils/Axios";


export const AnnouncementService = {
    async fetchLatestAnnouncements() {
        try {
            const response = await instance.get('/announcement');
            return response.data;  // Assuming Axios is used, and response.data contains the announcements
        } catch (error) {
            return undefined
        }
    },
};