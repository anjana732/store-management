// // src/App.js
// import React, { useState } from 'react';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import StoreList from './components/StoreList';

// function App() {
//     const [token, setToken] = useState(localStorage.getItem('token'));
//     const [showSignup, setShowSignup] = useState(false);

//     if (token) {
//         return <StoreList token={token} />;
//     }

//     return (
//         <div className="p-8">
//             {showSignup ? (
//                 <>
//                     <Signup setToken={setToken} />
//                     <p className="mt-4 text-blue-500 cursor-pointer"
//                        onClick={() => setShowSignup(false)}>Already have an account? Login</p>
//                 </>
//             ) : (
//                 <>
//                     <Login setToken={setToken} />
//                     <p className="mt-4 text-green-500 cursor-pointer"
//                        onClick={() => setShowSignup(true)}>Don't have an account? Signup</p>
//                 </>
//             )}
//         </div>
//     );
// }

// export default App;
import React, { useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StoreList from './components/StoreList';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [showSignup, setShowSignup] = useState(false);

    return (
        <div className="p-8">
            {token ? (
                <StoreList token={token} />
            ) : showSignup ? (
                <>
                    <Signup setToken={setToken} />
                    <p
                        className="mt-4 text-blue-500 cursor-pointer"
                        onClick={() => setShowSignup(false)}
                    >
                        Already have an account? Login
                    </p>
                </>
            ) : (
                <>
                    <Login setToken={setToken} />
                    <p
                        className="mt-4 text-green-500 cursor-pointer"
                        onClick={() => setShowSignup(true)}
                    >
                        Don't have an account? Signup
                    </p>
                </>
            )}
        </div>
    );
}

export default App;
