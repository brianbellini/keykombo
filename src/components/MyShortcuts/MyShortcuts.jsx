import React, {Component} from 'react';

export default function MyShortcuts(props) {
    return (
        <button onClick={() => props.handleListSelector(true)}>My Shortcuts</button>
    )
}