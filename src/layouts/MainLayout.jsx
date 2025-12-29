import React from "react";
import Headers from "../components/Header";
import Footers from "../components/Footer";

export default function MainLayout({ children }) {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Headers />
            <main style={{
                flex: 1,
                paddingTop: '80px',
                width: '100%'
            }}>
                {children}
            </main>
            <Footers />
        </div>
    );
}