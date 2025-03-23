//import { StrictMode } from 'react'
import React from 'react'; // React import for JSX support
import { createRoot } from 'react-dom/client'
import WebsiteLayout from './WebSiteLayout.jsx';
//import "./index.css";
import "./App.css";
//import "";

const root = createRoot(document.getElementById("root"));
//const reactElement = React.createElement("h1", null, "Hello from createElement");

root.render(
  <div>
    <WebsiteLayout>
     
    </WebsiteLayout>

   
  </div>
);


//createRoot(document.getElementById('root')).render(
//<StrictMode>
//  <App />
//</StrictMode>,
//)
