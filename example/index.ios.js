import { AppRegistry } from 'react-native'
import Example from './src'
import dotenv from 'react-native-dot-env'

dotenv()

AppRegistry.registerComponent('Example', () => Example)
