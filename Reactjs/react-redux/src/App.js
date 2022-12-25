import "./App.css";
import { Provider } from "react-redux";
import store from "./components/store/Store";
import CounterApp from "./components/Counter_app/CounterApp";
function App() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}
export default App;
