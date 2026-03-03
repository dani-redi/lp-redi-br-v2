export const handleSignupClick = () => {
    const url = new URL('https://app.rediredi.com/pt-BR/signup');
    const params = new URLSearchParams(window.location.search);

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
    window.open(url.toString(), '_blank');
};
