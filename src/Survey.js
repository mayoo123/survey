import React from 'react';

function Survey(props){

    console.log(props.Data[0].surveys[0].name);
    //return (<></>);
        return(
            <div>
                 <p className="inner-box-content-p">Compass Surveys</p>
                {props.Data[0].surveys.map((data) => {
                    return(
                   
                    <div>
                        <button onClick = { () => props.handleClick(data.id) } className="surveys-button">{data.name}</button>
                    </div>
                    )
                    })
                }
            </div>
    );
   
}

export default Survey ;