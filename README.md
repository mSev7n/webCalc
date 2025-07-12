# webCalc
A simple web-based calculator that performs basic arithmetic operations built with **HTML, CSS, and JavaScript**.  
This project performs basic arithmetic operations and includes features like chaining, decimal support, and a backspace function — all with a focus on clean UI and good UX.

---

## 🚀 Live Demo

👉 [View Calculator Live](https://msev7n.github.io/webCalc/) 

---

## ✨ Features

- ✅ Basic operations: Add, Subtract, Multiply, Divide
- ✅ Decimal support
- ✅ Backspace (`<X`) to undo last digit
- ✅ Clear (`C`) button to reset calculator
- ✅ Handles consecutive operator clicks correctly (no unintended evaluations)
- ✅ Prevents divide-by-zero errors
- ✅ Responsive UI, keyboard-friendly (optional)
- ✅ Built with accessibility and structure in mind

---

## 🛠️ Tech Stack

- **HTML** – structure
- **CSS** – layout & design
- **JavaScript** – logic & interactivity

---

## 🧠 How It Works

- Each button click updates the screen and internal state.
- Operators are only evaluated when **two numbers** are provided.
- Consecutive operators do **not trigger evaluation** — only the last one is remembered.
- `Backspace (<X)` removes the last character on screen.
- Result stays visible and usable for the next operation.

---
