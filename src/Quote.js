import React from 'react'

export default function Quote({ quote }) {
    return (
        <>
            <div>
                {quote.text}
            </div>
            <hr></hr>
        </>
    )
}
