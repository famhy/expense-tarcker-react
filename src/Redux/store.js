import {createStore} from 'redux'

import transaction from './reducers/transaction'

const store =createStore(transaction,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store