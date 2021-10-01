import store from '.';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export interface Contact {
  type?: string
  name?: string
  username?: string
  email?: string
  login: boolean = false
}

export interface Campaign {
  id: string,
  name: string,
  description: string,
  token: string,
  labels: string[],
}

export interface initialState {
  user: contact | null
  campaigns: Campaign[]
}
