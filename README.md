# Campus Events Website

A multi-page website for exploring campus events, viewing event details, checking schedules, and accessing a registration form. The project uses HTML, CSS, and JavaScript.

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Main banner, featured events, and event categories |
| About | `about.html` | Information about the website, its purpose, and event types |
| Events | `events.html` | Displays upcoming campus events |
| Event Details | `event-details.html` | Shows detailed information about events |
| Schedule | `schedule.html` | Displays event dates, times, venues, and categories |
| Register | `register.html` | Provides the event registration form |

## Folder Structure

```text
Training-Project1/
│
├── index.html
├── about.html
├── events.html
├── event-details.html
├── schedule.html
├── register.html
├── README.md
│
├── .vscode/
│   └── settings.json
│
├── css/
│   └── style.css
│
├── js/
│   ├── data.js
│   ├── details.js
│   ├── register.js
│   └── search.js
│
└── images/
    ├── campus.jpg
    ├── career.jpg
    ├── cultural.jpg
    ├── photography.jpg
    ├── sports.jpg
    ├── students.jpg
    ├── tech-fest.jpg
    └── workshop.jpg
```

## Technologies Used

- **HTML5:** Structures the website pages and content.
- **CSS3:** Handles styling, layouts, responsive design, and hover effects.
- **JavaScript:** Supports event data, event details, registration-related interactions, and search functionality.

## Features

- Six interconnected website pages
- Shared CSS stylesheet
- Event cards and event information
- Event schedule table
- Event registration form
- JavaScript files organized in a separate folder
- Local images organized in an `images/` directory
- Navigation links between pages

## JavaScript Files

| File | Purpose |
|---|---|
| `data.js` | Stores or manages event data |
| `details.js` | Handles event details functionality |
| `register.js` | Handles registration-related interactions |
| `search.js` | Handles search functionality |

*Note: The exact responsibilities of these JavaScript files depend on their implementation.*

## How to Run

1. Open the project folder in Visual Studio Code.
2. Ensure the HTML, CSS, JavaScript, and image files are in their respective folders.
3. Open `index.html` in a browser.
4. Navigate between pages using the website menu.

If the website uses JavaScript modules or fetches local data files, run it through a local development server, such as the VS Code Live Server extension.

## Navigation Flow

```text
Home (index.html)
   |
   v
Events (events.html) ------> Schedule (schedule.html)
   |
   v
Event Details (event-details.html)
   |
   v
Register (register.html)
```

Users can also navigate directly to the Home, About, Events, Schedule, and Register pages through the navigation menu.

## Project Objective

The objective is to develop a campus events website that organizes event information, schedules, details, and registration in a clear and accessible multi-page interface.