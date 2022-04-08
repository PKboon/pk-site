<template>
  <div class="expr-component">
    <div class="expr-header">
      <p class="font-size-18" v-if="company">
        <span class="font-bold font-size-24">{{ position }}</span> <a :href="companyWeb" target="_blank" style="color: var(--red)">{{ company }}</a> - {{ location }}
      </p>
      <span class="font-size-18">{{ period }}</span>
    </div>
    <ul>
      <li class="font-size-18" :key="taskIndex" v-for="(task, taskIndex) in tasks">{{ task }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Experience",
  props: {
    position: String,
    company: String,
    companyWeb: String,
    location: String,
    period: String,
    tasks: Array,
  },
};
</script>

<style scoped>
.expr-component{
    margin-bottom: 20px;
}
ul {
  margin-top: 5px;
  padding-left: 0;
}

li {
  margin: 10px 0;
}

.expr-header {
  padding-left: 4px;
}
</style>
