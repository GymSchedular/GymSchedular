/* ========================================
   GymSchedular - App Data Store
   ======================================== */

const AppData = {
  classes: [
    {
      id: 1,
      name: 'Power Yoga Flow',
      category: 'Yoga',
      instructor: 'Sarah Chen',
      instructorImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      duration: 60,
      time: '7:00 AM - 8:00 AM',
      location: 'Studio A',
      spots: 8,
      totalSpots: 25,
      calories: '280-350',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
      description: 'A dynamic yoga practice combining breath with movement. Build strength, flexibility, and balance through flowing sequences.',
      benefits: ['Flexibility improvement', 'Stress reduction', 'Core strength', 'Mental clarity'],
      equipment: ['Yoga mat', 'Blocks', 'Strap'],
      difficulty: 60,
      schedule: [
        { day: 'Monday', time: '7:00 AM', spots: 8 },
        { day: 'Wednesday', time: '7:00 AM', spots: 12 },
        { day: 'Friday', time: '7:00 AM', spots: 5 },
        { day: 'Saturday', time: '9:00 AM', spots: 15 }
      ]
    },
    {
      id: 2,
      name: 'HIIT Blast',
      category: 'HIIT',
      instructor: 'Marcus Johnson',
      instructorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      duration: 45,
      time: '9:00 AM - 9:45 AM',
      location: 'Main Floor',
      spots: 3,
      totalSpots: 30,
      calories: '400-550',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&h=400&fit=crop',
      description: 'High-intensity interval training designed to push your limits. Burn maximum calories with this fast-paced full-body workout.',
      benefits: ['Maximum calorie burn', 'Cardiovascular fitness', 'Endurance building', 'Metabolic boost'],
      equipment: ['Kettlebells', 'Battle ropes', 'Box'],
      difficulty: 85,
      schedule: [
        { day: 'Monday', time: '9:00 AM', spots: 3 },
        { day: 'Tuesday', time: '6:00 PM', spots: 10 },
        { day: 'Thursday', time: '9:00 AM', spots: 8 },
        { day: 'Saturday', time: '10:00 AM', spots: 12 }
      ]
    },
    {
      id: 3,
      name: 'Boxing Fundamentals',
      category: 'Boxing',
      instructor: 'Jake Torres',
      instructorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      duration: 45,
      time: '6:00 PM - 6:45 PM',
      location: 'Boxing Ring',
      spots: 12,
      totalSpots: 20,
      calories: '400-500',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop',
      description: 'Learn the basics of boxing including proper stance, footwork, and punch combinations. Great for beginners and fitness enthusiasts.',
      benefits: ['Self-defense skills', 'Full body workout', 'Stress relief', 'Coordination'],
      equipment: ['Boxing gloves', 'Hand wraps', 'Heavy bag'],
      difficulty: 40,
      schedule: [
        { day: 'Tuesday', time: '6:00 PM', spots: 12 },
        { day: 'Thursday', time: '6:00 PM', spots: 8 },
        { day: 'Saturday', time: '11:00 AM', spots: 15 }
      ]
    },
    {
      id: 4,
      name: 'Strength & Conditioning',
      category: 'Strength',
      instructor: 'Emma Wilson',
      instructorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      duration: 55,
      time: '5:30 PM - 6:25 PM',
      location: 'Weight Room',
      spots: 6,
      totalSpots: 20,
      calories: '350-500',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop',
      description: 'Build functional strength with compound movements and progressive overload. This class covers deadlifts, squats, presses, and accessory work for a complete strength program.',
      benefits: ['Muscle development', 'Functional strength', 'Bone density improvement', 'Improved metabolism'],
      equipment: ['Barbell & plates', 'Dumbbells', 'Squat rack', 'Bench'],
      difficulty: 70,
      rating: 4.9,
      reviews: 103,
      schedule: [
        { day: 'Monday', time: '5:30 PM', spots: 6 },
        { day: 'Wednesday', time: '5:30 PM', spots: 10 },
        { day: 'Friday', time: '5:30 PM', spots: 8 }
      ]
    },
    {
      id: 5,
      name: 'Pilates Core Sculpt',
      category: 'Pilates',
      instructor: 'Emma Wilson',
      instructorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      duration: 50,
      time: '11:00 AM - 11:50 AM',
      location: 'Yoga Studio',
      spots: 20,
      totalSpots: 25,
      calories: '200-300',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop',
      description: 'Targeted core strengthening through controlled Pilates movements. Improve posture, flexibility, and core stability.',
      benefits: ['Core strength', 'Better posture', 'Flexibility', 'Body awareness'],
      equipment: ['Reformer', 'Mat', 'Ring'],
      difficulty: 35,
      schedule: [
        { day: 'Monday', time: '11:00 AM', spots: 20 },
        { day: 'Wednesday', time: '11:00 AM', spots: 18 },
        { day: 'Friday', time: '11:00 AM', spots: 15 }
      ]
    },
    {
      id: 6,
      name: 'Cardio Dance Party',
      category: 'Cardio',
      instructor: 'Sarah Chen',
      instructorImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      duration: 50,
      time: '4:00 PM - 4:50 PM',
      location: 'Studio A',
      spots: 15,
      totalSpots: 30,
      calories: '350-450',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&h=400&fit=crop',
      description: 'Fun, high-energy dance workout that doesn\'t feel like exercise. Set to the latest hits, you\'ll dance your way to fitness.',
      benefits: ['Cardiovascular health', 'Coordination', 'Mood boost', 'Full body workout'],
      equipment: [],
      difficulty: 30,
      schedule: [
        { day: 'Tuesday', time: '4:00 PM', spots: 15 },
        { day: 'Thursday', time: '4:00 PM', spots: 12 }
      ]
    }
  ],

  instructors: [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Senior Yoga Instructor',
      specialties: ['Yoga', 'Pilates'],
      rating: 4.8,
      reviews: 124,
      experience: '8 years',
      classes: 1240,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face',
      bio: 'Certified yoga instructor with 8+ years of experience. Specializes in Vinyasa and Power Yoga. RYT-500 certified with additional training in Pilates and',
      certifications: ['RYT-500', 'Pilates Mat Certified', 'Meditation Coach'],
      isFavorite: true
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      role: 'Head HIIT Coach',
      specialties: ['HIIT', 'Cardio'],
      rating: 4.9,
      reviews: 89,
      experience: '6 years',
      classes: 980,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
      bio: 'Former professional athlete turned fitness coach. NASM-CPT certified with a focus on high-intensity training and athletic performance. Known for his motivating energy',
      certifications: ['NASM-CPT', 'CrossFit Level 2', 'Sports Nutrition'],
      isFavorite: false
    },
    {
      id: 3,
      name: 'Emma Wilson',
      role: 'Strength & Conditioning Specialist',
      specialties: ['Strength', 'Pilates'],
      rating: 4.7,
      reviews: 98,
      experience: '5 years',
      classes: 720,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face',
      bio: 'Strength and conditioning specialist with a MS in Exercise Science. Focuses on proper form and progressive overload.',
      certifications: ['CSCS', 'MS Exercise Science', 'FMS Level 2'],
      isFavorite: false
    },
    {
      id: 4,
      name: 'Jake Torres',
      role: 'Boxing & MMA Coach',
      specialties: ['Boxing', 'HIIT'],
      rating: 4.8,
      reviews: 76,
      experience: '7 years',
      classes: 850,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face',
      bio: 'Professional boxing coach with competitive fighting experience. Brings discipline and technique to every session.',
      certifications: ['USA Boxing Coach', 'NASM-CPT', 'First Aid Certified'],
      isFavorite: false
    }
  ],

  spaces: [
    {
      id: 1,
      name: 'Main Gym Floor',
      capacity: 80,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=300&fit=crop',
      description: '10,000 sq ft of open floor space with premium cardio and strength equipment, including Hammer Strength, Life Fitness, and Rogue racks.',
      tags: ['Free weights', 'Cable Machines', 'Cardio Zone', 'Functional Area']
    },
    {
      id: 2,
      name: 'Yoga & Pilates Studio',
      capacity: 25,
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=300&fit=crop',
      description: 'A serene, naturally lit studio with bamboo flooring, mirrors, and climate control. Full equipment including reformers, mats, and props.',
      tags: ['Heated floors', 'Sound System', 'Props Provided', 'Mirror Wall']
    },
    {
      id: 3,
      name: 'Boxing Ring & MMA Zone',
      capacity: 20,
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=300&fit=crop',
      description: 'Professional-grade boxing ring, heavy bags, speed bags, and an open mat area for MMA training. Full wrapping station included.',
      tags: ['Full-size ring', 'Heavy Bags', 'Speed Bags', 'MMA Mats']
    },
    {
      id: 4,
      name: 'Recovery & Wellness',
      capacity: 15,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=300&fit=crop',
      description: 'Dedicated recovery space with foam rollers, stretch cages, massage guns, a sauna, and cold plunge for optimal post-workout recovery.',
      tags: ['25m heated pool', 'Cold Plunge', 'Stretch Area', 'Massage Guns']
    }
  ],

  recentActivity: [
    { name: 'Boxing Fundamentals', date: 'Yesterday, 6:00 PM', calories: 450, duration: '45 min' },
    { name: 'Power Yoga Flow', date: 'Feb 28, 7:00 AM', calories: 280, duration: '60 min' }
  ],

  weekData: {
    days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    activity: [2, 3, 1, 0, 3, 4, 2],
    totalCalories: '2,720',
    avgPerSession: '544',
    activeDays: 5
  }
};
