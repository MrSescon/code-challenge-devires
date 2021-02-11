import React, { useEffect } from 'react'
import {Form, Title, List, Todo } from '../../components'

const todoList: React.FC = () => {

	const introData = [
		{
			id: -3, 
			value: "Hi! This is a simple todo list app made by REACT <3"
		},
		{
			id: -2,
			value: "Hover over todos and click on `X` to delete them!"
		},
		{
			id: -1,
			value: "Add new todos and come back any time later, I will save them for you!"
		}
	];
	
	// Handler to add todo
	const addTodo = (val: string) => {
		// let id;
		// // if localStorage is available then increase localStorage count
		// // else use global window object's id variable
		// if (typeof(Storage) !== "undefined") {
		// 	id = Number(localStorage.count);
		// 	localStorage.count = Number(localStorage.count) + 1;
		// } else {
		// 	id = window.id++;
		// }
		
		// const todo = { 
		// 	value: val, 
		// 	id: id 
		// };
		
		// this.state.data.push(todo);
		// // update state
		// this.setState({
		// 	data: this.state.data
		// }, () => {
		// 	// update localStorage
		// 	this.updateLocalStorage();
		// });
	}
	// Handler to remove todo
	const removeTodo = (id: number) => {
		// // filter out the todo that has to be removed
		// const list = this.state.data.filter(todo => {
		// 	if (todo.id !== id)
		// 		return todo;
		// });
		// // update state
		// this.setState({
		// 	data: list
		// }, () => {
		// 	// update localStorage
		// 	this.updateLocalStorage();
		// });
	}
	
	useEffect(() => {
		// localStorage.clear();
		// if (typeof(Storage) !== "undefined") {
		// 	if(!localStorage.todos) {
		// 		localStorage.todos = JSON.stringify(this.state.data);
		// 	}
		// 	if(!localStorage.count) {
		// 		localStorage.count = 0;
		// 	}

		// } else {
		// 	 console.log("%cApp will not remember todos created as LocalStorage Is Not Available",
		// 					 "color: hotpink; background: #333; font-size: x-large;font-family: Courier;");
		// 	window.id = 0;
		// }
	}, [])
	
	return (
		<div id="container">
			<Title />
			<Form 
				// addTodo={addTodo} 
			/>
			<List
				// todos={state.data} 
				// remove={removeTodo} 
			/>
		</div>
	);
}

export default todoList;