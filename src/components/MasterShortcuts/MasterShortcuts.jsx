import React from 'react';

export default function MasterShortcuts(props) {
    return (
        <div>
            <button onClick={() => props.handleAllSelector()}>All Shortcuts</button>
            <button onClick={() => props.handleMySelector()}>My Shortcuts</button>
        </div>
    )
}