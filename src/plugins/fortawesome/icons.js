import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  install(app) {
    app.component('fa-icon', FontAwesomeIcon)
  },
}
