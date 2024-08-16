// import { StyleSheet, Text, View, Appearance } from 'react-native'
// import React, { useCallback, useEffect, useState } from 'react'
// import Router from './Router'

// const App = () => {
//   return (
//     <Router />
//   )
// }
// export default App

// App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import LoginScreen from './src/screens/LoginScreen';
// import ProductListScreen from './src/screens/ProductListScreen';
// import GuestCheckoutScreen from './src/screens/GuestCheckoutScreen';
// import { CartProvider } from './src/screens/CartContext';

// const Stack = createStackNavigator();

// const App = () => {
//     return (
//         <CartProvider>
//             <NavigationContainer>
//                 <Stack.Navigator initialRouteName="Login">
//                     <Stack.Screen name="Login" component={LoginScreen} />
//                     <Stack.Screen name="ProductList" component={ProductListScreen} />
//                     <Stack.Screen name="GuestCheckout" component={GuestCheckoutScreen} />
//                 </Stack.Navigator>
//             </NavigationContainer>
//         </CartProvider>
//     );
// };

// export default App;

// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './src/store';
// import Navigation from './src/Navigation';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Navigation />
//     </Provider>
//   );
// };

// export default App;

// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;


