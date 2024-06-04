type CounterProps = {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
};

const Counter = ({ count, incrementCount, decrementCount }: CounterProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <h3>{count}</h3>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default Counter;
