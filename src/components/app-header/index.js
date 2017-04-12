import {h} from 'preact';
import {Link} from 'preact-router';

const AppHeader = () => (
  <header className="header">
         <h1 className="header__title">
           <Link to="/">Spotfy • Preact Redux</Link>
         </h1>
   </header>
);

export default AppHeader;
