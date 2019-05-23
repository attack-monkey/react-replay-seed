import { app } from 'react-replay';
import { firstComponent } from "./components/first-component/first-component";
import { loadPolyfills } from "./utils/polyfills/load-polyfills";
import { reducer } from "./reducers/master-reducer";

const mount = document.getElementById('app');
loadPolyfills();
app(firstComponent, reducer, mount);