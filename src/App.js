import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from './Login';
import { OnlinePLayers } from './Lobby';
import { io } from "socket.io-client";


const App = () => {
	const socket = io.connect("http://localhost:4000");

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



