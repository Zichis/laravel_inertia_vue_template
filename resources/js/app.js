import './bootstrap';
import "../css/app.css";
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

/** import font awesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/** import icons */
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";

/** import font awesome icon components */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUser, faBars);

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        return pages[`./Pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .component("font-awesome-icon", FontAwesomeIcon)
            .use(plugin)
            .use(ZiggyVue)
            .use(VueSweetalert2)
            .mount(el);
    },
});