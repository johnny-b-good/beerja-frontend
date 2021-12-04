import React from 'react';
import ReactDOM from 'react-dom';

import 'tailwindcss/tailwind.css';

ReactDOM.render(
    <React.StrictMode>
        <div className="text-white bg-green-500 text-center p-8 text-xl">
            Hello {import.meta.env.MODE} world!
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
