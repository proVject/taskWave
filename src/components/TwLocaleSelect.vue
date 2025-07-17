<script setup>

import {loadLocaleMessages} from "../plugins/i18n.js";
import {useI18n} from "vue-i18n";

const { locale } = useI18n();

const onChangeLocale = async (newLocale) => {
  await loadLocaleMessages(newLocale);
  locale.value = newLocale;
}
</script>

<template>
  <select name="locale" class="text-white" v-model="$i18n.locale" @change="onChangeLocale($event.target.value)">
    <option value="en">EN</option>
    <option value="uk">Uk</option>
  </select>
</template>

<style scoped>

</style>