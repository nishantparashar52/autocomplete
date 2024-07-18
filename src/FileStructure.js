
import { useState } from 'react';
function FileStructure({data}) {
    return (
        <div>
            {data.map((item, index) => <Node key={index} item={item} />)}
        </div>
    )
}

function Node({item, index}) {

    const [open, setOpen] = useState(false)
    return (
        <div key={index}>
            <div className={item.type === 'folder' ? 'carot' : ''} onClick={() => setOpen(prev => !prev)}>{item.name}</div>
            {open && item.children && <div style={{marginLeft: '20px'}}><FileStructure data={item.children} /></div>}
        </div>
    )
}

export default FileStructure;