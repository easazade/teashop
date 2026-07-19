export const LOCATIONS = Object.freeze({
  home: '/',
  auth: 'auth',
  login: 'login',
  signup: 'signup',
  stores: 'stores',
})

export const PATHS = Object.freeze({
  home: '/',
  auth: `/${LOCATIONS.auth}`,
  login: `/${LOCATIONS.login}`,
  signup: `/${LOCATIONS.signup}`,
  stores: `/${LOCATIONS.stores}`,
})
