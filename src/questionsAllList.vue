<template>
<div>
   <input class="inputQues" v-model="newQuestion" v-on:keyup.enter="addNewQuestion" placeholder="Create a new question">
   <div class="ques" v-for="question in questions">
    	<questionAll  :question="question"></questionAll>
    </div>  
 
     </div>   
</template>

<script>
import questionAll from './questionAll.vue'

export default {
  props: ['question'],
  components: { questionAll},
  	data () {
    	return {
          newQuestion: '',
      		showDetails: "false",
          questions: [
            {item: "How's it going?", answer:"good"},
            {item: "What's up?", answer: "chilling"},
            {item: "Where are you from?", answer:"the world"},
            {item: "How many school books do you own?"},
            {item: "Favourite flavour of ice cream? "},
            {item: "Best brand of shoe?"},
            {item: "How does a bird fly?"}
          ]
    		}
  		},
    methods: {
      addNewQuestion: function () {
      this.questions.push({item:this.newQuestion})
      this.newQuestion = ''
    }
    }  
}
</script>

<style>

.ques {
	  display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    background-color: #e3dede;
    color: #000;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>