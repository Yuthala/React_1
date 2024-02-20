import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state.js';
import { addPost, updatePostText } from "./redux/state.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (_state) => {
	  root.render(
		<React.StrictMode>
		  <App state={_state} addPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)}/>
		</React.StrictMode>
	);
  }

export default rerenderEntireTree;

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
