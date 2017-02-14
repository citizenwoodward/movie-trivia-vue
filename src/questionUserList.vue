<template>
<div>
   <div class="ques" v-for="question in questionsList">
    	<question :question="question"></question>
    </div>  
 
     </div>   
</template>

<script>
import Events from './events.js'

import question from './question.vue'

export default {
  components: { question},
  	data () {
    	return {
      		showDetails: "false",
      questionsList: [
        {item:"How's it going?", answer:"good", id:1},
        {item:"What's up?", answer: "chilling", id:2},
        {item: "Where are you from?", answer:"the world", id:3},
  ]
    		}
  		},
      mounted() {
        Events.$on('new-user-question', function(){
         console.log("hey")
        })
      }
}
</script>

<style>
.message {
  color: blue;
}

.ques {
	    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    background-color: #e3dede;
    color: #000;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>