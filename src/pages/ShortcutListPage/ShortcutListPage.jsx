import React from 'react';
import ShortcutCard from '../../components/ShortcutCard/ShortcutCard';

function ShortcutListPage(props) {
  return (
    <>
      <h1>Shortcut List</h1>
      <div className='ShortcutListPage-grid'>
        {props.shortcut.map(shortcut =>
            <ShortcutCard
                key={shortcut._id}
                function={shortcut}
                handleDeleteShortcut={props.handleDeleteshortcut}
            />
        )}
      </div>
    </>
  );
}

export default PuppyListPage;