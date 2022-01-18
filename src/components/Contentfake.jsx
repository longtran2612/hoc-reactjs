import React from 'react'
import {useState} from 'react'
 function Contentfake({count}) {
     console.log('re-render');

    return (
        <div>
            <h1>day la content fake {count}</h1>
        </div>
    )
}
export default React.memo(Contentfake)