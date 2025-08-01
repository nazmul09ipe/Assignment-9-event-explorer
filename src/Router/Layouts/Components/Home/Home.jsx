// @flow strict

import * as React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner';
import Slider from './../Slider';
import Counter from './../../../../pages/Counter';
import UpcomingEvents from '../UpcomingEvents';
import { Suspense } from 'react';

import OnlineEvents from  '../OnlineEvents';



function Home() {

const eventPromise=fetch('/eventsData.json')
.then(res=>res.json())

const onlinePromise=fetch('/onlineEvent.json')
.then(res=>res.json())


    return (
        <div className='w-full mx-auto '>
            <Helmet>
                <title>
                    Home | Happen Hub
                </title>
            </Helmet>
           <Banner></Banner>
           <Slider></Slider>
           <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
            
            <UpcomingEvents eventPromise={eventPromise}></UpcomingEvents>
            
            </Suspense> 
            
            <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
            <OnlineEvents onlinePromise={onlinePromise}></OnlineEvents>
           </Suspense>
           
           <Counter></Counter>
          

            
        </div>
    );
};

export default Home;