const params = new URLSearchParams(window.location.search);
const eventId = params.get("id") ?? "tech-fest";

const selected = events.find((item) => item.id === eventId) ?? events[0];

const { id, title, category, tagClass, image, tagline, about, date, time, venue, type } = selected;

document.title = `Campus Events - ${title}`;
document.querySelector("#title").textContent = title;
document.querySelector("#tagline").textContent = tagline;
document.querySelector("#about").textContent = about;
document.querySelector("#date").textContent = date;
document.querySelector("#time").textContent = time;
document.querySelector("#venue").textContent = venue;
document.querySelector("#type").textContent = type;

const tag = document.querySelector("#tag");
tag.textContent = category;
tag.className = `tag ${tagClass}`;

const poster = document.querySelector("#poster");
poster.src = `images/${image}`;
poster.alt = title;

document.querySelector("#registerBtn").href = `register.html?event=${id}`;