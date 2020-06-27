import React , { useState} from 'react';

import Aux from '../Auxilary/Auxilary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = props =>  {
    
     const [showSideDrawer , isShowSideDrawer] = useState(false);
    

    const sideDrawerClosedHandler = () => {
         isShowSideDrawer(false)
    };

    const sideDrawerToggleHandler = () => {
        isShowSideDrawer(!showSideDrawer)
    };

    
        return (
            <Aux>
                <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
                <SideDrawer
                    open={showSideDrawer}
                    closed={sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Aux>
        )
    
}

export default layout;