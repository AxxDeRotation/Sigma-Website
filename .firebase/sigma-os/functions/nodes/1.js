

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a59f7623.js","_app/immutable/chunks/scheduler.d20393f6.js","_app/immutable/chunks/index.a5ef0367.js","_app/immutable/chunks/singletons.8064288a.js"];
export const stylesheets = [];
export const fonts = [];
