// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
function App() {
  const[result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }
  const clear=() => {
    setResult("");
  }
  const backspace = () =>{
    // console.log(result.length)
    setResult(result.slice(0, -1))
  }
  const claculate = () => {
    try{
      setResult(eval(result).toString());
    }
    catch(err){
      setResult("Error")
    }
    setResult(eval(result).toString());

  }
  return (
     <>
      
      <div className="container" >
      
        <div className="left">
        <h1 style={{fontSize: 30}}>Calculator</h1>
        <div className="home_calc">
        <form>
            <input style={{width: 100 }} type="text" value={result} />
          </form>  
          <div className = "keypad">
            <button class= "topthree" onClick={clear} id="clear">AC</button >
            <button class= "topthree" onClick={backspace} id="backspace">+/-</button >
            <button class= "topthree" onClick={handleClick}>%</button >
            <button class="rightSide" name="/" onClick={handleClick}>&divide;</button >
            <button class="common" name="7" onClick={handleClick}>7</button >
            <button class="common" name="8" onClick={handleClick}>8</button >
            <button class="common" name="9" onClick={handleClick}>9</button >
            <button class="rightSide" name="*" onClick={handleClick}>*</button >
            <button class="common" name="4" onClick={handleClick}>4</button >
            <button class="common" name="5" onClick={handleClick}>5</button >
            <button class="common" name="6" onClick={handleClick}>6</button >
            <button class="rightSide" name="-" onClick={handleClick}>-</button >
            <button class="common" name="1" onClick={handleClick}>1</button >
            <button class="common" name="2" onClick={handleClick}>2</button >
            <button class="common" name="3" onClick={handleClick}>3</button >
            <button class="rightSide" name="+" onClick={handleClick}>+</button >
            <button class="common" name="0" onClick={handleClick} id="zero">0</button >
            <button class="common" name="." onClick={handleClick}>.</button >
            <button class="rightSide" name="=" onClick={claculate}>=</button >
          
        </div>
          

  
        </div>
        
        </div>
      </div>
     </>
  );
}

export default App;
