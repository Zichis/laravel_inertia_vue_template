import './bootstrap';
import "../css/app.css";
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";

/** import font awesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/** import icons */
import { faUser } from "@fortawesome/free-solid-svg-icons";

/** import font awesome icon components */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUser);

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
            .mount(el);
    },
});