import React, { Component } from 'react'

class Todolist extends Component {
    state={
        Items:'',
        list:[],
       
        id:Date.now()
    }

change = (event)=>{
    this.setState({Items : event.target.value});
}    

additems =(event) =>{
    // event.preventdefault();
    
    this.setState({
        Items:'',
        list: [...this.state.list , { x: this.state.Items , iscomplete:false}]
    });
    // {Console.log(this.state);}
}

deleteitem=(e)=>{
  const  Array= this.state.list;
  const index= Array.indexOf(e.target.value);
  Array.splice(index, 1);
  this.setState({list : Array});
     
}


    complete = (id) => {
        this.setState({
            list: this.state.list.map((item,index) => index === id ? { ...item, iscomplete  :!item.iscomplete }: item)
            // list: this.state.list.map((item,index)=> index===i?{...item, isComplete:!item.isComplete}: item)
        })
  
    };



    


redertodo =() =>
{
    return (
       this.state.list.map((item, i )=> {
        return (
            <div   key={item}   >
                <span className={item.iscomplete ? "completet" : ""}>  {item.x}</span>   
                <button onClick={this.deleteitem}>delete</button>
                <button 
                onClick={() => this.complete(i)}
                
                >Complete</button>
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

// style={{textDecoration: this.state.list ? "line-through" : "none"}}