import React, { PropTypes } from 'react';
import SubscribeForm from '../components/SubscribeForm';

class Screewear extends React.Component {
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <SubscribeForm/>
                <img style={{ width: '100%' }} src={require('../images/index_fixed.gif')}/>
            </div>
        );
    }
}

export default Screewear;
