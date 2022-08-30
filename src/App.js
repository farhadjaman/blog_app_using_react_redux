import { Provider } from "react-redux";
import Blog from "./components/Blog";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Blog />
        </Provider>
    );
}

export default App;
