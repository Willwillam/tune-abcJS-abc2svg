<template>
  <div class="hello">
    <!-- 桔梗谣 -->
    <div id="balloonFlower"></div>
    <!-- 桔梗谣简谱 -->
    <div name="text/vnd.abc" style="display: none;">
      {{this.balloonFlower}}
    </div>
    <!-- 桔梗谣节拍谱子 -->
    <div class="beat" id="trans-balloonFlower"></div>

    <div style="margin: 40px 0">
      ==========================================================================================  
    </div> 

    <!-- 大鱼 -->
    <div id="whale"></div>
    <!-- 大鱼简谱 -->
    <div name="text/vnd.abc" style="display: none;">
      {{this.whale}}
    </div>
    <!-- 大鱼节拍谱子 -->
    <div class="beat" id="trans-whale"></div>
    <div style="margin: 40px 0">
      ==========================================================================================  
    </div> 

    <!-- 金孔雀轻轻跳 -->
    <div id="peaCock"></div>
    <!-- 金孔雀轻轻跳简谱 -->
    <!-- <div name="text/vnd.abc" style="display: none;">
      {{this.peaCock}}
    </div> -->
    <!-- 金孔雀轻轻跳节拍谱子 -->
    <div class="beat" id="trans-peaCock"></div>
    <div style="margin: 40px 0">
      ==========================================================================================  
    </div> 


    <!-- 樱花 -->
    <div id="sakura"></div>
    <!-- 樱花简谱 -->
    <!-- <div name="text/vnd.abc" style="display: none;">
      {{this.sakura}}
    </div> -->
    <!-- 樱花节拍谱子 -->
    <div class="beat" id="trans-sakura"></div>
    <div style="margin: 40px 0">
      ==========================================================================================  
    </div> 

    <!-- 蜜雪冰城 -->
    <div id="mixue"></div>
    <!-- 蜜雪冰城简谱 -->
    <!-- <div name="text/vnd.abc" style="display: none;">
      {{this.mixue}}
    </div> -->
    <!-- 蜜雪冰城节拍谱子 -->
    <div class="beat" id="trans-mixue"></div>

    <!-- 我和我的祖国 -->
    <!-- <div id="motherland"></div> -->
    <!-- 我和我的祖国简谱 -->
    <!-- <div name="text/vnd.abc" style="display: none;">
      {{this.motherland}}
    </div> -->
    <!-- 我和我的祖国节拍谱子 -->
    <!-- <div class="beat" id="trans-motherland"></div> -->
    <div style="margin: 40px 0">
      ==========================================================================================  
    </div> 
  </div>
</template>

<script>
import abcjs from "abcjs";
import 'abcjs/abcjs-audio.css';
import { abcStr1, abcStr2, abcStr3, abcStr4,abcStr5, abcStr6 } from './tunes'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      balloonFlower: '',
      whale: '',
      mixue: '',
      peaCock:'',
      sakura:'',
      motherland: '',
    }
  },
  methods:{
    transStr(absStr){ 
      let resStr = absStr.replace(/(K:[A-Za-z].*$)/gm, '$1 style=x splitFlag')
      resStr = resStr.replace(/style=[a-zA-Z]+/g, 'style=x')

      let transArr = resStr.split("splitFlag")
      let transStrFirst = transArr[0]
      let transStrSecond = transArr[transArr.length -1]
      transStrSecond = transStrSecond.replace(/[,']/g, '') // 处理低音和高音
      transStrSecond = transStrSecond.replace(/\{[a-gA-G]+\}/g, '') // 处理倚音
      // 对于特殊字符先占位, 再替换
      transStrSecond = transStrSecond.replace(/!f!/g, 'ZZZ0')
      transStrSecond = transStrSecond.replace(/fermata/g, 'ZZZ1')
      transStrSecond = transStrSecond.replace(/!ff!/g, 'ZZZ2')
      transStrSecond = transStrSecond.replace(/!mf!/g, 'ZZZ3')
      transStrSecond = transStrSecond.replace(/!fff!/g, 'ZZZ4')
      transStrSecond = transStrSecond.replace(/[a-gA-G]/g, 'B')
      transStrSecond = transStrSecond.replace(/ZZZ0/g, '!f!')
      transStrSecond = transStrSecond.replace(/ZZZ1/g, 'fermata')
      transStrSecond = transStrSecond.replace(/ZZZ2/g, '!ff!')
      transStrSecond = transStrSecond.replace(/ZZZ3/g, '!mf!')
      transStrSecond = transStrSecond.replace(/ZZZ4/g, '!fff!')
      resStr = transStrFirst + transStrSecond

      return resStr
    },
    renderTune(ele, beatEle,abcStr){
      abcjs.renderAbc(ele ,abcStr);
      let transStr = this.transStr(abcStr)
      // 对于简谱的abcString单独处理
      let jianpuStr = abcStr.replace("L:", '%%jianpu 1\n$&')
      this[ele] = jianpuStr
      // console.log(jianpuStr, 'jianpuStr')
      // 节拍谱
      abcjs.renderAbc(beatEle, transStr, {add_classes: true});
    },
    mixuReander(){
      this.renderTune('mixue','trans-mixue', abcStr1)
    },
    sakuraRender(){
      this.renderTune('sakura','trans-sakura', abcStr2)
    },
    whaleRender(){
      this.renderTune('whale','trans-whale',abcStr3)
    },
    balloonFlowerRender(){
      this.renderTune('balloonFlower','trans-balloonFlower',abcStr4, 'numbered-balloonFlower')
    },
    peaCockRender(){
      this.renderTune('peaCock','trans-peaCock',abcStr5)
    },
    motherlandRender(){
      this.renderTune('motherland','trans-motherland',abcStr6)
    },  
    init(){
      this.mixuReander()
      this.sakuraRender()
      this.whaleRender()
      this.balloonFlowerRender()
      this.peaCockRender()
      this.motherlandRender()
      // window.abcStr1 = abcStr1

    }
  },
  mounted(){
    // this.balloonFlowerStr = abcStr1
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .beat svg .abcjs-stem {
        transform: translateY(3px);
    }

    .beat svg .abcjs-beam-elem{
      transform: translateY(3px);
    }

    .numbered svg .abcjs-clef{
      display: none;
    }

    .numbered svg .abcjs-staff{
      display: none;
    }
    .numbered svg .abcjs-staff-extra{
      display: none;
    }
</style>
