<script>
    import banner from "$lib/img/HeroBanner.webp"
    import logo from "$lib/img/MainLogo.webp"
</script>

<style>
.hero-section {
    background-image: url({banner});
    background-size: cover;
    height: calc(100vh - 90px);
}

.hero-logo {
    position: absolute;
    right: 20px;
    bottom: calc(45px + 20px);
    height: 100px;
    margin: 0;
    padding: 0;   
}

.hero-description {
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-size: 2.4rem;
    font-weight: 600;
    color: var(--main-bg-color);
    margin: 0;
    padding: 0;
}

/*--------------------------------------------------------*/

.features-section {
    /*display: flex;
    flex-direction: column;
    justify-content: space-between;*/
    margin: 0vw 3vw;
    height: 100%;
}

.features-title {
    font-size: 3rem;
    font-weight: 600;
    color: var(--main-color);
    margin: 0;
    padding: 0;
}

.features-title-bg {
    position: relative;
    width: fit-content;
    height: fit-content;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);
    padding: 25px;
    border-radius: 8px;
    background-color: var(--dark-transparency);
}

.features-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding-inline-start: 0px;
    top: calc(100px + 30px + 50px);
}

.features-list-items {
    text-decoration: none;
    list-style: none;
    border-radius: 8px;
    background-color: var(--dark-transparency);
    width: 18vw;
    height: 18vw;
    margin-bottom: 6vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.features-list-items:hover {
    background-color: var(--accentuation-transparency);
    transition: 0.3s;
}

.features-list-items-title {
    font-size: 150%;
    font-weight: 600;
    color: var(--main-color);
    margin: 0px 40px;
    margin-top: 60px;
    padding: 0;
    text-align: center;
}

.features-list-items-description {
    font-size: 100%;
    font-weight: 400;
    color: var(--main-color);
    margin: 0px 40px;
    margin-bottom: 60px;
    padding: 0;
    text-align: justify;
}
</style>

<section class="hero-section">
    <img src={logo} class="hero-logo" alt="Logo" />
    <h3 class="hero-description">The future of calculation</h3>
</section>
<section class="features-section">
    <div class="features-title-bg">
        <h2 class="features-title">Sigma Features</h2>
    </div>
    <ul class="features-list">
        <li class="features-list-items">
            <h4 class="features-list-items-title">Enhanced Python</h4>
            <p class="features-list-items-description">Sigma adds to Python new modules like os or ulab</p>
        </li>
        <li class="features-list-items">
            <h4 class="features-list-items-title">Themes</h4>
            <p class="features-list-items-description">Sigma has a variety of themes to allow you to have the best experience with your numworks</p>
        </li>
        <li class="features-list-items">
            <h4 class="features-list-items-title">Gameboy</h4>
            <p class="features-list-items-description">Sigma integrates natively a GameBoy emulator to allow you to run any .gb file</p>
        </li>
        <li class="features-list-items">
            <h4 class="features-list-items-title">Customizable</h4>
            <p class="features-list-items-description">Sigma also integrates a ton of new settings to improve th user experience</p>
        </li>
    </ul>
    <ul class="features-list">
        <li class="features-list-items">
            <h4 class="features-list-items-title">Symbolic Calculation</h4>
            <p class="features-list-items-description">Symbolic computation was removed from Epsilon. Sigma reintroduces that feature.</p>
        </li>
        <li class="features-list-items">
            <h4 class="features-list-items-title">Dual Boot</h4>
            <p class="features-list-items-description">Sigma uses Upsilon's bootloader, which allows you to have up to 3 partitions to boot on. </p>
        </li>
        <li class="features-list-items">
            <h4 class="features-list-items-title">Protection against lock</h4>
            <p class="features-list-items-description">The custom bootloader prevents you to update your calculator towards an OS that lock your calculator</p>
        </li>
        <li class="features-list-items">
            <h4 class="features-list-items-title">Plenty of other features</h4>
            <p class="features-list-items-description">Check the releases to see all the features</p>
        </li>
    </ul>
</section>