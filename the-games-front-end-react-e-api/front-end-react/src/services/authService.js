import axios from "axios"

// Função que coleta o token do localStorage
export const getAxioConfig = () => ({
    headers: {
        Authorization: `Bearer ${ typeof window !== "undefined" ? (localStorage.getItem("token") ?? "") : ""}`,
    }
})

// Função que realiza o login
export const login = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:4000/auth", {
            email,
            password
        });
        const token = response.data.token
        localStorage.setItem("token", token);
        return { success: true }

    } catch (error) {
        return { success: false, message: error.message }
    }
}

// Função que realiza o logout
export const logout = (router) => {
    localStorage.removeItem("token");
    router.push("/")
}