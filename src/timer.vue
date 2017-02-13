<template>
<div>
     <h1> {{hours}} <span> hour </span>: {{minutes}} <span> min </span> : {{seconds}} <span>sec</span></h1>
        <button v-on:click="timer" >start</button>
        <button v-on:click="pause">pause</button>
        <button v-on:click="clear">stop</button>
     </div>   
</template>

<script>
export default {
	props: ['question'],
  	data () {
    	return {
       seconds:0, minutes:0,hours:0
    		}
  		},
  	methods: {
   add : function() {
        this.seconds++;
    if (this.seconds >= 60) {
        this.seconds = 0;
        this.minutes++;
        if (this.minutes >= 60) {
            this.minutes = 0;
            this.hours++;
        }
    }
    
    this.timer();


    },
    timer : function() {
     this.t = setTimeout(this.add, 1000);
  }, 
    pause : function() {
     clearTimeout(this.t);
  },
    clear : function() {
       this.seconds = 0; this.minutes = 0; this.hours = 0;
       clearTimeout(this.t);
    }
  }	
}
</script>

<style>

h1 span {
	font-size:12px;
}
</style>