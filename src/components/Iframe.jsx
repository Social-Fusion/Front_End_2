import React from 'react'

const Iframe = (props) => {
    return (
        <div>
            <iframe
                className={props.className}
                key={props.key}
                src={props.src}
                title={props.title}
                datatype={props.datatype}
                frameBorder={props.frameBorder}
                allow={props.allow}
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default Iframe
