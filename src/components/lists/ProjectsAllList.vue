<template>
  <div v-if="loading" class="loader"></div>
  <div v-else><h2 >Проектов: {{fromParent.length}} шт.</h2>
    <div @click="$emit('openprj',  item)" class="sticker-left sticker-info text-center" v-for="(item,id) in fromParent"
         :key="id" :value="item" :data-sticker="item.name">
      <ProjectListItem :item="item"/>

    </div>
  </div>
</template>

<script>

import ProjectListItem from "@/components/items/ProjectListItem";

export default {
  name: "ProjectsAllList",
  components: {ProjectListItem},
  data() {
    return {
      loading: true
    }
  },

  props: {
    fromParent: []
  },
  mounted() {
    this.checkData()
  },
  updated() {
    this.checkData()
  },
  methods: {
    checkData() {
      if (this.fromParent.length === 0 || this.fromParent[0].prefix) {
        this.loading = false
      } else
        setTimeout(() => {
          this.loading = true
          this.checkData();
        }, 300)


    }
  }
}
</script>

<style scoped>

</style>