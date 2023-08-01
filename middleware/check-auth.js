export default function (context) {
  console.log('[middleware] Check Auth');
  if (process.client) {
    context.store.dispatch('initAuth');
  }
}