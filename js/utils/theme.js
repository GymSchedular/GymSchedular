/* ========================================
   GymSchedular - Theme Management
   ======================================== */

const ThemeManager = {
  STORAGE_KEY: 'gym_theme',
  THEMES: ['light', 'dark', 'system'],

  init() {
    const saved = localStorage.getItem(this.STORAGE_KEY) || 'system';
    this.apply(saved);
    this.watchSystemTheme();
  },

  get() {
    return localStorage.getItem(this.STORAGE_KEY) || 'system';
  },

  set(theme) {
    if (!this.THEMES.includes(theme)) return;
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.apply(theme);
  },

  apply(theme) {
    const resolved = theme === 'system' ? this.getSystemTheme() : theme;
    document.documentElement.setAttribute('data-theme', resolved);
    this.updateToggleUI(theme);
  },

  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  },

  watchSystemTheme() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (this.get() === 'system') {
        this.apply('system');
      }
    });
  },

  toggle() {
    const current = this.get();
    const next = current === 'dark' ? 'light' : current === 'light' ? 'system' : 'dark';
    this.set(next);
    return next;
  },

  updateToggleUI(theme) {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      const icon = btn.querySelector('.theme-icon');
      if (icon) {
        if (theme === 'dark') {
          icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
        } else if (theme === 'light') {
          icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
        } else {
          icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;
        }
      }
      btn.title = `Theme: ${theme} (click to change)`;
    });
  },

  createToggleButton() {
    return `
      <button class="theme-toggle-btn btn-icon" onclick="ThemeManager.toggle()" title="Toggle theme">
        <span class="theme-icon"></span>
      </button>
    `;
  }
};

// Initialize theme immediately
ThemeManager.init();
