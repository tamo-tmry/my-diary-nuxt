import axios from 'axios'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      axios: axios.create({
        baseURL: 'http://localhost:3000',
      }),
    },
  }
})
