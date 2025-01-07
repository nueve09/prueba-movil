import { Provider } from 'react-redux'
import { store } from './src/Presentation/store/store'
import Main from './src/main'

export default function App() {
  return (
    <Provider store={ store }>
      <Main/>
    </Provider>
  )
}