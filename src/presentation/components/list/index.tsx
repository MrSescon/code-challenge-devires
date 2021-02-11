import React from 'react'
import Todo from '../todo'
import { TodoTypes } from '../../protocols/todo-types'

// type PropTypes = {
//   todos: []
//   remove(): TodoTypes
// }

const list: React.FC= (
		// { todos, remove }: PropTypes
	) => {

	let allTodos = [];
	
	// if(todos.length > 0) {
	// 	allTodos = todos.map(todo => {
	// 		return (<Todo todo={todo} remove={remove} />);
	// 	});
	// } else {
	// 	allTodos.push(<h3 id="acu">All caught up !</h3>);	
	// }
	
	return (
		<div id="list">
			<p id="info"> Your Todos: </p>
			{/* {allTodos} */}
		</div>
	);
};

export default list