import { s as safe_not_equal, e as element, c as claim_element, w as get_svelte_dataset, p as attr, i as insert_hydration, n as noop, f as detach, x as create_slot, a as space, g as claim_space, y as update_slot_base, z as get_all_dirty_from_scope, A as get_slot_changes } from "../chunks/scheduler.DQacw1iJ.js";
import { S as SvelteComponent, i as init, b as create_component, d as claim_component, m as mount_component, a as transition_in, t as transition_out, e as destroy_component } from "../chunks/index.D1CR_pH_.js";
import { b as base } from "../chunks/paths.xZSQwouU.js";
const prerender = true;
const _layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  prerender
}, Symbol.toStringTag, { value: "Module" }));
function create_fragment$1(ctx) {
  let div;
  let textContent = `<span class="logo svelte-1tibibq">Interpreter</span> <a class="github-link svelte-1tibibq" href="https://github.com/torolchuk/interpreter" target="_blank"><img class="github-icon svelte-1tibibq" src="${base}/icons/github.png" alt="github icon"/></a>`;
  return {
    c() {
      div = element("div");
      div.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-nd20k7") div.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div, "class", "header svelte-1tibibq");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
class Header extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$1, safe_not_equal, {});
  }
}
function create_fragment(ctx) {
  let header;
  let t;
  let current;
  header = new Header({});
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      create_component(header.$$.fragment);
      t = space();
      if (default_slot) default_slot.c();
    },
    l(nodes) {
      claim_component(header.$$.fragment, nodes);
      t = claim_space(nodes);
      if (default_slot) default_slot.l(nodes);
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert_hydration(target, t, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(header.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
      destroy_component(header, detaching);
      if (default_slot) default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2) $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as component,
  _layout as universal
};
