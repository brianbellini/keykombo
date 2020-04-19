import React from 'react';
import './ShortcutList.css'
import ShortcutCell from '../../components/ShortcutCell/ShortcutCell';

function filterListBy(list, filter) {
  let result = []
  if (filter === "--Show All--") {
    return list;
  } else {
    list.forEach((item) => {
      if (item.application === filter) {
        result.push(item)
      }
    })
  }
  return result;
}



function ShortcutListPage(props) {
  const filteredShortcutList = filterListBy(props.shortcuts, props.appFilter)
  return (
    <>
      <div className='ShortcutListPage-grid'>
            <table>
              <thead>
                <tr><th className="cell1">App</th><th className="cell2">Shortcut</th><th className="cell3">Description</th><th className="cell4">Category</th><th className="cell5"></th></tr>
              </thead>

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