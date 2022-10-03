import React from 'react';

const Button = ({handelAge,children}) => {
    console.log(`Re-rendering${children}`);
    return (
        <div>
            <button onClick={handelAge}>{children}</button>
        </div>
    );
};

export default Button;