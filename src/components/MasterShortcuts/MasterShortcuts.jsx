import React, {Component} from 'react';

export default function MasterShortcuts(props) {
    return (
        <button onClick={() => props.handleListSelector(false)}>All Shortcuts</button>
    )
}