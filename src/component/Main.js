import React, { Component } from 'react'
import { Films } from '../Share/Films'
import FilmsPresentation from './FilmsPresentation';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            films: Films
        };
    }
    render() {
        return <FilmsPresentation films={this.state.films} />
    }
}
export default Main
