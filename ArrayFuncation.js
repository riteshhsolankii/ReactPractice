import React from "react";
import {Table} from 'react-bootstrap'

export function Arryfun(){
    const student = [
        {name:"Ritesh", email:"okayritesh@gmail.com", Address:[
            {Hn:"10", city:"Petlawad", State:"M.P."},
            {Hn:"11", city:"Petlawad", State:"M.P."},
            {Hn:"12", city:"Petlawad", State:"M.P."},
            {Hn:"13", city:"Petlawad", State:"M.P."},
        ]},
        {name:"Mayur", email:"mayurrajawat@gmail.com", Address:[
            {Hn:"52", city:"Jamli", State:"M.P."},
            {Hn:"53", city:"Jamli", State:"M.P."},
            {Hn:"54", city:"Jamli", State:"M.P."},
            {Hn:"55", city:"Jamli", State:"M.P."},
        ]},
        {name:"Rakesh", email:"raku4526@gmail.com", Address:[
            {Hn:"15", city:"Raipuriya", State:"M.P."},
            {Hn:"16", city:"Raipuriya", State:"M.P."},
            {Hn:"17", city:"Raipuriya", State:"M.P."},
            {Hn:"18", city:"Raipuriy", State:"M.P."},
        ]},
        {name:"Rites", email:"okayritesh@gmail.com", Address:[
            {Hn:"10", city:"Petlawad", State:"M.P."},
            {Hn:"10", city:"Petlawad", State:"M.P."},
            {Hn:"10", city:"Petlawad", State:"M.P."},
            {Hn:"10", city:"Petlawad", State:"M.P."},
        ]},
    ]
  
    return(
        <div>
            <h1>Students List</h1>
            <Table striped bordered hover variant="dark" responsive>
                <tbody>
                    <tr>
                        <td>S.N.</td>
                        <td>NAME</td>
                        <td>EMAIL</td>
                        <td>ADDRESS</td>
                    </tr>
                    {
                        student.map((datas, i)=>
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{datas.name}</td>
                            <td>{datas.email}</td>
                            <td>
                                <Table striped bordered hover variant="dark" responsive>
                                    <tbody>
                                        {
                                            datas.Address.map((items, i)=>
                                            <tr key={i}>
                                                <td>{items.Hn}</td>
                                                <td>{items.city}</td>
                                                <td>{items.State}</td>
                                            </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
