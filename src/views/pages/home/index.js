import React, { Fragment, Component } from 'react';
import CreateUser from '../../components/create-user';
import LanguageContext from '../../../contexts/LanguageContext';

const Home = class extends Component {
  state = {
    language: 'english',
  };

  handleLanguage = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <Fragment>
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">Select a Language</li>
              <li>
                <a onClick={ () => this.handleLanguage('english') }>
                  <span className={ `flag-icon flag-icon-us radius ${this.state.language === 'english' ? 'bordered shadow' : ''}` } />
                </a>
              </li>
              <li>
                <a onClick={ () => this.handleLanguage('hindi') }>
                  <span className={ `flag-icon flag-icon-in radius ${this.state.language === 'hindi' ? 'bordered shadow' : ''}` } />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid-container fluid">
          <div className="grid-x grid-padding-x grid-padding-y">
            <div className="cell medium-4">
              <LanguageContext.Provider value={ this.state.language }>
                <CreateUser />
              </LanguageContext.Provider>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default Home;
