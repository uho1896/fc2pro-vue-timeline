# fc2pro-vue-timeline
Simple timeline component made with Vue.js, support vertical and horizontal layout.

## Install
```javascript
npm install fc2pro-vue-timeline --save

or

yarn add fc2pro-vue-timeline
```

## Options
A set of custom options can be set to control the timeline.

```javascript
props: {
  data: {tyep: Array, required: true}, // timeline data, list of object {title, content}
  direction: {type: String, default: 'vertical'},  // timeline direction, vertical/horizontal
  filling: {type: String, default: '0%'}, // timeline filling, from 0% to 100%
  color: {type: Object, default: () => ({
    title: '#F7941D', // title color
    content: '#F7941D', // content color
    node: '#F7941D', // node color
    line: '#F7941D', // line color
    filling: 'black', // filling color
  })},
  fromStart: {type: Boolean, default: false}, // is node start from the begining of container
}
```

## Usage

### global import
```javascript
import Fc2ProVueTimeline from 'fc2pro-vue-timeline'
Vue.use(Fc2ProVueTimeline);
```

### in component import
```javascript
import {Fc2ProVueTimeline} from 'fc2pro-vue-timeline'

  components: {
    Fc2ProVueTimeline,
    ...
  },
```

### usage
```javascript
<Fc2ProVueTimeline
  :data="data" direction="horizontal" :filling="filling"
/>

<Fc2ProVueTimeline
  :data="data" direction="vertical" :filling="filling"
  v-slot="slot"
>
  <div class="content">{{`日期: ${slot.data.content}`}}</div>
</Fc2ProVueTimeline>
```
