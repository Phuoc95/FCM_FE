import { useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/messaging";
import { firebaseConfig } from './constants';
import axios from 'axios';

// const BASE_URL_API = 'http://127.0.0.1:8085';
// const BASE_URL_API = 'http://52.220.161.34:8081';
const BASE_URL_API = 'https://laravel9xbase.tamkydv.site';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

let messaging: firebase.messaging.Messaging;

if (typeof window !== "undefined") {
  if (firebase.messaging.isSupported()) {
    messaging = firebase.messaging();
  }
}

const copyContent = async (text: any) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}


export const getMessagingToken = async () => {
  // debugger
  let currentToken = "";
  if (!messaging) return;
  try {
      // Web Push certificates: https://prnt.sc/OARpF8vQB5av
      currentToken = await messaging.getToken({
      // vapidKey: 'BCnamhfY7rvjTs4CDvtr072jKgOOIAtY9h_7rhk4IU5SbOTDQ3ehddBXCyPrDKgBuo7dhxwzFOrt8qByNiODu4c',
      vapidKey: 'BKGk_V4q4oYvwglTnR2N-y5-xRBlMRI3zRRHE-VQQ21nt-1Kzd1M78mIjRik76R0AZEEoDGPzLVOEjWeLdN25Lk',   
    });
    console.log("FCM registration token", currentToken);

    
    axios.post(BASE_URL_API + `/api/save-device-token`, {
      'device_token': currentToken,
    })
    .then(res => { 
      console.log(res.data || '', 'ressssssss');
    })
    .catch(error => console.log(error));

    
  } catch (error) {
    console.log("An error occurred while retrieving token aaaa. ", error);
  }
  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });