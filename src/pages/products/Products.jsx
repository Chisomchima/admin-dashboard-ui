import './products.css';
import { Link } from 'react-router-dom'; 
import Chart from '../../components/chart/Chart';
import { productData } from '../../Data';
import { MdPublish } from 'react-icons/md';

export default function Products() {
  return(
       <div className='products'>
            <div className='productTitleContainer'>
                <h1 className='productTitle'>Product</h1>
                <Link to="/newproduct"><button className='productAddButton'>Create</button></Link>
            </div>
            <div className='productTop'>
                <div className='productTopLeft'>
                    <Chart data={productData} dataKey="Sales" title="Sales performance"/>
                </div>
                <div className='productTopRight'>
                    <div className='productInfoTop'>
                        <img src='../../../images/yellowskirt.jpg' alt='' className='productinfoimg'/>
                        <span className='productName'>Shirts</span>
                    </div>

                    <div className='productInfoBottom'>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>id:</span>
                            <span className='productInfoValue'>123</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>Sales:</span>
                            <span className='productInfoValue'>$123</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>Active:</span>
                            <span className='productInfoValue'>Yes</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>in stock:</span>
                            <span className='productInfoValue'>No</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='productBottom'>
                <form className='productform'>
                    <div className='productformleft'>
                        <label>Product Name</label>
                        <input type="text" placeholder='shirt'/>
                        <label>In Stock</label>
                        <select name='instock' id='idstock'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name='active' id='active'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className='productformright'>
                        <div className='productupload'>
                            <img src='../../../images/yellowskirt.jpg' alt='' className='productuploadimg' />
                            <label for="file">
                                <MdPublish />
                            </label>
                            <input type="file" id="file" style={{display: "none"}}/>
                        </div>
                        <button className='productButton'>Update</button>
                    </div>
                </form>
            </div>
       </div>
  );
}
