# BuschLight Cup 2026 - Quick Start

## 🚀 Immediate Next Steps

### 1. Configure Firebase Console (5 minutes)

**Enable Email Authentication:**
- Go to [Firebase Console](https://console.firebase.google.com) → **buschlightcup** project
- **Authentication** → **Sign-in method** → Enable **Email link (passwordless sign-in)**
- Add authorized domains: `buschlightcup.com`, `www.buschlightcup.com`

**Deploy Security Rules:**
- **Firestore Database** → **Rules** tab
- Copy/paste contents from `firestore.rules` in this repo
- Click **Publish**

### 2. Seed Database (2 minutes)

1. Open `admin.html` in browser
2. Log in with passcode: `busch2026`
3. Open browser console (F12)
4. Copy entire contents of `seed-data.js`
5. Paste into console and press Enter
6. Wait for "✅ Data seeding complete!"

This creates:
- 5 courses (Lake Marion, Santee Cooper, Wyboo, Santee National, Players Course)
- 7 game formats
- 7 days configured and ready

### 3. Add Players (5 minutes)

In admin panel:
- Click **Players** sidebar link
- Add each player with name, email, handicap
- Players: John, Andrew, Pete, Jim, Troy, Jeff, Denver, Scott

### 4. Test the System (2 minutes)

1. Open `scoring.html`
2. Enter your email
3. Click magic link in email
4. Select a day
5. Enter test scores
6. Check leaderboard updates in real-time

---

## 📱 URLs

| Page | URL | Purpose |
|------|-----|---------|
| **Schedule** | `index.html` | Tournament schedule and course info |
| **Rules** | `instructions.html` | Game format rules for all 7 days |
| **Live Scoring** | `scoring.html` | Mobile score entry + leaderboard |
| **Admin Panel** | `admin.html` | Manage courses, formats, players, days |

---

## 🎯 Key Features

### For Players
- **Passwordless login** - Click email link, device remembers you
- **Hole-by-hole entry** - +/- buttons, auto-calculates net scores
- **Auto-save** - Scores save as you type
- **Live leaderboard** - Real-time updates as others submit scores
- **Chicago scoring** - Auto-calculates points per hole

### For Admins
- **Course library** - Define par/handicap once, reuse for multiple days
- **Format library** - Save game format rules and reuse
- **Days config** - Assign course + format to each day
- **Players CRUD** - Add/edit/delete players, manage handicaps
- **Scores view** - See all submitted scores by day
- **Overview stats** - Quick dashboard of players/courses/scores

---

## 🔧 Admin Panel Quick Reference

### Admin Passcode
Default: `busch2026` (change in `admin.html` line 924)

### Sidebar Navigation
- **Libraries:**
  - Courses - Manage reusable course configs
  - Game Formats - Manage reusable format rules
- **Trip Setup:**
  - Days Config - Assign course/format to each day
  - Players - Add/edit player info
- **Data:**
  - Scores - View submitted scores
  - Overview - Statistics dashboard

### Adding a Course
1. Click **Courses** → **+ Add Course**
2. Enter course ID (e.g., `lake-marion`)
3. Enter course name
4. Set par for each of 18 holes
5. Set difficulty ranking (1 = hardest, 18 = easiest)
6. Click **Save Course**

### Adding a Format
1. Click **Game Formats** → **+ Add Format**
2. Enter format ID (e.g., `123-ball`)
3. Enter format name
4. Add full description/rules
5. Select scoring type (Team/Individual/Match Play)
6. Set default purse
7. Click **Save Format**

### Configuring a Day
1. Click **Days Config**
2. Select day from dropdown
3. Choose course from dropdown
4. Choose format from dropdown
5. Set tee time, replay fee, purse
6. Set team assignments as JSON array
7. Click **Save Day Config**

---

## 📊 Data Flow

```
1. Admin adds courses to library
2. Admin adds formats to library
3. Admin configures each day (references course + format)
4. Admin adds players with emails and handicaps
5. Players receive email login link
6. Players enter scores on mobile
7. Scores save to Firebase in real-time
8. Leaderboard updates automatically for all viewers
```

---

## 🎨 Customization

### Update Trip Dates
Edit `scoring.html` line ~1266:
```javascript
const TRIP_DATES = [
  '2026-04-19', // Update to actual dates
  '2026-04-20',
  // ...
];
```

### Update Course Info on Schedule Page
Edit `index.html` - Update course details, addresses, tee times

### Customize Team Assignments
Use admin panel **Days Config** to adjust teams for each day

### Update Course Par/Difficulty
Use admin panel **Courses** → Edit → Adjust hole data

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| "Missing permissions" error | Deploy Firestore rules correctly (Firestore Database, not Realtime) |
| Email link not arriving | Enable Email Link auth in Firebase Console |
| Scores not saving | Player must click email link to authenticate first |
| Admin panel won't load | Check browser console for Firebase errors |
| Leaderboard not updating | Check that scores collection has data |

---

## 📦 What's Included

```
├── index.html              # Main landing page with schedule
├── instructions.html       # Game format rules
├── scoring.html           # Live scoring app (players use this)
├── admin.html             # Admin panel (manage everything)
├── firestore.rules        # Database security rules
├── seed-data.js           # One-time data seeding script
├── SETUP.md               # Detailed setup guide
└── QUICKSTART.md          # This file
```

---

## ✅ Launch Checklist

- [ ] Firebase email auth enabled
- [ ] Authorized domains added (buschlightcup.com)
- [ ] Firestore rules deployed
- [ ] Database seeded with courses/formats/days
- [ ] All 8 players added with emails
- [ ] Trip dates updated in scoring.html
- [ ] Course par/handicap data verified
- [ ] Test score submission works
- [ ] Test leaderboard updates in real-time
- [ ] Changes committed and pushed to GitHub
- [ ] Site live at buschlightcup.com

---

**Need detailed instructions?** See `SETUP.md`

**Ready to go!** 🏌️⛳️
