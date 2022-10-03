import React from 'react';

const Count = ({text,count}) => {
    console.log(`Re-rendering`);
    return (
        <div>
            {text}--{count}
        </div>
    );
};

export default Count;