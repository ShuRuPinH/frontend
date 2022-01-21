<template>
  <select :value="selectedOption" class="form-control" @change="$emit('selected', $event)">
    <option  value="" ref="placeholderOption" >{{ title }}</option>
    <option v-for="(item ,ind) in list" :key="ind" :value="item.id">{{ item.name }}</option>
  </select>
</template>

<script>
export default {
  name: "Select",
  props:{
    title : String,
    list : Array,
    usePlaceholder: Boolean
  },
  computed: {
    selectedOption () {
      return this.selected;
    },

  },
  mounted () {
    const placeholderOption = this.$refs['placeholderOption'];
    if(this.usePlaceholder) {
      placeholderOption.setAttribute('selected', '');
      placeholderOption.setAttribute('disabled', '');
    }
  }


}
</script>

<style scoped>

</style>