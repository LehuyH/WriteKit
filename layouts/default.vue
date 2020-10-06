<template>
  <Nuxt />
</template>

<style>
/* Vars */
:root {
  --primary: #714DD2;
  --success: #23D160;
  --danger: #FF3860;
  --warning: #FFDD57;
  --info: #209CEE;
  --link: #3273DC;
  --light: #F5F5F5;
  --dark: #363636;
}

html {
  min-height: 100vh;
}

html, body, #__nuxt, #__layout, .is-page {
  display: flex;
  flex-direction: column;
  flex: 1;
}

* {
  font-family: Montserrat, Roboto, "Segoe UI", Arial, sans-serif !important;
}

li.bullet {
  padding-left: 1rem;
  position: relative;
}

li.bullet::before {
  content: "○";
  font-size: 0.75rem;
  position: absolute;
  left: 0;
  top: 0.25rem;
}
</style>