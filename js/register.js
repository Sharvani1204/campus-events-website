const form = document.querySelector("#registerForm");
const fullName = document.querySelector("#fullname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const department = document.querySelector("#department");
const eventChoice = document.querySelector("#eventChoice");
const prefDate = document.querySelector("#prefDate");
const terms = document.querySelector("#terms");
const submitBtn = document.querySelector("#submitBtn");
const result = document.querySelector("#result");

const nameRegex = /^[A-Za-z ]{3,}$/;
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const mobileRegex = /^[6-9]\d{9}$/;

const options = events.map((item) => {
    return `<option value="${item.id}">${item.title}</option>`;
});
eventChoice.innerHTML = `<option value="">Select an event</option>` + options.join("");

const chosen = new URLSearchParams(window.location.search).get("event");
if (chosen) {
    eventChoice.value = chosen;
}

const fillDate = () => {
    const found = events.find((item) => item.id === eventChoice.value);
    prefDate.value = found?.isoDate ?? "";
};

fillDate();
eventChoice.addEventListener("change", fillDate);

terms.addEventListener("change", () => {
    submitBtn.disabled = !terms.checked;
});

let valid = true;

// shows or clears the red message below a field
const checkField = (input, passed, message) => {
    const error = document.querySelector(`#${input.id}-error`);

    error.textContent = passed ? "" : message;
    input.classList.toggle("invalid", !passed);

    if (!passed) {
        valid = false;
    }
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    valid = true;

    checkField(fullName, nameRegex.test(fullName.value.trim()), "Enter at least 3 letters (letters and spaces only)");
    checkField(email, emailRegex.test(email.value.trim()), "Enter a valid email address");
    checkField(phone, mobileRegex.test(phone.value.trim()), "Enter a 10-digit mobile number");
    checkField(department, department.value !== "", "Select your department");
    checkField(eventChoice, eventChoice.value !== "", "Select an event");
    checkField(prefDate, prefDate.value !== "", "Select a date");

    if (!valid) {
        result.textContent = "Please correct the errors shown above.";
        result.className = "result failed";
        return;
    }

    const found = events.find((item) => item.id === eventChoice.value);

    result.textContent = `Thank you, ${fullName.value.trim()}! You are registered for ${found.title}.`;
    result.className = "result success";

    form.reset();
    submitBtn.disabled = true;
});