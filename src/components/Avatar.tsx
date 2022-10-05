type Props = {
    children: React.ReactNode
    isSelected?: boolean
    onClick: (assignee: string) => void
}

export const Avatar = ({ children, isSelected = false, onClick }: Props) => {
    const border = isSelected ? '3px solid orange' : '1px solid gray'
    return (
        <div
            style={{
                width: '30px',
                height: '30px',
                border,
                borderRadius: '50px',
                textAlign: 'center',
                lineHeight: '30px',
                userSelect: 'none',
            }}
            onClick={() => onClick(`${children}`)}
        >
            {children}
        </div>
    )
}
