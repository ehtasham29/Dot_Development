import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  // const itemTwoName = "SurfExcel"
  const response = [
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth: "June",
      itemYear: "1980"
    },
    {
      itemName:"SurfExcel",
      itemDate:"26",
      itemMonth: "July",
      itemYear: "1990"
    },
    {
      itemName:"Wheel",
      itemDate:"12",
      itemMonth: "August",
      itemYear: "2000"
    }
  ]
  return (
    <div> 
      {/* <Item name= "Nirma" ></Item>  */}
      <Item name= {response[0].itemName} ></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear} ></ItemDate>
      <Item name= {response[1].itemName} ></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear} ></ItemDate> 
      <Item name= {response[2].itemName}  ></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear} ></ItemDate>      <div className="App">
        Hello Mr. Ehtasham
      </div>
    </div>
  );
}

export default App;
