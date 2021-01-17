import React, {
  useState,
} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import classnames from 'classnames';
import { routeArrays, RenderRoute } from './router';

import './App.scss';

export const App: React.FC = () => {
  const [btnIndex, setBtnIndex] = useState<number>(0);
  
  return (
    <Router>
      <div className="routers">
        {routeArrays.map((routeConfig, index) => (
          <Link to={routeConfig.path} key={index}>
            <button
              className={classnames('routers__btn', { 'active': btnIndex === index })}
              onClick={() => setBtnIndex(index)}
            >{routeConfig.name}</button>
          </Link>
        ))}
      </div>
      <div className="views">
        {routeArrays.map((routeConfig, index) => (
          <RenderRoute key={index} {...routeConfig} />
        ))}
      </div>
    </Router>
  )
};
