import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Card from "./Card.jsx"
import Student from "./Student.jsx";


function App() {
  const fruits = [{id: 1, name: "apple", calories: 95}, 
                  {id: 2, name: "orange", calories: 45}, 
                  {id: 3, name: "bananananana", calories: 105}, 
                  {id: 4, name: "lubibibibibi", calories: 159}, 
                  {id: 5, name: "pinyayaya", calories: 37}];

  const vegetables = [{id: 6, name: "potito", calories: 110}, 
                  {id: 7, name: "ciliri", calories: 15}, 
                  {id: 8, name: "tomito", calories: 25}, 
                  {id: 9, name: "karat", calories: 63}, 
                  {id: 10, name: "kern", calories: 50}];

  return(
    <>
    <Header/>
    <Card/>
    <Student name="Bowssing" age={25} isStudent={true}/>
    <Student name="Krystal" age={23} isStudent={true}/>
    <Student name="Spongebob" age={30} isStudent={true}/>
    <Student name="Patrick"/>
    {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    <Footer/>
    </>
    );
}

export default App