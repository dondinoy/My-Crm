//____Start__Import____//
import React,{ Component } from 'react';
import './Main.css';

//____End__Import____//

//____Start__Component ____//

//____Start__Component -Content____//
class Main extends Component {
  constructor (props){
    super (props);
    this.state={
    isEdit:false,
    showContact:false,


    editContact:[{
      number:"",
      pic:"",
      name:"",
      lastname:"",
      email:"",
      phone:"",
      bday:"",
      status:""
    }],
    contact:[{
      id:1,
      pic:"",
      name:"Mark",
      lastname:"Otto",
      email:"@mdao",
      phone:"0502896421",
      bday:'20-01-1989',
      status:'Customer'
    },{
      id:2,
      pic:"",
      name:"Ilana",
      lastname:"Daviv",
      email:"@mdo",
      phone:"0527436421",
      bday:'02-04-1965',
      status:'Intersted'
    },
    {
          id:3,
          pic:"",
          name:"Sharon",
          lastname:"Cohen",
          email:"@Cohen",
          phone:"0542892221",
          bday:'18-10-1985',
          status:'Lead'
        }
      ],
    };
  };
  //_______//
    
    onSubmitHandle(event){
    event.preventDefault();
    console.log(this.state.contact)
    let key = this.generateKey(this.state.contact.length)
    
    this.setState({
    contact: [
      ...this.state.contact,
        {
        number: key,
        pic:event.target.add_pic.value,
        name:event.target.add_name.value,
        lastname:event.target.add_last.value,
        email:event.target.add_email.value,
        phone:event.target.add_phone.value,
        bday:event.target.add_bday.value,
        status:event.target.add_status.value
        }
    ]
    });
    event.target.newnumber.value="";
    event.target.newpic.value="";
    event.target.newname.value="";
    event.target.newlast.value="";
    event.target.newemail.value="";
    event.target.newphone.value="";
    event.target.newbday.value="";
    event.target.newstatus.value="";
    this.rowcontact(this.state.contact);
    }
    onShowHandle(){
    if (this.state.showContact === false){
      this.setState({showContact:true});
      document.getElementById("cancelbtn").innerHTML="Cancel";
    }
    else if (this.state.showContact === true){
    this.setState({showContact:false});
    document.getElementById("cancelbtn").innerHTML="Add Contact";
    }
    }
    // create new row
    rowcontact(contact){ 
      contact.map((index) =>{ 
      return(
        this.contact[index].number =index
      );
    })
    }
    //genrating contact ID
    generateKey(key){
      let max = 0;
      this.state.contact.forEach((user) =>{
        // eslint-disable-next-line no-unused-expressions
        user.number > max ? max = user.number : null
      })
      for(let i = 0; i<=max; ++i){
        if(this.state.contact[i].number === i){
          continue
        } else {
          return i
        }
      }
      return key++
    }
    //deleting contact
    onDeleteHandle(){
      this.setState({
      contact: this.state.contact.filter(contact => contact.number !==arguments[0]),
      })
       this.rowcontact(this.state.contact);
    }
    //edit
    onEditHandle(){
      console.log(this.state.contact)
      const contact = this.state.contact.find(contact => contact.number === arguments[0]);
      this.setState({
        isEdit:true,
        editContact:{
        pic:contact.pic,
        name:contact.name,
        lastname:contact.lastname,
        email:contact.email,
        phone:contact.phone,
        bday:contact.bday,
        status:contact.status
    }
    });
     this.state.showContact=false;
     this.onShowHandle(this.state.showContact);
    }
    //update after edit
    onUpdateHandle(event){
      event.preventDefault();
      this.setState({
        isEdit:false, 
        contact:this.state.contact.map(c =>
        {
          if (c.name === this.state.editContact.name){
            c.name= event.target.add_name.value
            // return this.contact.name;
          }
            if (c.lastname === this.state.editContact.lastname){
            c.lastname= event.target.add_last.value
            // return this.contact.lastname;
          }
            if (c.email === this.state.editContact.email){
            c.email= event.target.add_email.value
            // return this.contact.email;
          }
          if (c.phone === this.state.editContact.phone){
            c.phone= event.target.add_phone.value
            // return this.contact.email;
          }
          if (c.bday === this.state.editContact.bday){
            c.bday= event.target.add_bday.value
            // return this.contact.email;
          }
          if (c.status === this.state.editContact.status){
            c.status= event.target.add_status.value
            // return this.contact.email;
          }

          return c;
        })
});
      
    }
  //_____//
    render() {
    return (
      //1-button that shows the the inputs by click
      <article>
        {/* button that calls function that will open the add input */}
        <div className="addContainer">
        <button id="cancelbtn" onClick={this.onShowHandle.bind(this, this.state.showContact )}>Add Contact</button>
        </div>
    {/*2- update form */}
        {this.state.isEdit === true && this.state.showContact ===true &&
        <div className="editContainer">
          <form onSubmit={this.onUpdateHandle.bind(this)}>
          <table className="AddRow">
            <thead>
              <tr id="formholder">
                <td>
                <input type="text" name="add_pic" placeholder="Add pic" id="forminput" defaultValue={this.state.editContact.pic}></input>
                </td>
                <td>
                <input type="text" name="add_name" placeholder="Add Name" id="forminput" defaultValue={this.state.editContact.name}></input>
                </td>
                <td>
                <input type="text" name="add_last" placeholder="Add last Name" id="forminput" defaultValue={this.state.editContact.lastname}></input>
                </td>
                </tr>
                <tr id="formholder">
                <td>
                <input type="text" name="add_email" placeholder="Add Email" id="forminput" defaultValue={this.state.editContact.email}>
                </input>
                </td>
                <td>
                <input type="number" name="add_phone" placeholder="Add Phone" id="forminput"
                defaultValue={this.state.editContact.phone}></input>
                </td>
                <td>
                <input type="date" name="add_bday" placeholder="Add Bday" id="forminput" 
                defaultValue={this.state.editContact.bday}></input>
                </td>
                </tr>
                <tr id="formholder">
                <td>
                <select name="add_status" placeholder="Choose Status" id="selectinput" defaultValue={this.state.editContact.status}>
                <option value="Lead">Lead</option>
                <option value="Interested">Interested</option>
                <option value="Trial">Trial</option>
                <option value="Customer">Customer</option>
                </select>
                </td>
              </tr>
            </thead>
          </table>
          <div id="btn_holder">
            <button className="updateBtn">update</button>
          </div>
          </form>
        </div>
        }
      {/* add form */}
        {!this.state.isEdit  && this.state.showContact ===true &&
        <div className="addContainer">
          <form onSubmit={this.onSubmitHandle.bind(this)}>
          <table className="AddRow">
            <thead>
                <tr id="formholder">
                <td>
                <input type="text" name="add_pic" placeholder="Add pic" id="forminput"></input>
                </td>
                <td>
                <input type="text" name="add_name" placeholder="Add Name" id="forminput"></input>
                </td>
                <td>
                <input type="text" name="add_last" placeholder="Add last Name" id="forminput"></input>
                </td>
                </tr>
                <tr id="formholder">
                <td>
                <input type="text" name="add_email" placeholder="Add Email" id="forminput">
                </input>
                </td>
                <td>
                <input type="number" name="add_phone" placeholder="Add Phone" id="forminput"></input>
                </td>
                <td>
                <input type="date" name="add_bday" placeholder="Add Bday" id="forminput"></input>
                </td>
                </tr>
                <tr id="formholder">
                    <td>
                  <select name="add_status" placeholder="Choose Status" id="selectinput">
                  <option value="Lead">Lead</option>
                  <option value="Interested">Interested</option>
                  <option value="Trial">Trial</option>
                  <option value="Customer">Customer</option>
                  </select>
                  </td>
                </tr>
            </thead>
          </table>
          {/* //button that call function that will add the client */}
          <div id="btn_holder">
            <button className="addBtn">Add</button>
          </div>
          </form>
        </div>
        }
      {/* thecontet of tablet */}
        <div className="crmList">
          <table >
            <thead className="bodyList">
            <tr>
              <th scope="col">#</th>
              <th scope="col">pic</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">email</th>
              <th scope="col">Phone</th>
              <th scope="col">Bday</th>
              <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody className="bodyList">
              {this.state.contact.map((contact,index) =>(
                  <tr className="contactList">
                  <td name="newnumber">{index+1}</td>
                  <td name="newpic">{contact.pic}</td>
                  <td name="newname">{contact.name}</td>
                  <td name="newlast">{contact.lastname}</td>
                  <td name="newemail">{contact.email}</td>
                  <td name="newphone">{contact.phone}</td>
                  <td name="newbday">{contact.bday}</td>
                  <td name="newstatus">{contact.status}</td>
                  <td>
                  <button onClick={this.onEditHandle.bind(this, contact.number) }>Edit</button>
                  <button onClick={()=>this.onDeleteHandle( contact.number) } >Delete</button>
                  </td>
                  </tr>
              ))}
              </tbody>
          </table>
      </div>
    </article>
    )
  };
};
//____End__Component ____

//
//____End__Component -Content____//

//_____export Component_____//
export default Main;