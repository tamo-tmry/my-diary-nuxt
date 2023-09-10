import { Axios } from 'axios'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      axios: new Axios({
        baseURL: 'http://localhost:3000',
      }),
    },
  }
})
