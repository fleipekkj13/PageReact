
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore'

export default function App() {

  const database = firebase.database();
  const ref = database.ref('/websiteEmails')
  

  return (
    <div className='App'>
      <p></p>
    </div>
    );
}

