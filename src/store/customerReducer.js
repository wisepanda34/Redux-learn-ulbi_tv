

const defaultState = {
	customers: []
}

//Хорошая практика - заменять типы экшенов на переменные
const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

export const customerReducer = (state = defaultState, action) => {
	switch (action.type) {

		case ADD_CUSTOMER:
			return { ...state, customers: [...state.customers, action.payload] }

		case REMOVE_CUSTOMER:
			return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) }

		default: return state;
	}
}

//объявляем функции экшнкриейтеры, которые потом используем в dispatch 
export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload })