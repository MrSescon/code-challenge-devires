import React from 'react'
import { Form } from './styles'

// type PropTypes = {
//   addTodo(): void;
// }

const form: React.FC = () => {
  	
	const handleChange = () => {
		// setState({
		// 	value: event.target.value
		// });
	}
	
	const handleNewTodoAddition = () => {
		// if(this.input.value !== '') {
		// 	this.props.addTodo(this.input.value);
		// 	this.setState({
		// 		value: ''
		// 	});
		// 	this.input.placeholder = "Add todo here...";
		// }
	}
	
  return (
    
    <Form>
      <input 
        value={''}
        placeholder="Add todos here..."
        autoComplete="off"
        onChange={handleChange}
      />
      <button 
        onClick={handleNewTodoAddition}
      >	
        +
      </button>	
    </Form>
  );
}

export default form;