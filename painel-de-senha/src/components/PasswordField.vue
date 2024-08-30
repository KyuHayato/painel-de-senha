<template>
  <div class="grid-item" id="natural-sciences">
    <h2>{{ nameTeacher }}</h2>
    <h4>{{ nameDiscipline }}</h4>
    <p id="natural-sciences-password-value" class="paragraphDecorate">
      {{ password }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "10",
      nameTeacher: this.propNameTeacher,
      nameDiscipline: this.propNameDiscipline,
    };
  },
  props: {
    propNameTeacher: String,
    propNameDiscipline: String,
  },
};
</script>

<style>
</style>