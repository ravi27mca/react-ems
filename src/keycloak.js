import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:8181', // key clock server running port
    realm: 'my-app-realm',
    clientId: 'react-client',
});

export default keycloak;