import { defineCustomElement } from 'vue'
import SimpleCounter from './components/SimpleCounter.ce.vue'

const SimpleCounterElement = defineCustomElement(SimpleCounter);
customElements.define('simple-counter', SimpleCounterElement);