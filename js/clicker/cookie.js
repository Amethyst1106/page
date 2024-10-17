function set_cookie(key, value){
    jsonData = JSON.stringify(value);
    Cookies.set(key, jsonData, {expires: 365});
}

function get_cookie(key){
    let data = Cookies.get(key);
    return data;
}