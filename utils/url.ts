const SIGNUP_URL = 'https://app.rediredi.com/pt-BR/signup';

export const getSignupUrl = (search = window.location.search) => {
    const url = new URL(SIGNUP_URL);
    const params = new URLSearchParams(search);

    let hasUtm = false;
    params.forEach((_, key) => {
        if (key.startsWith('utm_')) {
            hasUtm = true;
        }
    });

    if (!hasUtm) {
        params.set('utm_source', 'organic_lp');
    }

    url.search = params.toString();
    return url.toString();
};

export const handleSignupClick = () => {
    window.open(getSignupUrl(), '_blank', 'noopener,noreferrer');
};
