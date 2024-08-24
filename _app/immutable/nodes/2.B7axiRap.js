import { T as split_css_unit, s as safe_not_equal, e as element, t as text, a as space, c as claim_element, b as children, d as claim_text, f as detach, g as claim_space, p as attr, i as insert_hydration, h as append_hydration, j as set_data, n as noop, w as get_svelte_dataset, U as listen, D as run_all, V as createEventDispatcher, x as create_slot, y as update_slot_base, z as get_all_dirty_from_scope, A as get_slot_changes, F as add_render_callback, W as select_option, X as destroy_each, Y as select_value, Z as set_input_value, r as binding_callbacks, _ as add_flush_callback, k as component_subscribe, $ as toggle_class } from "../chunks/scheduler.DQacw1iJ.js";
import { S as SvelteComponent, i as init, b as create_component, d as claim_component, m as mount_component, a as transition_in, t as transition_out, e as destroy_component, f as bind, c as check_outros, h as create_bidirectional_transition, g as group_outros } from "../chunks/index.D1CR_pH_.js";
import { w as writable, r as readonly } from "../chunks/index.Bai71yHR.js";
import { b as base } from "../chunks/paths.2Fy-cCs7.js";
const BROWSER = true;
function ensure_array_like(array_like_or_iterator) {
  return (array_like_or_iterator == null ? void 0 : array_like_or_iterator.length) !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}
const browser = BROWSER;
function cubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
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
function create_fragment$7(ctx) {
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
function instance$7($$self, $$props, $$invalidate) {
  let { format } = $$props;
  $$self.$$set = ($$props2) => {
    if ("format" in $$props2) $$invalidate(0, format = $$props2.format);
  };
  return [format];
}
class FormatPreview extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, { format: 0 });
  }
}
function create_if_block$1(ctx) {
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
      if (get_svelte_dataset(button) !== "svelte-dut131") button.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(button, "class", "settings-button svelte-1hxd85j");
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
function create_fragment$6(ctx) {
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
  ctx[1] && create_if_block$1(ctx);
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
      if (get_svelte_dataset(button) !== "svelte-80yy6o") button.innerHTML = textContent;
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input, "class", "input svelte-1hxd85j");
      attr(input, "placeholder", input_placeholder_value = FORMATS[
        /*format*/
        ctx[0]
      ].placeholder);
      attr(div0, "class", "input-container svelte-1hxd85j");
      attr(button, "class", "save-button svelte-1hxd85j");
      attr(div1, "class", "wrapper svelte-1hxd85j");
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
          if_block = create_if_block$1(ctx2);
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
function instance$6($$self, $$props, $$invalidate) {
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
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { format: 0 });
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
function create_if_block_1(ctx) {
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
function create_if_block(ctx) {
  let span;
  let t_value = (
    /*value*/
    ctx[1].toString(FORMATS[
      /*format*/
      ctx[0]
    ].code) + ""
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
      attr(span, "class", "text svelte-9hjtah");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*value, format*/
      3 && t_value !== (t_value = /*value*/
      ctx2[1].toString(FORMATS[
        /*format*/
        ctx2[0]
      ].code) + "")) set_data(t, t_value);
    },
    d(detaching) {
      if (detaching) {
        detach(span);
      }
    }
  };
}
function create_fragment$5(ctx) {
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
    ctx2[1]) return create_if_block;
    if (!!/*error*/
    ctx2[2]) return create_if_block_1;
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
function instance$5($$self, $$props, $$invalidate) {
  let { format } = $$props;
  let { value } = $$props;
  let { error } = $$props;
  let { placeholder } = $$props;
  $$self.$$set = ($$props2) => {
    if ("format" in $$props2) $$invalidate(0, format = $$props2.format);
    if ("value" in $$props2) $$invalidate(1, value = $$props2.value);
    if ("error" in $$props2) $$invalidate(2, error = $$props2.error);
    if ("placeholder" in $$props2) $$invalidate(3, placeholder = $$props2.placeholder);
  };
  return [format, value, error, placeholder];
}
class ConvertViewer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {
      format: 0,
      value: 1,
      error: 2,
      placeholder: 3
    });
  }
}
function create_fragment$4(ctx) {
  let convertviewer0;
  let t;
  let convertviewer1;
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
  return {
    c() {
      create_component(convertviewer0.$$.fragment);
      t = space();
      create_component(convertviewer1.$$.fragment);
    },
    l(nodes) {
      claim_component(convertviewer0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(convertviewer1.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(convertviewer0, target, anchor);
      insert_hydration(target, t, anchor);
      mount_component(convertviewer1, target, anchor);
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
    },
    i(local) {
      if (current) return;
      transition_in(convertviewer0.$$.fragment, local);
      transition_in(convertviewer1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(convertviewer0.$$.fragment, local);
      transition_out(convertviewer1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
      destroy_component(convertviewer0, detaching);
      destroy_component(convertviewer1, detaching);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { entry } = $$props;
  $$self.$$set = ($$props2) => {
    if ("entry" in $$props2) $$invalidate(0, entry = $$props2.entry);
  };
  return [entry];
}
class HistoryEntry extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { entry: 0 });
  }
}
function create_fragment$3(ctx) {
  let div;
  let label_1;
  let span;
  let t0;
  let t1;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    null
  );
  return {
    c() {
      div = element("div");
      label_1 = element("label");
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
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      label_1 = claim_element(div_nodes, "LABEL", { control: true });
      var label_1_nodes = children(label_1);
      span = claim_element(label_1_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(
        span_nodes,
        /*label*/
        ctx[0]
      );
      span_nodes.forEach(detach);
      t1 = claim_space(label_1_nodes);
      if (default_slot) default_slot.l(label_1_nodes);
      label_1_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "label-text svelte-tfn4y1");
      attr(
        label_1,
        "control",
        /*control*/
        ctx[1]
      );
      attr(div, "class", "wrapper svelte-tfn4y1");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, label_1);
      append_hydration(label_1, span);
      append_hydration(span, t0);
      append_hydration(label_1, t1);
      if (default_slot) {
        default_slot.m(label_1, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*label*/
      1) set_data(
        t0,
        /*label*/
        ctx2[0]
      );
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[2],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*control*/
      2) {
        attr(
          label_1,
          "control",
          /*control*/
          ctx2[1]
        );
      }
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
        detach(div);
      }
      if (default_slot) default_slot.d(detaching);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { label = "" } = $$props;
  let { control = "" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("label" in $$props2) $$invalidate(0, label = $$props2.label);
    if ("control" in $$props2) $$invalidate(1, control = $$props2.control);
    if ("$$scope" in $$props2) $$invalidate(2, $$scope = $$props2.$$scope);
  };
  return [label, control, $$scope, slots];
}
class InputContainer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { label: 0, control: 1 });
  }
}
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i][0];
  child_ctx[6] = list[i][1];
  return child_ctx;
}
function create_each_block$1(ctx) {
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
function create_default_slot(ctx) {
  let select;
  let mounted;
  let dispose;
  let each_value = ensure_array_like(Object.entries(
    /*options*/
    ctx[2]
  ));
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
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
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
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
function create_fragment$2(ctx) {
  let inputcontainer;
  let current;
  inputcontainer = new InputContainer({
    props: {
      label: (
        /*label*/
        ctx[1]
      ),
      $$slots: { default: [create_default_slot] },
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
function instance$2($$self, $$props, $$invalidate) {
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
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { label: 1, options: 2, value: 0 });
  }
}
const INITIAL_STORE = {
  preset: {
    input: Format.Decimal,
    output: Format.Hexadecimal
  },
  history: []
};
let initialStore;
const LOCALSTORAGE_KEY = "app-data";
try {
  console.log(browser);
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
const storeActions = {
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
          value: state.currentData
        }
      ]
    }));
  },
  updateSettings: (data) => {
    console.log(data);
    appStore.update((state) => ({
      ...state,
      preset: {
        ...state.preset,
        ...data
      }
    }));
  }
};
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
  let current;
  let mounted;
  let dispose;
  function selectinput0_value_binding(value) {
    ctx[6](value);
  }
  let selectinput0_props = {
    label: "Input Format",
    options: (
      /*formatOptions*/
      ctx[4]
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
    ctx[5]
  );
  function selectinput1_value_binding(value) {
    ctx[7](value);
  }
  let selectinput1_props = {
    label: "Output Format",
    options: (
      /*formatOptions*/
      ctx[4]
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
    ctx[5]
  );
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
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h3 = claim_element(div0_nodes, "H3", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h3) !== "svelte-1m49p0b") h3.textContent = textContent;
      t1 = claim_space(div0_nodes);
      button = claim_element(div0_nodes, "BUTTON", { class: true });
      children(button).forEach(detach);
      div0_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      claim_component(selectinput0.$$.fragment, div1_nodes);
      t3 = claim_space(div1_nodes);
      claim_component(selectinput1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h3, "class", "text-color svelte-11q5eyt");
      attr(button, "class", "close-btn svelte-11q5eyt");
      attr(div0, "class", "title-box svelte-11q5eyt");
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
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*handleCloseClick*/
          ctx[3]
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
      current = true;
    },
    o(local) {
      transition_out(selectinput0.$$.fragment, local);
      transition_out(selectinput1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      destroy_component(selectinput0);
      destroy_component(selectinput1);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $readonlyStore;
  const readonlyStore = readonly(appStore);
  component_subscribe($$self, readonlyStore, (value) => $$invalidate(8, $readonlyStore = value));
  let input = $readonlyStore.preset.input;
  let output = $readonlyStore.preset.output;
  const dispatch = createEventDispatcher();
  const handleCloseClick = () => dispatch("close");
  const formatOptions = Object.values(FORMATS).reduce((acc, format) => ({ ...acc, [format.type]: format.title }), {});
  const updateSettings = () => {
    storeActions.updateSettings({ input, output });
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
    readonlyStore,
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
function create_each_block(ctx) {
  let div;
  let historyentry;
  let t;
  let div_transition;
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
      attr(div, "class", "history-entry svelte-uyfol");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(historyentry, div, null);
      append_hydration(div, t);
      current = true;
    },
    p(ctx2, dirty) {
      const historyentry_changes = {};
      if (dirty & /*$readonlyStore*/
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
          if (!div_transition) div_transition = create_bidirectional_transition(div, blur, { duration: 300 }, true);
          div_transition.run(1);
        });
      }
      current = true;
    },
    o(local) {
      transition_out(historyentry.$$.fragment, local);
      if (local) {
        if (!div_transition) div_transition = create_bidirectional_transition(div, blur, { duration: 300 }, false);
        div_transition.run(0);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_component(historyentry);
      if (detaching && div_transition) div_transition.end();
    }
  };
}
function create_fragment(ctx) {
  var _a, _b;
  let div4;
  let div1;
  let div0;
  let t0;
  let div2;
  let convertviewer;
  let t1;
  let div3;
  let input;
  let t2;
  let div5;
  let settingspanel;
  let current;
  let each_value = ensure_array_like(
    /*$readonlyStore*/
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
        /*$readonlyStore*/
        (_b = (_a = ctx[1]) == null ? void 0 : _a.preset) == null ? void 0 : _b.output
      ),
      value: (
        /*$readonlyStore*/
        ctx[1].currentData
      ),
      placeholder: "helloworld",
      error: ERROR_MESSAGES == null ? void 0 : ERROR_MESSAGES[
        /*$readonlyStore*/
        ctx[1].error
      ]
    }
  });
  input = new Input({
    props: {
      format: (
        /*$readonlyStore*/
        ctx[1].preset.input
      )
    }
  });
  input.$on(
    "inputUpdate",
    /*handleInputUpdate*/
    ctx[3]
  );
  input.$on(
    "saveClick",
    /*handleSaveClick*/
    ctx[4]
  );
  input.$on(
    "settingsClick",
    /*handleSettingsOpenClick*/
    ctx[5]
  );
  settingspanel = new SettingsPanel({});
  settingspanel.$on(
    "close",
    /*handleSettingsCloseClick*/
    ctx[6]
  );
  return {
    c() {
      div4 = element("div");
      div1 = element("div");
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t0 = space();
      div2 = element("div");
      create_component(convertviewer.$$.fragment);
      t1 = space();
      div3 = element("div");
      create_component(input.$$.fragment);
      t2 = space();
      div5 = element("div");
      create_component(settingspanel.$$.fragment);
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div1 = claim_element(div4_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t0 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(convertviewer.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach);
      t1 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      claim_component(input.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      t2 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      claim_component(settingspanel.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "history-wrapper svelte-uyfol");
      attr(div1, "class", "results svelte-uyfol");
      attr(div2, "class", "quick-preview svelte-uyfol");
      toggle_class(div2, "blurred", !/*$readonlyStore*/
      ctx[1].currentData);
      attr(div3, "class", "input-box svelte-uyfol");
      attr(div4, "class", "page-container svelte-uyfol");
      toggle_class(
        div4,
        "hidden",
        /*isSettingsOpened*/
        ctx[0]
      );
      attr(div5, "class", "settings-container svelte-uyfol");
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
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div0, null);
        }
      }
      append_hydration(div4, t0);
      append_hydration(div4, div2);
      mount_component(convertviewer, div2, null);
      append_hydration(div4, t1);
      append_hydration(div4, div3);
      mount_component(input, div3, null);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, div5, anchor);
      mount_component(settingspanel, div5, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      var _a2, _b2;
      if (dirty & /*$readonlyStore*/
      2) {
        each_value = ensure_array_like(
          /*$readonlyStore*/
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
      if (dirty & /*$readonlyStore*/
      2) convertviewer_changes.format = /*$readonlyStore*/
      (_b2 = (_a2 = ctx2[1]) == null ? void 0 : _a2.preset) == null ? void 0 : _b2.output;
      if (dirty & /*$readonlyStore*/
      2) convertviewer_changes.value = /*$readonlyStore*/
      ctx2[1].currentData;
      if (dirty & /*$readonlyStore*/
      2) convertviewer_changes.error = ERROR_MESSAGES == null ? void 0 : ERROR_MESSAGES[
        /*$readonlyStore*/
        ctx2[1].error
      ];
      convertviewer.$set(convertviewer_changes);
      if (!current || dirty & /*$readonlyStore*/
      2) {
        toggle_class(div2, "blurred", !/*$readonlyStore*/
        ctx2[1].currentData);
      }
      const input_changes = {};
      if (dirty & /*$readonlyStore*/
      2) input_changes.format = /*$readonlyStore*/
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
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(convertviewer.$$.fragment, local);
      transition_in(input.$$.fragment, local);
      transition_in(settingspanel.$$.fragment, local);
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(convertviewer.$$.fragment, local);
      transition_out(input.$$.fragment, local);
      transition_out(settingspanel.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div4);
        detach(t2);
        detach(div5);
      }
      destroy_each(each_blocks, detaching);
      destroy_component(convertviewer);
      destroy_component(input);
      destroy_component(settingspanel);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $readonlyStore;
  let isSettingsOpened = false;
  const readonlyStore = readonly(appStore);
  component_subscribe($$self, readonlyStore, (value) => $$invalidate(1, $readonlyStore = value));
  const handleInputUpdate = (event) => {
    const { value } = event.detail;
    storeActions.updateCurrentValue(value);
  };
  const handleSaveClick = () => storeActions.saveToHistory();
  const handleSettingsOpenClick = () => {
    $$invalidate(0, isSettingsOpened = true);
  };
  const handleSettingsCloseClick = () => {
    $$invalidate(0, isSettingsOpened = false);
  };
  return [
    isSettingsOpened,
    $readonlyStore,
    readonlyStore,
    handleInputUpdate,
    handleSaveClick,
    handleSettingsOpenClick,
    handleSettingsCloseClick
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
