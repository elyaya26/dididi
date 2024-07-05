import React from 'react';
import HomePage from "./pages/HomePage";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
        <HomePage></HomePage>
            <ToastContainer

                position="top-right"
                autoClose={5000}

                hideProgressBar={false}

                newestOnTop={false}

                closeOnClick

                rtl={false}

                pauseOnFocusLoss

                draggable

                pauseOnHover

                theme="light"

            />

        </div>
    );
};

export default App;