import React, { Component } from "react";

import "./MainCrm.css";

class MainCrm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            isAdd: false,
            editUser: {
                first_name: "",
                last_name: "",
                phone_number: "",
                email: "",
                birth_date: "",
                status: "",
                profile_pic: "",
            },
            users: [
                {
                    ID: 1,
                    first_name: "Jhon",
                    last_name: "Roman",
                    email: "jhon.yong@melivecode.com",
                    profile_pic: "https://www.melivecode.com/users/1.png",
                    phone_number: "978-452-1103",
                    birth_date: "02/14/1967",
                    status:"Lead"
                },
                {
                    ID: 2,
                    first_name: "Noga",
                    last_name: "Cal",
                    email: "noga.cal@melivecode.com",
                    profile_pic: "https://www.melivecode.com/users/2.png",
                    phone_number: "978-452-1103",
                    birth_date: "09/17/1995",
                    status:"Lead"
                },
            ],
        };
    }

    onSubmitHandle(event) {
        event.preventDefault();

        this.setState({
            isAdd: false,
            users: [
                ...this.state.users,
                {
                    first_name: event.target.first_name.value,
                    last_name: event.target.last_name.value,
                    phone_number: event.target.phone_number.value,
                    email: event.target.email.value,
                    birth_date: event.target.birth_date.value,
                    status: event.target.status.value,
                    profile_pic: event.target.profile_pic.value,
                },
            ],
        });

        event.target.first_name.value = "";
        event.target.last_name.value = "";
        event.target.phone_number.value = "";
        event.target.email.value = "";
        event.target.birth_date.value = "";
        event.target.status.value = "";
        event.target.profile_pic.value = "";
    }

    onDeleteHandle() {

        let confirmAction = window.confirm("Are you sure to execute this action?");
        if (confirmAction) {
            this.setState({
                users: this.state.users.filter((user) => user.ID !== arguments[0]),
            });
            alert("Action successfully executed");
        } else {
            alert("Action canceled");
        }
    }

    onEditHandle() {
        const user = this.state.users.find((user) => user.ID === arguments[0]);

        this.setState({
            isAdd: false,
            isEdit: true,
            editUser: {
                ID: user.ID,
                first_name: user.first_name,
                last_name: user.last_name,
                phone_number: user.phone_number,
                email: user.email,
                birth_date: user.birth_date,
                status: user.status,
                profile_pic: user.profile_pic,
            },
        });
    }

    onAddHandle() {
        this.setState({
            isAdd: true,
            isEdit: false
        })
    }

    onCancelHandle() {
        this.setState({
            isAdd: false
        })
    }



    onUpdateHandle(event) {
        event.preventDefault();

        this.setState({
            isEdit: false,
            users: this.state.users.map((user) => {
                if (user.ID === this.state.editUser.ID) {
                    user.first_name = event.target.first_name.value;
                    user.last_name = event.target.last_name.value;
                    user.phone_number = event.target.phone_number.value;
                    user.email = event.target.email.value;
                    user.birth_date = event.target.birth_date.value;
                    user.status = event.target.status.value;
                    user.profile_pic = event.target.profile_pic.value;
                    return user;
                }
                return user;
            }),
        });
    }

    render() {
        return (
          <div className="main_holder">
            <article>
              <div className="main_holder">
                <button className="btn btn-primary m-2" id="add_btn" onClick={this.onAddHandle.bind(this)}>Add Contact</button>
                </div>
                {/* EDIT NEW user */}
                {this.state.isEdit === true && (
                    <div className="user_edit ">
                        <form onSubmit={this.onUpdateHandle.bind(this)}>
                          <div>
                            <input
                                type="url"
                                name="profile_pic"
                                defaultValue={this.state.editUser.profile_pic}
                            ></input>
                            <input
                                type="text"
                                name="first_name"
                                defaultValue={this.state.editUser.first_name}
                            ></input>
                            <input
                                type="text"
                                name="last_name"
                                defaultValue={this.state.editUser.last_name}
                            ></input>
                          </div>
                          <div>
                            <input
                                type="phone"
                                name="phone_number"
                                defaultValue={this.state.editUser.phone_number}
                            ></input>
                            <input
                                type="email"
                                name="email"
                                defaultValue={this.state.editUser.email}
                            ></input>
                            <input
                                type="date"
                                name="birth_date"
                                defaultValue={this.state.editUser.birth_date}
                            ></input>
                          </div>
                          <div>
                            <select
                                name="status"
                                id="status"
                                defaultValue={this.state.editUser.status}
                            >
                                <option value="Lead">Lead</option>
                                <option value="Interested">Interested</option>
                                <option value="Trial">Trial</option>
                                <option value="Custiomer">Custiomer</option>
                            </select>
                            <button className="btn btn-success m-2" id="btn">Update</button>
                            <button onClick={this.onCancelHandle.bind(this)}  id="btn" className="cancle_btn btn btn-danger">Cancel</button>
                          </div>
                        </form>
                    </div>
                )}

                {/* ADD NEW USER */}
                {this.state.isAdd && (

                    <div className="user_add ">
                        <form onSubmit={this.onSubmitHandle.bind(this)}>
                          <div>
                            <input
                                type="url"
                                name="profile_pic"
                                placeholder="Profile Pic URL"
                            ></input>
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                            ></input>
                            <input
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                            ></input>
                          </div>
                          <div>
                            <input
                                type="phone"
                                name="phone_number"
                                placeholder="Phone Number"
                            ></input>
                            <input
                              type="email" name="email" placeholder="Email">
                            </input>
                            <input
                                type="date"
                                name="birth_date"
                                placeholder="Birth Date"
                            ></input>
                          </div>
                          <div>
                            <select name="status" id="status">
                                <option value="Lead">Lead</option>
                                <option value="Interested">Interested</option>
                                <option value="Trial">Trial</option>
                                <option value="Custiomer">Custiomer</option>
                            </select>
                            <button className="btn btn-success m-2"  id="btn">Submit</button>
                            <button onClick={this.onCancelHandle.bind(this)}  id="btn" className="cancle_btn btn btn-danger">Cancel</button>
                            </div>
                        </form>
                    </div>
                )}

                <table className="user_list ">
                    <tr className="border border-2 ">
                        <th>#</th>
                        <th>Avatar</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Phone number</th>
                        <th>Email</th>
                        <th>Birth date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>

                    {this.state.users.map((user, index) => (
                        <tr className="user_item border border-2 ">
                            <td className="ID">&nbsp;{(user.ID = index += 1)}</td>
                            <td className="profile_pic">
                                <img src={user.profile_pic} alt="avatar" height="50px" />
                            </td>
                            <td className="first_name">{user.first_name}</td>
                            <td className="last_name">{user.last_name}</td>
                            <td className="phone_number">{user.phone_number}</td>
                            <td className="email">{user.email}</td>
                            <td className="birth_date">{user.birth_date}</td>
                            <td className="status">{user.status}</td>
                            <td className="user_actions">
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={this.onDeleteHandle.bind(this, user.ID)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={this.onEditHandle.bind(this, user.ID)}
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    )) 
                    }
                </table>
            </article>
          </div>
            
        );
    }
}

export default MainCrm;

