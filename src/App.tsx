import React from 'react';
import logo from './logo.svg';
import img from './img.png';
import './App.css';
import { useEffect } from 'react';
import { getMessagingToken, onMessageListener } from './firebase';
// import webNotification from './assets/js/web-notification';


function App() {
	console.log(process.env.REACT_APP_PUBLIC_URL, 'publicURL');

	//   useEffect(() => {
	//     getMessagingToken();
	//   },[])

	useEffect(() => {
		getMessagingToken();
		const channel = new BroadcastChannel("notifications");
		channel.addEventListener("message", (event) => {
			console.log("Receive background: ", event.data);


        /**
         * go to link web (duplicate...)
         */
        // webNotification.showNotification(
        //     "data.notification.title",
        //     {
        //     body: "data.notification.body",
        //     icon: "https://i.imgur.com/2XBqLsal.jpg",
        //     onClick: function onNotificationClicked() {
        //         // let dataString = data.data.payload;
        //         // var obj = JSON.parse(dataString);
        //         // let link=window.location.origin
        //         window.open("https://www.google.com");

        //     }
        //     // autoClose: 14000 //auto close the notification after 4 seconds (you can manually close it via hide function)
        //     },
        //     function onShow(error, hide) {
        //       if (error) {
        //         window.alert("Unable to show notification: " + error.message);
        //       } else {
        //         setTimeout(function hideNotification() {
        //           console.log("Hiding notification....");
        //           hide(); //manually close the notification (you can skip this if you use the autoClose option)
        //         }, 14000);
        //       }
        //     }
        // );

        console.log('AAAAAAA');

		});
	}, [])

	useEffect(() => {
		onMessageListener().then(data => {
			console.log("Receive foreground: ", data)
		})
	})

	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<img
					// src={logo}
					src={img}
					className="App-logo"
					alt="logo" />
				<p>
					{/* Edit <code>src/App.tsx</code> and save to reload. */}
					branch code
				</p>
				<p>
						code dev
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					FCM
				</a>
			</header>
		</div>
	);
}

export default App;
