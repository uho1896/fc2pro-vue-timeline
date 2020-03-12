import Fc2ProVueTimeline from './src/components/Fc2ProVueTimeline.vue'

// Export components
const Components = {
  Fc2ProVueTimeline
}

const Fc2ProVueTimelinePlugin = {
  install (Vue) {
    Object.keys(Components).forEach((name) => {
      Vue.component(name, Components[name])
    })
  }
}

// Export as a plugin
export default Fc2ProVueTimelinePlugin

// Export as individual components
export {
  Fc2ProVueTimeline
}