import React from 'react';
import './ShortcutCell.css'
import { PromiseProvider } from 'mongoose';

let shade = true;
function alternate(shade) {
  return shade ? (shade = false) : (shade = true);
}

function ShortcutCell({shortcut, handleAddToMyList, showEdit, handleSelectShortcut}) {
        alternate(shade);

        return (
            <tr
                onClick={() => (showEdit ? handleSelectShortcut(shortcut) : handleAddToMyList(shortcut))}
                className='shortcut-list-item'
                className={shade}>
                
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
