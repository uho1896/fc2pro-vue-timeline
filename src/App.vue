<template>
  <div id="app">
    <Fc2ProVueTimeline
      :data="data" direction="horizontal" :filling="filling"
    />

    <Fc2ProVueTimeline
      :data="data" direction="vertical" :filling="filling"
      v-slot="slot"
    >
      <div class="content">{{`日期: ${slot.data.content}`}}</div>
    </Fc2ProVueTimeline>
  </div>
</template>

<script>
import Fc2ProVueTimeline from './components/Fc2ProVueTimeline'

export default {
  name: 'App',
  components: {
    Fc2ProVueTimeline,
  },
  data() {
    return {
      data: [
        {
          title: '春节',
          content: '2020-01-25'
        },
        {
          title: '元宵',
          content: '2020-02-08'
        },
        {
          title: '雨水',
          content: '2020-02-19'
        },
        {
          title: '惊蛰',
          content: '2020-03-05'
        },
        {
          title: '清明',
          content: '2020-04-04'
        },
        {
          title: '谷雨',
          content: '2020-04-19'
        },
      ],
      direction: 'horizontal',
      filling: '50%',
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
.content {
  word-break: keep-all;
  font-size: 2vw;
}
</style>
