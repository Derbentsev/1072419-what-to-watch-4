import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


window.React = require(`react`);
window.renderer = require(`react-test-renderer`);
window.shallow = Enzyme.shallow;
window.mount = Enzyme.mount;
window.PropTypes = require(`prop-types`);

window.Switch = Switch;
window.Route = Route;
window.BrowserRouter = BrowserRouter;

Enzyme.configure({adapter: new Adapter()});
