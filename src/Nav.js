import React from 'react'

const Nav = () => {
return (
    <nav className= 'App-nav' >
                 <ul>
                     <li  className= 'App-nav-iten'> 
                     <button>Itens</button>
                     
                     </li>
                     <li className='App-nav-iten'>
                         <button>Cart</button>
                     </li>
                 </ul>
    </nav>
)
}

export default Nav;