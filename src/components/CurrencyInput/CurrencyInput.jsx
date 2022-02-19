import s from './CurrncyInput.module.css';

const CurrencyInput = props => {
  const { amount, onAmountChange, onCurrencyChange, currencies, currency } =
    props;
  return (
    <div className={s.wrap}>
      <input
        className={s.input}
        type="text"
        value={amount}
        onChange={e => onAmountChange(e.target.value)}
      />

      <select
        className={s.select}
        value={currency}
        onChange={e => onCurrencyChange(e.target.value)}
      >
        {currencies.map(currency => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
