import React from 'react';

export default function MyShortcuts(props) {
    return (
        <button onClick={() => props.handleMySelector()}>My Shortcuts</button>
    )
}