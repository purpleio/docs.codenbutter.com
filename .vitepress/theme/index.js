import "./styles/index.css";
import { h, watch } from "vue";
import { VPTheme } from "@subicura/vitepress-theme";
import {
  preferComposition,
  preferSFC,
  filterHeadersByPreference,
} from "./components/preferences";
import zoom from "medium-zoom";

export default Object.assign({}, VPTheme, {
  Layout: () => {
    return h(VPTheme.Layout, null, {});
  },
  enhanceApp({ app, router }) {
    app.provide("prefer-composition", preferComposition);
    app.provide("prefer-sfc", preferSFC);
    app.provide("filter-headers", filterHeadersByPreference);

    // medium-zoom
    if (globalThis && globalThis.window) {
      let z = null;
      watch(router.route, () => {
        setTimeout(function () {
          if (z) {
            z.detach();
          }
          z = zoom(".vt-doc :not(a, a > picture) > img");
        }, 1000);
      });
    }
  },
});
