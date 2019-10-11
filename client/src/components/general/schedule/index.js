import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import actions from '../../../actions'
import './schedule.scss'


class Schedule extends React.Component{
    componentDidMount(){
        this.props.getSchedule()
    }
    
    render(){
        const tableRow = this.props.scheduleList.map((daily,index) => {
            return (
            <tr key={index} >
                <td className="day">{daily.day}</td>
                <td className="hours">{daily.open} - {daily.close}</td>
            </tr>
        )})
        return(
            <div>
                <p>For phone orders, our work schedule is:</p>
                <table>
                    <tbody>
                        {tableRow}
                    </tbody>
                </table>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        scheduleList: state.schedule.scheduleList
    }
}
function mapDispatchToProps(dispatch){
    return {
        getSchedule: () => dispatch(actions.getSchedule())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)