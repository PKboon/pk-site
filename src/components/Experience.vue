<template>
  <div class="expr-component">
    <div class="expr-header">
      <p class="font-size-18">
        <span v-if="position" class="font-bold font-size-24">{{ position }}</span> <span v-if="company" style="white-space:nowrap"><a :href="companyWeb" target="_blank" style="color: var(--red);white-space:nowrap;">{{ company }}</a> - </span>{{ location }}
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
