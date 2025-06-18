if (isDesktop() || window.matchMedia("(min-width: 769px)").matches) {
    let hasShownExitPrompt = false;

    document.addEventListener('visibilitychange', () => {
        if (document.hidden && !hasShownExitPrompt) {
            showExitModal();
            hasShownExitPrompt = true;
        }
    });

    function showExitModal() {
        if (document.getElementById('heisen-exit-modal')) return;

        const modal = document.createElement('div');
        modal.id = 'heisen-exit-modal';

        modal.innerHTML = `
        <div style="
            position: fixed; inset: 0;
            background: rgba(0, 0, 0, 0.85);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            font-family: 'Segoe UI', sans-serif;
            padding: 40px;
        ">
            <img src="./img/goodbye.gif" alt="Goodbye" style="
                max-width: 400px;
                border-radius: 20px;
                margin-bottom: 30px;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
            ">
            <p style="
                font-size: 1.8em;
                text-align: center;
                margin: 0 20px;
                max-width: 600px;
            ">
                Are you sure you want to leave <strong style="color: #3bb7d6;">Heisenburger</strong>?
            </p>
            <button id="heisen-stay-btn" style="
                margin-top: 25px;
                padding: 14px 28px;
                background: #3bb7d6;
                color: black;
                border: none;
                border-radius: 10px;
                font-size: 1.2em;
                font-weight: bold;
                cursor: pointer;
                transition: background 0.3s ease;
            ">Don't leave</button>
        </div>
        `;

        document.body.appendChild(modal);

        setTimeout(() => {
            const btn = document.getElementById('heisen-stay-btn');
            if (btn) {
                btn.addEventListener('mouseover', () => {
                    btn.style.background = '#8ed9f1';
                });
                btn.addEventListener('mouseout', () => {
                    btn.style.background = '#3bb7d6';
                });
            }
        }, 0);

        document.getElementById('heisen-stay-btn').onclick = () => {
            document.getElementById('heisen-exit-modal')?.remove();
            hasShownExitPrompt = false;
        };
    }
}

function isDesktop() {
    return !/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}