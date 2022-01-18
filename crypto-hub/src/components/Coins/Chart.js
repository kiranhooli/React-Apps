import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

const Chart = ({ sparkline, color }) => {
    return (
        <div className="p-5 pt-12 lg:pt-16">
            <Sparklines data={sparkline}>
                <SparklinesLine color={color} />
                <SparklinesSpots style={{ fill: color }} />
            </Sparklines>
        </div>
    )
}

export default Chart
