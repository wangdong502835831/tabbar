<template>
 <div>
   <router-view></router-view>
   <maintabbar></maintabbar>
 </div>
    
    
</template>

<script>
import maintabbar from 'components/maintabbar/maintabbar'
export default {
  name: 'App',
  components: {
    maintabbar
  }
}
</script>

<style>

</style>
