"use client";
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'; // Adjust the path to match your setup

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
