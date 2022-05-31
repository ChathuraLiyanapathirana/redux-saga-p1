import React from 'react';
import './style.css';

export default function App() {
  const [data, setData] = React.useState([]);

  const fibonacciSec = () => {
    const fibonacciNum = 10;
    let num1 = 0,
      num2 = 1,
      next,
      tempArray = [];

    let i = 0;
    while (i < fibonacciNum) {
      next = num1 + num2;
      num1 = num2;
      num2 = next;
      tempArray.push(num1);
      i++;
    }
    setData(tempArray);
  };

  React.useEffect(() => {
    fibonacciSec();
    console.log('----');
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {data.map((value) => {
        return <p>{value}</p>;
      })}
    </div>
  );
}
