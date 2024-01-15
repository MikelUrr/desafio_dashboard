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

const fetchAllUsersData = async () => {
    try {
        const response = await fetch(`${VITE_BACKEND_HOST}/user/all`, {
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

const fetchEmotioninfo = async () => {
    try {
        const response = await fetch(`https://aitormentxaka.pythonanywhere.com/puntuaciones-encuestas`, {
            method: "GET",
            
        });

        // Log specific information from the response for debugging
        console.log("Response Status:", response.status);
        console.log("Response Headers:", response.headers);

        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return { response, data };
        } else {
            console.error(`Error in request: ${response.status} - ${response.statusText}`);
            return { response, data: null };
        }
    } catch (error) {
        console.error("Error in request:", error.message);
        return { response: null, data: null };
    }
}
 const fetchComplexDataApi = async () => {
    try {
        const response = await fetch(`https://egoup.pythonanywhere.com/emociones-complejas`, {
            method: "GET",
           
        });
        if (response.ok) {
            const data = await response.json();
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
}

export  { loginApi, fetchUserData, logoutApi, fetchEmotionData, fetchTableData, fetchAllUsersData, fetchEmotioninfo, fetchComplexDataApi};
