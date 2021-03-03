import { configureStore } from '@reduxjs/toolkit'

import reduxThunk from 'redux-thunk';
import { rootReducer } from './reducers'

export function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(reduxThunk),
    preloadedState,
    enhancers: []
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}