import React,{ Component } from 'react';
import './MainCrm.css';


class MainContent extends Component  {
  constructor (props){
    super (props);
    this.state= {
    isEdit:false,
    isAdd:false,

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
      number:0,
      pic:"",
      name:"Mark",
      lastname:"Otto",
      email:"@mdao",
      phone:"0502896421",
      bday:'1989-01-20',
      status:'Customer'
    },{
      number:1,
      pic:"",
      name:"Ilana",
      lastname:"Daviv",
      email:"@mdo",
      phone:"0527436421",
      bday:'1965-04-02',
      status:'Intersted'
    },
    {
      number:2,
      pic:"",
      name:"Sharon",
      lastname:"Cohen",
      email:"@Cohen",
      phone:"0542892221",
      bday:'1085-10-18',
      status:'Lead'
    }
  ]};
  };

  render(){
    return (
   <div className="container">
    {/* Addc Control */}
      <div>
        <button className="btn btn-primary m-2" id="addcontact" onClick={this.AddContactHandle.bind(this)}>Add Contact</button>
      </div>
    {/* /////// */}

    {/* Edit Mode */}

    {this.state.isEdit === true && (
    <div className="edit_form">
    <div className="col-md-12">
      <div className="card contant-form">
        <div className="card-header">
          <h4 className="card-title">Update Contact</h4>
        </div>
        <div className="card-body">
          <form onSubmit={this.onEditHandle.bind(this)}>
            <div className="row">
              <div className="col-md-5 pr-1">
                  {/* Edit Mode */}
                <div className="form-group">
                  <label>Picture</label>
                  <input type="file" className="form-control" placeholder="Picture" value={this.state.editContact.pic} onChange={this.onPicChange} />
                  <label>Name</label>
                  <input type="text" className="form-control" placeholder="Name" value={this.state.editContact.name} onChange={this.onNameChange} />
                  <label>Last Name</label>
                  <input type="text" className="form-control" placeholder="Last Name" value={this.state.editContact.lastname} onChange={this.onLastNameChange} />
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Email" value={this.state.editContact.email} onChange={this.onEmailChange} />
                  <label>Phone</label>
                  <input type="text" className="form-control" placeholder="Phone" value={this.state.editContact.phone} onChange={this.onPhoneChange} />
                  <label>Birthday</label>
                  <input type="date" className="form-control" placeholder="Birthday" value={this.state.editContact.bday} onChange={this.onBdayChange} />
                  <label>Status</label>
                  <select className="form-control" value={this.state.editContact.status} onChange={this.onStatusChange}>
                    <option>Customer</option>
                    <option>Intersted</option>
                    <option>Lead</option>
                  </select>

                </div>
              </div>
            </div>
            {/* <button type="submit" className="btn btn-primary btn-fill pull-right" onClick={this.onAddHandle}>Add</button> */}
            <button type="submit" className="btn btn-primary btn-fill pull-right" onClick={this.onSaveHandle}>Update</button>
          </form>
        </div>
        </div>
    </div>
    </div>
    )} 
    
    {/* /////// */}

    {/* Add Mode */}
    {this.state.isAdd &&( 
    <div className="add_form">
    <div className="col-md-12">
      <div className="card contant-form">
        <div className="card-header">
          <h4 className="card-title">Add Contact</h4>
        </div>
        <div className="card-body">
          <form onSubmit={this.onAddHandle.bind(this)}>
            <div className="row">
              <div className="col-md-5 pr-1">
                <div className="form-group">
                  <label>Picture</label>
                  <input type="file" className="form-control" placeholder="Picture" />
                  <label>Name</label>
                  <input type="text" className="form-control" placeholder="Name" />
                  <label>Last Name</label>
                  <input type="text" className="form-control" placeholder="Last Name" />
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Email" />
                  <label>Phone</label>
                  <input type="text" className="form-control" placeholder="Phone" />
                  <label>Birthday</label>
                  <input type="date" className="form-control" placeholder="Birthday"  />
                  <label>Status</label>
                  <select className="form-control">
                    <option>Customer</option>
                    <option>Intersted</option>
                    <option>Lead</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-fill pull-right" onClick={this.onSaveHandle}>Add</button>
            </form>
        </div>
        </div>
    </div>
    </div>
    )}

    {/* /////// */}

    {/* Default Mode */}
    <div className="contac_List">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Contact List</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead className=" text-primary">
                  <tr>
                    <th>
                      Picture
                    </th>
                    <th>
                      Name
                    </th>
                    <th>
                      Last Name
                    </th>
                    <th>
                      Email
                    </th>
                    <th>
                      Phone
                    </th>
                    <th>
                      Birthday
                    </th>
                    <th>
                      Status
                    </th>
                    <th>
                      Action
                    </th>
                  </tr>
                </thead>
<tbody>
  {this.state.contact.map((contact) => (
    <tr key={contact.number}>
      <td>
        <img src={contact.pic} alt="pic" className="pic"></img>
      </td>
      <td>
        {contact.name}
      </td>
      <td>
        {contact.lastname}
      </td>
      <td>
        {contact.email}
      </td>
      <td>
        {contact.phone}
      </td>
      <td>
        {contact.bday}
      </td>
      <td>
        {contact.status}
      </td>
      <td>
        <button className="btn btn-primary" onClick={this.onEditHandle.bind(this,contact.number)}>Edit</button>
        <button className="btn btn-danger" onClick={this.onDeleteHandle.bind(this,contact.number)}>Delete</button>
      </td>
    </tr>
  ))}
      </tbody>          
    </table>
  </div>
</div>
</div>
</div>
    </div>
    {/* /////// */}
</div>
    );
  }

  onPicChange = (e) => {
    this.setState({editContact:{...this.state.editContact,pic:e.target.value}});
  }

  onNameChange = (e) => {
    this.setState({editContact:{...this.state.editContact,name:e.target.value}});
  }

  onLastNameChange = (e) => {
    this.setState({editContact:{...this.state.editContact,lastname:e.target.value}});
  }

  onEmailChange = (e) => {
    this.setState({editContact:{...this.state.editContact,email:e.target.value}});
  }

  onPhoneChange = (e) => {
    this.setState({editContact:{...this.state.editContact,phone:e.target.value}});
  }

  onBdayChange = (e) => {
    this.setState({editContact:{...this.state.editContact,bday:e.target.value}});
  }

  onStatusChange = (e) => {
    this.setState({editContact:{...this.state.editContact,status:e.target.value}});
  }

  AddContactHandle() {
        this.setState({
            isAdd: true,
            isEdit: false
    })
  }

  onAddHandle = (e) => {
    e.preventDefault();
    if(this.state.isEdit){
      this.setState({isEdit:false});
    }else{
      this.setState({contact:[...this.state.contact,this.state.editContact]});
    }
    this.setState({isAdd:true});
  }


  onEditHandle = (number) => {
    this.setState({isEdit:true});
    this.setState({isAdd:false});
    this.setState({editContact:this.state.contact[number]});
  }


  onDeleteHandle = (number) => {
    this.setState({contact:this.state.contact.filter((contact) => contact.number !== number)});
  }


  onSaveHandle = (e) => {
    e.preventDefault();
    if(this.state.isEdit){
      this.setState({contact:this.state.contact.map((contact) => {
        if(contact.number === this.state.editContact.number){
          contact = this.state.editContact;
        }
        return contact;
      })});
    }else{
      this.setState({contact:[...this.state.contact,this.state.editContact]});
    }
    this.setState({isEdit:false});
    this.setState({isAdd:false});
    this.setState({editContact:{
      number:0,
      pic:"",
      name:"",
      lastname:"",
      email:"", 
      phone:"",
      bday:"",
      status:""
    }});
  }

}

export default MainContent;
