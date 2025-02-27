import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';

export default function Quote({children, attribution}) {
    return (
        <div className="is-flex is-flex-direction-row">
            <ImQuotesLeft className='icon is-large' style={{minWidth: '4rem'}}/>
            <div className='is-flex is-flex-direction-column is-justify-content-center mx-5'>
                <div className="title is-3"> {children}</div>
                {(!!attribution)?<span className="subtitle is-5">{attribution}</span>:null}
            </div>
        </div>            
    )
}

Quote.defaultProps = {
    attribution: null,
}