function Suggestions({response, dataKey, onSuggestionClick, selected}) {
    const showSelection = (text, highlight) => {
        if(!highlight) return text
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
        return (
            <span>
                {parts?.map((part, index) => (
                    <span key={index} style={part.toLowerCase() === highlight.toLowerCase() ? {fontWeight: 'bold'} : {}}>
                        {part}
                    </span>
                ))}
            </span>
        )
    }
    return (
        <div className='suggestions' >
        {response?.map((item, index) => {
            const displayName = dataKey ? item[dataKey] : item
        return (
            <div className='list' onClick={() => onSuggestionClick(displayName)} key={index}>{showSelection(displayName, selected)}</div>
        )
        })}
        </div>
    )
}

export default Suggestions