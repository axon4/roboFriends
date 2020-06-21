import React from 'react';

type IScrollProps = {
    children?:JSX.Element
};

const Scroll = (props:IScrollProps) => {
    return (
        <div style={{ overflowY: 'scroll', border: '1px solid black', height: '500px' }}>
            {props.children};
        </div>
    );
};

export default Scroll;