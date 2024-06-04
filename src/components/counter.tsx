type CounterProps = {
  count: number;
  incrementCount: (value: number) => void;
  decrementCount: (value: number) => void;
};

const Counter = ({ count, incrementCount, decrementCount }: CounterProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <h3>{count}</h3>
      <button onClick={() => incrementCount(count + 1)}>Increment</button>
      <button onClick={() => decrementCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
