import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('s-button', Button)
Vue.component('s-icon', Icon)
Vue.component('s-button-group', ButtonGroup)
Vue.component('s-input', Input)
Vue.component('s-row', Row)
Vue.component('s-col', Col)

new Vue({
    el: '#app',
    data: {
        loading: false,
        loading1: true,
        message: 'hello world'
    },
    created() {
        setInterval(()=>{
            // this.message = this.message+'1'
        },3000)
    }
})
