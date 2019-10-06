import React, { Component } from 'react';
import axios from 'axios';
import './schedule.scss';

class Schedule extends Component {
    state = {
        schedule: []
    }
    
    componentDidMount(){
        this.getSchedule();
    }

    async getSchedule(){
        const { data: { schedule } } = await axios.get('/data/schedule.json');

        this.setState({ schedule });
    }

    render(){
        const { schedule } = this.state;

        if(!schedule.length){
            return null;
        }

        const scheduleElements = schedule.map(({close, day, open, pid}) => {
            return (
                <div className="schedule-row" key={pid}>
                    <div className="day">{day}</div>
                    <div className="time">{open} - {close}</div>
                </div>
            )
        });

        return (
            <div className="schedule">
                <h3>For phone orders, our work schedule is:</h3>
                {scheduleElements}
            </div>
        );
    }
}

export default Schedule;
