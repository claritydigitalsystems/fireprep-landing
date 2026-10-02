/** The First Call app. Base URL only: the app has no page at the bare
    domain, so every CTA links to one of the derived routes below. */
export const APP_URL = "https://app.firstcallprep.com";

/** New users: "Start free", "Start practicing free", "Try it free". */
export const APP_SIGNUP_URL = `${APP_URL}/signup`;

/** Returning users: the nav "Sign in" link. */
export const APP_LOGIN_URL = `${APP_URL}/login`;

/** Playbook CTAs. The authored src=playbook survives Attribution's
    decoration (see decorate() in Attribution.tsx), so the app can tell a
    Playbook signup from a cold one. */
export const APP_PLAYBOOK_SIGNUP_URL = `${APP_SIGNUP_URL}?src=playbook`;
