import { useState } from 'react';
import './quoteBox.css'
import quoteBox from '../quotes.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const QuoteBox = ({changeColor, color}) => { //TODO CREATE TWO PROPS, THE FIRST ONE TO ADD IN THE BUTTON'S ON CLICK IN ORDER TO CHANGE THE BACKGROUND 
                                             //TODO AND THE SECOND ONE TO CHANGE COLOR OF THE BOX


   //TODO CHANGE OF THE QUOTE BY RANDOM WAY
   const random = Math.floor(Math.random() * quoteBox.length)
   const [index, setIndex] = useState(random)
   

   const changeQuote = () => {
      const randomChangeQuote = Math.floor(Math.random() * quoteBox.length)
      setIndex (randomChangeQuote) 

      changeColor()
   }
   return (
      <div className='container-quote'>
         <p style={{color:color}}>
            <span>&lt;</span>{quoteBox[index].quote} <span>/&gt;</span>
         </p>
         <h2 style={{color:color}}>
            {quoteBox[index].author}
         </h2>
         <button onClick={changeQuote} style={{backgroundColor:color}}>
            <FontAwesomeIcon icon={faSearch} />
         </button>
      </div>
   )

};

export default QuoteBox;
