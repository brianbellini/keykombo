import React from 'react';
import './ShortcutCell.css'
import { PromiseProvider } from 'mongoose';

function ShortcutCell({shortcut, handleAddToMyList, showEdit, handleSelectShortcut}) {
    // onClick={() => handleSelectShortcut(shortcut._id)}
    return (
            <tr  className='shortcut-list-item'>
                <>
                    <td>{shortcut.application}</td>
                    <td>{shortcut.combo}</td>
                    <td>{shortcut.menu}</td>
                    <td>{shortcut.description}</td>
                    <td>{shortcut.func}</td>
                </>
                    <td>
                    {showEdit ?
                        <button
                        onClick={() => handleSelectShortcut(shortcut)}>
                        EDIT
                        </button>
                        :
                        <button
                            onClick={() => handleAddToMyList(shortcut)}>
                            +
                        </button>}
                    </td>
            </tr>
    )
}

export default ShortcutCell;
