import Keycloak from "keycloak-js";

/**
 * Keycloak Configuration
 * These values must match your Keycloak Admin Console settings.
 */
const _kc = new Keycloak({
    url: "http://localhost:8181",
    realm: "my-app-realm",
    clientId: "react-client",
});

/**
 * Initializes Keycloak and handles the authentication logic.
 * @param {Function} onAuthenticatedCallback - Function to run after successful login
 */
const initKeycloak = (onAuthenticatedCallback) => {
    _kc.init({
        onLoad: 'login-required', // Forces login page if not authenticated
        pkceMethod: 'S256',       // Security standard for public clients
        checkLoginIframe: false,
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    })
        .then((authenticated) => {
            if (authenticated) {
                console.log("User Authenticated Successfully");
                onAuthenticatedCallback();
            } else {
                console.warn("Authentication failed, redirecting to login...");
                _kc.login();
            }
        })
        .catch((error) => {
            console.error("Keycloak initialization failed:", error);
        });
};

/**
 * Redirects the user to the Keycloak logout page.
 */
const doLogout = () => _kc.logout({ redirectUri: window.location.origin });

/**
 * Retrieves the raw Access Token.
 */
const getToken = () => _kc.token;

/**
 * Checks if the user is currently logged in.
 */
const isLoggedIn = () => !!_kc.token;

/**
 * Gets the raw username (preferred_username).
 */
const getUsername = () => _kc.tokenParsed?.preferred_username;

/**
 * Extracts full user profile details from the decoded token payload.
 */
const getUserInfo = () => {
    return {
        name: _kc.tokenParsed?.name || "Unknown User",
        email: _kc.tokenParsed?.email || "No email provided",
        firstName: _kc.tokenParsed?.given_name,
        lastName: _kc.tokenParsed?.family_name,
        username: _kc.tokenParsed?.preferred_username,
        roles: _kc.realmAccess?.roles || []
    };
};

/**
 * Checks if the user has a specific realm role (e.g., 'admin').
 */
const hasRole = (role) => _kc.hasRealmRole(role);

/**
 * Refreshes the token if it expires within a certain time (minValidity).
 * Default is to refresh if the token expires in less than 70 seconds.
 */
const updateToken = (successCallback) => {
    _kc.updateToken(70)
        .then((refreshed) => {
            if (refreshed) {
                console.debug("Token was successfully refreshed");
            }
            if (successCallback) successCallback();
        })
        .catch(() => {
            console.error("Failed to refresh token, logging out...");
            doLogout();
        });
};

const KeycloakService = {
    initKeycloak,
    doLogout,
    isLoggedIn,
    getToken,
    getUsername,
    getUserInfo,
    hasRole,
    updateToken,
};

export default KeycloakService;