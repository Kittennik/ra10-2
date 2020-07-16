import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, changeServiceCancel } from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
		evt.preventDefault();
		if (item.id) {
      dispatch(addService(item.id, item.name, item.price))
    } else {
      dispatch(addService('', item.name, item.price))
    }
	}

  const handleReset = evt => {
    dispatch(changeServiceCancel());
  }

	return (
		<form onSubmit={handleSubmit} onReset={handleReset}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit'>Save</button>
      {item.id && <button type='reset'>Cancel</button>}
		</form>
	);
}

export default ServiceAdd;
