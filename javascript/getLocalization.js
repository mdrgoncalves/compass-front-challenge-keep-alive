export const getLocalization = async () => {
    const url = 'http://ip-api.com/json'
    let localization = {
        city: '',
        region: ''
    }

    await fetch(url).then((response) => response.json())
        .then((data) => {
            localization.city = data.city;
            localization.region = data.region;
        })
        .catch((error) => {
            throw new Error(error);
        })

    return localization;
}
