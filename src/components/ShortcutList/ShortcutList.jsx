import React from 'react';
import './ShortcutList.css'
import ShortcutCell from '../../components/ShortcutCell/ShortcutCell';

function ShortcutListPage(props) {
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
                            showEdit={props.showEdit}
                            handleAddToMyList={props.handleAddToMyList}
                            handleSelectShortcut={props.handleSelectShortcut}
                        />
                    )}
                </tbody>
            </table>
      </div>
    </>
  );
}

export default ShortcutListPage;