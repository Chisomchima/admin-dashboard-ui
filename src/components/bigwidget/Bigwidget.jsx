import './bigwidget.css';

export default function BigWidget() {
    const Button = ({type}) => {
        return (
            <button className = {"bigbutton " + type} >
              {type}
            </button>
        );
    }

  
    return (
      
        <div className='bigwidget'>
            <h3 className='bigtitle'>Latest transactions</h3>
            <table className='bigtable'>
                <tr className='bigtr'>
                    <th className='bigthead'>
                        Customer
                    </th>
                    <th className='bigthead'>
                        Date
                    </th>
                    <th className='bigthead'>
                        Amount
                    </th>
                    <th className='bigthead'>
                        Status
                    </th>
                </tr>
                <tr className='bigtr'>
                    <td className='bigtd'>
                        <img className='bigprofile' src='../../images/toyface2.jpg' alt='' />
                        <span className='bigprofilename'>John Doe</span>
                    </td>
                    <td className='bigdate'>1 feb 2021</td>
                    <td className='bigamount'>$22</td>
                    <td className='bigstatus'>
                        <Button type ="Approved"/>
                    </td>
                </tr>
                <tr className='bigtr'>
                    <td className='bigtd'>
                        <img className='bigprofile' src='../../images/toyface5.jpg' alt='' />
                        <span className='bigprofilename'>John Doe</span>
                    </td>
                    <td className='bigdate'>1 feb 2021</td>
                    <td className='bigamount'>$22</td>
                    <td className='bigstatus'>
                        <Button type ="Declined"/>
                    </td>
                </tr>
                <tr className='bigtr'>
                    <td className='bigtd'>
                        <img className='bigprofile' src='../../images/toyface1.jpg' alt='' />
                        <span className='bigprofilename'>John Doe</span>
                    </td>
                    <td className='bigdate'>1 feb 2021</td>
                    <td className='bigamount'>$22</td>
                    <td className='bigstatus'>
                        <Button type ="Declined"/>
                    </td>
                </tr>
                <tr className='bigtr'>
                    <td className='bigtd'>
                        <img className='bigprofile' src='../../images/toyface4.jpg' alt='' />
                        <span className='bigprofilename'>John Doe</span>
                    </td>
                    <td className='bigdate'>1 feb 2021</td>
                    <td className='bigamount'>$22</td>
                    <td className='bigstatus'>
                        <Button type ="Pending" />
                    </td>
                </tr>
            </table>
        </div>
      );
}
