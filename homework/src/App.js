import React from 'react'
import Sidebar from './sidebar'
import Review from './review'
import SentimentAnalysis from './sentimentAnalysis'
import Average from './average'
import WebsiteVisitor from './websiteVisitor'
import './App.css'

const App = () => {
    return (
        <div className ='gridContainer' >
              
        <Sidebar/> 
        <Review numbers='100'/>
        
        <SentimentAnalysis numbers = '300' number2 = '500' number3 = '900' />
        <Average numbers= '200' />
        <WebsiteVisitor numbers = '1000' /> 
        
        </div>
    )
}
export default App;

// function App() {
//     return (
//       <div>
//         <h1 className = 'greeting'>
//         <Navbar/>
//         <List/>
//         <Welcome fname='Rasheed' lname='Afolabi'/>
  
        
//         </h1>
//       </div>
//     );
//   }
  
//   export default App;