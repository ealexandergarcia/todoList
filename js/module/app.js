export const getAllTask = async () => {
    const url = 'https://6677385c145714a1bd742329.mockapi.io/task';
    const options = {
        method: 'GET'
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}