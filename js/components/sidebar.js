/* ========================================
   GymSchedular - Sidebar Component
   ======================================== */

function createSidebar(activePage) {
  if (window.innerWidth <= 768) return '';
  const user = UserManager.getCurrentUser();
  const userName = user ? user.name : 'Karen Mills';
  const userPlan = user ? user.plan : 'Premium';
  const initials = userName.split(' ').map(n => n[0]).join('');
  const profilePhoto = user ? user.profilePhoto : null;
  const avatarContent = profilePhoto 
    ? `<img src="${profilePhoto}" alt="${userName}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` 
    : initials;

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Icons.dashboard, href: 'dashboard.html' },
    { id: 'schedule', label: 'Schedule', icon: Icons.schedule, href: 'schedule.html', subtitle: 'Class timetable' },
    { id: 'classes', label: 'Classes', icon: Icons.classes, href: 'classes.html', subtitle: 'Browse classes' },
    { id: 'instructors', label: 'Instructors', icon: Icons.instructors, href: 'instructors.html', subtitle: 'Our trainers' },
    { id: 'our-gym', label: 'Our Gym', icon: Icons.gym, href: 'our-gym.html', subtitle: 'Facilities & plans' },
    { id: 'book-class', label: 'Book a Class', icon: Icons.bookClass, href: 'book-class.html' },
    { id: 'live-classes', label: 'Live Classes', icon: Icons.liveClasses, href: 'live-classes.html' }
  ];

  const sidebarHTML = `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-brand">
          <div class="sidebar-logo">${Icons.logo}</div>
          <div class="sidebar-brand-text">
            <span class="sidebar-brand-name">GymSchedular</span>
            <span class="sidebar-brand-tagline">Gym Scheduling</span>
          </div>
        </div>
        <button class="sidebar-close" onclick="toggleSidebar()" aria-label="Toggle sidebar">
          ${Icons.close}
        </button>
      </div>

      <nav class="sidebar-nav">
        ${navItems.map(item => `
          <a href="${item.href}" class="nav-item ${activePage === item.id ? 'active' : ''}" data-page="${item.id}">
            <span class="nav-item-icon">${item.icon}</span>
            <div class="nav-item-content">
              <span class="nav-item-text">${item.label}</span>
              ${item.subtitle && activePage === item.id ? `<span class="nav-item-subtitle">${item.subtitle}</span>` : ''}
            </div>
          </a>
        `).join('')}
      </nav>

      <div class="sidebar-footer">
        <div class="sidebar-user">
          <span class="sidebar-user-name">${userName}</span>
          <span class="sidebar-user-role">${userPlan} Member</span>
          <div class="sidebar-user-avatar">${avatarContent}</div>
        </div>
        <button class="sidebar-signout" onclick="handleSignOut()">
          ${Icons.signOut}
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  `;

  return sidebarHTML;
}

function createMobileHeader() {
  const tabItems = [
    { id: 'dashboard', label: 'Home', icon: Icons.dashboard, href: 'dashboard.html' },
    { id: 'schedule', label: 'Schedule', icon: Icons.schedule, href: 'schedule.html' },
    { id: 'classes', label: 'Classes', icon: Icons.classes, href: 'classes.html' },
    { id: 'instructors', label: 'Trainers', icon: Icons.instructors, href: 'instructors.html' },
    { id: 'our-gym', label: 'Gym', icon: Icons.gym, href: 'our-gym.html' }
  ];

  const currentPage = window.location.pathname.split('/').pop().replace('.html', '');

  return `
    <div class="overlay" id="sidebarOverlay" onclick="toggleMobileSidebar()"></div>
    <nav class="bottom-tabs" id="bottomTabs">
      <div class="bottom-tabs-glass">
        ${tabItems.map(item => `
          <a href="${item.href}" class="bottom-tab ${currentPage === item.id ? 'active' : ''}" data-tab="${item.id}">
            <span class="bottom-tab-icon">${item.icon}</span>
            <span class="bottom-tab-label">${item.label}</span>
          </a>
        `).join('')}
      </div>
    </nav>
  `;
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    mainContent.classList.toggle('sidebar-collapsed');
  }
  Storage.set('sidebarCollapsed', sidebar.classList.contains('collapsed'));
}

function toggleMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.toggle('mobile-open');
  if (overlay) {
    overlay.classList.toggle('active');
  }
}

function handleSignOut() {
  UserManager.logout();
  window.location.href = 'login.html';
}

function initSidebar() {
  const isCollapsed = Storage.get('sidebarCollapsed', false);
  const sidebar = document.getElementById('sidebar');
  if (isCollapsed && sidebar) {
    sidebar.classList.add('collapsed');
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.classList.add('sidebar-collapsed');
    }
  }
}
