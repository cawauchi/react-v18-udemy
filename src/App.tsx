import './App.css'
import { useEffect } from 'react'
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler'
import { AutoBatchOther } from './components/AutoBatchOther'
import { Transition } from './components/Transition'

function App() {
    console.log('appがレンダリングされた')
    useEffect(() => {
        console.log('useEffect')
        // strictModeだとこれが必ずしも一回だけ実装されるわけではなくなる?
    }, [])
    return (
        <div className="App">
            <AutoBatchEventHandler />
            <AutoBatchOther />
            <hr />
            <Transition />
        </div>
    )
}

export default App
