import ReactDOM from 'react-dom';
import {App} from '@components/app';
import {MovieSettings} from '@consts/consts';


ReactDOM.render(
    <App
      title = {MovieSettings.TITLE}
      genre = {MovieSettings.GENRE}
      dateRelease = {MovieSettings.DATE_RELEASE}
    />,
    document.querySelector(`#root`)
);
