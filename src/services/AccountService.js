import instance from "../utils/Axios";
import {data} from "autoprefixer";


export const AccountService = {
    async register(firstname, lastname, email, password) {
        try {
            const response  = await instance.post('auth/users/', {
                first_name: firstname,
                last_name: lastname,
                email: email,
                password: password,
                re_password: password
            })
            console.log("Registration successful:", response.data);
            return { success: true, data: response.data };
        } catch (error){
            console.error("Registration error:", error);
            const errorMessage = error.response?.data || "Registration failed. Please try again.";
            return { success: false, message: errorMessage }
        }
    },
    async login(email, passowrd) {
        try {
            const response = await instance.post('/auth/jwt/create',
                {
                    email: email,
                    passowrd: passowrd
                })
            return {success:true, data: response.data}
        } catch (error){
            console.log("Error in login occurred", error)
            return {success: false, message: error}
        }
    }
}