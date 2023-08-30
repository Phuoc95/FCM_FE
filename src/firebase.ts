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