<template>
  <header>
    <h1><a href="index.html">Myth Generators</a></h1>
    <h1><a href="javascript:void(0)" class="icon" onclick="mobileNav()"><span class="fa fa-bars"></span></a></h1>
    <nav>
      <div class="navbar" id="navBar">
        <ul>
          <li><a href="./src/pages/fetch-quest.html">Fetch Quest</a></li>
          <li><a href="adventure-gen.html">Adventure</a></li>
          <li><a href="npc-builder.html">NPC Builder</a></li>
          <li><a href="rumors.html">Rumors</a></li>
          <li><a href="name-gen.html">Names</a></li>
          <li><a href="about.html">About</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
export default { name: 'Navbar' }
</script>

<script lang="ts" setup>
</script>

<style scoped>
</style>