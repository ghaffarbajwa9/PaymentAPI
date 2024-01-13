import {useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthProvider'


const Login=()=> {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser ] = useState('');
    const [pwd, setPwd ] = useState('');
    const [errMsg, setErrMsg ] = useState('');

    useEffect(()=>{
        if(userRef.current){
            userRef.current.focus();
        }
    },[]);

    useEffect(()=>{
        setErrMsg('');
    }, [user, pwd]);

    const handleSumit = async (e)=>{
        e.preventDefault();
        setUser('');
        setPwd('');
        console.log("hurran");
    }
  return (
    <section>
        <p ref={errRef} className={errMsg?"errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Sign In</h1>
        <form onSubmit={handleSumit}>
            <label htmlFor='username'>Username:</label>
            <input 
                type='text'
                id="username"
                autoComplete='off' 
                onChange={(e)=> setUser(e.target.value)} 
                value={user}
                required 
                />
                <label htmlFor='password'>Password:</label>
            <input 
                type='password'
                id="password" 
                autoComplete='off' 
                onChange={(e)=> setPwd(e.target.value)} 
                value={pwd}
                required 
                />
            <button>Sign In</button>
        </form>
    </section>
  )
}
export default Login
