import React from 'react';
import { useContext } from 'react';
import { themeContext } from '../provider/ThemeProvider';

export default function Page() {
  const context = useContext(themeContext)
  //console.log(context.theme);
 
  return <div>
      <h1 className={context.theme}>day la page</h1>
      <p className={context.theme}>long </p>
  </div>;
}
