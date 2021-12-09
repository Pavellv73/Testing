import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import './Controls.scss';
import { setMoney, setNumber } from './controlsSlice';

export const Controls = ({ className, shortChange, pay, errorSumm, errorNumber }) => {
  const dispatch = useDispatch();

  const money = useRef('');
  const number = useRef('');

  return (
    <div className={`${className} controls`}>
      <div className="controls__money">
        <span className="controls__money--label">Сумма</span>
        <input
          name="money"
          placeholder="Введите сумму"
          type="number"
          className={`controls__money--input ${errorSumm ? 'error' : ''}`}
          onChange={(e) => dispatch(setMoney(e.target.value))}
          ref={money}
        />
        <span className="controls__money--description">
          Доступные банкноты: 50, 100, 200 или 500 ₽. Автомат выдает сдачу монетами достоинством 1, 2, 5 и 10 ₽.
        </span>
      </div>

      <div className="controls__select">
        <span className="controls__select--label">Введите номер товара</span>
        <input
          name="number"
          placeholder="A11"
          type="text"
          className={`controls__select--input ${errorNumber ? 'error' : ''}`}
          onChange={(e) => dispatch(setNumber(e.target.value))}
          ref={number}
        />
      </div>

      <button className="controls__pay" onClick={(e) => pay(e, money, number)}>
        Купить
      </button>

      {!!shortChange && <span className="controls__short">{shortChange}</span>}
    </div>
  );
};
