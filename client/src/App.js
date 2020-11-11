import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'GTX  Assignment',
      act: 0,
      index: '',
      datas: []
    }
  } 

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;
    let phone = this.refs.phone.value;

    if(this.state.act === 0){   //new
      let data = {
        name, address, phone
      }
      datas.push(data);
    }else{                      //update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
      datas[index].phone = phone;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;
    this.refs.phone.value = data.phone;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="Employee name" className="formField" />
          <input type="text" ref="address" placeholder="Employee email address" className="formField" />
          <input type="text" ref="phone" placeholder="Employee phone number" className="formField" />
        
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              <table className="employee" border="1" style={{textAlign:"center",margin:"0 auto"}}>
                <tr>
                  <th>SL</th>
                  <th>Name of the employee</th>
                  <th>Email of the employee</th>
                  <th>Contact Number</th>
                  <th>Delete</th>
                  <th>Edit</th>

                </tr>
                <tr>
                  <td>{i+1}</td>
                  <td>{data.name}</td>
                  <td>{data.address}</td>
                  <td>{data.phone}</td>
                  <td><button onClick={()=>this.fRemove(i)} className="myListButton">remove </button></td>
                  <td><button onClick={()=>this.fEdit(i)} className="myListButton">edit </button></td>
                </tr>
              </table>
             
              
              
            </li>
          )}
        </pre>
      </div>
    );
  }
}

export default App;