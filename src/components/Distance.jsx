import React from 'react';

const Distance = ({value}) => {
    return (
        <div className='form-group col-md-6'>
    		<label>Distance</label>
    		<div className='input-group mb-3'>
    		    <div className='form-control'>{value}</div>
    		    <div className='input-group-append'>
			        <span className='input-group-text'>mille</span>
                </div>
    		</div>
    	</div>
    );
}

export default Distance;
