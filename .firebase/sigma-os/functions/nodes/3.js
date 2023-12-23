

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/install/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.9a2012e4.js","_app/immutable/chunks/scheduler.d20393f6.js","_app/immutable/chunks/index.a5ef0367.js"];
export const stylesheets = ["_app/immutable/assets/3.d5da2439.css"];
export const fonts = [];
