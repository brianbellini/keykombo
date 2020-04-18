import React from 'react';
import './ShortcutList.css'
import ShortcutCell from '../../components/ShortcutCell/ShortcutCell';

function filterListBy(list, filter) {
  let result = []
    list.forEach((item) => {
      if (item.application === filter) {
        result.push(item)
      }
    })
  return result;
}

function ShortcutListPage(props) {
  const filteredShortcutList = filterListBy(props.shortcuts, props.filterMe)
  return (
    <>
      <h1>Shortcut List</h1>
      <div className='ShortcutListPage-grid'>
            <table>
                <tbody>
                    {filteredShortcutList.map(shortcut =>
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