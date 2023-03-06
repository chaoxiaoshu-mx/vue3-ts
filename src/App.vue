<!--
 * @Author: chaoxiaoshu-mx leukotrichia@163.com
 * @Date: 2023-03-05 18:42:45
 * @LastEditors: chaoxiaoshu-mx leukotrichia@163.com
 * @LastEditTime: 2023-03-06 14:43:24
 * @FilePath: \my-vue-app\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { useI18n } from 'vue-i18n';
const locale = useI18n();
function changeLocale(lang) {
  locale.value = lang;
  localStorage.setItem('lang', lang);   // 存入缓存
  // window.location.reload();    // 刷新页面



}


</script>

<template>
  <div>
    <button @click="changeLocale('zh')">中文</button>
    <button @click="changeLocale('en')">英文</button>
    <a href="https://vitejs.dev" target="_blank">
    </a>
    <a href="https://vuejs.org/" target="_blank">
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
