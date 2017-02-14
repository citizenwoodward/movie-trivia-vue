

<template>
<div>

 <h3 v-on:click="toggleDetails(question)"> {{question.item}} </h3>
     <div v-show="showDetails"> {{question.answer}}</div>

     
     </div>   
</template>

<script>
import Events from './events.js'

export default {

	props: ['question', 'questionsList'],
  	data () {
    	return {
      		showDetails: false
    		}
  		},
  	methods: {
    toggleDetails(question) {
      this.showDetails = !this.showDetails
       // console.log(question.item)
       // this.questionsList.push({item:this.question})
       Events.$emit('new-user-question', {item:this.question})
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