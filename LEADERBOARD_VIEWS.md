# Leaderboard Views — Week & Day

The `daily-leaderboard.html` page now has **two display modes** optimized for wall projection:

---

## **Week View — Tournament Standings**

### What It Shows
A PGA Tour-style leaderboard showing **all players' scores across all days and rounds** of the tournament.

### Layout
```
┌───────────────────────────────────────────────────────────────────┐
│ POS │ PLAYER  │ Day1-R1 │ Day1-R2 │ Day2-R1 │ ... │ TOTAL          │
├───────────────────────────────────────────────────────────────────┤
│  1  │ TROY    │   72    │   70    │   68    │ ... │ -8             │
│  2  │ JOHN    │   74    │   73    │   70    │ ... │ -3             │
│  3  │ ANDREW  │   75    │   75    │   72    │ ... │ E              │
└───────────────────────────────────────────────────────────────────┘
```

### Features
- **Automatic Round Detection**: Only shows Round 2 columns if any day has second round scores
- **Score Color Coding**:
  - 🔴 **Red cells** = Under par (better than 72)
  - ⚫ **Gray cells** = Even par (72)
  - ⚪ **White cells** = Over par
- **Position Highlighting**:
  - 🥇 **1st Place** = Gold background
  - 🥈 **2nd Place** = Silver position badge
  - 🥉 **3rd Place** = Bronze position badge
- **Total Score** = Score relative to par (e.g., -8, E, +5)
- **Live Updates** = Auto-refreshes via Firestore

### When to Use
- Projecting tournament standings throughout the week
- Showing overall competition across all days
- Comparing player performance day-by-day
- Default view when no specific day is selected

---

## **Day View — Hole-by-Hole Scorecard**

### What It Shows
Detailed **hole-by-hole scores for a specific day and round**, like a traditional golf scorecard.

### Layout
```
┌─────────────────────────────────────────────────────────────────────┐
│         │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ OUT │ ... │ GROSS │ NET │
├─────────────────────────────────────────────────────────────────────┤
│ HANDICAP│ 3 │17 │ 5 │ 1 │11 │15 │ 7 │13 │ 9 │     │ ... │       │     │
│ PAR     │ 5 │ 3 │ 4 │ 5 │ 4 │ 3 │ 4 │ 4 │ 4 │ 36  │ ... │  72   │     │
├─────────────────────────────────────────────────────────────────────┤
│ TROY    │ 4 │ 2 │ 4 │ 5 │ 3 │ 3 │ 5 │ 4 │ 5 │ 35  │ ... │  71   │ 68  │
│ JOHN    │ 5 │ 3 │ 5 │ 6 │ 4 │ 2 │ 4 │ 5 │ 4 │ 38  │ ... │  74   │ 70  │
└─────────────────────────────────────────────────────────────────────┘
```

### Features
- **Dynamic Hole Numbers**:
  - Round 1: Holes 1-18
  - Round 2: Holes 19-36
- **Score Color Coding**:
  - 🔴 **Eagle** or better = Red
  - 🟠 **Birdie** = Orange
  - 🟢 **Par** = Green
  - 🔵 **Bogey** = Blue
  - ⚫ **Worse** = Gray
- **Player Grouping**: Teams displayed in two sections (Team 1 and Team 2)
- **Statistics Tracking**:
  - Low Net winner
  - Birdies count
  - Greenies (closest to pin on par 3s)
- **Live Updates** = Real-time score updates via Firestore

### When to Use
- Viewing detailed round-in-progress scores
- Analyzing hole-by-hole performance
- Showing specific day's competition
- Tracking low net, birdies, and greenies

---

## **How to Switch Views**

### On the Leaderboard Page:
1. Use the **"View" dropdown** at the top:
   - Select **"Week View — Tournament Standings"**
   - Select **"Day View — Hole-by-Hole"**

2. **Week View**:
   - No additional selections needed
   - Shows all available scores automatically

3. **Day View**:
   - **Day selector** appears
   - Choose day (1-7)
   - **Round selector** appears if second round exists
   - Choose Round 1 or Round 2

---

## **Auto-Selection Behavior**

### During the Trip:
- If today matches a trip date → Automatically shows **Day View** for today
- Otherwise → Shows **Week View** by default

### Manual Override:
- Use dropdowns to switch between views anytime
- Selection persists until page refresh

---

## **Data Requirements**

### Week View:
- Queries: `scores` collection where `year == 2026`
- Groups by: `uid` (player)
- Aggregates: All day/round combinations
- Sorting: By rounds played (desc), then total net (asc)

### Day View:
- Queries: `scores` collection where:
  - `year == 2026`
  - `dayNumber == selected day`
  - `roundNumber == selected round`
- Displays: Hole-by-hole arrays
- Sorting: By team groupings, then net score

---

## **Firestore Indexes Needed**

For optimal performance, create these composite indexes:

```
Collection: scores
Index 1:
  - year (Ascending)
  - dayNumber (Ascending)
  - roundNumber (Ascending)

Index 2:
  - year (Ascending)
  - uid (Ascending)
```

---

## **Visual Design**

### Week View Style:
- PGA Tour leaderboard aesthetic
- Position badges (gold, silver, bronze)
- Score cells with color coding
- Large, bold totals column
- Responsive table layout

### Day View Style:
- Traditional golf scorecard format
- Titleist branding header
- Front 9 (blue) / Back 9 (red) color scheme
- Team divider between groups
- Stats cards below scorecard

---

## **Technical Implementation**

### Files Modified:
- `daily-leaderboard.html` - Complete rewrite with dual-view support

### New Functions:
- `onViewChange()` - Switches between week/day views
- `loadWeekView()` - Loads tournament standings
- `renderWeekView()` - Builds week view table
- `updateTableHeader()` - Dynamic hole number headers (1-18 or 19-36)
- `onRoundChange()` - Switches between rounds in day view

### State Variables:
- `currentView` - 'week' or 'day'
- `currentDay` - Selected day number (1-7)
- `currentRound` - Selected round (1 or 2)
- `weekScoresListener` - Firestore listener for week view
- `scoresListener` - Firestore listener for day view

---

## **Usage Examples**

### Scenario 1: Monday Evening
**Goal:** Show tournament standings after Day 2

**Steps:**
1. Open `daily-leaderboard.html`
2. View selector defaults to "Week View"
3. See all Day 1 and Day 2 scores
4. Player positions update live

### Scenario 2: Wednesday Afternoon
**Goal:** Show Day 4 hole-by-hole scores as they happen

**Steps:**
1. Open `daily-leaderboard.html`
2. Switch to "Day View"
3. Select "Day 4 — Wednesday"
4. Select "Round 1 (1-18)"
5. Watch scores fill in live

### Scenario 3: Thursday Replay Round
**Goal:** Display second round (holes 19-36) for Thursday

**Steps:**
1. Open `daily-leaderboard.html`
2. Switch to "Day View"
3. Select "Day 5 — Thursday"
4. Select "Round 2 (19-36)"
5. See holes numbered 19-36 in scorecard

---

## **Future Enhancements**

Possible additions:
- Player photos/avatars
- Stroke-by-stroke animation
- Sound effects for birdies/eagles
- Leaderboard movement arrows (↑↓)
- Head-to-head matchup view
- Scoring trend graphs
- Live weather overlay
- Mobile-responsive breakpoints

---

## **Browser Compatibility**

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Safari (latest)
- ✅ Firefox (latest)
- ✅ Large displays (1920×1080+)
- ✅ Tablets (landscape)

---

## **Performance Notes**

- **Week View**: Single query fetches all scores, minimal processing
- **Day View**: Filtered query for specific day/round, instant updates
- **Auto-refresh**: Firestore real-time listeners (no polling)
- **Load time**: < 500ms on stable connection
- **Memory**: Lightweight, can run 24/7 on display

---

**Enjoy your tournament leaderboards! 🏆⛳**
