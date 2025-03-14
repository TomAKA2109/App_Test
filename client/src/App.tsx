
import { ConfigProvider, message } from 'antd';
import './App.css';
import Routers from './routers/Routers';
import HomeScreen from './screens/HomeScreen';
import store from './redux/store';
import { Provider } from 'react-redux';

message.config({
	top: 20,
	duration: 2,
	maxCount: 3,
	rtl: true,
	prefixCls: 'my-message',
});

function App() {

  return <ConfigProvider theme={{token: {colorTextHeading: '#F15E2B'}, components: {}}}>

	<Provider store={store}> 
		<Routers/>
	</Provider>
  </ConfigProvider>

}

export default App;
