<script setup lang="ts">
import NAVIGATIONS from '../commons/configs/navConfig.ts';

const navigations = NAVIGATIONS;

function getImagePath(name: string) {
  return new URL(`../assets/nav-icons/${name}.svg`, import.meta.url).href;
}
// defineProps<{ msg: string }>()

</script>

<template>
  <div class="sidebar">
    <div class="logo-wrap">
      <img src="../assets/logos/AspireLogo.svg" class="logo" alt="aspire logo" />
      <p class="tag-line">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </p>
    </div>
    <nav class="navigation-wrap">
      <div v-for="nav of navigations">
        <img :src="getImagePath(nav.icon)" class="nav-icon" :alt="nav.icon" />
        <RouterLink class="nav-item" :to="nav.route">{{ nav.name }}</RouterLink>
      </div>
    </nav>
  </div>
</template>

<style type="scss" scoped>
.sidebar {
  background-color: #0C365A;
  height: 100%;
  padding: 48px;

  nav {
    text-align: left;
    > div {
      margin-bottom: 62px;

      img.nav-icon {
        margin-right: 16px;
        height: 24px;
        width: 24px;
      }
      a.nav-item {
        color: #FFFFFF;
        font-size: 16px;
        text-decoration: none;
        &.router-link-active {
          color: #01D167;
          font-weight: 700;
        }
      }
    }
  }

  .logo-wrap {
    display: flex;
    flex-direction: column;
    margin-bottom: 81px;
    .logo {
      width: 125px;
      margin-bottom: 19px;
    }
    .tag-line {
      color: rgba(255, 255, 255, 0.3);
      font-size: 15px;
      line-height: 20px;
      text-align: left;
    }
  }
}
</style>
