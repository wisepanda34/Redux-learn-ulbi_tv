import { legacy_createStore as createStore, combineReducers } from 'redux';
import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
	cash: cashReducer,
	customers: customerReducer
})

//глобальное хранилище создаем путем вызова функции для его создания, а также добавляем логику (reducer), которая будет изменять состояние, вторым параметром передаем 
export const store = createStore(rootReducer);

