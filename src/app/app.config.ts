/*
 * ClientID for initial access
 */
export const CLIENT_ID = 'a99b5660a7ff4ea894e1effa6b431a0c';

/*
 * URL to redirect the user after granting access to Spotify
 */
export const REDIRECT_BACK_TO = 'http://localhost:4200/';

/*
 * URL to bring user's data
 */
export const USER_URL = 'https://api.spotify.com/v1/me';

/*
 * Method to redirect the user into the login access screen
 */
export const LOGIN_URL = (scopes:['user-read-email']) => {

  // Sample taken from http://jsfiddle.net/JMPerez/62wafrm7/
  return [
    'https://accounts.spotify.com/authorize?client_id=',
    CLIENT_ID,
    '&redirect_uri=',
    encodeURIComponent(REDIRECT_BACK_TO),
    '&scope=',
    encodeURIComponent(scopes.join(' ')),
    '&response_type=token'
  ].join("");

};
