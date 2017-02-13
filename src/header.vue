<template>
<div>
<div class="message">{{ msg }}</div>
 
     </div>   
</template>

<script>
export default {

  	data () {
    	return {
      		msg: 'I am the title component',
    		}
  		}
}
</script>

<style>
.message {
  color: blue;
  font-size:24px;
  padding:20px;
}
</style>