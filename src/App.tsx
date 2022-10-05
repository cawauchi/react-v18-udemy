import './App.css'
import { Suspense, useEffect } from 'react'
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler'
import { AutoBatchOther } from './components/AutoBatchOther'
import { Transition } from './components/Transition'
import { ReactQuery } from './components/ReactQuery'
import { ErrorBoundary } from 'react-error-boundary'

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
            <hr />
            {/* ネストが深い部分のErrorBoundaryとSuspenseが実行される */}
            <ErrorBoundary fallback={<p>全体エラーです！</p>}>
                <Suspense fallback={<p>全体ローディング中だよ〜</p>}>
                    <ReactQuery />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

export default App
