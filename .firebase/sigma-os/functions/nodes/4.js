

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/simulator/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.dd9a6f63.js","_app/immutable/chunks/scheduler.d20393f6.js","_app/immutable/chunks/index.a5ef0367.js"];
export const stylesheets = [];
export const fonts = [];
