# Campus Events Website

A simple multi-page website for campus events, built using only **HTML and CSS**. No JavaScript, no frameworks, no libraries.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Banner, featured events and event categories |
| About | `about.html` | About the platform, mission and event types |
| Events | `events.html` | All upcoming events shown as cards |
| Event Details | `event-details.html` | Full details of the selected event |
| Schedule | `schedule.html` | Table with date, time, venue and category of every event |
| Register | `register.html` | Event registration form |

## Folder Structure

```
campus-events-website/
│
├── index.html
├── about.html
├── events.html
├── event-details.html
├── schedule.html
├── register.html
├── README.md
│
├── css/
│   └── style.css
│
└── images/
    ├── campus.jpg
    ├── students.jpg
    ├── tech-fest.jpg
    ├── cultural.jpg
    ├── sports.jpg
    ├── workshop.jpg
    ├── photography.jpg
    └── career.jpg
```

All six pages use one shared stylesheet, `css/style.css`.

## How to Run

1. Download or clone this repository.
2. Open the folder in VS Code (or any editor).
3. Double-click `index.html` to open it in a browser.

## Navigation Flow

```
Home (index.html)
   │
   ▼
Events (events.html) ───► Schedule (schedule.html)
   │
   ▼
Event Details (event-details.html)
   │
   ▼
Register (register.html)
```

## How Navigation Works Without JavaScript

- **Links:** Every menu item and button is an anchor tag, for example `<a href="events.html">Events</a>`. The browser opens the file named in `href`, so no script is needed.
- **Buttons:** Buttons like "View Details" are also anchor tags. CSS gives them the look of a button.
- **Active menu item:** Each page adds `class="active"` to its own menu link, and CSS highlights it.

### Showing the Right Event on the Details Page

`event-details.html` holds all six events, but only one is visible at a time.

1. Each event has its own `id`, for example `<div class="event" id="cultural-day">`.
2. Each "View Details" link ends with that id, for example `event-details.html#cultural-day`.
3. CSS hides every event with `display: none`.
4. The `:target` selector matches the event whose id is in the link, and `display: block` shows it.
5. If the page is opened without an id, Tech Fest is shown by default.

## Features

- Responsive-style card and grid layouts using CSS Flexbox and Grid
- Hover effects on menu items, buttons and table rows, using CSS `:hover`
- Registration form with built-in browser validation (`required`, `type="email"`, `type="date"`)
- Colours written in `rgb()` format

## Limitations

- The registration form does not store data, because that needs a backend.
- The search box is only for display, because searching needs JavaScript.

## Technologies Used

- HTML5
- CSS3