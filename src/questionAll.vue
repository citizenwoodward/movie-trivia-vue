

<template>
<div>

 <h3 v-on:click="toggleDetails(question)"> {{question.item}} </h3>
     <div v-show="showDetails"> {{question.answer}}</div>

     
     </div>   
</template>

<script>
import Events from './events.js';


export default {

	props: [ 'question', 'questionsList'],
  	data () {
    	return {
        newUserQuestion: this.question,
      	showDetails: false
    		}
  		},
  	methods: {
    toggleDetails(question, newUserQuestion) {
      this.showDetails = !this.showDetails;
      this.newUserQuestion = this.question
    
       // console.log(question.item)
       // this.questionsList.push({item:this.question})
       this.$bus.$emit('new-user-question', this.newUserQuestion)
    }
  }	
}
</script>

<style>
.message {
  color: blue;
}

h1 span {
	font-size:12px;
}
</style>