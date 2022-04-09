<template>
<div class="callout-component">
  <div class="callout-header">
    <p class="font-size-18" style="text-decoration:underline;">{{ title }}</p>
    <p>{{ body }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "Callout",
  props: {
    title: String,
    body: String
  },
};
</script>

<style scoped>
.callout-component {
  padding: .75rem 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  border: 1px solid var(--footer-color);
  border-left-width: 0.25rem;
  border-radius: 0.25rem;
  border-left-color: var(--red);
}
</style>
