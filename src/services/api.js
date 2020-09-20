import Constants from "expo-constants";
import moment from "moment";

var api = "informar-endpoint-api-aqui";
export const serverUrl = api;

export function createRequest(
    url,
    method,
    body,
    headers
) {
    let options = {
        method: method,
        headers: {
            "content-type": "application/json",
            timezone: moment().format("Z"),
            ...headers,
        },
        body: undefined,
    };

    if (body) options.body = JSON.stringify(body);

    return fetch(api + url, options);
}

export function post(
  url,
  body,
  headers
) {
  return createRequest(url, "POST", body, headers);
}

export function postFile(url, file, headers) {
    const formData = new FormData();

    formData.append("file", file);

    const options = {
        method: "POST",
        body: formData,
        headers: {
            ...headers,
        },
    };
    return fetch(api + url, options);
}

export function put(url, body, headers) {
    return createRequest(url, "PUT", body, headers);
}

export function sendGet(url, headers) {
    return createRequest(url, "GET", null, headers);
}

export function sendDelete(url, headers) {
    return createRequest(url, "DELETE", null, headers);
}
