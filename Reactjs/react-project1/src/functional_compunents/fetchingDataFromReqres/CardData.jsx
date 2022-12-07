import React from 'react'

export default function CardData(props) {
    return (
        <div id='person_details'>{props.data.map((item, index) => (
            <div key={index} id={`card${index}`}>
                <img src={item.avatar} alt={`Not Found : ${item.avatar}`}
                    style={{ height: '100px', width: '100px' }} />
                <h4>{`${item.first_name} ${item.last_name}`}</h4>

                <h4>{`Id : ${item.id}`}</h4>
                <h4>{item.email}</h4>
            </div>
        ))}</div>
    )
}
