import { useState, useEffect } from "react";
import React from "react";
import { Table } from "react-bootstrap";

export function Api() {
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [userId, setUser] = useState(null)

  useEffect(() => {
    GetApi();
  }, []);

  function GetApi() {
    fetch("http://localhost:3000/riteshapi", {
      method: "GET",
    }).then((result) => {
      result.json().then((resp) => {
        setData(resp);
        setName(resp[0].name)
        setEmail(resp[0].email)
        setMobile(resp[0].mobile)
        setUser(resp[0].id)
      });
    });
  }
  function DeleteUser(id) {
    fetch(`http://localhost:3000/riteshapi/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        GetApi();
      });
    });
  }
  function SubmitButton() {
    let user = { name, email, mobile };
    fetch("http://localhost:3000/riteshapi", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        GetApi();
      });
    });
  }
  function UpdateButton(id) {
    const datas = {name, email,mobile, userId}
    fetch(`http://localhost:3000/riteshapi/${userId}`, {
      method: "PUT",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(datas)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        GetApi();
      });
    });

  }



  function UpdateUser(id) {
    let update = data[id-1];
        setName(update.name)
        setEmail(update.email)
        setMobile(update.mobile)
        setUser(update.id)
  }


  function RestData(){
    setName("")
    setEmail("")
    setMobile("")
  }
  return (
    <React.Fragment>
      <div className="Datapost">
        <input
          type="text"
          className="name"
          value={name}
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="email"
          value={email}
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="mobile"
          value={mobile}
          placeholder="Phone Number"
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type="button" onClick={SubmitButton}>
          {" "}
          SUBMIT DATA
        </button>
        <button type="button" onClick={UpdateButton}>
          {" "}
          UPDATE DATA
        </button>
        <button type="button" onClick={RestData}>
          {" "}
          REST
        </button>
      </div>

      <div className="Getlist">
        <Table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>MOBILE</th>
            </tr>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>
                  <button type="button" onClick={() => DeleteUser(item.id)}>
                    DELETE
                  </button>
                </td>
                <td>
                  <button type="button" onClick={() => UpdateUser(item.id)}>
                    UPDATE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </React.Fragment>
  );
}
