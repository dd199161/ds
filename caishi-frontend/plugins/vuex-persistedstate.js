import createPersistedState from 'vuex-persistedstate'

export default function({ store }) {
  createPersistedState({ paths: ['passwords','GACollection','user', 'pay.bal','pay.currencyList','reposal.nums','reposal.hotEnabled'] })(store)
}