import React from 'react';

function LeftProductSection({imgLink ,title, discription, button, downloadLink, height,marginTop }) {

    let style= {
       "height" :height
    }

    let style1={
        "marginTop": marginTop
    }
    return ( 
        <div className='leftProductSectionDiv'>
            <img src={imgLink} className='leftProductImg' style={style}></img>
            <div className='descriptionProduct'>
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
        </div>
     );
}

export default LeftProductSection;