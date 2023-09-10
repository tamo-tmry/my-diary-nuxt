import { Axios } from 'axios'

export default defineNuxtConfig(() => {
  return {
    provide: {
      axios: new Axios({
        baseURL: 'http://localhost:3000',
      }),
    },
  }
})
