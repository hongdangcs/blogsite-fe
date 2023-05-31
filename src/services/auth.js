const setAccessTokenCookie = (accessToken, expiresInDays) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expiresInDays);

    const cookieValue = encodeURIComponent(accessToken) + '; expires=' + expirationDate.toUTCString() + '; path=/';
    document.cookie = 'accessToken=' + cookieValue;
    console.log("store "+accessToken+" to cookie.")
};
const getAccessTokenFromCookie = () => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith('accessToken=')) {
            return decodeURIComponent(cookie.substring('accessToken='.length));
        }
    }
    return null;
};