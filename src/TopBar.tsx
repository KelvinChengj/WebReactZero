import React,{ useEffect, useState }  from 'react';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';

const TopBar =(props:any)=>{

    const TopBarClassName = classNames('card')
    const ColorTheme=`var(--${props.ColorTheme}-${props.ColorDeep})`

    return (
        <div>
            <div className={TopBarClassName} style={{background:ColorTheme}}>
                <h2>TopBar</h2>
            </div>

            <Button style={{background:ColorTheme}}>Test</Button>

        </div>
        
    )
}

export default TopBar