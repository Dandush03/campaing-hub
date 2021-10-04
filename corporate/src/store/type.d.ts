import store from '.';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type CSRF = string | null
export interface Contact {
  type?: string
  name?: string
  username?: string
  email?: string
  picture?: string
  login: boolean = false
}

export interface Campaign {
  id: string,
  name: string,
  description: string,
  token: string,
  labels: string[],
  icon?: string,
  view?: string,
  leads?: number,
  convertion?: number,
}

export interface initialState {
  user: contact | null
  csrf: CSRF
  loading: number
  campaigns: Campaign[]
}
