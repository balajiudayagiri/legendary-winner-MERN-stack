import "./App.css";
import { Provider } from "react-redux";
import FakeStore from "./componentForRedux/fakeStore/FakeStore";
import { store } from "./componentForRedux/store/store";
function App() {
  return (
    <Provider store={store}>
      <FakeStore />
    </Provider>
  );
}
export default App;
