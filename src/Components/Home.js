import React from 'react'
import { useState } from 'react'
import Button from './Button';
import Header from './Header';
import '../App.css';

export default function Home() {

  const [count, setCount] = useState(0);

  const updateValue = (value) => {
    setCount(count + value)
  };
  return (
    <div className='mainComponent'>
      <Header count={count} />
      <Button updateValue={updateValue} value={1} />
      <Button updateValue={updateValue} value={2} />
      <Button updateValue={updateValue} value={-1} />
      <Button updateValue={updateValue} value={-2} />
    </div>

  )
}
