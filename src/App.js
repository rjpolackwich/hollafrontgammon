import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Lobby } from './components/Lobby';
//👇🏻 React Toastify configuration
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//👇🏻 Websockets configuration
import { io } from "socket.io-client";


const App = () => {
	const socket = io.connect("http://127.0.0.1:4000");

	return (
		<> 
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login socket={socket} />} />
					<Route path='/register' element={<Register socket={socket} />} />
					<Route path='/lobby' element={<Lobby socket={socket} />} />

				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;



