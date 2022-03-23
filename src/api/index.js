const baseurl = "https://api.coingecko.com/api/v3/";
export const getExchanges = async (perPage, page) => {
    const res = await fetch(baseurl + "exchanges?per_page=" + perPage + "&page=" + page);
    return res.json();
}

export const getExchange = async (id) => {
    const res = await fetch(baseurl + "exchanges/" + id);
    return res.json();
}