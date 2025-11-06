import React from 'react';

function LandingPage() {
    return(
        <div style={{
            width: '100vw',
            height: '100vh', 
            background: 'black',
            color: 'red',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999
        }}>
            <div>
                <h1>YOU HAVE BEEN HACKED</h1>
                <p>FOR YOUR ILLEGAL DOINGS</p>
            </div>
        </div>
    )
}

export default LandingPage;
