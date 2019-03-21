import React from 'react';
import LanguageContext from '../../../../contexts/LanguageContext';

const Field = () =>
  <label>
    <LanguageContext.Consumer>
      { (value) => value === 'english' ? 'Your Name': 'आपका नाम' }
    </LanguageContext.Consumer>
    <input type="text" />
  </label>;

export default Field;