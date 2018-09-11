import React from 'react';
import ReactDOM from 'react-dom';
import { Text, View, AppRegistry, ListView } from 'react-native';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const App = () => {
//     return (
//         <View style={{flex:1}}>
//             <Header heading={'GSP Results'}/>
//             <ListResult />
//         </View>
//     );
// };

// AppRegistry.registerComponent('root', () => App);

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
	rootTag: document.getElementById('root')
});

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { AppRegistry } from 'react-native';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// AppRegistry.registerComponent('App', () => App);
// AppRegistry.runApplication('App', {
// 	rootTag: document.getElementById('root')
// });

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
