import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import * as firebase from "firebase";
import "firebase/firestore";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCFq0oTRcrH5lo_TbrGoJ2h0VE9pwx7ETQ",
  authDomain: "gamecollection-c00a4.firebaseapp.com",
  databaseURL: "https://gamecollection-c00a4.firebaseio.com",
  projectId: "gamecollection-c00a4",
  storageBucket: "gamecollection-c00a4.appspot.com",
  messagingSenderId: "1069246973374",
};
firebase.initializeApp(config);

// This prevents a warning message for changes to firestore timestamp syntax in the console
// Firestore is still in Beta - in the future this won't be necessary
const firestore = firebase.firestore();
const settings = {};
firestore.settings(settings);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
