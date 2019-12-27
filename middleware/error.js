export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (store.state.error.error) {
      return redirect('/error')
    }
  }