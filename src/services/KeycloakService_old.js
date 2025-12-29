import _kc from '../keycloak';

const initKeycloak = (onAuthenticatedCallback) => {
    _kc.init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        pkceMethod: 'S256',
        checkLoginIframe: false
    })
        .then((authenticated) => {
            onAuthenticatedCallback();
        })
        .catch((error) => {
            console.error("Keycloak initialization failed:", error);
        });
};

const doLogin = _kc.login;
const doLogout = () => _kc.logout({ redirectUri: window.location.origin });
const getToken = () => _kc.token;
const isLoggedIn = () => !!_kc.token;
const getUsername = () => _kc.tokenParsed?.preferred_username;

const KeycloakService = {
    initKeycloak,
    doLogin,
    doLogout,
    isLoggedIn,
    getToken,
    getUsername,
};

export default KeycloakService;