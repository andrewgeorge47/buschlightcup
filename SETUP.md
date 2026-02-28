# BuschLight Cup 2026 - Setup Guide

## 🎯 Overview

This is a complete golf tournament management system with:
- **Live mobile scoring** via Firebase Email Link authentication
- **Admin panel** with full CRUD for courses, formats, players, and daily configurations
- **Real-time leaderboard** that updates as players submit scores
- **Reusable library architecture** for courses and game formats

---

## 📋 Pre-Deployment Checklist

### 1. Firebase Console Configuration

#### A. Enable Email Link Authentication
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: **buschlightcup**
3. Navigate to **Authentication** → **Sign-in method**
4. Click **Email/Password**
5. Enable **Email link (passwordless sign-in)**
6. Click **Save**

#### B. Add Authorized Domains
1. In Authentication settings, go to **Authorized domains**
2. Add these domains:
   - `buschlightcup.com`
   - `www.buschlightcup.com`
   - Your GitHub Pages domain if different

#### C. Deploy Firestore Security Rules
1. Go to **Firestore Database** → **Rules** tab
2. Copy the contents from `firestore.rules` in this repo
3. Paste into the rules editor
4. Click **Publish**

**⚠️ Important:** Make sure you're in the **Firestore Database** section, NOT the Realtime Database section.

---

### 2. Seed Initial Data

The `seed-data.js` file will populate your database with:
- ✅ 5 golf courses (Lake Marion, Santee Cooper, Wyboo, Santee National, Players Course)
- ✅ 7 game formats (123 Ball, 2 Man 1 Best Ball, etc.)
- ✅ 7 days configured with course/format assignments

**How to run the seeding script:**

1. Open `admin.html` in your browser
2. Log in with admin passcode: `busch2026`
3. Open browser DevTools console:
   - **Chrome/Edge:** Press `F12` or `Cmd+Option+I` (Mac)
   - **Firefox:** Press `F12`
   - **Safari:** Enable Developer menu first, then `Cmd+Option+I`
4. Copy the entire contents of `seed-data.js`
5. Paste into the console and press Enter
6. Wait for the "✅ Data seeding complete!" message

**Expected output:**
```
🌱 Starting data seeding for BuschLight Cup 2026...

📍 Seeding courses...
  ✓ Lake Marion
  ✓ Santee Cooper
  ✓ Wyboo
  ✓ Santee National
  ✓ Players Course

🎯 Seeding game formats...
  ✓ 123 Ball
  ✓ 2 Man 1 Best Ball
  ✓ 4 Man Team Chicago
  ✓ 4 Man 2 Best Balls
  ✓ 4 Man Designated Hole + 1 Best
  ✓ Individual Chicago
  ✓ Match Play

📅 Seeding days configuration...
  ✓ Day 1 (Sunday) - 123-ball at lake-marion
  ✓ Day 2 (Monday) - 2-man-1-best at santee-cooper
  ✓ Day 3 (Tuesday) - 4-man-chicago at wyboo
  ✓ Day 4 (Wednesday) - 4-man-2-best at santee-national
  ✓ Day 5 (Thursday) - 4-man-designated at players-course
  ✓ Day 6 (Friday) - individual-chicago at lake-marion
  ✓ Day 7 (Saturday) - match-play at santee-cooper

✅ Data seeding complete!
```

---

### 3. Add Players

**Via Admin Panel:**

1. Go to admin.html and log in
2. Click **Players** in the sidebar
3. Use the "Add Player" form:
   - **Name:** Player's full name (e.g., "John Smith")
   - **Email:** Player's email address
   - **Handicap:** Their course handicap (e.g., 12.5)
4. Click **Add**

**Players to add (update emails and handicaps):**
- John
- Andrew
- Pete
- Jim
- Troy
- Jeff
- Denver
- Scott

---

### 4. Customize Configuration

#### Update Trip Dates in scoring.html

Edit `scoring.html` around line ~950 and update the `TRIP_DATES` array:

```javascript
const TRIP_DATES = [
  '2026-04-12',  // Day 1 - Sunday
  '2026-04-13',  // Day 2 - Monday
  '2026-04-14',  // Day 3 - Tuesday
  '2026-04-15',  // Day 4 - Wednesday
  '2026-04-16',  // Day 5 - Thursday
  '2026-04-17',  // Day 6 - Friday
  '2026-04-18'   // Day 7 - Saturday
];
```

Replace the dates with your actual April 2026 trip dates.

#### Review Course Data

The seeded course data uses estimated par and handicap values. You should:

1. Go to **admin.html** → **Courses**
2. Click **Edit** on each course
3. Update the **Par** values for each of the 18 holes
4. Update the **Difficulty** rankings (1 = hardest hole, 18 = easiest)
5. Click **Save Course**

#### Adjust Day Configurations

1. Go to **admin.html** → **Days Config**
2. Select each day from the dropdown
3. Update:
   - **Tee Time:** Actual tee time for the day
   - **Replay Fee:** Actual fee amount
   - **Purse:** Prize pool for the day
   - **Team Assignments:** Adjust team pairings as needed

---

## 🚀 Deployment

### Deploy to GitHub Pages

```bash
git add .
git commit -m "Complete Firebase integration and admin panel"
git push origin main
```

Your site will be live at: **https://buschlightcup.com**

---

## 📱 Player Usage Flow

1. **First Time Setup:**
   - Player visits `scoring.html`
   - Enters their email address
   - Receives magic link via email
   - Clicks link to authenticate
   - Device remembers them (no need to log in again)

2. **Scoring During the Round:**
   - Opens `scoring.html` on mobile
   - Selects the current day
   - Enters scores hole-by-hole using +/- buttons
   - Scores auto-save to Firebase
   - Can view live leaderboard at bottom of page

3. **Viewing Rules:**
   - Visit `instructions.html` for detailed game format explanations

---

## 🔒 Security

### Admin Passcode
Default: `busch2026`

To change it:
1. Edit `admin.html`
2. Find line 924: `const ADMIN_PASSCODE = 'busch2026';`
3. Change to your preferred passcode
4. Save and redeploy

### Firestore Rules Summary
- **Players, Courses, Formats, Days:** Open read/write (admin UI uses client-side passcode)
- **Scores:**
  - Anyone can read (for leaderboard)
  - Only authenticated users can create/update
  - Users can only write their own scores
  - Must include valid uid, year, dayNumber, and 18 holes

---

## 📊 Data Architecture

### Collections

#### `courses/{courseId}`
```javascript
{
  name: "Lake Marion",
  pars: [4, 4, 3, 5, ...],          // Array of 18 par values
  hcpOrder: [7, 13, 17, 3, ...],    // Difficulty ranking (1-18)
  updatedAt: timestamp
}
```

#### `formats/{formatId}`
```javascript
{
  name: "123 Ball",
  description: "Full game rules...",
  scoringType: "team" | "individual" | "matchplay",
  defaultPurse: 80,
  updatedAt: timestamp
}
```

#### `days/{year}_day{n}`
```javascript
{
  year: 2026,
  dayNumber: 1,
  dayName: "Sunday",
  courseRef: "lake-marion",         // References courses collection
  formatRef: "123-ball",            // References formats collection
  teeTime: "8:36 AM",
  replayFee: "$15",
  purse: 80,
  teams: [["John","Andrew","Pete","Jim"], ["Troy","Jeff","Denver","Scott"]],
  updatedAt: timestamp
}
```

#### `players/{uid}`
```javascript
{
  name: "John Smith",
  email: "john@example.com",
  handicap: 12.5,
  active: true,
  createdAt: timestamp
}
```

#### `scores/{scoreId}`
```javascript
{
  uid: "firebaseAuthUid",
  playerName: "John Smith",
  year: 2026,
  dayNumber: 1,
  holes: [4, 5, 3, ...],            // Array of 18 gross scores
  grossTotal: 87,
  netTotal: 75,
  holesCompleted: 18,
  submittedAt: timestamp
}
```

---

## 🛠️ Troubleshooting

### "Missing or insufficient permissions" error
- Make sure Firestore rules are deployed correctly
- Check that you're in the **Firestore Database** section (not Realtime Database)
- Rules should have `allow read, write: if true;` for courses, formats, days, players

### Email link not arriving
- Check spam/junk folder
- Verify Email Link authentication is enabled in Firebase Console
- Ensure domain is in authorized domains list

### Scores not saving
- Player must be authenticated (received and clicked email link)
- Check browser console for errors
- Verify Firestore rules allow score creation with proper uid

### Admin panel not loading data
- Open browser console and check for Firebase errors
- Verify Firebase config in admin.html matches your project
- Check that collections exist in Firestore Database

---

## 📞 Support

For issues or questions about the BuschLight Cup system:
1. Check browser console for error messages
2. Verify Firebase Console settings
3. Review this setup guide
4. Check Firestore Database to confirm data exists

---

## 🎉 You're All Set!

Once you've completed the steps above, your golf tournament system is ready:
- ✅ Players can submit scores from their phones
- ✅ Live leaderboards update in real-time
- ✅ Admin has full control over courses, formats, and configurations
- ✅ Game rules are accessible to all players
- ✅ Reusable architecture for future trips

**Have a great trip! ⛳️🏌️**
