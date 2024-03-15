import React, {useState,useEffect} from 'react';
// import React, {useRef} from 'react';
import { Link, useNavigate,Outlet} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

function Navbar(){
    const [icon,setIcon]=useState(false)
    const navigate = useNavigate();
    const [logout,setLogout]=useState(false)

    const [loggedin,setLoggedin]=useState(true)
    // const aRef = useRef(0);

    const checkForInactive = ()=>{
        const expireTime = localStorage.getItem("expireTime")  
        // console.log('first :' + expireTime)
        // const expireTimeNumeric = parseInt(expireTime, 10);      
        if(expireTime <Date.now()){                     
            // aRef.current = aRef.current + 1;
            // console.log(aRef.current)
            // console.log('Second :' + expireTime)
            setLoggedin(false)           
        }
    }
    
    useEffect(()=>{
        const interval = setInterval(()=>{           
            checkForInactive();
            // console.log('After 5 SEC')
            setLogout(true);                                  
            localStorage.removeItem('auth');
            setLoggedin(false); 
            localStorage.removeItem('expireTime');
            alert('Timeout Please Login')
            navigate('/')
        },1800000) //30 mints
        
        return() => {          
            clearInterval(interval)
        }
    },[loggedin,navigate])

    const updateExpireTime =()=>{       
        const expireTime = Date.now() + 5000;  // Five Seconds
        // await new Promise(resolve => setTimeout(resolve, 1000));
        // console.log('Thired :' + expireTime)        
        try{            
            localStorage.removeItem('expireTime');
            localStorage.setItem("expireTime", expireTime)
        }catch (error){
            console.error("Error updating expiration time:", error);
        }        
    }
    
    useEffect(()=>{
        // console.log('second')
        updateExpireTime();
        const eventListeners = ['click', 'keypress', 'scroll', 'mousemove'];
        // console.log('keypress')
        // console.log('keypress a  :' + aRef.current)
        eventListeners.forEach((event) => {
            window.addEventListener(event, updateExpireTime);
        });
                
        return() =>{
            // console.log('first')
            eventListeners.forEach((event) => {
                window.removeEventListener(event, updateExpireTime);
            });           
        }
    })
    // },[aRef])
        

    

    useEffect(()=>{   
        // console.log('useEffect start')
        if (!localStorage.getItem('auth'))
        // {     
            navigate('/')           

            // console.log('useEffect done')
        // }else{
        //     console.log('useEffect not done')
        // }

    },[logout,navigate])

    const handelClick = () =>{
        setIcon(!icon)        
        // const ulElement = document.querySelector('ul');
        // if (ulElement) {
        //     ulElement.hidden = !ulElement.hidden;
        // }
    }
    const closeSideDrawer = () =>{
        setIcon(false)
    }
    
    const handleSignout = (e) => {
        // Add your signout logic here
        // e.preventDefault();
        localStorage.removeItem('auth');
        setLogout(true);  
        localStorage.removeItem('expireTime');
        // setTimeout(() => {
        //     navigate('/');
        // }, 100);

      };
    // <script>
    //     const faBarsElement = document.querySelector('.fa-bars');
    //     const ulElement = document.querySelector('ul');
    //     faBarsElement.addEventListener('click', function(){
    //         ulElement.hidden = !ulElement.hidden
    //         });
    // </script>
return(
    <>
        <div>
            <nav className='navbar'>
                <Link to='/home' className='nav-logo' onClick={closeSideDrawer}>Logo</Link>
                <div className='menu-icon' onClick={handelClick}>
                    {
                        icon ? <FaTimes className='fa-times'></FaTimes> :<FaBars  className='fa-bars'></FaBars>
                    }
                </div>
                <ul className={icon ? 'nav-menu activate' : 'nav-menu'}>
                    <li>
                        <Link to='/home' className='nav-links' onClick={closeSideDrawer}>Home</Link>
                    </li>
                    <li>
                        <Link to='/home/about' className='nav-links' onClick={closeSideDrawer}>About</Link>
                    </li>
                    <li>
                        <Link to='/home/services' className='nav-links' onClick={closeSideDrawer}>Services</Link>
                    </li>
                    <li>
                        <Link to='/home/product' className='nav-links'onClick={closeSideDrawer}>Product</Link>
                    </li>
                    <li>
                        <Link to='/home/contactus' className='nav-links' onClick={closeSideDrawer}>Contact-Us</Link>
                    </li>
                    
                    <li>
                        <Link to='/home/signout' className='nav-links' onClick={()=>{closeSideDrawer(); handleSignout();}}>Signout</Link>
                        {/* <Link to='/signout' className='nav-links' onClick={handleSignout}>Signout</Link> */}
                    </li>
                    
                </ul>
            </nav>    
        </div>        
        <Outlet />    
    </>

)

}

export default Navbar;