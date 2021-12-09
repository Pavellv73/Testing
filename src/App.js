import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { Controls } from './features/controls/Controls';
import { money, number, setMoney, setNumber } from './features/controls/controlsSlice';
import { Products } from './features/products/Products';
import { payProduct, products } from './features/products/productsSlice';

function App() {
  const moneyCount = useSelector(money);
  const numberProduct = useSelector(number);
  const productsList = useSelector(products);

  const dispatch = useDispatch();

  const [short, setShort] = useState(0);
  const [errorSumm, setErrorSumm] = useState(false);
  const [errorNumber, setErrorNumber] = useState(false);

  function pay(e, refMoney, refNumber) {
    // проверка на правильность суммы
    if (moneyCount === 50 || moneyCount === 100 || moneyCount === 200 || moneyCount === 500) {
      setErrorSumm(false);
    } else {
      setErrorSumm(true);
      return;
    }

    // проверка на правильность номера и совпадение с номером продукта
    if (!!numberProduct) {
      for (let i = 0; i < productsList.length; i++) {
        if (numberProduct === productsList[i].number) {
          setErrorNumber(false);

          if (moneyCount > productsList[i].price) {
            setShort(`Ваша сдача: ${moneyCount - productsList[i].price}р.`);
            dispatch(setMoney(0));
            dispatch(setNumber(0));
            dispatch(payProduct(productsList[i].number));

            // очищаем поля
            refMoney.current.value = '';
            refNumber.current.value = '';

            // очищаем сообщение о сдаче
            setTimeout(() => {
              setShort('');
            }, 3000);
          } else {
            setShort('Недостаточно денег');
          }

          break;
        } else {
          setErrorNumber(true);
        }
      }
    }
  }

  return (
    <div className="App">
      <Products className="App__products" list={productsList} />
      <Controls
        className="App__controls"
        shortChange={short}
        pay={pay}
        errorSumm={errorSumm}
        errorNumber={errorNumber}
      />
    </div>
  );
}

export default App;
