import './newproduct.css';

export default function Newproduct() {
  return(
       <div className='newproduct'>
            <h1 className='newProductTitle'>New Product</h1>
            <form className='newProductForm'>
                <div className='newProductItem'>
                    <label>Image</label>
                    <input type="file" id="file" style={{border:"none"}}/>
                </div>
                <div className='newProductItem'>
                    <label>Name</label>
                    <input type="text" placeholder="skirt" />
                </div>
                
                <div className='newProductItem'>
                    <label>Stock</label>
                    <input type="text" placeholder="123"/>
                </div>
                               
                <div className='newProductItem'>
                    <label>Active</label>
                    <select className='newProductSelect' name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
            <button className='newProductButton'>Create</button>
       </div>
  );
}
