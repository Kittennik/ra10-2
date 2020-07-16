import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterService } from '../actions/actionCreators';

function ServiceFilter() {
  const item = useSelector(state => state.serviceFilter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const {value} = evt.target;
    dispatch(filterService(value));
  };

  return (
    <div className='filter'>
      <p>Filter</p>
      <input name='value' onChange={handleChange} value={item.value} />
    </div>
  );
}

export default ServiceFilter;
