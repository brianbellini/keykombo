import React from 'react';
import './ShortcutCell.css'

function ShortcutCell({shortcut, handleAddToMyList, showEdit, handleSelectShortcut}) {
    // onClick={() => handleSelectShortcut(shortcut._id)}
    return (
            <tr onClick={() => (showEdit ? handleSelectShortcut(shortcut) : handleAddToMyList(shortcut))} className='shortcut-list-item'>
                
                    <td>{shortcut.application}</td>
                    <td>{shortcut.combo}</td>
                    <td>{shortcut.menu}</td>
                    <td>{shortcut.description}</td>
                    <td>{shortcut.func}</td>
                    
               
            </tr>
    )
}

export default ShortcutCell;
