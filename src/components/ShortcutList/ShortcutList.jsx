import React from 'react';
import './ShortcutList.css'
import ShortcutCell from '../../components/ShortcutCell/ShortcutCell';

function ShortcutListPage(props) {
    console.log("PROPS.SHORTCUTS: ", props.shortcuts)
  return (
    <>
      <h1>Shortcut List</h1>
      <div className='ShortcutListPage-grid'>
        {props.shortcuts.map(shortcut =>
            <ShortcutCell
                key={shortcut._id}
                shortcut={shortcut}
                // handleDeleteShortcut={props.handleDeleteshortcut}
            />
        )}
      </div>
    </>
  );
}

export default ShortcutListPage;