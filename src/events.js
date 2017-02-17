import Vue from 'vue'

var Events = new Vue();

 Object.defineProperties(Vue.prototype, {
        $bus: {
            get: function () {
                return Events;
            }
        }
    })