import store, { increment, decrement, reset } from "./store";

const resultElem = document.querySelector(".counter__result");
const decrementBtn = document.querySelector('[data-action = "decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resettBtn = document.querySelector('[data-action="reset"const ]');

const onIncrement = () => {
  store.dispatch(increment())
}
const onDecrement = () => {
  store.dispatch(decrement())
}

const reset = () => {
  store.dispatch(reset())
}

incrementBtn.addEventListener('click', onIncrement)
decrementBtn.addEventListener('click', onDecrement)
resettBtn.addEventListener('click', reset)



store.subscribe(() => {
  state = store.getState();
  const currentValue = state.history.reduce((acc, item) => acc + +item, 0)
  const historyString = state.history.join(' ');
  resultElem.textContent = history.length === 0
    ? ''
    : `${historyString} = ${currentValue}`;
})