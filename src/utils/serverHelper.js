import { backendUrl } from "./config";

export const makeUnauthenticatedPOSTRequest = async (route, body) => {
    console.log(backendUrl+route);
    console.log(body);
    const response = await fetch(backendUrl + route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    console.log("Status: ",response.status);
    const formattedResponse = await response.json();
    return formattedResponse;
};

export const makeAuthenticatedPOSTRequest = async (route,body) => {

    const token = getToken();

    const response = await fetch(backendUrl + route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    });
    console.log("Status: ",response.status);
    const formattedResponse = await response.json();
    return formattedResponse;
}

export const makeAuthenticatedGETRequest = async (route) => {
    console.log(route);
    const token = getToken();
    const response = await fetch(backendUrl+route, {
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`,
        },
    });
    const formattedResponse = await response.json();
    return formattedResponse;
}

const getToken = () => {
    // Getting token from Cookies of the page
    const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
    return accessToken;
}