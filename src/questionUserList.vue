<template>
<div>
   <div class="ques" v-for="question in questionsList">
    	<question :question="question"></question>
    </div>  
 
     </div>   
</template>

<script>
import Events from './events.js';


import question from './question.vue'

export default    {
  components: { question},
  props: [ 'newUserQuestion'],
  	data () {
    	return {
      		showDetails: "false",

      questionsList: [
        {item:"How's it going?"},
        {item:"What's up?"},
        {item: "Where are you from?"},
  ]
    		}
  		},
      mounted() {
        this.$bus.$on('new-user-question', function(newUserQuestion){
         console.log(newUserQuestion.item);
         this.questionsList.push(newUserQuestion)
        }.bind(this))
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