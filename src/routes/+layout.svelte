<script>
    import main_logo from "$lib/img/MainLogo.webp"
</script>

<style>
    :root {
    --main-color: #f5f5f5;
    --contrast-color: #0e0e0e;
    --main-accentuation-color: #60e7b9;
    --main-bg-color: #101928;
    --dark-transparency: rgba(0, 0, 0, 0.2);
    --accentuation-transparency: rgba(96, 231, 185, 0.6);
}

:global(body) {
    background-color: var(--main-bg-color);
    color: var(--main-color);
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin: 15px;
    height: 60px;
}

.main-logo {
    height: 60px;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-link {
    color: var(--main-color);
    text-decoration: none;
    font-weight: 600;
    padding: 0 15px;
}
</style>

<header>
    <img src={main_logo} class="main-logo" alt="Main Logo" />
    <nav>
        <a href="/" class="nav-link">Home</a>
        <a href="/install" class="nav-link">Install</a>
        <a href="./simulator.html" class="nav-link">Simulator</a>
        <a href="./aboutus.html" class="nav-link">About Us</a>
    </nav>
</header>

<slot />