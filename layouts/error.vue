<template lang='pug'>
  div
    h1(v-if='error.statusCode === 404') Страница не найдена
    h1(v-else) Произошла ошибка
    nuxt-link(to='/') Вернуться на главную
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.error);
  },
};
</script>
