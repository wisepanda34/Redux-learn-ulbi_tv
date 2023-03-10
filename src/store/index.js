import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
	cash: cashReducer,
	customers: customerReducer
})

//глобальное хранилище создаем путем вызова функции для его создания, а также добавляем логику (reducer), которая будет изменять состояние, вторым параметром передаем 
//redux-thunk это Middleware, кот. позволяет внутри разных сторонних функций использовать dispatch
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

