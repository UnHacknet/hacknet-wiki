<template>
  <span class="rainbow-text">
    <slot />
  </span>
</template>

<style scoped>
.rainbow-text {
  color: transparent;
  background: linear-gradient(90deg, 
    #ff0000, #ff8000, #ffff00, #80ff00,
    #00ff00, #00ff80, #00ffff, #0080ff,
    #0000ff, #8000ff, #ff00ff, #ff0080);
  background-size: 1200% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  text-align: center;
  margin: 2rem 0;
  line-height: 1.2;
  font-size: 10rem;
  font-weight: bold;
  animation: rainbow 2s linear infinite;
}

@keyframes rainbow {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
</style>
