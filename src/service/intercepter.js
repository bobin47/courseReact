import axios from 'axios';
 const authFetch = axios.create();

authFetch.interceptors.request.use(
    (request) => {
        const accessToken = localStorage.getItem("accessToken")

        console.log(typeof accessToken);
    
        if (accessToken) {
            
            request.headers['Authorization'] = `Bearer ${accessToken}`;
            // request.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        return request;
    },
    (error) => {
        // return Promise.reject("error", error);
       
    }
);

export default authFetch;
