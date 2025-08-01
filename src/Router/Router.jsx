import { Component } from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "./Layouts/HomeLayout";

import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import Error from "./Layouts/Components/Error";
import Home from './Layouts/Components/Home/Home'

import EventDetails from "./Layouts/Components/EventDetails";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import Register from "./Layouts/AuthLayout/Register";
import Login from "./Layouts/AuthLayout/Login";
import EventDetailsWrapper from './Layouts/Components/EventDetailsWrapper';
import ProfileWrapper from "../pages/ProfileWrapper";
import ContactWrapper from './../pages/ContactWrapper';
import Faqs from "../pages/Faqs";
import Terms from './../pages/Terms';
import Privacy from './../pages/Privacy';
import ForgetPassword from './../pages/ForgetPassword';
import Loading from "../Provider/Loading";



const router=createBrowserRouter(
    [
        {
            path:"/",
            Component:HomeLayout,
            children:[
            
            
                { index: true, 
                 loader:()=>fetch('/counterData.json'),
                 
                  Component:Home,
                  hydrateFallbackElement:<Loading></Loading>

                },

               {   
                    path:"/profile",
                    Component: ProfileWrapper
                } ,
                {
                    path:"/contact",
                    Component: ContactWrapper
              },
               
              
               {
                   path:"/eventDetails/:id",
                   loader:()=>fetch('/eventsData.json'),
                   Component: EventDetailsWrapper,
                   hydrateFallbackElement:<Loading></Loading>
               },
               {
                    path:"/faqs",
                    Component: Faqs
              },
              {
                    path:"/terms",
                    Component: Terms
              },
              {
                    path:"/privacy",
                    Component: Privacy
              },
            ]
        
            }, 
                 {
                      path:"/auth",
                      Component: AuthLayout,
                      children:[
                        {
                            path:"/auth/login",
                            Component: Login
                        },
                        {
                            path:"/auth/register",
                            Component: Register
                        },
                        {
                            path:"/auth/forgetPassword",
                            Component: ForgetPassword
                        }
                      ]
                 },
                 {
                   path:"/*",
                   Component: Error
               },

             
            
            
    
           
          
                
            ]
        
              
                
     
            
        
        
       

       
      
)

export default router;