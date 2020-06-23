import React from 'react';

const Price = ({value}) => {
    return (
        <div className='form-group col-md-6'>
    		<label>Price</label>
    		<div className='input-group mb-3'>
    		    <div className='form-control'>{value}</div>
    		    <div className='input-group-append'>
			        <span className='input-group-text'>euro</span>
                </div>
    		</div>
    	</div>
    );
}

export default Price;
