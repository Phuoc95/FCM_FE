import { useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/messaging";
import { firebaseConfig } from './constants';

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


export const copyToClipboard = (text: any) => {
  // var dummy = document.createElement("textarea");
  // // to avoid breaking orgain page when copying more words
  // // cant copy when adding below this code
  // // dummy.style.display = 'none'
  // document.body.appendChild(dummy);
  // //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
  // dummy.value = text;
  // dummy.select();
  // document.execCommand("copy");
  // document.body.removeChild(dummy);
}


export const getMessagingToken = async () => {
  // debugger
  let currentToken = "";
  if (!messaging) return;
  try {
    // Web Push certificates: https://prnt.sc/OARpF8vQB5av
    currentToken = await messaging.getToken({
      // vapidKey: process.env.REACT_APP_FIREBASE_FCM_VAPID_KEY,
      // vapidKey: 'BCnamhfY7rvjTs4CDvtr072jKgOOIAtY9h_7rhk4IU5SbOTDQ3ehddBXCyPrDKgBuo7dhxwzFOrt8qByNiODu4c',
      vapidKey: 'BKGk_V4q4oYvwglTnR2N-y5-xRBlMRI3zRRHE-VQQ21nt-1Kzd1M78mIjRik76R0AZEEoDGPzLVOEjWeLdN25Lk',   
    });
    console.log("FCM registration token", currentToken);

    copyContent(currentToken);

    
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