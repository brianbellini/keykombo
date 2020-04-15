import React from 'react';
import './ShortcutCell.css'
import {Link} from 'react-router-dom';

function ShortcutCell({shortcut, handleDeleteShortcut}) {
    // console.log("INSIDE CELL: ", props)
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{shortcut.menu}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>App</dt>
                    <dd>{shortcut.application}</dd>
                    <dt>Kombo</dt>
                    <dd>{shortcut.combo}</dd>
                    <dt>Menu</dt>
                    <dd>{shortcut.menu}</dd>
                    <dt>Description</dt>
                    <dd>{shortcut.description}</dd>
                </dl>
            </div>
            <div className='panel-footer'>
                <Link className='btn btn-xs btn-warning' to={{ pathname: '/edit', state: {shortcut} }}>EDIT</Link>
                <button
                    className='btn btn-xs btn-danger margin-left-10'
                    onClick={() => handleDeleteShortcut(shortcut._id)}
                >
                    DELETE
                </button>
            </div>
        </div>
    )
}

export default ShortcutCell;