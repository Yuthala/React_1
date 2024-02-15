//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = (props) => {

  return (
    <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Navbar />
          {/* {<Profile />} */}
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/dialogs' 
                element={<Dialogs
                state={props.state.dialogsPage} />} />
              <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost} />} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>


  );
};





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
