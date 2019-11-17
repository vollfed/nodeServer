<template>
  <div id="app">
    <h2>Bar Chart Example</h2>
    <!-- These are the custom components we'll create -->
    <!-- Values for `my-box` are percentages of the width of the canvas. -->
    <!-- Each bar will take up an equal space of the canvas. -->
    <el-row>
      <el-col :span="12">
        f1
      </el-col>
      <el-col :span="12">
        f2
      </el-col>
    </el-row>
    <el-row>
       <el-col :span="24">
    <my-canvas style="width: 100%; height: 600px;">
      <my-box
        v-for="(obj, index) of chartValues"
        :key="index"
        :x1="((index / chartValues.length) * 100)"
        :x2="((index / chartValues.length) * 100) + (100 / chartValues.length)"
        :y1="100"
        :y2="100 - obj.val"
        :color="obj.color"
        :value="obj.val"
       
      >
      </my-box>
    </my-canvas>
     </el-col>
    </el-row>
  </div>
</template>

<script>
import MyCanvas from './MyCanvas.vue';
import MyBox from './MyBox.vue';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    MyCanvas,
    MyBox
  },

  data () {
    return {
      data:[],
      chartValues: [
        {val: 10, color: 'red'},
        {val: 10, color: '#0f0'},
        {val: 10, color: 'rebeccapurple'},
        //{val: 1, color: 'green'},
        //{val: 28, color: 'blue'},
        //{val: 60, color: 'rgba(150, 100, 0, 0.2)'},
      ]
    }
  },

  // Randomly selects a value to randomly increment or decrement every 16 ms.
  // Not really important, just demonstrates that reactivity still works.
  mounted () {
    let dir = 1;
    let selectedVal = Math.floor(Math.random() * this.chartValues.length);
    var foo =1;
    setInterval(() => {
      
      axios.get('http://localhost:8081/get')
      .then(response=>{debugger; this.data = response.data; console.log("1"); this.chartValues[1].val=response.data.count})
      .catch(err=>{debugger; console.log("2");});

      
      
      // if (Math.random() > 0.995) dir *= -1;
      var goo =1;
      // if (Math.random() > 0.99) selectedVal = Math.floor(Math.random() * this.chartValues.length);
      debugger;
      console.log("foo");
      // this.chartValues[selectedVal].val = 
      // this.chartValues[selectedVal].val = Math.min(Math.max(this.chartValues[selectedVal].val + dir * 0.5, 0), 100);
      foo++;
    }, 1000);
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

#app {
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
}
</style>