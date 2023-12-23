

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.dd0e720b.js","_app/immutable/chunks/scheduler.d20393f6.js","_app/immutable/chunks/index.a5ef0367.js","_app/immutable/chunks/MainLogo.a51ec389.js"];
export const stylesheets = ["_app/immutable/assets/0.9d4c8070.css"];
export const fonts = [];
