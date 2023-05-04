<template>
  <svg :class="svgClass" :style="`color:${props.color};`" aria-hidden="true">
    <use class="svg-use" :href="symbolId" :fill="props.color" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
})

const symbolId = computed(() => `#icon-${props.name}`)

const svgClass = computed(() => {
    if (props.className) {
      return `svg-icon ${props.className}`
    }
    return 'svg-icon' 
  })
</script>

<style lang="scss" scope>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.1em;
  fill: currentColor;
  outline: none;
  overflow: hidden;
}
</style>
