import Vue from 'vue'

import titleSect from './header.vue'
import questionUserList from './questionUserList.vue'
import questionsAllList from './questionsAllList.vue'

new Vue({
  el: '#App',
  components: { questionUserList, titleSect, questionsAllList },
  data: {
      
  }
})