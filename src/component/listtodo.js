import React, { Component } from 'react'

class Todolist extends Component {
    state={
        Items:'',
        list:[]
    }

change = (event)=>{
    this.setState({Items : event.target.value});
}    

additems =(event) =>{
    // event.preventdefault();
    
    this.setState({
        Items:'',
        list: [...this.state.list , this.state.Items]
    });
    // {Console.log(this.state);}
}

deleteitem=(e)=>{
  const  Array= this.state.list;
  const index= Array.indexOf(e.target.value);
  Array.splice(index, 1);
  this.setState({list : Array});
     
}

complete=(e)=>{
this.setState(
     
      {item : e.target.value}

);
    
}

redertodo =() =>
{
    return (
       this.state.list.map((item)=> {
        return (
            <div className="newitem"  key={item}  style={{textDecoration: this.state.list ? "line-through" : "none"}} >
                {item} 
                <button onClick={this.deleteitem}>delete</button>
                <button 
                onClick={this.complete}
                
                >complete</button>
            </div>
        )
       }
       ))
}


    render() {
        return (
        <div>
            <div className="todo">
            <div className="todoliste">
             <h1><span className="style">To-Do App!</span></h1>
             <h2>Add New To-Do</h2>
            </div>   
          <div className="input-div" >
          <input className="todoItem"
                 type="text" 
                 placeholder="Enter new task.."              
                value={this.state.Items}
                onChange={this.change} />      
          <button type="submit" 
                  onClick={this.additems} >Add</button>
          </div>
          </div>

        <div> {this.redertodo()}</div>
        </div>
        )
    }
}
export default Todolist