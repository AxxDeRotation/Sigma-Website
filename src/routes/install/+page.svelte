<style>
.installation-section {
    background-image: url("$lib/img/HeroBanner.webp");
    background-size: cover;
    height: calc(100vh - 90px);
}

.installation-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 88vw;
    height: calc(88vh - 90px);
    border-radius: 15px;
    background-color: var(--dark-transparency);
    padding: 40px 50px;
}

.installation-title {
    font-size: 240%;
    font-weight: 600;
    color: var(--main-color);
    margin: 0;
    padding: 0;
}

.installation-option-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 45vw;
}

.installation-option-title {
    font-size: 125%;
    font-weight: 500;
    color: var(--main-color);
    margin: 0;
    padding: 0;
}

.installation-option {
    width: 30vw;
    height: 7vh;
    border-radius: 8px;
    background-color: var(--transparent);
    outline-color: var(--main-color);
    outline-width: 1px;
    outline-style: solid;
    display: flex;
    justify-content: center;
    align-items: center;
}

.installation-option:hover {
    background-color: var(--dark-transparency);
    transition: 0.3s;
}

.installation-button {
    position: relative;
    display: block;
    background-color: var(--transparent);
    color: var(--main-color);
    border-style: solid;
    border-color: var(--main-color);
    border-width: 1px;
    border-radius: 8px;
    padding: 15px;
    width: 45vw;
    font-size: 95%;
    font-weight: 500;
}

.installation-button:hover {
    background-color: var(--dark-transparency);
    transition: 0.3s;
}

a {
    text-decoration: none;
    color: var(--main-color);
}

</style>

<section class="installation-section">
    <div class="installation-container">
        <h2 class="installation-title">Install Sigma</h2>
        <div class="installation-option-container">
            <h4 class="installation-option-title">Edition</h4>
            <div class="installation-option">Classic</div>
        </div>
        <div class="installation-option-container">
            <h4 class="installation-option-title">Version</h4>
            <div class="installation-option">1.0.4</div>
        </div>
        <div class="installation-option-container">
            <h4 class="installation-option-title">Theme</h4>
            <div class="installation-option">Symplex Green</div>
        </div>
        <div class="installation-option-container">
            <h4 class="installation-option-title">Username</h4>
            <div class="installation-option">preview</div>
        </div>
        <a href="./" download="epsilon.onboarding.A.bin">
            <button class="installation-button">Download Sigma</button>
        </a>
    </div>
</section>