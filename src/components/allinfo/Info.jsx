import './info.css';
import {MdArrowDownward, MdArrowUpward} from 'react-icons/md';



export default function Info() {
  return (
  <div className='info'>
        <div className='infoitem'>
            <span className='infotitle'>Revenue</span>
            <div className='moneycontainer'>
                <span className='infomoney'>$2,415</span>
                <span className='infomoneyrate'> -11.4 <MdArrowDownward className='icon negative'/></span>
            </div>
            <span className='infosub'> Compared to last month </span>
        </div>

        <div className='infoitem'>
            <span className='infotitle'>Sales</span>
            <div className='moneycontainer'>
                <span className='infomoney'>$4,415</span>
                <span className='infomoneyrate'> -1.4 <MdArrowDownward className='icon negative' /></span>
            </div>
            <span className='infosub'> Compared to last month </span>
        </div>

        <div className='infoitem'>
            <span className='infotitle'>Cost</span>
            <div className='moneycontainer'>
                <span className='infomoney'>$2,415</span>
                <span className='infomoneyrate'> +2.4 <MdArrowUpward className='icon'/></span>
            </div>
            <span className='infosub'> Compared to last month </span>
        </div>

  </div>
  );
}
