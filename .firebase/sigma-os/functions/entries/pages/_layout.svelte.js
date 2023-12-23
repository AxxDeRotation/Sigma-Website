import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
import { l as logo } from "../../chunks/MainLogo.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--main-color:#f5f5f5;--contrast-color:#0e0e0e;--main-accentuation-color:#60e7b9;--main-bg-color:#101928;--dark-transparency:rgba(0, 0, 0, 0.35);--accentuation-transparency:rgba(96, 231, 185, 0.6);--transparent:rgba(255, 255, 255, 0)}body{background-color:var(--main-bg-color);color:var(--main-color);font-family:'Roboto', sans-serif;margin:0;padding:0}header.s-7IPF32Wcq3s8{display:flex;justify-content:space-between;align-items:center;padding:0 20px;margin:15px;height:60px}.main-logo.s-7IPF32Wcq3s8{height:60px}nav.s-7IPF32Wcq3s8{display:flex;justify-content:space-between;align-items:center}.nav-link.s-7IPF32Wcq3s8{color:var(--main-color);text-decoration:none;font-weight:600;padding:0 15px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="s-7IPF32Wcq3s8"><img${add_attribute("src", logo, 0)} class="main-logo s-7IPF32Wcq3s8" alt="Main Logo"> <nav class="s-7IPF32Wcq3s8"><a href="/" class="nav-link s-7IPF32Wcq3s8" data-svelte-h="svelte-18c40gj">Home</a> <a href="/install" class="nav-link s-7IPF32Wcq3s8" data-svelte-h="svelte-1v935ls">Install</a>  </nav></header> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
