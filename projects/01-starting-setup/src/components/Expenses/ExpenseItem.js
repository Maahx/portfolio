import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../Card/Card';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [amount,setAmount] = useState(props.amount);
  const [date, setDate] = useState(props.date);

  const clickHandler = () =>{
    setTitle('updated!');
    setAmount(1000);
    setDate(new Date(1999, 11, 21));
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{title}</h2>
        <div className="expense-item__price">¢{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>);
}

export default ExpenseItem;