import Cookies from "js-cookie";

const SERVER = "http://localhost:4100";
const COOKIE = "fnof_token";

function prepareRequest(req: XMLHttpRequest, data: object): Promise<object> {
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
                    console.log(maybeToken);
                    if (maybeToken) {
                        Cookies.set(COOKIE, maybeToken);
                    }
                    res(JSON.parse(req.responseText));
                } else {
                    rej({status: "failed", reason: "Server returned: " + req.status});
                }
            }
        }
    });
}

export function GET(endpoint: string): Promise<object> {
    const req = new XMLHttpRequest();

    req.open("GET", SERVER + endpoint, true);
    return prepareRequest(req, {});
}

export function POST(endpoint: string, data: object): Promise<object> {
    const req = new XMLHttpRequest();

    req.open("POST", SERVER + endpoint, true);
    return prepareRequest(req, data);
}