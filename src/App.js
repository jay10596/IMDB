import React from 'react';
import Router from './Router';
import './styles/main.css'


// Unlike Vue, RouterLink does not exit. Therefore, we need to import all routers. We can't define basic app structure with changing router-view because then we will not e able to use router Link inside the Nav or Footer component
function App() {
    return(
        <div>
            <Router />
        </div>
    )
}

export default App
