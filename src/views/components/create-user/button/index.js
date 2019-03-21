import React from 'react';
import LanguageContext from '../../../../contexts/LanguageContext';

const Button = () =>
  <button type="submit" className="button">
    <LanguageContext.Consumer>
      { (value) => value === 'english' ? 'Submit': 'जमा करें' }
    </LanguageContext.Consumer>
  </button>;

export default Button;