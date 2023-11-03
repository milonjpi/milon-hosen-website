'use client';

import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import ThemeRegistry from './ThemeRegistry';

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeRegistry>{children}</ThemeRegistry>
    </Provider>
  );
};

export default Providers;
