import React from 'react';

function RightProductSection({imgLink ,title, discription, button, downloadLink ,height,marginTop }) {
    let style={
          "height":height    
    };


    let style1={
        "marginTop": marginTop
    }


    return ( 
        <div className='leftProductSectionDiv'>
            <div className='descriptionProductRight'>
                <h4 style={style1}>{title}</h4>
                <p>{discription}</p>
                <div>
                    {button? button.map((acc)=>{
                        return <a>{acc}</a>;
                    }): null}
                </div>
                <div>
                <div className='DownloadImg'>
                    {downloadLink? <><img src='/media/googlePlayBadge.svg' />
                    <img src='/media/appstoreBadge.svg' /></> : null}
                </div>
                </div>

            </div>
            <img src={imgLink} className='RightProductImg' style={style}></img>
        </div>
     );
}

export default RightProductSection;