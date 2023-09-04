<style>
.installation-section {
    background-image: url("$lib/img/HeroBanner.webp");
    background-size: cover;
    height: calc(100vh - 90px);
}

.installation-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    height: calc(80vh - 90px);
    border-radius: 15px;
    background-color: var(--dark-transparency);
    padding: 0px 50px;
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
    font-size: 130%;
    font-weight: 400;
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
}

.installation-button:hover {
    background-color: var(--dark-transparency);
    transition: 0.3s;
}
</style>

<section class="installation-section">
    <div class="installation-container">
        <h2 class="installation-title">Install Sigma</h2>
        <div class="installation-option-container">
            <h4 class="installation-option-title">Edition</h4>
            <div class="installation-option"></div>
        </div>
        <div class="installation-option-container">
            <h4 class="installation-option-title">Version</h4>
            <div class="installation-option"></div>
        </div>
        <div class="installation-option-container">
            <h4 class="installation-option-title">Theme</h4>
            <div class="installation-option"></div>
        </div>
        <div class="installation-option-container">
            <h4 class="installation-option-title">Username</h4>
            <div class="installation-option"></div>
        </div>
        <button class="installation-button">Install Sigma</button>
    </div>
</section>