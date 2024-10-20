import { defineComponent } from "vue";
import './index.css';

export default defineComponent({
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  emits: ['increase'],
  setup(props: { count: number }, { emit }) {
    return () => ( <button
      class="counter-button"
      onClick={ () => emit('increase', props.count) }>
      Remote counter: { props.count }
    </button>)
  },
})
