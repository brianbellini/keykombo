import React from 'react';
import './ShortcutCell.css'
import {Link} from 'react-router-dom';

function ShortcutCell({shortcut, user}) {
    console.log('USER IN CELL: ', user)
    return (
            <tr className='shortcut-list-item'>
                    <td>{shortcut.application}</td>
                    <td>{shortcut.combo}</td>
                    <td>{shortcut.menu}</td>
                    <td>{shortcut.description}</td>
            </tr>
    )
}

export default ShortcutCell;
