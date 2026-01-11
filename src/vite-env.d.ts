/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HERCULES_OIDC_AUTHORITY: string;
  readonly VITE_HERCULES_OIDC_CLIENT_ID: string;
  readonly VITE_HERCULES_OIDC_PROMPT: string;
  readonly VITE_HERCULES_OIDC_RESPONSE_TYPE: string;
  readonly VITE_HERCULES_OIDC_SCOPE: string;
  readonly VITE_HERCULES_OIDC_REDIRECT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
