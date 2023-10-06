export function getWikipediaMobileUrl(url: string){
    return (url !== undefined) ? url.replace('wikipedia','m.wikipedia') : ''
}
export function getValues(param: string){
    return (param !== undefined) ? param : ''
}
export function checkYear(year: string){
    const current = new Date().getFullYear();
    return (isNaN(+year) || +year < 1950 || +year > current) ? String(current) : year;
}

export function roundCheck(round: number){
    return (round >= 100) ? 1 : round;
}
export function isEmpty(param: string){
    return (!param || param.length === 0);
}

export function pagination(limit: number, page: number){
    let filter = 'limit=1000';
    if (limit !== -1)
        filter = `limit=${limit}&offset=${((page - 1) * limit)}`;
    return filter;
}