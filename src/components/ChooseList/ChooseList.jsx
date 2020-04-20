import React from 'react';

export default function ChooseList(props) {
    return (
        <div>
            <button className="all-shortcuts" onClick={() => props.handleAllSelector()}>All Shortcuts</button>
            <button className="my-shortcuts" disabled={props.user} onClick={() => props.handleMySelector()}>My Shortcuts</button>
        </div>
    )
}