import React from 'react'

function Questions (props){
    return(
        <div>
        <p className="inner-box-content-p">{ props.selectedSurvey.name }</p>

        { props.selectedSurvey.questions.map((quiz) => {

            return (<div className="quiz-box">
                    <p className="quiz-box-quiz"> { quiz.title } </p>
                    <p> { quiz.subTitle } </p>
                    <br />
                    
                    { quiz.options.map((option) => {
                    
                            return(
                                <div>
                                <input type="checkbox" />
                                <label>{ option.text }</label>
                                </div>
                            ) 
                        })
                    }

                    </div>
            );

        })
        }
        <div className="quiz-box-footer">
            <button onClick = { props.back } className = "btn-back" >Back</button>
        </div>
   </div>
    );
}

export default Questions ;