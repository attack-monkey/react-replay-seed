import { app } from '../node_modules/react-replay/src'
import { firstComponent } from "./components/first-component/first-component";
import { loadPolyfills } from "./utils/polyfills/load-polyfills";
import { reducer, initState } from "./reducers/master-reducer";

const mount = document.getElementById('app');
loadPolyfills();
app(firstComponent, reducer, mount, initState);