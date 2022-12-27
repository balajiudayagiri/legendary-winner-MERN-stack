// import "./App.css";
import Cart from "./PracticeComponent/Cart/Cart";
import Layout from "./PracticeComponent/Layout/Layout";
import Products from "./PracticeComponent/Shop/Products";
// fakeStore-redux
// import { Provider } from "react-redux";
// import FakeStore from "./componentForRedux/fakeStore/FakeStore";
// import { store } from "./componentForRedux/store/store";
// ----
function App() {
  // return (
  //   <Provider store={store}>
  //     <FakeStore />
  //   </Provider>
  // );
  return (
    <>
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
}
export default App;
