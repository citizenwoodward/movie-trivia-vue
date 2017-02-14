<template>
<div>

 <h3 v-on:click="toggleDetails(question)"> {{question.item}} </h3>
     <div v-show="showDetails"> {{question.answer}}</div>
     <timer></timer>
     
     </div>   
</template>

<script>
import timer from './timer.vue'

export default {
	components: {timer},
	props: ['question'],
  	data () {
    	return {
      		showDetails: false
    		}
  		},
  	methods: {
    toggleDetails(question) {
      this.showDetails = !this.showDetails
      // this.questionsList.push({item:this.question})
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