import React from 'react';
import './ShortcutList.css'
import ShortcutCell from '../../components/ShortcutCell/ShortcutCell';

function ShortcutListPage(props) {
    console.log("PROPS.SHORTCUTS: ", props.shortcuts)
  return (
    <>
      <h1>Shortcut List</h1>
      <div className='ShortcutListPage-grid'>
            <table>
                <tbody>
                    {props.shortcuts.map(shortcut =>
                        <ShortcutCell
                            key={shortcut._id}
                            shortcut={shortcut}
                            user={props.user}
                        />
                    )}
                </tbody>
            </table>
      </div>
    </>
  );
}

export default ShortcutListPage;