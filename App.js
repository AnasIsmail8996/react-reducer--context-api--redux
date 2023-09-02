// import React,{ createContext} from 'react';


// import './App.css';





// import React, { createContext } from 'react';
// import './App.css';
// import ComA from './components/Contextapi/ComA';

// const FirstName = createContext();
// const LastName = createContext();

// function App() {
//   return (
//     <div>
//       <FirstName.Provider value={'Anas_ISmail_'}>
//         <LastName.Provider value={'Hasanzai'}>

//         <ComA />

//         </LastName.Provider>
//       </FirstName.Provider>
//     </div>
//   );
// }

// export default App;
// export { FirstName, LastName };

// yaha tak contexapi wala kaam hogaya 



import './App.css'



// import React from 'react';
// // import { BrowserRouter, Route, Routes  } from 'react-router-dom';
// // import Home from './components/Home';
// // import About from './components/About'
// // import Contect from './components/Contect';
// // import Erorr from './components/Erorr';
// // import Main from './components/Main'
// import ReducerTha from './components/useReducer/ReducerTha';

// function App(){
    
    
//     return(
// <ReducerTha/>

//         // <BrowserRouter>
//         // <Routes>

                
//         //     <Route path='/' element={<Main />} >
//         //     <Route  index element={<Home />} />
//         //     <Route path='About' element={<About />  } />
//         //     <Route path='Contect' element={ <Contect />} />
//         //     <Route path= '*' element={<Erorr/> } />
//         //  </Route>
//         // </Routes>
//         // </BrowserRouter>
//     )
// }

// export default App;





/// yaaha se  redux start horah ahin




import React from 'react';
 import {useSelector, useDispatch} from 'react-redux'
import {inNumber, decNumber} from './components/action/index'


function App(){
    const myState = useSelector((state)=> state.changeTheNumber)
    const dispatch =useDispatch()
    return(

<>
<div className='container'>

  <h1>Increment / <span>Decrement</span></h1>
    
    <a href='####'  title='INCREMENT' onClick={()=> dispatch(inNumber())}>
    <span>+</span> 
      </a>

<input  type='text'   value={myState}/>

      <a href='####'  title='DECREMENT' onClick={()=> dispatch(decNumber())}>
    <span> - </span> 
      </a>
      </div>
</>

    )
}

export default App;






