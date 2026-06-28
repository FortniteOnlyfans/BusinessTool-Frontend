import Cookies from "js-cookie";

const SERVER = "http://localhost:4100";
const COOKIE = "fnof_token";

export interface Headers {
    authorization?: string
}

export interface Response {
    status: string,
    reason?: string,
    payload?: object,
    headers?: Headers
}

function prepareRequest(req: XMLHttpRequest, data: object, url: string): Promise<Response> {
    const tkn = Cookies.get(COOKIE);
    if (tkn) {
        req.setRequestHeader("Authorization", tkn);
    } else {
        req.setRequestHeader("Authorization", "null");
    }

    const strData = JSON.stringify(data);
    req.send(strData);
    return new Promise((res, rej) => {
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status >= 200 && req.status < 300) {
                    const maybeToken = req.getResponseHeader("Authorization");
                    if (maybeToken) {
                        Cookies.set(COOKIE, maybeToken);
                    }
                    let d = JSON.parse(req.responseText);
                    d.headers = {
                        authorization: req.getResponseHeader("Authorization")
                    };
                    res(d);
                } else {
                    rej({status: "failed", reason: "Server returned: " + req.status});
                }
            }
        }
    });
}

export function GET(endpoint: string): Promise<Response> {
    const req = new XMLHttpRequest();

    const url = SERVER + endpoint;
    req.open("GET", url, true);
    return prepareRequest(req, {}, url);
}

export function POST(endpoint: string, data: object): Promise<Response> {
    const req = new XMLHttpRequest();

    const url = SERVER + endpoint;
    req.open("POST", url, true);
    return prepareRequest(req, data, url);
}

export function LOGOUT() {
    Cookies.remove(COOKIE, { path: '/' });
    window.location.href = "/login";
}

export function LOGIN(tkn: string) {
    Cookies.set(COOKIE, tkn);
    window.location.href = "/";
}