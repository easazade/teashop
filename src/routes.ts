export const SEGMENTS = {
  home: '/',
  auth: 'auth',
  login: 'login',
  signup: 'signup',
  stores: 'stores',
} as const

export const ROUTES = {
  home: '/',
  auth: `/${SEGMENTS.auth}`,
  login: `/${SEGMENTS.login}`,
  signup: `/${SEGMENTS.signup}`,
  stores: `/${SEGMENTS.stores}`,
} as const
