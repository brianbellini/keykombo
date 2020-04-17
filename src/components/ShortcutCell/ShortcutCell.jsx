import React from 'react';
import './ShortcutCell.css'
import { PromiseProvider } from 'mongoose';

function ShortcutCell({shortcut, handleDeleteShortcut, handleAddToMyList, showDelete, handleSelectShortcut}) {
    // onClick={() => handleSelectShortcut(shortcut._id)}
    return (
            <tr  className='shortcut-list-item'>
                    <td>{shortcut.application}</td>
                    <td>{shortcut.combo}</td>
                    <td>{shortcut.menu}</td>
                    <td>{shortcut.description}</td>
                    <td>{shortcut.func}</td>
                    <td>
                    {showDelete ?
                        <button
                            onClick={() => handleDeleteShortcut(shortcut._id)}>
                            X
                        </button>
                        :
                        <button
                            onClick={() => handleAddToMyList(shortcut._id)}>
                            +
                        </button>}
                    </td>
                    <td>
                    <button
                            onClick={() => handleSelectShortcut(shortcut)}>
                            EDIT
                        </button>
                    </td>
            </tr>
    )
}

export default ShortcutCell;
