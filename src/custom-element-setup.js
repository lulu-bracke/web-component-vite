import { defineCustomElement } from 'vue'
import SimpleCounter from './components/SimpleCounter.ce.vue'

// Define a custom element using the SimpleCounter Vue component that was imported
const SimpleCounterElement = defineCustomElement(SimpleCounter);

// Define the custom element with the tag name 'simple-counter'
// The tag name is used in the browser to reference the custom element
customElements.define('simple-counter', SimpleCounterElement);