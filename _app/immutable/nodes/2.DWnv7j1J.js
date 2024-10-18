import { T as split_css_unit, H as identity, s as safe_not_equal, e as element, t as text, a as space, c as claim_element, b as children, d as claim_text, f as detach, g as claim_space, p as attr, i as insert_hydration, h as append_hydration, j as set_data, n as noop, w as get_svelte_dataset, U as listen, D as run_all, V as createEventDispatcher, W as destroy_each, X as toggle_class, l as empty, x as create_slot, Y as assign, Z as set_dynamic_element_data, y as update_slot_base, z as get_all_dirty_from_scope, A as get_slot_changes, F as add_render_callback, _ as select_option, $ as select_value, a0 as set_input_value, k as component_subscribe, r as binding_callbacks, a1 as add_flush_callback } from "../chunks/scheduler.2olhEwHt.js";
import { S as SvelteComponent, i as init, b as create_component, d as claim_component, m as mount_component, a as transition_in, t as transition_out, e as destroy_component, g as group_outros, c as check_outros, f as bind, h as create_bidirectional_transition, j as create_in_transition, k as create_out_transition } from "../chunks/index.CP9GwhRj.js";
import { b as base } from "../chunks/paths.DO85oBZT.js";
import { w as writable, r as readonly } from "../chunks/index.DWBBBJzv.js";
const BROWSER = true;
function ensure_array_like(array_like_or_iterator) {
  return (array_like_or_iterator == null ? void 0 : array_like_or_iterator.length) !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}
function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = { $$scope: 1 };
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update)) update[key] = void 0;
  }
  return update;
}
const browser = BROWSER;
function cubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function blur(node, { delay = 0, duration = 400, easing = cubicInOut, amount = 5, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const f = style.filter === "none" ? "" : style.filter;
  const od = target_opacity * (1 - opacity);
  const [value, unit] = split_css_unit(amount);
  return {
    delay,
    duration,
    easing,
    css: (_t, u) => `opacity: ${target_opacity - od * u}; filter: ${f} blur(${u * value}${unit});`
  };
}
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function slide(node, { delay = 0, duration = 400, easing = cubicOut, axis = "y" } = {}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const primary_property = axis === "y" ? "height" : "width";
  const primary_property_value = parseFloat(style[primary_property]);
  const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
  const capitalized_secondary_properties = secondary_properties.map(
    (e) => `${e[0].toUpperCase()}${e.slice(1)}`
  );
  const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
  const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
  const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
  const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
  const border_width_start_value = parseFloat(
    style[`border${capitalized_secondary_properties[0]}Width`]
  );
  const border_width_end_value = parseFloat(
    style[`border${capitalized_secondary_properties[1]}Width`]
  );
  return {
    delay,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;`
  };
}
var Format = /* @__PURE__ */ ((Format2) => {
  Format2["Decimal"] = "decimal";
  Format2["Hexadecimal"] = "hexadecimal";
  Format2["Binary"] = "binary";
  return Format2;
})(Format || {});
var ErrorCode = /* @__PURE__ */ ((ErrorCode2) => {
  ErrorCode2[ErrorCode2["None"] = 0] = "None";
  ErrorCode2[ErrorCode2["NaN"] = 1] = "NaN";
  return ErrorCode2;
})(ErrorCode || {});
const FORMATS = {
  [Format.Decimal]: {
    type: Format.Decimal,
    title: "Decimal",
    prefix: "0d",
    placeholder: "0000",
    code: 10
  },
  [Format.Hexadecimal]: {
    type: Format.Hexadecimal,
    title: "Hexadecimal",
    prefix: "0x",
    transformPrefix: "0x",
    placeholder: "0000",
    code: 16
  },
  [Format.Binary]: {
    type: Format.Binary,
    title: "Binary",
    prefix: "0b",
    transformPrefix: "0b",
    placeholder: "0000",
    code: 2
  }
};
const ERROR_MESSAGES = {
  [ErrorCode.NaN]: "Wrong number."
};
function create_fragment$a(ctx) {
  let span;
  let t0_value = FORMATS[
    /*format*/
    ctx[0]
  ].prefix + "";
  let t0;
  let t1;
  let div;
  return {
    c() {
      span = element("span");
      t0 = text(t0_value);
      t1 = space();
      div = element("div");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, t0_value);
      span_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "text svelte-ouibur");
      attr(div, "class", "splitter");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*format*/
      1 && t0_value !== (t0_value = FORMATS[
        /*format*/
        ctx2[0]
      ].prefix + "")) set_data(t0, t0_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(span);
        detach(t1);
        detach(div);
      }
    }
  };
}
function instance$a($$self, $$props, $$invalidate) {
  let { format } = $$props;
  $$self.$$set = ($$props2) => {
    if ("format" in $$props2) $$invalidate(0, format = $$props2.format);
  };
  return [format];
}
class FormatPreview extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$a, safe_not_equal, { format: 0 });
  }
}
function create_if_block$3(ctx) {
  let button;
  let textContent = `<img src="${base}/icons/settings.png" alt="settings icon"/>`;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      button.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-13src7v") button.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(button, "class", "settings-button hover-opacity svelte-1c0y9ks");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*onSettingsClick*/
          ctx[3]
        );
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(button);
      }
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$9(ctx) {
  let div1;
  let div0;
  let formatpreview;
  let t0;
  let input;
  let input_placeholder_value;
  let t1;
  let t2;
  let button;
  let textContent = `<img src="${base}/icons/save.svg" alt="save icon"/>`;
  let current;
  let mounted;
  let dispose;
  formatpreview = new FormatPreview({ props: { format: (
    /*format*/
    ctx[0]
  ) } });
  let if_block = !/*isInputFocused*/
  ctx[1] && create_if_block$3(ctx);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      create_component(formatpreview.$$.fragment);
      t0 = space();
      input = element("input");
      t1 = space();
      if (if_block) if_block.c();
      t2 = space();
      button = element("button");
      button.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(formatpreview.$$.fragment, div0_nodes);
      t0 = claim_space(div0_nodes);
      input = claim_element(div0_nodes, "INPUT", { class: true, placeholder: true });
      div0_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      if (if_block) if_block.l(div1_nodes);
      t2 = claim_space(div1_nodes);
      button = claim_element(div1_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-wdjlfu") button.innerHTML = textContent;
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input, "class", "input svelte-1c0y9ks");
      attr(input, "placeholder", input_placeholder_value = FORMATS[
        /*format*/
        ctx[0]
      ].placeholder);
      attr(div0, "class", "input-container svelte-1c0y9ks");
      attr(button, "class", "save-button hover-opacity svelte-1c0y9ks");
      attr(div1, "class", "wrapper svelte-1c0y9ks");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      mount_component(formatpreview, div0, null);
      append_hydration(div0, t0);
      append_hydration(div0, input);
      append_hydration(div1, t1);
      if (if_block) if_block.m(div1, null);
      append_hydration(div1, t2);
      append_hydration(div1, button);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            input,
            "input",
            /*onInputUpdate*/
            ctx[2]
          ),
          listen(
            input,
            "focus",
            /*handleInputFocus*/
            ctx[5]
          ),
          listen(
            input,
            "blur",
            /*handleInputBlur*/
            ctx[6]
          ),
          listen(
            button,
            "click",
            /*onSaveClick*/
            ctx[4]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const formatpreview_changes = {};
      if (dirty & /*format*/
      1) formatpreview_changes.format = /*format*/
      ctx2[0];
      formatpreview.$set(formatpreview_changes);
      if (!current || dirty & /*format*/
      1 && input_placeholder_value !== (input_placeholder_value = FORMATS[
        /*format*/
        ctx2[0]
      ].placeholder)) {
        attr(input, "placeholder", input_placeholder_value);
      }
      if (!/*isInputFocused*/
      ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$3(ctx2);
          if_block.c();
          if_block.m(div1, t2);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i(local) {
      if (current) return;
      transition_in(formatpreview.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(formatpreview.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      destroy_component(formatpreview);
      if (if_block) if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$9($$self, $$props, $$invalidate) {
  let { format } = $$props;
  let isInputFocused = false;
  const dispatch = createEventDispatcher();
  const onInputUpdate = (event) => dispatch("inputUpdate", { value: event.target.value });
  const onSettingsClick = () => dispatch("settingsClick");
  const onSaveClick = () => dispatch("saveClick");
  const handleInputFocus = () => $$invalidate(1, isInputFocused = true);
  const handleInputBlur = () => $$invalidate(1, isInputFocused = false);
  $$self.$$set = ($$props2) => {
    if ("format" in $$props2) $$invalidate(0, format = $$props2.format);
  };
  return [
    format,
    isInputFocused,
    onInputUpdate,
    onSettingsClick,
    onSaveClick,
    handleInputFocus,
    handleInputBlur
  ];
}
class Input extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$9, safe_not_equal, { format: 0 });
  }
}
function create_else_block(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(
        /*placeholder*/
        ctx[3]
      );
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(
        span_nodes,
        /*placeholder*/
        ctx[3]
      );
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "text placeholder svelte-9hjtah");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*placeholder*/
      8) set_data(
        t,
        /*placeholder*/
        ctx2[3]
      );
    },
    d(detaching) {
      if (detaching) {
        detach(span);
      }
    }
  };
}
function create_if_block_1$1(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(
        /*error*/
        ctx[2]
      );
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(
        span_nodes,
        /*error*/
        ctx[2]
      );
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "text error svelte-9hjtah");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*error*/
      4) set_data(
        t,
        /*error*/
        ctx2[2]
      );
    },
    d(detaching) {
      if (detaching) {
        detach(span);
      }
    }
  };
}
function create_if_block$2(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(
        /*previewValue*/
        ctx[4]
      );
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(
        span_nodes,
        /*previewValue*/
        ctx[4]
      );
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "text svelte-9hjtah");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*previewValue*/
      16) set_data(
        t,
        /*previewValue*/
        ctx2[4]
      );
    },
    d(detaching) {
      if (detaching) {
        detach(span);
      }
    }
  };
}
function create_fragment$8(ctx) {
  let div;
  let formatpreview;
  let t;
  let current;
  formatpreview = new FormatPreview({ props: { format: (
    /*format*/
    ctx[0]
  ) } });
  function select_block_type(ctx2, dirty) {
    if (!!/*value*/
    ctx2[1]) return create_if_block$2;
    if (!!/*error*/
    ctx2[2]) return create_if_block_1$1;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div = element("div");
      create_component(formatpreview.$$.fragment);
      t = space();
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(formatpreview.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "container svelte-9hjtah");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(formatpreview, div, null);
      append_hydration(div, t);
      if_block.m(div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const formatpreview_changes = {};
      if (dirty & /*format*/
      1) formatpreview_changes.format = /*format*/
      ctx2[0];
      formatpreview.$set(formatpreview_changes);
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div, null);
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(formatpreview.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(formatpreview.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_component(formatpreview);
      if_block.d();
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  let transformedValue;
  let previewValue;
  let { format } = $$props;
  let { value } = $$props;
  let { error } = $$props;
  let { placeholder } = $$props;
  const addConstantPrefix = (value2, targetLength, char) => {
    console.log(value2);
    const curLength = (value2 == null ? void 0 : value2.length) ?? 0;
    if (curLength >= targetLength) return value2;
    const prefixLenght = targetLength - curLength;
    return new Array(prefixLenght).fill(char).join("") + value2;
  };
  $$self.$$set = ($$props2) => {
    if ("format" in $$props2) $$invalidate(0, format = $$props2.format);
    if ("value" in $$props2) $$invalidate(1, value = $$props2.value);
    if ("error" in $$props2) $$invalidate(2, error = $$props2.error);
    if ("placeholder" in $$props2) $$invalidate(3, placeholder = $$props2.placeholder);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*value, format*/
    3) {
      $$invalidate(5, transformedValue = value == null ? void 0 : value.toString(FORMATS[format].code));
    }
    if ($$self.$$.dirty & /*transformedValue*/
    32) {
      $$invalidate(4, previewValue = addConstantPrefix(transformedValue, 8, "0"));
    }
  };
  return [format, value, error, placeholder, previewValue, transformedValue];
}
class ConvertViewer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {
      format: 0,
      value: 1,
      error: 2,
      placeholder: 3
    });
  }
}
const merge = (a, b) => {
  const l = Math.max(a.length, b.length);
  const r = new Array(l);
  for (let i = 0; i < l; i += 1) {
    if (b[i]) {
      r[i] = b[i];
    } else if (a[i]) {
      r[i] = a[i];
    }
  }
  return r;
};
const updateBitData = (byteData, bitData, index) => {
  const newData = [...byteData];
  newData[index] = bitData;
  return newData;
};
function get_each_context$3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  child_ctx[6] = i;
  return child_ctx;
}
function create_each_block$3(ctx) {
  var _a, _b;
  let span;
  let t_value = (
    /*bitData*/
    (((_b = (_a = ctx[4]) == null ? void 0 : _a.label) == null ? void 0 : _b[0]) ?? "_") + ""
  );
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "char svelte-t4h79b");
      toggle_class(
        span,
        "positive",
        /*isBitPositive*/
        ctx[2](
          /*value*/
          ctx[0],
          7 - /*index*/
          ctx[6]
        )
      );
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      var _a2, _b2;
      if (dirty & /*viewerData*/
      2 && t_value !== (t_value = /*bitData*/
      (((_b2 = (_a2 = ctx2[4]) == null ? void 0 : _a2.label) == null ? void 0 : _b2[0]) ?? "_") + "")) set_data(t, t_value);
      if (dirty & /*isBitPositive, value*/
      5) {
        toggle_class(
          span,
          "positive",
          /*isBitPositive*/
          ctx2[2](
            /*value*/
            ctx2[0],
            7 - /*index*/
            ctx2[6]
          )
        );
      }
    },
    d(detaching) {
      if (detaching) {
        detach(span);
      }
    }
  };
}
function create_fragment$7(ctx) {
  let div;
  let each_value = ensure_array_like(
    /*viewerData*/
    ctx[1]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "container svelte-t4h79b");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div, null);
        }
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*isBitPositive, value, viewerData*/
      7) {
        each_value = ensure_array_like(
          /*viewerData*/
          ctx2[1]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$3(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$3(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  let viewerData;
  let { data } = $$props;
  let { value } = $$props;
  const isBitPositive = (value2, index) => (value2 >> index) % 2 === 1;
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2) $$invalidate(3, data = $$props2.data);
    if ("value" in $$props2) $$invalidate(0, value = $$props2.value);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*data*/
    8) {
      $$invalidate(1, viewerData = merge(new Array(8), data).reverse());
    }
  };
  return [value, viewerData, isBitPositive, data];
}
class ByteDataViewer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, { data: 3, value: 0 });
  }
}
function create_if_block$1(ctx) {
  let bytedataviewer;
  let current;
  bytedataviewer = new ByteDataViewer({
    props: {
      value: (
        /*entry*/
        ctx[0].value
      ),
      data: (
        /*entry*/
        ctx[0].byteData
      )
    }
  });
  return {
    c() {
      create_component(bytedataviewer.$$.fragment);
    },
    l(nodes) {
      claim_component(bytedataviewer.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(bytedataviewer, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const bytedataviewer_changes = {};
      if (dirty & /*entry*/
      1) bytedataviewer_changes.value = /*entry*/
      ctx2[0].value;
      if (dirty & /*entry*/
      1) bytedataviewer_changes.data = /*entry*/
      ctx2[0].byteData;
      bytedataviewer.$set(bytedataviewer_changes);
    },
    i(local) {
      if (current) return;
      transition_in(bytedataviewer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(bytedataviewer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(bytedataviewer, detaching);
    }
  };
}
function create_fragment$6(ctx) {
  let convertviewer0;
  let t0;
  let convertviewer1;
  let t1;
  let if_block_anchor;
  let current;
  convertviewer0 = new ConvertViewer({
    props: {
      format: (
        /*entry*/
        ctx[0].preset.input
      ),
      value: (
        /*entry*/
        ctx[0].value
      )
    }
  });
  convertviewer1 = new ConvertViewer({
    props: {
      format: (
        /*entry*/
        ctx[0].preset.output
      ),
      value: (
        /*entry*/
        ctx[0].value
      )
    }
  });
  let if_block = (
    /*entry*/
    ctx[0].byteData && create_if_block$1(ctx)
  );
  return {
    c() {
      create_component(convertviewer0.$$.fragment);
      t0 = space();
      create_component(convertviewer1.$$.fragment);
      t1 = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      claim_component(convertviewer0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(convertviewer1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      mount_component(convertviewer0, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(convertviewer1, target, anchor);
      insert_hydration(target, t1, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const convertviewer0_changes = {};
      if (dirty & /*entry*/
      1) convertviewer0_changes.format = /*entry*/
      ctx2[0].preset.input;
      if (dirty & /*entry*/
      1) convertviewer0_changes.value = /*entry*/
      ctx2[0].value;
      convertviewer0.$set(convertviewer0_changes);
      const convertviewer1_changes = {};
      if (dirty & /*entry*/
      1) convertviewer1_changes.format = /*entry*/
      ctx2[0].preset.output;
      if (dirty & /*entry*/
      1) convertviewer1_changes.value = /*entry*/
      ctx2[0].value;
      convertviewer1.$set(convertviewer1_changes);
      if (
        /*entry*/
        ctx2[0].byteData
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*entry*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      transition_in(convertviewer0.$$.fragment, local);
      transition_in(convertviewer1.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(convertviewer0.$$.fragment, local);
      transition_out(convertviewer1.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(t1);
        detach(if_block_anchor);
      }
      destroy_component(convertviewer0, detaching);
      destroy_component(convertviewer1, detaching);
      if (if_block) if_block.d(detaching);
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let { entry } = $$props;
  $$self.$$set = ($$props2) => {
    if ("entry" in $$props2) $$invalidate(0, entry = $$props2.entry);
  };
  return [entry];
}
class HistoryEntry extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { entry: 0 });
  }
}
function create_dynamic_element(ctx) {
  let svelte_element;
  let span;
  let t0;
  let t1;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
    null
  );
  let svelte_element_levels = [{ control: (
    /*control*/
    ctx[1]
  ) }];
  let svelte_element_data = {};
  for (let i = 0; i < svelte_element_levels.length; i += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  }
  return {
    c() {
      svelte_element = element(
        /*element*/
        ctx[2]
      );
      span = element("span");
      t0 = text(
        /*label*/
        ctx[0]
      );
      t1 = space();
      if (default_slot) default_slot.c();
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*element*/
        (ctx[2] || "null").toUpperCase(),
        { control: true }
      );
      var svelte_element_nodes = children(svelte_element);
      span = claim_element(svelte_element_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(
        span_nodes,
        /*label*/
        ctx[0]
      );
      span_nodes.forEach(detach);
      t1 = claim_space(svelte_element_nodes);
      if (default_slot) default_slot.l(svelte_element_nodes);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "label-text svelte-tfn4y1");
      set_dynamic_element_data(
        /*element*/
        ctx[2]
      )(svelte_element, svelte_element_data);
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      append_hydration(svelte_element, span);
      append_hydration(span, t0);
      append_hydration(svelte_element, t1);
      if (default_slot) {
        default_slot.m(svelte_element, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & /*label*/
      1) set_data(
        t0,
        /*label*/
        ctx2[0]
      );
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        8)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[3],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_dynamic_element_data(
        /*element*/
        ctx2[2]
      )(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [(!current || dirty & /*control*/
      2) && { control: (
        /*control*/
        ctx2[1]
      ) }]));
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(svelte_element);
      }
      if (default_slot) default_slot.d(detaching);
    }
  };
}
function create_fragment$5(ctx) {
  let div;
  let previous_tag = (
    /*element*/
    ctx[2]
  );
  let current;
  let svelte_element = (
    /*element*/
    ctx[2] && create_dynamic_element(ctx)
  );
  return {
    c() {
      div = element("div");
      if (svelte_element) svelte_element.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (svelte_element) svelte_element.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "wrapper svelte-tfn4y1");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (svelte_element) svelte_element.m(div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*element*/
        ctx2[2]
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element(ctx2);
          previous_tag = /*element*/
          ctx2[2];
          svelte_element.c();
          svelte_element.m(div, null);
        } else if (safe_not_equal(
          previous_tag,
          /*element*/
          ctx2[2]
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element(ctx2);
          previous_tag = /*element*/
          ctx2[2];
          svelte_element.c();
          svelte_element.m(div, null);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
        previous_tag = /*element*/
        ctx2[2];
      }
    },
    i(local) {
      if (current) return;
      transition_in(svelte_element, local);
      current = true;
    },
    o(local) {
      transition_out(svelte_element, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (svelte_element) svelte_element.d(detaching);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { label = "" } = $$props;
  let { control = "" } = $$props;
  let { element: element2 = "label" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("label" in $$props2) $$invalidate(0, label = $$props2.label);
    if ("control" in $$props2) $$invalidate(1, control = $$props2.control);
    if ("element" in $$props2) $$invalidate(2, element2 = $$props2.element);
    if ("$$scope" in $$props2) $$invalidate(3, $$scope = $$props2.$$scope);
  };
  return [label, control, element2, $$scope, slots];
}
class InputContainer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { label: 0, control: 1, element: 2 });
  }
}
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i][0];
  child_ctx[6] = list[i][1];
  return child_ctx;
}
function create_each_block$2(ctx) {
  let option;
  let t0_value = (
    /*title*/
    ctx[6] + ""
  );
  let t0;
  let t1;
  let option_value_value;
  return {
    c() {
      option = element("option");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l(nodes) {
      option = claim_element(nodes, "OPTION", {});
      var option_nodes = children(option);
      t0 = claim_text(option_nodes, t0_value);
      t1 = claim_space(option_nodes);
      option_nodes.forEach(detach);
      this.h();
    },
    h() {
      option.__value = option_value_value = /*value*/
      ctx[0];
      set_input_value(option, option.__value);
    },
    m(target, anchor) {
      insert_hydration(target, option, anchor);
      append_hydration(option, t0);
      append_hydration(option, t1);
    },
    p(ctx2, dirty) {
      if (dirty & /*options*/
      4 && t0_value !== (t0_value = /*title*/
      ctx2[6] + "")) set_data(t0, t0_value);
      if (dirty & /*options*/
      4 && option_value_value !== (option_value_value = /*value*/
      ctx2[0])) {
        option.__value = option_value_value;
        set_input_value(option, option.__value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(option);
      }
    }
  };
}
function create_default_slot$1(ctx) {
  let select;
  let mounted;
  let dispose;
  let each_value = ensure_array_like(Object.entries(
    /*options*/
    ctx[2]
  ));
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  }
  return {
    c() {
      select = element("select");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      select = claim_element(nodes, "SELECT", { class: true });
      var select_nodes = children(select);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(select_nodes);
      }
      select_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(select, "class", "select svelte-k00g2t");
      if (
        /*value*/
        ctx[0] === void 0
      ) add_render_callback(() => (
        /*select_change_handler*/
        ctx[4].call(select)
      ));
    },
    m(target, anchor) {
      insert_hydration(target, select, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(select, null);
        }
      }
      select_option(
        select,
        /*value*/
        ctx[0],
        true
      );
      if (!mounted) {
        dispose = [
          listen(
            select,
            "change",
            /*select_change_handler*/
            ctx[4]
          ),
          listen(
            select,
            "change",
            /*handleSelect*/
            ctx[3]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*Object, options*/
      4) {
        each_value = ensure_array_like(Object.entries(
          /*options*/
          ctx2[2]
        ));
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(select, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & /*value, Object, options*/
      5) {
        select_option(
          select,
          /*value*/
          ctx2[0]
        );
      }
    },
    d(detaching) {
      if (detaching) {
        detach(select);
      }
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$4(ctx) {
  let inputcontainer;
  let current;
  inputcontainer = new InputContainer({
    props: {
      label: (
        /*label*/
        ctx[1]
      ),
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(inputcontainer.$$.fragment);
    },
    l(nodes) {
      claim_component(inputcontainer.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(inputcontainer, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const inputcontainer_changes = {};
      if (dirty & /*label*/
      2) inputcontainer_changes.label = /*label*/
      ctx2[1];
      if (dirty & /*$$scope, value, options*/
      517) {
        inputcontainer_changes.$$scope = { dirty, ctx: ctx2 };
      }
      inputcontainer.$set(inputcontainer_changes);
    },
    i(local) {
      if (current) return;
      transition_in(inputcontainer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inputcontainer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(inputcontainer, detaching);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { label = "" } = $$props;
  let { options } = $$props;
  let { value } = $$props;
  const dispatch = createEventDispatcher();
  const handleSelect = () => {
    dispatch("change", value);
  };
  function select_change_handler() {
    value = select_value(this);
    $$invalidate(0, value);
    $$invalidate(2, options);
  }
  $$self.$$set = ($$props2) => {
    if ("label" in $$props2) $$invalidate(1, label = $$props2.label);
    if ("options" in $$props2) $$invalidate(2, options = $$props2.options);
    if ("value" in $$props2) $$invalidate(0, value = $$props2.value);
  };
  return [value, label, options, handleSelect, select_change_handler];
}
class SelectInput extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { label: 1, options: 2, value: 0 });
  }
}
function create_fragment$3(ctx) {
  let div;
  let label;
  let t0;
  let t1;
  let t2;
  let input;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      label = element("label");
      t0 = text("Bit #");
      t1 = text(
        /*index*/
        ctx[1]
      );
      t2 = text(":\n    ");
      input = element("input");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      label = claim_element(div_nodes, "LABEL", { class: true });
      var label_nodes = children(label);
      t0 = claim_text(label_nodes, "Bit #");
      t1 = claim_text(
        label_nodes,
        /*index*/
        ctx[1]
      );
      t2 = claim_text(label_nodes, ":\n    ");
      input = claim_element(label_nodes, "INPUT", { class: true, placeholder: true });
      label_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      input.disabled = /*disabled*/
      ctx[2];
      attr(input, "class", "input svelte-1vf84ei");
      attr(input, "placeholder", "Add uniq name...");
      attr(label, "class", "label svelte-1vf84ei");
      attr(div, "class", "container svelte-1vf84ei");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, label);
      append_hydration(label, t0);
      append_hydration(label, t1);
      append_hydration(label, t2);
      append_hydration(label, input);
      set_input_value(
        input,
        /*value*/
        ctx[0]
      );
      if (!mounted) {
        dispose = [
          listen(
            input,
            "input",
            /*input_input_handler*/
            ctx[4]
          ),
          listen(
            input,
            "input",
            /*handleInputChange*/
            ctx[3]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*index*/
      2) set_data(
        t1,
        /*index*/
        ctx2[1]
      );
      if (dirty & /*disabled*/
      4) {
        input.disabled = /*disabled*/
        ctx2[2];
      }
      if (dirty & /*value*/
      1 && input.value !== /*value*/
      ctx2[0]) {
        set_input_value(
          input,
          /*value*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  const dispatch = createEventDispatcher();
  let { index } = $$props;
  let { value } = $$props;
  let { disabled } = $$props;
  const handleInputChange = () => {
    dispatch("change", { value });
  };
  function input_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }
  $$self.$$set = ($$props2) => {
    if ("index" in $$props2) $$invalidate(1, index = $$props2.index);
    if ("value" in $$props2) $$invalidate(0, value = $$props2.value);
    if ("disabled" in $$props2) $$invalidate(2, disabled = $$props2.disabled);
  };
  return [value, index, disabled, handleInputChange, input_input_handler];
}
class BitDataInput extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { index: 1, value: 0, disabled: 2 });
  }
}
const LOCALSTORAGE_KEY = "app-data";
const INITIAL_STORE = {
  preset: {
    input: Format.Decimal,
    output: Format.Hexadecimal
  },
  history: [],
  interpretation: {
    enabled: false,
    byteData: []
  }
};
let initialStore;
try {
  const cachedData = browser && (localStorage == null ? void 0 : localStorage.getItem(LOCALSTORAGE_KEY)) || "";
  if (cachedData) {
    const data = JSON.parse(cachedData);
    const requiredKeys = /* @__PURE__ */ new Set([
      "history",
      "preset"
    ]);
    const existingKeus = new Set(Object.keys(data));
    if (requiredKeys.isSubsetOf(existingKeus)) {
      initialStore = data;
    }
  }
} catch (err) {
  console.error("Parsing localstorage failed.", err);
} finally {
  if (!initialStore) {
    initialStore = { ...INITIAL_STORE };
  }
}
const appStore = writable({ ...initialStore });
{
  appStore.subscribe((state) => {
    localStorage == null ? void 0 : localStorage.setItem(
      LOCALSTORAGE_KEY,
      JSON.stringify(state)
    );
  });
}
const read = readonly(appStore);
const actions = {
  updateCurrentValue: (value) => {
    appStore.update((state) => {
      const inputFormat = state.preset.input;
      const prefix = FORMATS[inputFormat].transformPrefix ?? "";
      const normalizedNumber = Number(prefix + value);
      const error = isNaN(normalizedNumber) ? ErrorCode.NaN : ErrorCode.None;
      return {
        ...state,
        currentData: normalizedNumber,
        error
      };
    });
  },
  saveToHistory: () => {
    appStore.update((state) => ({
      ...state,
      history: [
        ...state.history,
        {
          preset: { ...state.preset },
          value: state.currentData,
          byteData: state.interpretation.enabled ? state.interpretation.byteData : void 0
        }
      ]
    }));
  },
  clearHistory: () => {
    appStore.update((state) => ({
      ...state,
      history: []
    }));
  },
  updateSettings: (data) => {
    appStore.update((state) => ({
      ...state,
      preset: {
        ...state.preset,
        ...data
      }
    }));
  },
  interpretation: {
    enable: () => {
      appStore.update((state) => ({
        ...state,
        interpretation: {
          ...state.interpretation,
          enabled: true
        }
      }));
    },
    disable: () => {
      appStore.update((state) => ({
        ...state,
        interpretation: {
          ...state.interpretation,
          enabled: false
        }
      }));
    },
    setBitLabel: (value, index) => {
      appStore.update((state) => ({
        ...state,
        interpretation: {
          ...state.interpretation,
          byteData: updateBitData(
            state.interpretation.byteData ?? [],
            { label: value },
            index
          )
        }
      }));
    }
  }
};
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  child_ctx[7] = i;
  return child_ctx;
}
function create_each_block$1(ctx) {
  var _a;
  let div;
  let bitdatainput;
  let t;
  let current;
  bitdatainput = new BitDataInput({
    props: {
      index: (
        /*index*/
        ctx[7]
      ),
      value: (
        /*bitData*/
        ((_a = ctx[5]) == null ? void 0 : _a.label) ?? null
      ),
      disabled: !/*$read*/
      ctx[0].interpretation.enabled
    }
  });
  bitdatainput.$on(
    "change",
    /*handleBitDataChange*/
    ctx[3].bind(
      null,
      /*index*/
      ctx[7]
    )
  );
  return {
    c() {
      div = element("div");
      create_component(bitdatainput.$$.fragment);
      t = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(bitdatainput.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "input-box svelte-rawjgr");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(bitdatainput, div, null);
      append_hydration(div, t);
      current = true;
    },
    p(ctx2, dirty) {
      var _a2;
      const bitdatainput_changes = {};
      if (dirty & /*byteData*/
      2) bitdatainput_changes.value = /*bitData*/
      ((_a2 = ctx2[5]) == null ? void 0 : _a2.label) ?? null;
      if (dirty & /*$read*/
      1) bitdatainput_changes.disabled = !/*$read*/
      ctx2[0].interpretation.enabled;
      bitdatainput.$set(bitdatainput_changes);
    },
    i(local) {
      if (current) return;
      transition_in(bitdatainput.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(bitdatainput.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_component(bitdatainput);
    }
  };
}
function create_default_slot(ctx) {
  let div0;
  let input;
  let input_checked_value;
  let t;
  let div1;
  let current;
  let mounted;
  let dispose;
  let each_value = ensure_array_like(
    /*byteData*/
    ctx[1]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div0 = element("div");
      input = element("input");
      t = space();
      div1 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      input = claim_element(div0_nodes, "INPUT", { type: true });
      div0_nodes.forEach(detach);
      t = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div1_nodes);
      }
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input, "type", "checkbox");
      input.checked = input_checked_value = /*$read*/
      ctx[0].interpretation.enabled;
      attr(div0, "class", "checkbox svelte-rawjgr");
      attr(div1, "class", "inputs-box svelte-rawjgr");
      toggle_class(div1, "disabled", !/*$read*/
      ctx[0].interpretation.enabled);
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      append_hydration(div0, input);
      insert_hydration(target, t, anchor);
      insert_hydration(target, div1, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div1, null);
        }
      }
      current = true;
      if (!mounted) {
        dispose = listen(
          input,
          "click",
          /*handleCheckboxClick*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (!current || dirty & /*$read*/
      1 && input_checked_value !== (input_checked_value = /*$read*/
      ctx2[0].interpretation.enabled)) {
        input.checked = input_checked_value;
      }
      if (dirty & /*byteData, $read, handleBitDataChange*/
      11) {
        each_value = ensure_array_like(
          /*byteData*/
          ctx2[1]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div1, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (!current || dirty & /*$read*/
      1) {
        toggle_class(div1, "disabled", !/*$read*/
        ctx2[0].interpretation.enabled);
      }
    },
    i(local) {
      if (current) return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div0);
        detach(t);
        detach(div1);
      }
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$2(ctx) {
  let div;
  let inputcontainer;
  let current;
  inputcontainer = new InputContainer({
    props: {
      element: "div",
      label: "Byte Interpretation",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      create_component(inputcontainer.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(inputcontainer.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "container svelte-rawjgr");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(inputcontainer, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const inputcontainer_changes = {};
      if (dirty & /*$$scope, $read, byteData*/
      259) {
        inputcontainer_changes.$$scope = { dirty, ctx: ctx2 };
      }
      inputcontainer.$set(inputcontainer_changes);
    },
    i(local) {
      if (current) return;
      transition_in(inputcontainer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inputcontainer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_component(inputcontainer);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let byteData;
  let $read;
  component_subscribe($$self, read, ($$value) => $$invalidate(0, $read = $$value));
  const byteDataPlaceholder = new Array(8);
  const handleCheckboxClick = () => {
    const action = $read.interpretation.enabled ? actions.interpretation.disable : actions.interpretation.enable;
    action();
  };
  const handleBitDataChange = (index, event) => {
    const newLabel = event.detail.value;
    actions.interpretation.setBitLabel(newLabel, index);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$read*/
    1) {
      $$invalidate(1, byteData = merge($read.interpretation.byteData, byteDataPlaceholder));
    }
  };
  return [$read, byteData, handleCheckboxClick, handleBitDataChange];
}
class ByteDataInputs extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
  }
}
function create_fragment$1(ctx) {
  let div1;
  let div0;
  let h3;
  let textContent = "Tranformation Settings";
  let t1;
  let button;
  let t2;
  let selectinput0;
  let updating_value;
  let t3;
  let selectinput1;
  let updating_value_1;
  let t4;
  let bytedatainputs;
  let current;
  let mounted;
  let dispose;
  function selectinput0_value_binding(value) {
    ctx[5](value);
  }
  let selectinput0_props = {
    label: "Input Format",
    options: (
      /*formatOptions*/
      ctx[3]
    )
  };
  if (
    /*input*/
    ctx[0] !== void 0
  ) {
    selectinput0_props.value = /*input*/
    ctx[0];
  }
  selectinput0 = new SelectInput({ props: selectinput0_props });
  binding_callbacks.push(() => bind(selectinput0, "value", selectinput0_value_binding));
  selectinput0.$on(
    "change",
    /*updateSettings*/
    ctx[4]
  );
  function selectinput1_value_binding(value) {
    ctx[6](value);
  }
  let selectinput1_props = {
    label: "Output Format",
    options: (
      /*formatOptions*/
      ctx[3]
    )
  };
  if (
    /*output*/
    ctx[1] !== void 0
  ) {
    selectinput1_props.value = /*output*/
    ctx[1];
  }
  selectinput1 = new SelectInput({ props: selectinput1_props });
  binding_callbacks.push(() => bind(selectinput1, "value", selectinput1_value_binding));
  selectinput1.$on(
    "change",
    /*updateSettings*/
    ctx[4]
  );
  bytedatainputs = new ByteDataInputs({});
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      h3 = element("h3");
      h3.textContent = textContent;
      t1 = space();
      button = element("button");
      t2 = space();
      create_component(selectinput0.$$.fragment);
      t3 = space();
      create_component(selectinput1.$$.fragment);
      t4 = space();
      create_component(bytedatainputs.$$.fragment);
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h3 = claim_element(div0_nodes, "H3", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h3) !== "svelte-1uhkebd") h3.textContent = textContent;
      t1 = claim_space(div0_nodes);
      button = claim_element(div0_nodes, "BUTTON", { class: true });
      children(button).forEach(detach);
      div0_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      claim_component(selectinput0.$$.fragment, div1_nodes);
      t3 = claim_space(div1_nodes);
      claim_component(selectinput1.$$.fragment, div1_nodes);
      t4 = claim_space(div1_nodes);
      claim_component(bytedatainputs.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h3, "class", "text-color title svelte-1786y2z");
      attr(button, "class", "close-btn svelte-1786y2z");
      attr(div0, "class", "title-box svelte-1786y2z");
      attr(div1, "class", "container svelte-1786y2z");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, h3);
      append_hydration(div0, t1);
      append_hydration(div0, button);
      append_hydration(div1, t2);
      mount_component(selectinput0, div1, null);
      append_hydration(div1, t3);
      mount_component(selectinput1, div1, null);
      append_hydration(div1, t4);
      mount_component(bytedatainputs, div1, null);
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*handleCloseClick*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const selectinput0_changes = {};
      if (!updating_value && dirty & /*input*/
      1) {
        updating_value = true;
        selectinput0_changes.value = /*input*/
        ctx2[0];
        add_flush_callback(() => updating_value = false);
      }
      selectinput0.$set(selectinput0_changes);
      const selectinput1_changes = {};
      if (!updating_value_1 && dirty & /*output*/
      2) {
        updating_value_1 = true;
        selectinput1_changes.value = /*output*/
        ctx2[1];
        add_flush_callback(() => updating_value_1 = false);
      }
      selectinput1.$set(selectinput1_changes);
    },
    i(local) {
      if (current) return;
      transition_in(selectinput0.$$.fragment, local);
      transition_in(selectinput1.$$.fragment, local);
      transition_in(bytedatainputs.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(selectinput0.$$.fragment, local);
      transition_out(selectinput1.$$.fragment, local);
      transition_out(bytedatainputs.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      destroy_component(selectinput0);
      destroy_component(selectinput1);
      destroy_component(bytedatainputs);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $read;
  component_subscribe($$self, read, ($$value) => $$invalidate(7, $read = $$value));
  let input = $read.preset.input;
  let output = $read.preset.output;
  const dispatch = createEventDispatcher();
  const handleCloseClick = () => dispatch("close");
  const formatOptions = Object.values(FORMATS).reduce((acc, format) => ({ ...acc, [format.type]: format.title }), {});
  const updateSettings = () => {
    actions.updateSettings({ input, output });
  };
  function selectinput0_value_binding(value) {
    input = value;
    $$invalidate(0, input);
  }
  function selectinput1_value_binding(value) {
    output = value;
    $$invalidate(1, output);
  }
  return [
    input,
    output,
    handleCloseClick,
    formatOptions,
    updateSettings,
    selectinput0_value_binding,
    selectinput1_value_binding
  ];
}
class SettingsPanel extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
}
function create_if_block_1(ctx) {
  let div;
  let button;
  let textContent = "Clear History";
  let button_transition;
  let current;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      button = element("button");
      button.textContent = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-1gqijh") button.textContent = textContent;
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "clear-button svelte-1yzxymj");
      attr(div, "class", "clear-wrapper svelte-1yzxymj");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, button);
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*handleClearHistoryClick*/
          ctx[6]
        );
        mounted = true;
      }
    },
    p: noop,
    i(local) {
      if (current) return;
      if (local) {
        add_render_callback(() => {
          if (!current) return;
          if (!button_transition) button_transition = create_bidirectional_transition(button, blur, { duration: 300 }, true);
          button_transition.run(1);
        });
      }
      current = true;
    },
    o(local) {
      if (local) {
        if (!button_transition) button_transition = create_bidirectional_transition(button, blur, { duration: 300 }, false);
        button_transition.run(0);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (detaching && button_transition) button_transition.end();
      mounted = false;
      dispose();
    }
  };
}
function create_each_block(ctx) {
  let div;
  let historyentry;
  let t;
  let div_intro;
  let div_outro;
  let current;
  historyentry = new HistoryEntry({
    props: { entry: (
      /*historyEntry*/
      ctx[7]
    ) }
  });
  return {
    c() {
      div = element("div");
      create_component(historyentry.$$.fragment);
      t = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(historyentry.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "history-entry svelte-1yzxymj");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(historyentry, div, null);
      append_hydration(div, t);
      current = true;
    },
    p(ctx2, dirty) {
      const historyentry_changes = {};
      if (dirty & /*$read*/
      2) historyentry_changes.entry = /*historyEntry*/
      ctx2[7];
      historyentry.$set(historyentry_changes);
    },
    i(local) {
      if (current) return;
      transition_in(historyentry.$$.fragment, local);
      if (local) {
        add_render_callback(() => {
          if (!current) return;
          if (div_outro) div_outro.end(1);
          div_intro = create_in_transition(div, slide, { duration: 300 });
          div_intro.start();
        });
      }
      current = true;
    },
    o(local) {
      transition_out(historyentry.$$.fragment, local);
      if (div_intro) div_intro.invalidate();
      if (local) {
        div_outro = create_out_transition(div, fade, { duration: 200 });
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_component(historyentry);
      if (detaching && div_outro) div_outro.end();
    }
  };
}
function create_if_block(ctx) {
  let bytedataviewer;
  let current;
  bytedataviewer = new ByteDataViewer({
    props: {
      value: (
        /*$read*/
        ctx[1].currentData
      ),
      data: (
        /*$read*/
        ctx[1].interpretation.byteData
      )
    }
  });
  return {
    c() {
      create_component(bytedataviewer.$$.fragment);
    },
    l(nodes) {
      claim_component(bytedataviewer.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(bytedataviewer, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const bytedataviewer_changes = {};
      if (dirty & /*$read*/
      2) bytedataviewer_changes.value = /*$read*/
      ctx2[1].currentData;
      if (dirty & /*$read*/
      2) bytedataviewer_changes.data = /*$read*/
      ctx2[1].interpretation.byteData;
      bytedataviewer.$set(bytedataviewer_changes);
    },
    i(local) {
      if (current) return;
      transition_in(bytedataviewer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(bytedataviewer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(bytedataviewer, detaching);
    }
  };
}
function create_fragment(ctx) {
  var _a, _b;
  let div4;
  let div1;
  let t0;
  let div0;
  let t1;
  let div2;
  let convertviewer;
  let t2;
  let t3;
  let div3;
  let input;
  let t4;
  let div5;
  let settingspanel;
  let current;
  let if_block0 = (
    /*$read*/
    ctx[1].history.length && create_if_block_1(ctx)
  );
  let each_value = ensure_array_like(
    /*$read*/
    ctx[1].history
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  convertviewer = new ConvertViewer({
    props: {
      format: (
        /*$read*/
        (_b = (_a = ctx[1]) == null ? void 0 : _a.preset) == null ? void 0 : _b.output
      ),
      value: (
        /*$read*/
        ctx[1].currentData
      ),
      placeholder: "helloworld",
      error: ERROR_MESSAGES == null ? void 0 : ERROR_MESSAGES[
        /*$read*/
        ctx[1].error
      ]
    }
  });
  let if_block1 = (
    /*$read*/
    ctx[1].interpretation.enabled && create_if_block(ctx)
  );
  input = new Input({
    props: { format: (
      /*$read*/
      ctx[1].preset.input
    ) }
  });
  input.$on(
    "inputUpdate",
    /*handleInputUpdate*/
    ctx[2]
  );
  input.$on(
    "saveClick",
    /*handleSaveClick*/
    ctx[3]
  );
  input.$on(
    "settingsClick",
    /*handleSettingsOpenClick*/
    ctx[4]
  );
  settingspanel = new SettingsPanel({});
  settingspanel.$on(
    "close",
    /*handleSettingsCloseClick*/
    ctx[5]
  );
  return {
    c() {
      div4 = element("div");
      div1 = element("div");
      if (if_block0) if_block0.c();
      t0 = space();
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t1 = space();
      div2 = element("div");
      create_component(convertviewer.$$.fragment);
      t2 = space();
      if (if_block1) if_block1.c();
      t3 = space();
      div3 = element("div");
      create_component(input.$$.fragment);
      t4 = space();
      div5 = element("div");
      create_component(settingspanel.$$.fragment);
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div1 = claim_element(div4_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (if_block0) if_block0.l(div1_nodes);
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t1 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(convertviewer.$$.fragment, div2_nodes);
      t2 = claim_space(div2_nodes);
      if (if_block1) if_block1.l(div2_nodes);
      div2_nodes.forEach(detach);
      t3 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      claim_component(input.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      t4 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      claim_component(settingspanel.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "history-wrapper svelte-1yzxymj");
      attr(div1, "class", "results svelte-1yzxymj");
      attr(div2, "class", "quick-preview svelte-1yzxymj");
      toggle_class(div2, "blurred", !/*$read*/
      ctx[1].currentData);
      attr(div3, "class", "input-box svelte-1yzxymj");
      attr(div4, "class", "page-container svelte-1yzxymj");
      toggle_class(
        div4,
        "hidden",
        /*isSettingsOpened*/
        ctx[0]
      );
      attr(div5, "class", "settings-container svelte-1yzxymj");
      toggle_class(
        div5,
        "shown",
        /*isSettingsOpened*/
        ctx[0]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div1);
      if (if_block0) if_block0.m(div1, null);
      append_hydration(div1, t0);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div0, null);
        }
      }
      append_hydration(div4, t1);
      append_hydration(div4, div2);
      mount_component(convertviewer, div2, null);
      append_hydration(div2, t2);
      if (if_block1) if_block1.m(div2, null);
      append_hydration(div4, t3);
      append_hydration(div4, div3);
      mount_component(input, div3, null);
      insert_hydration(target, t4, anchor);
      insert_hydration(target, div5, anchor);
      mount_component(settingspanel, div5, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      var _a2, _b2;
      if (
        /*$read*/
        ctx2[1].history.length
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*$read*/
          2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div1, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (dirty & /*$read*/
      2) {
        each_value = ensure_array_like(
          /*$read*/
          ctx2[1].history
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div0, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      const convertviewer_changes = {};
      if (dirty & /*$read*/
      2) convertviewer_changes.format = /*$read*/
      (_b2 = (_a2 = ctx2[1]) == null ? void 0 : _a2.preset) == null ? void 0 : _b2.output;
      if (dirty & /*$read*/
      2) convertviewer_changes.value = /*$read*/
      ctx2[1].currentData;
      if (dirty & /*$read*/
      2) convertviewer_changes.error = ERROR_MESSAGES == null ? void 0 : ERROR_MESSAGES[
        /*$read*/
        ctx2[1].error
      ];
      convertviewer.$set(convertviewer_changes);
      if (
        /*$read*/
        ctx2[1].interpretation.enabled
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*$read*/
          2) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div2, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (!current || dirty & /*$read*/
      2) {
        toggle_class(div2, "blurred", !/*$read*/
        ctx2[1].currentData);
      }
      const input_changes = {};
      if (dirty & /*$read*/
      2) input_changes.format = /*$read*/
      ctx2[1].preset.input;
      input.$set(input_changes);
      if (!current || dirty & /*isSettingsOpened*/
      1) {
        toggle_class(
          div4,
          "hidden",
          /*isSettingsOpened*/
          ctx2[0]
        );
      }
      if (!current || dirty & /*isSettingsOpened*/
      1) {
        toggle_class(
          div5,
          "shown",
          /*isSettingsOpened*/
          ctx2[0]
        );
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block0);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(convertviewer.$$.fragment, local);
      transition_in(if_block1);
      transition_in(input.$$.fragment, local);
      transition_in(settingspanel.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(convertviewer.$$.fragment, local);
      transition_out(if_block1);
      transition_out(input.$$.fragment, local);
      transition_out(settingspanel.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div4);
        detach(t4);
        detach(div5);
      }
      if (if_block0) if_block0.d();
      destroy_each(each_blocks, detaching);
      destroy_component(convertviewer);
      if (if_block1) if_block1.d();
      destroy_component(input);
      destroy_component(settingspanel);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $read;
  component_subscribe($$self, read, ($$value) => $$invalidate(1, $read = $$value));
  let isSettingsOpened = false;
  const handleInputUpdate = (event) => {
    const { value } = event.detail;
    actions.updateCurrentValue(value);
  };
  const handleSaveClick = () => actions.saveToHistory();
  const handleSettingsOpenClick = () => {
    $$invalidate(0, isSettingsOpened = true);
  };
  const handleSettingsCloseClick = () => {
    $$invalidate(0, isSettingsOpened = false);
  };
  const handleClearHistoryClick = () => {
    actions.clearHistory();
  };
  return [
    isSettingsOpened,
    $read,
    handleInputUpdate,
    handleSaveClick,
    handleSettingsOpenClick,
    handleSettingsCloseClick,
    handleClearHistoryClick
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as component
};
