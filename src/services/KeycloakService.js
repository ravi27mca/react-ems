import _kc from '../keycloak';

const initKeycloak = (onAuthenticatedCallback) => {
    _kc.init({
        onLoad: 'login-required', // This forces the login page to appear
        pkceMethod: 'S256',
        checkLoginIframe: false,
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    })
        .then((authenticated) => {
            if (authenticated) {
                onAuthenticatedCallback();
            } else {
                // If for some reason it fails, force login manually
                _kc.login();
            }
        })
        .catch((error) => {
            console.error("Keycloak initialization failed:", error);
        });
};

const doLogout = () => _kc.logout({ redirectUri: window.location.origin });
const getToken = () => _kc.token;
const isLoggedIn = () => !!_kc.token;
const getUsername = () => _kc.tokenParsed?.preferred_username;

const KeycloakService = {
    initKeycloak,
    doLogout,
    isLoggedIn,
    getToken,
    getUsername,
};

export default KeycloakService;