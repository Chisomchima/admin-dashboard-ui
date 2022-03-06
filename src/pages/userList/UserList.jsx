import React from './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import {MdDeleteOutline} from "react-icons/md"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { rows } from '../../Data';

export default function UserList() {

     const [data, setData] = useState(rows);

     const handleDelete = (id) => {

       setData(data.filter((item) => item.id !== id ));
       
     };

     const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userName', headerName: 'Username', width: 200,  editable: true, renderCell:(params)=>{
          return(
            <div className='userlistuser'>
              <img className="userlistuserimg" src={params.row.avatar} alt=""/>
              {params.row.userName}
            </div>
          )
        }},
     
      
      { field: 'email', headerName: 'Email', width: 150 },
      { field: 'phoneNumber', headerName: 'PhoneNumber', width: 200 },
      {
        field: 'status',
        headerName: 'Status',
        width: 90,
      },
      {
        field: 'transaction',
        headerName: 'Transaction Volume',
        sortable: false,
        width: 180,
      },
      {
        field: 'action',
        headerName: 'Action',
        width: 180,
        renderCell:(params)=>{
          return(
            <>
               <Link to={"/user/" + params.row.id}><button className='usereditbutton'>Edit</button></Link>
               <MdDeleteOutline className='userdeletebutton' onClick={()=> {handleDelete(params.row.id)} } />
            </>
    
          )
        }
      }
    ];

  return (
    <div className='userList'>
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
