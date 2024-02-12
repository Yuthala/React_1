import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 12},
  {id: 2, message: "It's my first post", likesCount: 11},
  {id: 3, message: "Blabla", likesCount: 6}
];

let dialogsData = [
  {id: 1, name: 'user 1'},
  {id: 2, name: 'user 2'},
  {id: 3, name: 'user 3'},
  {id: 4, name: 'user 4'},
  {id: 5, name: 'user 5'},
  {id: 6, name: 'user 6'}
];

let messagesData = [
  {id: 1, message: "Hi!"},
  {id: 1, message: "How are you?"},
  {id: 1, message: "Yo!"}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
