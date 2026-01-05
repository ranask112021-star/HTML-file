const fs = require("fs");
const path = require("path");

const notesDir = path.join(__dirname, "notes");

if (!fs.existsSync(notesDir)) {
  fs.mkdirSync(notesDir);
}

// Add note
function addNote(title, content) {
  fs.writeFileSync(path.join(notesDir, title + ".txt"), content);
  console.log("✅ Note added");
}

// Read note
function readNote(title) {
  fs.readFile(
    path.join(notesDir, title + ".txt"),
    "utf-8",
    (err, data) => {
      if (err) return console.log("❌ Note not found");
      console.log(data);
    }
  );
}

// List notes
function listNotes() {
  const files = fs.readdirSync(notesDir);
  console.log("📝 Notes:");
  files.forEach(f => console.log(f.replace(".txt", "")));
}

// CLI
const cmd = process.argv[2];
const title = process.argv[3];
const content = process.argv[4];

if (cmd === "add") addNote(title, content);
else if (cmd === "read") readNote(title);
else if (cmd === "list") listNotes();
else console.log("Use: add | read | list");
