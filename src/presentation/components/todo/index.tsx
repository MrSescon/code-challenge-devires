import React from 'react';
import { TodoWrapper, RemoveBtn } from './styles';
import { TodoTypes } from '../../protocols/todo-types'


type PropTypes = {
  todo: TodoTypes;
  remove(id: number): TodoTypes;
}

const todo: React.FC<PropTypes> = ( { todo, remove }: PropTypes) => {
	return (
		<TodoWrapper>
			{todo.value}
			<RemoveBtn 
				onClick={()=> {
					remove(todo.id)
				}}>
				x
			</RemoveBtn>
		</TodoWrapper>
	);
};

export default todo;