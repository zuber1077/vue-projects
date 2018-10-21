<template>
<div>
  <panel title="Youtube Video">
    <youtube :video-id="youtubeId" :player-width="800" :player-height="330"></youtube>
  </panel>
</div>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>

</style>
