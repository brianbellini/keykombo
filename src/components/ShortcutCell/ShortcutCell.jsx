import React from 'react';

function ShortcutCell({shortcut, handleAddToMyList, showEdit, handleSelectShortcut}){

        return (
        <tr
        onClick={() => (showEdit ? handleSelectShortcut(shortcut) : handleAddToMyList(shortcut))}
        className='shortcut-list-item'>
                <td className="cell1">{shortcut.application}</td>
                <td className="cell2">{shortcut.combo}</td>
                <td className="cell3">{shortcut.func}</td>
                <td className="cell4">{shortcut.menu}</td>
                <td className="cell5">
                        <button onClick={() => (showEdit ? handleSelectShortcut(shortcut) : handleAddToMyList(shortcut))}>
                                {showEdit ? "Edit" : "Add"}
                        </button>
                </td>
        </tr>
    )
}

export default ShortcutCell;
