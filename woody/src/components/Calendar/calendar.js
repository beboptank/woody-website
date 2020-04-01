import React, {Component} from 'react';
import {Link} from 'gatsby';


let googleCalendarUrl = calId =>
    `https://www.googleapis.com/calendar/v3/calendars/${calId}/events`
    + `?singleEvents=true&key=${API_KEY}`;
const API_KEY = '';

class Calendar extends Component {
    constructor() {
        super();
        this.state = {
            events: []
        };
    }

    componentDidMount() {
        fetch('https://www.googleapis.com/auth/calendar.events.readonly')
        .then(response => {
            return response.json();
        })
        .then(events => {
            console.log(events);
        });
    }
}