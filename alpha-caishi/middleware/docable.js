export default function({ app, store, error }) {
  return app.$axios.$post(
    '/api/doc_auth',
    {
      pw: store.state.docable
    },
    { baseURL: '/' }
  )
}
