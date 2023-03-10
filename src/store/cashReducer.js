


const defaultState = {
	cash: 0
}
//Редюсер - это просто функция, логика которого будет изменять глобальное состояние
//Экшн - это объект, несущий тип, по которому редюсер понимает, какой кейс запустить, и др.данные, которые будут использываться для изменения состояния:  action = { type: "", payload: '?' }
export const cashReducer = (state = defaultState, action) => {
	// console.log('action.payload>>', action.payload);
	switch (action.type) {

		case "ADD_CASH":
			return { ...state, cash: state.cash + action.payload }

		case "GET_CASH":
			return { ...state, cash: state.cash - action.payload }

		default: return state;
	}
}
