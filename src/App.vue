<template>
    <nav>
        <a href="/" class="logo">MLSheets</a>
        <ul>
            <li><a href="/demo">Demo</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <router-view />
    <footer>
        <p>© 2023 MLSheets. All rights reserved.</p>
    </footer>
</template>

<style lang="scss">
@import './assets/scss/variables.scss';

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 2rem;
    min-height: 3rem;
    background-color: $color-secondary;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin-left: 2rem;
    }

    li:first-child {
        margin-left: 0;
    }

    a {
        font-size: 1rem;
        color: #333;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
}





footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $color-secondary;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    min-height: 3rem;
    margin-top: auto;
}

footer p {
    font-size: 1rem;
    color: #666;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>