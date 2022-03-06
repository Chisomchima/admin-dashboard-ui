import './productList.css';
import { DataGrid } from '@mui/x-data-grid';
import {MdDeleteOutline} from "react-icons/md"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { productRows } from '../../Data';

export default function ProductList() {
    const [data, setData] = useState(productRows);
    const handleDelete = (id) => {

        setData(data.filter((item) => item.id !== id ));
        
      };
 
      const columns = [
       { field: 'id', headerName: 'ID', width: 70 },
         { field: 'product', headerName: 'Product', width: 200,  editable: true, renderCell:(params)=>{
           return(
             <div className='productlistuser'>
               <img className="productlistuserimg" src={params.row.img} alt=""/>
               {params.row.name}
             </div>
           )
         }},
      
       
       { field: 'stock', headerName: 'Stock', width: 150 },
      
       {
         field: 'status',
         headerName: 'Status',
         width: 90,
       },
       {
         field: 'price',
         headerName: 'Price',
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
                <Link to={"/products/" + params.row.id}><button className='producteditbutton'>Edit</button></Link>
                <MdDeleteOutline className='productdeletebutton' onClick={()=> {handleDelete(params.row.id)} } />
             </>
     
           )
         }
       }
     ];
 
  return (
  <div className='productsList'>
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
