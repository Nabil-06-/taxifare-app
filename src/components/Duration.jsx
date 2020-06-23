import React from 'react';
import Base from '../common/base-common';

const Duration = ({value}) => {
    return (
        <div className='form-group col-md-6'>
            <label>Duration</label>
            <div className='input-group mb-3'>
                <div className='form-control'>{Base.secondsToTime(value)}</div>
            </div>
        </div>
    );
}

export default Duration;
