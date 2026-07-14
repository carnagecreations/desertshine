// lib/motion.ts — the whole site's motion accent. Import these; never inline magic numbers.
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;      // entrances — fast start, long settle
export const EASE_INOUT = [0.77, 0, 0.175, 1] as const;   // reveals, curtains, clip-paths
export const EASE_SNAP = [0.32, 0.72, 0, 1] as const;     // UI response — expands, fills
export const SPRING_SOFT = { stiffness: 150, damping: 22, mass: 0.9 };   // magnetic, cursor-follow
export const SPRING_TIGHT = { stiffness: 300, damping: 30 };             // small UI elements
export const DUR = { fast: 0.4, base: 0.7, slow: 1.2 } as const;
