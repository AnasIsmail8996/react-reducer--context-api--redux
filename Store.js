import { createStore } from 'redux';

import rootReduccer from './components/reducer';

const store = createStore(rootReduccer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;






