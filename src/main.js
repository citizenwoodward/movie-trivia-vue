import Vue from 'vue'

import titleSect from './header.vue'
import questionUserList from './questionUserList.vue'
import questionsAllList from './questionsAllList.vue'

var appVue = new Vue({
  el: '#App',
  components: { questionUserList, titleSect, questionsAllList },
  data: {
      question: ''
  },
    methods: {
        handleMessage: function(question) {
          // this.questionsList.push({item:this.question})
           console.log(question)
        }
    }
    
});


