export default function ({ store, error }) {
    const code = store.state.error.statusCode
    const message = store.state.error.message
    if (code !== 0)
      error({ statusCode: code, message: message })
}