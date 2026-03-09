/* ========================================
   GymSchedular - Toast Notification Component
   ======================================== */

function showToast(message, type = 'success', duration = 3000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconMap = {
    success: Icons.checkCircle,
    error: Icons.close,
    info: Icons.bell
  };

  toast.innerHTML = `
    <span style="width:20px;height:20px;flex-shrink:0;color:var(--${type === 'error' ? 'danger' : type});">${iconMap[type] || iconMap.info}</span>
    <span style="flex:1;font-size:var(--font-size-sm);">${message}</span>
    <button onclick="this.parentElement.classList.add('removing');setTimeout(()=>this.parentElement.remove(),300)" style="color:var(--text-tertiary);padding:2px;">
      ${Icons.close}
    </button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentElement) {
      toast.classList.add('removing');
      setTimeout(() => toast.remove(), 300);
    }
  }, duration);
}

/* ========================================
   GymSchedular - FAB Component
   ======================================== */

function createFAB() {
  return `
    <div class="fab" onclick="ThemeManager.toggle()" title="Toggle Theme">
      ${Icons.logo}
    </div>
  `;
}
