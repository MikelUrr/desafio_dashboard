// apiDesafio.js

const VITE_BACKEND_HOST =
    import.meta.env.VITE_BACKEND_HOST || "http://localhost:3006";

const loginApi = async (formData) => {
    try {
        const response = await fetch(`${VITE_BACKEND_HOST}/user/login`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            const data = await response.json();

            if (data.result.userType === "user") {

                return new Response(null, { status: 403 });
            }

            return { response, data };
        } else {
            throw new Error(
                `ERROR en la solicitud: ${response.status} - ${response.statusText}`
            );
        }
    } catch (error) {
        console.error("Error en la solicitud:", error.message);
        throw error;
    }
};

const logoutApi = async () => {
    try {
        const response = await fetch(`${VITE_BACKEND_HOST}/user/logout`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            
        });
      
        if (response.ok) {
            const data = await response.json();
            return response;
        } else {
            throw new Error(
                `ERROR en la solicitud: ${response.status} - ${response.statusText}`
            );
        }
    } catch (error) {
        console.error("Error en la solicitud:", error.message);
        throw error;
    }
}

const fetchUserData = async () => {
    try {
        const response = await fetch(`${VITE_BACKEND_HOST}/user/info`, {
            method: "GET",
            credentials: "include",  
        });

        console.log("hola", response);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return { response, data };
        } else {
            console.error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
            return [response, null];
        }
    } catch (error) {
        console.error("Error en la solicitud:", error.message);
        return [null, null];
    }
};

const fetchEmotionData = async () => {
    try {
        const response = await fetch(`${VITE_BACKEND_HOST}/emotion/daily`, {
            method: "GET",
            credentials: "include",  
        });

        console.log("hola", response);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return { response, data };
        } else {
            console.error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
            return [response, null];
        }
    } catch (error) {
        console.error("Error en la solicitud:", error.message);
        return [null, null];
    }
};

const fetchTableData = async () => {
    try {
        const response = await fetch(`${VITE_BACKEND_HOST}/time/today`, {
            method: "GET",
            credentials: "include",  
        });

       

        if (response.ok) {
            const data = await response.json();
      
            console.log("hola", data);
            return { response, data };
        } else {
            console.error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
            return [response, null];
        }
    } catch (error) {
        console.error("Error en la solicitud:", error.message);
        return [null, null];
    }
};

export  { loginApi, fetchUserData, logoutApi, fetchEmotionData, fetchTableData};
