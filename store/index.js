export const state = () => ({
  user: {}
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  },
  clearData (state) {
    state.user = {}
    state.messages = []
  },
  SOCKET_newMessage (state, message) {
    state.message.push(message)
  }
}
