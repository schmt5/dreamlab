import { Auth, AUTH_STRATEGIES } from "@8base/auth";

const domain = import.meta.env.VITE_APP_AUTH_DOMAIN;
const clientId = import.meta.env.VITE_APP_AUTH_CLIENT_ID;

const logoutRedirectUri = `${window.location.origin}/logout`;
const redirectUri = `${window.location.origin}/auth/callback`;

export const auth = Auth.createClient(
    {
        strategy: AUTH_STRATEGIES.WEB_8BASE,
        subscribable: true,
    },
    {
        domain,
        clientId,
        redirectUri,
        logoutRedirectUri,
    }
);
