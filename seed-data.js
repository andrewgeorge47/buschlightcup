// BuschLight Cup 2026 - Data Seeding Script
// Instructions:
// 1. Open admin.html in your browser and log in with the admin passcode
// 2. Open browser console (F12 or Cmd+Option+I on Mac)
// 3. Copy and paste this entire script into the console
// 4. Press Enter to run the seeding

const YEAR = 2026;

// COURSES DATA
const coursesData = [
  {
    id: 'lake-marion',
    name: 'Lake Marion',
    pars: [4, 4, 3, 5, 4, 3, 4, 5, 4, 4, 3, 5, 4, 4, 3, 5, 4, 4],
    hcpOrder: [7, 13, 17, 3, 9, 15, 5, 1, 11, 8, 18, 2, 10, 6, 16, 4, 12, 14]
  },
  {
    id: 'santee-cooper',
    name: 'Santee Cooper',
    pars: [4, 5, 3, 4, 4, 5, 3, 4, 4, 4, 4, 5, 3, 4, 4, 5, 3, 4],
    hcpOrder: [9, 3, 17, 11, 7, 1, 15, 5, 13, 8, 10, 2, 18, 6, 12, 4, 16, 14]
  },
  {
    id: 'wyboo',
    name: 'Wyboo',
    pars: [4, 4, 3, 4, 5, 4, 3, 5, 4, 4, 5, 3, 4, 4, 3, 5, 4, 4],
    hcpOrder: [11, 7, 17, 13, 3, 9, 15, 1, 5, 10, 2, 18, 8, 12, 16, 4, 6, 14]
  },
  {
    id: 'santee-national',
    name: 'Santee National',
    pars: [5, 4, 3, 4, 4, 4, 5, 3, 4, 4, 4, 5, 3, 4, 4, 5, 3, 4],
    hcpOrder: [3, 9, 17, 11, 7, 13, 1, 15, 5, 10, 8, 2, 18, 12, 6, 4, 16, 14]
  },
  {
    id: 'players-course',
    name: 'Players Course',
    pars: [4, 4, 3, 5, 4, 4, 3, 5, 4, 4, 5, 3, 4, 4, 3, 5, 4, 4],
    hcpOrder: [9, 5, 17, 3, 11, 7, 15, 1, 13, 10, 2, 18, 8, 12, 16, 4, 6, 14]
  }
];

// FORMATS DATA
const formatsData = [
  {
    id: '123-ball',
    name: '123 Ball',
    description: 'Team format. On Par 3s: 1 best ball. On Par 4s: 2 best balls. On Par 5s: 3 best balls. Count the specified number of best net scores on each hole.',
    scoringType: 'team',
    defaultPurse: 80
  },
  {
    id: '2-man-1-best',
    name: '2 Man 1 Best Ball',
    description: 'Two-player teams. Take the best net score from each team on every hole. Lowest total score wins.',
    scoringType: 'team',
    defaultPurse: 80
  },
  {
    id: '4-man-chicago',
    name: '4 Man Team Chicago',
    description: 'Team Chicago scoring. Points per hole: Eagle=4, Birdie=3, Par=2, Bogey=1, Double or worse=0. Sum all team member points on each hole.',
    scoringType: 'team',
    defaultPurse: 80
  },
  {
    id: '4-man-2-best',
    name: '4 Man 2 Best Balls',
    description: 'Four-player teams. Take the two best net scores from each team on every hole. Lowest total score wins.',
    scoringType: 'team',
    defaultPurse: 80
  },
  {
    id: '4-man-designated',
    name: '4 Man Designated Hole + 1 Best',
    description: 'Four-player teams. Before the round, each player is designated to specific holes (e.g., Player A: holes 1-4, Player B: 5-9, etc.). Use that player\'s score on their holes, plus one best ball from the other three players.',
    scoringType: 'team',
    defaultPurse: 80
  },
  {
    id: 'individual-chicago',
    name: 'Individual Chicago',
    description: 'Individual format. Points per hole: Eagle=4, Birdie=3, Par=2, Bogey=1, Double or worse=0. Highest total points wins.',
    scoringType: 'individual',
    defaultPurse: 80
  },
  {
    id: 'match-play',
    name: 'Match Play',
    description: 'Head-to-head match play. Win hole with better net score (1 point), tie = 0.5 points each. Most points wins the match.',
    scoringType: 'matchplay',
    defaultPurse: 80
  }
];

// DAYS CONFIGURATION
// Update these with actual trip dates once known
const daysConfig = [
  {
    dayNumber: 1,
    dayName: 'Sunday',
    courseRef: 'lake-marion',
    formatRef: '123-ball',
    teeTime: '8:36 AM',
    replayFee: '$15',
    purse: 80,
    teams: [
      ['John', 'Andrew', 'Pete', 'Jim'],
      ['Troy', 'Jeff', 'Denver', 'Scott']
    ]
  },
  {
    dayNumber: 2,
    dayName: 'Monday',
    courseRef: 'santee-cooper',
    formatRef: '2-man-1-best',
    teeTime: '9:00 AM',
    replayFee: '$15',
    purse: 80,
    teams: [
      ['John', 'Pete'],
      ['Andrew', 'Jim'],
      ['Troy', 'Denver'],
      ['Jeff', 'Scott']
    ]
  },
  {
    dayNumber: 3,
    dayName: 'Tuesday',
    courseRef: 'wyboo',
    formatRef: '4-man-chicago',
    teeTime: '8:30 AM',
    replayFee: '$15',
    purse: 80,
    teams: [
      ['John', 'Andrew', 'Pete', 'Jim'],
      ['Troy', 'Jeff', 'Denver', 'Scott']
    ]
  },
  {
    dayNumber: 4,
    dayName: 'Wednesday',
    courseRef: 'santee-national',
    formatRef: '4-man-2-best',
    teeTime: '9:00 AM',
    replayFee: '$15',
    purse: 80,
    teams: [
      ['John', 'Andrew', 'Pete', 'Jim'],
      ['Troy', 'Jeff', 'Denver', 'Scott']
    ]
  },
  {
    dayNumber: 5,
    dayName: 'Thursday',
    courseRef: 'players-course',
    formatRef: '4-man-designated',
    teeTime: '8:45 AM',
    replayFee: '$15',
    purse: 80,
    teams: [
      ['John', 'Andrew', 'Pete', 'Jim'],
      ['Troy', 'Jeff', 'Denver', 'Scott']
    ]
  },
  {
    dayNumber: 6,
    dayName: 'Friday',
    courseRef: 'lake-marion',
    formatRef: 'individual-chicago',
    teeTime: '8:36 AM',
    replayFee: '$15',
    purse: 80,
    teams: []  // Individual format
  },
  {
    dayNumber: 7,
    dayName: 'Saturday',
    courseRef: 'santee-cooper',
    formatRef: 'match-play',
    teeTime: '9:00 AM',
    replayFee: '$15',
    purse: 80,
    teams: []  // Match play pairings can be determined later
  }
];

// SEEDING FUNCTION
async function seedAllData() {
  console.log('🌱 Starting data seeding for BuschLight Cup 2026...\n');

  try {
    // Seed Courses
    console.log('📍 Seeding courses...');
    for (const course of coursesData) {
      await db.collection('courses').doc(course.id).set({
        name: course.name,
        pars: course.pars,
        hcpOrder: course.hcpOrder,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      console.log(`  ✓ ${course.name}`);
    }

    // Seed Formats
    console.log('\n🎯 Seeding game formats...');
    for (const format of formatsData) {
      await db.collection('formats').doc(format.id).set({
        name: format.name,
        description: format.description,
        scoringType: format.scoringType,
        defaultPurse: format.defaultPurse,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      console.log(`  ✓ ${format.name}`);
    }

    // Seed Days
    console.log('\n📅 Seeding days configuration...');
    for (const day of daysConfig) {
      await db.collection('days').doc(`${YEAR}_day${day.dayNumber}`).set({
        year: YEAR,
        dayNumber: day.dayNumber,
        dayName: day.dayName,
        courseRef: day.courseRef,
        formatRef: day.formatRef,
        teeTime: day.teeTime,
        replayFee: day.replayFee,
        purse: day.purse,
        teams: day.teams,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      console.log(`  ✓ Day ${day.dayNumber} (${day.dayName}) - ${day.formatRef} at ${day.courseRef}`);
    }

    console.log('\n✅ Data seeding complete!\n');
    console.log('📊 Summary:');
    console.log(`   • ${coursesData.length} courses`);
    console.log(`   • ${formatsData.length} game formats`);
    console.log(`   • ${daysConfig.length} days configured`);
    console.log('\n💡 Next steps:');
    console.log('   1. Add players via the admin panel Players section');
    console.log('   2. Review and adjust course par/handicap data if needed');
    console.log('   3. Customize team assignments for each day');
    console.log('   4. Update tee times and replay fees as needed');

    // Refresh the admin panel displays
    if (typeof loadCourses === 'function') loadCourses();
    if (typeof loadFormats === 'function') loadFormats();

  } catch (error) {
    console.error('❌ Error during seeding:', error);
  }
}

// RUN THE SEEDING
console.log('🚀 Ready to seed data. Running in 2 seconds...\n');
setTimeout(seedAllData, 2000);
