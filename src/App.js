import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />

      <div className='content'>
        <div>
          <img src="https://ya.ru/images/search?source=serp&text=картинка+растущие+овощи&pos=17&rpt=simage&img_url=https%3A%2F%2Fi.sunhome.ru%2Fjournal%2F112%2Fvegetarianstvo-vhodit-v-modu-v2.orig.jpg&lr=10748" alt="main photo"></img>
        </div>

        <div>
          ava + description
        </div>

        <div>
          My posts
          <div>
            New post
          </div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          <div>

          </div>
        </div>

      </div>

    </div>

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
