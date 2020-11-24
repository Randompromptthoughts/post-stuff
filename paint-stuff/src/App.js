import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Navi from './Components/Nav/Navi';
import Login from './Components/Login/Login';
// import routes from './routes';
import axios from 'axios';

function App() {
  return (
    <section className="App">
      <Navi />
      <Login />
      {/* {routes} */}
      <Footer />
    </section>
  );
}

axios.interceptors.request.use(
  config => {
    // Only try to add a token header if one is set
    let token = localStorage.getItem("token")
    if (token) {
      return {
        ...config,
        headers: {
          Authorization: token
        }
      };
    }

    return { ...config }
  },
  error => Promise.reject(error)
);



export default App;