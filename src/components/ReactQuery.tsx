import { Suspense, useState, useTransition } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { AlbumList } from './AlbumList'
import { Sidebar } from './Sidebar'
import { TodoList } from './TodoList'

type Tabs = 'todo' | 'album'

// react-queryはデータ取得のキャッシュをしてくれる
export const ReactQuery = () => {
    const [selectedTab, setSelectedTab] = useState<Tabs>('todo')
    const [isPending, startTransition] = useTransition()

    const buttonStyle = {
        padding: '12px',
        fontSize: '16px',
        border: 'none',
        opacity: isPending ? '0.5' : 1
    }

    const albumButtonStyle = {
        ...buttonStyle,
        backgroundColor: selectedTab === 'album' ? 'royalblue' : 'white',
        color: selectedTab === 'album' ? 'white' : 'black',
    }

    const todoButtonStyle = {
        ...buttonStyle,
        backgroundColor: selectedTab === 'todo' ? 'royalblue' : 'white',
        color: selectedTab === 'todo' ? 'white' : 'black',
    }

    const onClickTabButton = (tab: Tabs) => {
        startTransition(() => {
            setSelectedTab(tab)
        })
    }

    return (
        <div style={{ display: 'flex', padding: '16px' }}>
            <Sidebar />
            <div style={{ flexGrow: 1 }}>
                <button style={albumButtonStyle} onClick={() => onClickTabButton('album')}>
                    Album
                </button>
                <button style={todoButtonStyle} onClick={() => onClickTabButton('todo')}>
                    Todo
                </button>
                <ErrorBoundary fallback={<p>Album or TodoListエラーです!</p>}>
                    <Suspense fallback={<p>AlbumList or Todoローディング中だよ〜</p>}>
                        {selectedTab === 'album' ? <AlbumList /> : <TodoList />}
                    </Suspense>
                </ErrorBoundary>
            </div>
        </div>
    )
}
