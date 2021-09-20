import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highchart from 'highcharts';

const generateOptions=(data)=>{
    const categories =[];
    return {
        chart :{
            height:500,
        },
        title:{
            text:'Tong ca nhiem',
        },
        xAxis:{
            categories: categories,
            crosshair :true,
        },
        colors :['F35858'],
        yAxis:{
            min :0,
            title :{
                text :null,
            },
            
            tooltip :{
                headerFormat :'<span style="font-size:10px">{point.key}</span><table>',
                pointFormat :
                '<tr><td style="color :{series.color};padding :0">{series.name}:</td>'+
                '<td style="padding :0"><b>{point.y} ca</b></td></tr>',
                footerFormat :'</table>',
                shared : true ,
                useHTML :true,
            },
            plotOptions:{
                column :{
                    pointPadding :0.2,
                    borderWidth:0,
                },
            },
            series :[
                {
                    name :'Tong ca nhiem',
                    data :data.map((item)=>Confirmed),
                },
            ],
        }
    }

}

export const LineChart = (data) => {
    const [options , setOptions] = useState({});
    useEffect (()=>{
        setOptions(generateOptions(data));
    },[data]);
    return (
        <div>
            <HighchartsReact
            Highcharts={Highchart}
            options={{options}}
            />
        </div>
    )
}
