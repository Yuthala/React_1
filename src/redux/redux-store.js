import React from 'react';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

// let rootReducer = combineReducers({
// 	profileReducer,
// 	dialogsReducer,
// 	sidebarReducer
// });

let store = configureStore({
	reducer: {
		profileReducer,
		dialogsReducer,
		sidebarReducer
	},
});

export default store;


