import { createStore } from 'redux'
import reducer from './reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  },
  persistedReducer = persistReducer(persistConfig, reducer),
  store = createStore(persistedReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
  persistor = persistStore(store)

export {
  store,
  persistor
}
