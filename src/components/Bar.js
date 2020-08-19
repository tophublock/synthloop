import React, { Component } from 'react';
import Pad from './Pad.js';
import * as CONST from '../constants.js';

class Bar extends Component {
    render() {
        const pads = [];
        for (let i = 0; i < CONST.NUM_PADS_PER_BAR; i++) {
            pads.push((
                <Pad key={i}></Pad>
            ));
        }

        // TODO add pad-active class if pad is active
        return (
            <div className="bar">
                I am a bar
                {pads}
            </div>
        );
    }
}

export default Bar;
