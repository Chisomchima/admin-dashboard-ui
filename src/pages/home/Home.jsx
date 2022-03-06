import './home.css';
import Info from '../../components/allinfo/Info';
import Chart from '../../components/chart/Chart';
import { UserData } from '../../Data';
import SmallWidget from '../../components/smallwidget/Smallwidget';
import BigWidget from '../../components/bigwidget/Bigwidget';



export default function Home() {
  return (
    
    <div className='home'>
        <Info />
        <Chart 
          data={UserData}
          title="User Analytics" 
          grid 
          dataKey="Active User"
        />
        <div className='widgets'>
            <SmallWidget />
            <BigWidget />
        </div>

    </div>

  );
}
