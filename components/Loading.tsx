// src/components/Loading.tsx
import React from 'react';

const Loading = () => {
    return (
        <div style={styles.loaderWrapper}>
            <div style={styles.spinner}></div>
            <p>Loading...</p>
        </div>
    );
};

const styles = {
    loaderWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f9fa', // Background color of loading screen
        zIndex: 9999,
    },
    spinner: {
        width: '50px',
        height: '50px',
        border: '5px solid #ccc',
        borderTop: '5px solid #0070f3', // Main color
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    },
};

export default Loading;
