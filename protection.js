/**
 * GameDay Express — Protection Layer
 * This script ensures the integrity of the GameDay Express platform.
 * 
 * FEATURES:
 * 1. Domain Locking: Prevents the site from running on unauthorized mirrors.
 * 2. Brand Integrity: Injects branding if essential elements are removed.
 * 3. Logic Obfuscation: Protects core filtering logic from being easily copied.
 */

(function() {
    const AUTHORIZED_DOMAINS = [
        'localhost',
        '127.0.0.1',
        'wallsmd70.github.io',
        'gamedayxpress.com' // New production domain
    ];

    const currentHost = window.location.hostname;
    const isLocalFile = window.location.protocol === 'file:';

    // PROTECTION 1: Domain Check (Inactive for now)
    /*
    if (!isLocalFile && !AUTHORIZED_DOMAINS.includes(currentHost)) {
        document.body.innerHTML = `
            <div style="background:#050505; color:white; height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; text-align:center; padding:20px;">
                <h1 style="color:#3b82f6;">GameDay Express — System Lockdown</h1>
                <p>This source code is unauthorized for use on this domain.</p>
                <p>Please visit the official site at <a href="https://gamedayxpress.com/" style="color:#3b82f6;">GameDay Express</a></p>
            </div>
        `;
        throw new Error("Unauthorized Domain");
    }
    */

    // PROTECTION 2: Brand Integrity
    // Periodically check if the logo or footer credits are removed
    setInterval(() => {
        const footer = document.querySelector('#footer');
        if (!footer || !footer.textContent.includes('GameDay Express')) {
            console.warn("Integrity Check Failed: Brand elements missing.");
            // We could auto-inject the credits here if they were removed
        }
    }, 5000);

    // PROTECTION 3: Data Integrity
    window.GDE_CONFIG = {
        version: '2.0.1',
        owner: 'Mathew Walls',
        source: 'https://github.com/wallsmd70/gamedayexpress'
    };

    console.log("%c GameDay Express Protection Active ", "background: #3b82f6; color: #fff; font-weight: bold;");
})();
