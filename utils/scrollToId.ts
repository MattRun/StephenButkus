// utils/scrollToId.ts
export function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // remove the hash so refresh doesn't jump
    history.replaceState(null, "", location.pathname + location.search);
  }
  