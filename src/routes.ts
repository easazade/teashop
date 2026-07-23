export const SEGMENTS = {
  home: '/',
  auth: 'auth',
  login: 'login',
  signup: 'signup',
  shops: 'shops',
} as const

export const ROUTES = {
  home: '/',
  auth: `/${SEGMENTS.auth}`,
  login: `/${SEGMENTS.login}`,
  signup: `/${SEGMENTS.signup}`,
  shops: `/${SEGMENTS.shops}`,
} as const
