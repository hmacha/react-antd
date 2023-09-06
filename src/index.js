import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
import reportWebVitals from './reportWebVitals'
// import FormComp from './form'
// import ImageGallery from './imageGallery'
// import SelectIndex from './select'
// import ThemeIndex from './dynamicTheme'
// import App from './App'
// import TableWithSearch from './tableWithSearch'
import Form2 from './form2'
// import CardIndex from './card'

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<CardIndex />)
// root.render(<ImageGallery />)
// root.render(<SelectIndex />)
// root.render(<ThemeIndex />)
// root.render(<App />)
root.render(<Form2 />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
