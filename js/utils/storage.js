/* ========================================
   GymSchedular - LocalStorage Utility
   ======================================== */

const Storage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(`gym_${key}`);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(`gym_${key}`, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },

  remove(key) {
    localStorage.removeItem(`gym_${key}`);
  },

  clear() {
    Object.keys(localStorage)
      .filter(key => key.startsWith('gym_'))
      .forEach(key => localStorage.removeItem(key));
  }
};

// User management
const UserManager = {
  getCurrentUser() {
    return Storage.get('currentUser', null);
  },

  setCurrentUser(user) {
    Storage.set('currentUser', user);
  },

  isLoggedIn() {
    return !!this.getCurrentUser();
  },

  logout() {
    Storage.remove('currentUser');
  },

  getUsers() {
    return Storage.get('users', []);
  },

  registerUser(userData) {
    const users = this.getUsers();
    if (users.find(u => u.email === userData.email)) {
      return { success: false, message: 'Email already registered' };
    }
    users.push({
      ...userData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      plan: 'Premium',
      stats: {
        totalClasses: 47,
        streak: 12,
        caloriesBurned: 12400,
        hoursTrained: 38
      }
    });
    Storage.set('users', users);
    return { success: true };
  },

  loginUser(email, password) {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      this.setCurrentUser(user);
      return { success: true, user };
    }
    return { success: false, message: 'Invalid email or password' };
  }
};

// Bookings management
const BookingManager = {
  getBookings() {
    return Storage.get('bookings', []);
  },

  addBooking(booking) {
    const bookings = this.getBookings();
    bookings.push({
      ...booking,
      id: Date.now(),
      bookedAt: new Date().toISOString()
    });
    Storage.set('bookings', bookings);
    return true;
  },

  removeBooking(bookingId) {
    let bookings = this.getBookings();
    bookings = bookings.filter(b => b.id !== bookingId);
    Storage.set('bookings', bookings);
  },

  getUserBookings() {
    const user = UserManager.getCurrentUser();
    if (!user) return [];
    return this.getBookings().filter(b => b.userId === user.id);
  }
};

// Favorites
const FavoritesManager = {
  getFavorites() {
    return Storage.get('favorites', []);
  },

  toggleFavorite(itemId, type) {
    let favorites = this.getFavorites();
    const index = favorites.findIndex(f => f.id === itemId && f.type === type);
    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push({ id: itemId, type });
    }
    Storage.set('favorites', favorites);
    return index === -1; // returns true if added
  },

  isFavorite(itemId, type) {
    return this.getFavorites().some(f => f.id === itemId && f.type === type);
  }
};

// Initialize default data if new
function initializeDefaultData() {
  if (!Storage.get('initialized')) {
    // Create default user
    UserManager.registerUser({
      name: 'Karen Williams',
      email: 'karen@gymscheduler.com',
      password: 'password123',
      phone: '+1 555-0123'
    });

    // Set some default bookings
    Storage.set('bookings', [
      { id: 1, userId: Date.now() - 1, className: 'Power Yoga Flow', instructor: 'Sarah Chen', time: '7:00 AM', duration: 60, location: 'Studio A', date: '2026-03-09' },
      { id: 2, userId: Date.now() - 1, className: 'HIIT Blast', instructor: 'Marcus Johnson', time: '9:00 AM', duration: 45, location: 'Main Floor', date: '2026-03-09' },
      { id: 3, userId: Date.now() - 1, className: 'Strength & Conditioning', instructor: 'Emma Wilson', time: '5:30 PM', duration: 55, location: 'Weight Room', date: '2026-03-09', waitlisted: true }
    ]);

    Storage.set('initialized', true);
  }
}

initializeDefaultData();
