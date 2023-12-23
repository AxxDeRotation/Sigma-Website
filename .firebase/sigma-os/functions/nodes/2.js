

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.07597321.js","_app/immutable/chunks/scheduler.d20393f6.js","_app/immutable/chunks/index.a5ef0367.js","_app/immutable/chunks/MainLogo.a51ec389.js"];
export const stylesheets = ["_app/immutable/assets/2.ceef3668.css"];
export const fonts = [];
