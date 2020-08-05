import * as _react from 'react';
import * as _reactDOM from 'react-dom';
import {Link as _link, Route as _route, Router as _router, Switch as _switch} from 'react-router-dom';
import * as _renderer from 'react-test-renderer';
import * as Enzyme from 'enzyme';

declare global {
    const React: typeof _react;
    const ReactDOM: typeof _reactDOM;
    const Link: typeof _link;
    const Route: typeof _route;
    const Router: typeof _router;
    const Switch: typeof _switch;
    const renderer: typeof _renderer;
    const shallow: typeof Enzyme.shallow;
    const mount: typeof Enzyme.mount;
    const JSX: any;
    const cx: any;
    const connect: any;
}
