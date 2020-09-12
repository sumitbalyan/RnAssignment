import { URL } from "../constants";

export const getData = async (term)=> {
    return await fetch(`${URL}=${term}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        })
        .then((response) => {
            return response.json();
        })
        .then((resJson) => {
            return resJson;
        })
        .catch((error) => {
            console.error(error);
          });
  }