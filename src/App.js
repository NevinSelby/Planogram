import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ChromePicker } from 'react-color'
import createBox from './components/planogrambox'

function App() {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);

  const [color, setColor] = useState("#ffffff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  
  const [bgColor, setBgColor] = useState("#b3b3b3");

  let boxindex = [];
  function planogrambox(i,j){
    let k = i;
    let m = j; 
    console.log("inside planogrambox");
    if(bgColor=="#b3b3b3"){
      setBgColor(color);
      boxindex.push((k+","+m)); 
    }
    else{
      setBgColor("#b3b3b3");
      boxindex.pop((k+","+m));
    }
    
    console.log(boxindex);
  }

  function savePlanogram(){
    let i;
  }

  let content = [];

  const rowcol = () => {
    let content = [];
    console.log("Hello world");
    for (let i = 0 ; i<rows ; i++) {
      for (let j=0;j<cols;j++){
        
        content.push(<div id={i+""+j} onClick={()=>{planogrambox(i, j)}} style={{backgroundColor: bgColor, color: "white", height: "100px", width: "5px", padding:"5px", margin:"10px", display:"inline", alignItems:"left", borderRadius:"6px"}}>{i}, {j}</div>);

      }
      content.push(<div><br/></div>)
    }
    return content;
  };



  return (
    <div className="App" style={{backgroundColor: "#dddddd", height: "100vh"}}>
      <div className="topApp">
        <form>
          <div>
          <br/>
          <label style={{color:"black"}}>Planogram Boxes</label>
          <label style={{color:"black", marginLeft:"40%"}}>Planogram UI</label><br/><br/>
          <label style={{color:"black", marginLeft:"50%"}}>Enter Rows:</label>
          <label style={{color:"black", marginLeft:"15%"}}>Enter Columns:<br/></label>
          </div>
          <div>
          <input style={{color:"black", marginLeft:"50%", display:"inline", borderRadius:"5px"}} type="text" placeholder={rows} id="rows" onChange={(e)=>{setRows(e.target.value)}}/>
          <input style={{color:"black", marginLeft:"9%", display:"inline", borderRadius:"5px"}} type="text" placeholder={cols} id="cols" onChange={(t)=>{setCols(t.target.value)}}/>
          </div>
          <br/>
          <label style={{color:"black", marginLeft:"50%"}}>Name a category:</label>
          <label style={{color:"black", marginLeft:"12%"}}>Box Color:</label>
          <br/>
          <input style={{color:"black", marginLeft:"50%", borderRadius:"5px", display:"inline"}} type="text" id="category" />
        </form>
        {rowcol()}
        <button style={{color:"black", marginLeft:"71%", borderRadius:"5px", display:"inline", backgroundColor:color, height:"30px", width:"100px"}} onClick={()=>setShowColorPicker(showColorPicker => !showColorPicker)}>
          { showColorPicker ? '' : ''}
        </button>
        {showColorPicker && (
        <ChromePicker color={color} onChange={updatedColor => setColor(updatedColor.hex)} style={{marginLeft:"71%", borderRadius:"5px"}}/>
        )}
        <br/>
        <button style={{backgroundColor:"#0066ff", height:"35px", width:"100px", marginLeft:"50%", color:"white"}}>Fix Selection</button>
        <br/><br/>
        <label style={{color:"black", marginLeft:"50%"}}>Enter Planogram Name:</label><br/>
        <input style={{color:"black", marginLeft:"50%", borderRadius:"5px", display:"inline"}} type="text" id="planoName" /><br/><br/>
        <button onClick={()=>{savePlanogram()}} style={{backgroundColor:"#00bfff", height:"40px", width:"150px", marginLeft:"50%", color:"white", borderRadius:"5px"}}>Save Planogram</button>

      </div>
    </div>
  );
}

export default App;
