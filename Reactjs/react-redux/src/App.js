import "./App.css";
import Cart from "./PracticeComponent/Cart/Cart";
import Layout from "./PracticeComponent/Layout/Layout";
import Products from "./PracticeComponent/Shop/Products";
import { Provider } from "react-redux";
import { store } from "./PracticeComponent/store/index";
import { useSelector } from "react-redux";
// fakeStore-redux
// import { Provider } from "react-redux";
// import FakeStore from "./componentForRedux/fakeStore/FakeStore";
// import { store } from "./componentForRedux/store/store";
// ----
function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  // return (
  //   <Provider store={store}>
  //     <FakeStore />
  //   </Provider>
  // );
  return (
    <Provider store={store}>
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Provider>
  );
}
export default App;
