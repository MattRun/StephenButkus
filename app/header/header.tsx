'use client'
import { useRouter } from 'next/navigation';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import styles from './header.module.css';
import * as routeDefintions from '../nav/routeDefinitions'
import Image from 'next/image';

//if you want the white header banner back on every page.

const Header = () =>  {

    const router   = useRouter();

    const navClick = (routeDefinition: string) => {
        router.push(routeDefinition)
    }

    //  return (
    //      <div className = {styles.mainContainerStyle}>
    //          <div className={styles.headerLogoDivider}>
    //              <Image 
    //                  src= '/AEHS_Logo_Banner.png'
    //                  width={500}
    //                  height={10}
                    
    //              > 
    //              </Image>
    //          </div>
    //         </div>

    //  );
};
export default Header

// Trying to see if new header will work
// Using NextUI instead of HeadlessUI

    //         <div className={styles.headerTabsDivider}>
    //             <TabGroup className = {styles.tabContainerStyle}>
    //                 <TabList className = {styles.tabContainerStyle}>
    //                     <Tab onClick={()=>navClick(routeDefintions.DASHBOARD)} className = {styles.tabStyle}>Tab 1</Tab>
    //                     <Tab onClick={()=>navClick(routeDefintions.ABOUT)} className = {styles.tabStyle}>Tab 2</Tab>
    //                     <Tab className = {styles.tabStyle}>Tab 3</Tab>
    //                 </TabList>
    //             </TabGroup>
    //         </div>
    //     </div>
    //old header^^^^