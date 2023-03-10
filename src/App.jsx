import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './App.css';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  //состояние для поля input 
  const [num, setNum] = useState('');


  //для изменения глобального состояния нам нужен метод dispatch, который мы получаем внутри компонента с помощью хука useDispatch
  const dispatch = useDispatch()

  //получаем  с пом. useSelector глобальное состояние и необходимые нам поля из глобального хранилища
  const cash = useSelector(state => state.cash)
  const customers = useSelector(state => state.customers.customers)


  const addCash = (num) => {
    console.log()
    dispatch({ type: "ADD_CASH", payload: num })
    setNum('')
  }

  const getCash = (num) => {
    dispatch({ type: "GET_CASH", payload: num })
    setNum('')
  }

  const handleValue = (e) => {
    if (!isNaN(e.target.value)) {
      setNum(Number(e.target.value))
    }
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }

    // dispatch({ type: "ADD_CUSTOMER", payload: customer })
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    // dispatch({ type: "REMOVE_CUSTOMER", payload: customer.id })
    dispatch(removeCustomerAction(customer.id))
  }


  return (
    <div className={"App"}>
      <div className='app_buttons'>
        <button onClick={() => addCash(num)}>ADD CASH</button>
        <button onClick={() => getCash(num)}>GET CASH</button>
        <button onClick={() => addCustomer(prompt())}>ADD CLIENT</button>
        {/* <button onClick={() => removeCustomer()}>GET CLIENT</button> */}
        <input className='app_input' type="text" placeholder='put your cash' value={num} onChange={handleValue} />
        <div className='app_cash'>Balance: {cash.cash} </div>
      </div>
      {
        customers.length > 0 ?
          <div className='app_customers'>
            {customers.map(customer =>
              <div key={customer.id} onClick={() => removeCustomer(customer)}> {customer.name}</div>
            )}
          </div>
          :
          <div className='app_customers'>
            Clients are apsent...
          </div>
      }
    </div >
  );
}

export default App;
