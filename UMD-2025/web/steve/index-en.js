// 📦 Import the modules we need to run our digital underwater world
const express = require("express");   // Express: the minimal yet powerful web framework
const sqlite3 = require("sqlite3");   // Raw SQLite for lightweight databases
const sqlite = require("sqlite");     // A modern (Promise-friendly) interface for SQLite
const cors = require("cors");         // To let other origins talk to our server—Steve is sociable, but not overly so

// 🐠 Create the Express application—this is where our adventure begins
const app = express();

// 🧪 HTTP header validation function
// Steve, our fish with refined tastes, hates overly long, ambiguous, or mysterious headers
function checkBadHeader(headerName, headerValue) {
    return headerName.length > 80 ||
           (headerName.toLowerCase() !== 'user-agent' && headerValue.length > 80) ||
           headerValue.includes('\0'); // Null byte? Blasphemy to Steve.
}

// 🛟 CORS middleware: allow cross-origin requests
app.use(cors());

// 🧙 Custom middleware: here, Steve the Fish filters requests according to his underwater principles
app.use((req, res, next) => {
    let steveHeaderValue = null; // We'll capture the sacred header if present
    let totalHeaders = 0;        // Because Steve counts everything. Always.

    // 🔍 Iterate raw headers two at a time (name, value)
    for (let i = 0; i < req.rawHeaders.length; i += 2) {
        const headerName = req.rawHeaders[i];
        const headerValue = req.rawHeaders[i + 1];

        // ❌ If a header offends Steve, he shuts you down
        if (checkBadHeader(headerName, headerValue)) {
            return res.status(403).send(
                `Steve the Fish, an unassuming marine creature with strong opinions, cannot stand your HTTP headers. Each time he sees one—without even understanding exactly what it is—his glassy eye narrows, and a rumble bubbles in his gills. It’s not that he comprehends them, but he feels them in the water like a misaligned vibration, a digital dissonance that makes him deeply uncomfortable. He often exclaims dramatically: “Why so much formality? Why hide who you really are behind these obscure strings?” To him, these headers are like synthetic algae: useless, pretentious, and above all foreign to the fluidity of the underwater world. He’d much prefer a raw binary stream, without all these absurd ornaments. It’s a matter of principle.`
            );
        }

        // 🔮 If we find the "X-Steve-Supposition" header, we store its value
        if (headerName.toLowerCase() === 'x-steve-supposition') {
            steveHeaderValue = headerValue;
        }

        totalHeaders++; // 🧮 Increment our HTTP verbosity counter
    }

    // 🧻 Too many headers? Steve literally can’t take it.
    if (totalHeaders > 30) {
        return res.status(403).send(
            `Steve the Fish, who is orange with long muscular arms and nervous legs, fixes you with his bulging eyes. “Honestly,” he growls, wagging a fin like an accusatory finger, “you’re abusing it. Too many HTTP headers. Do you think it’s a contest? Every request you send is a novel. I have to swim through this verbose stream, and it’s me who drowns! Have you heard of minimalism? No? And what’s this with duplicate headers? You think the server is a therapist that needs to hear everything twice? Hold back next time, or I’ll cut the connection.”`
        );
    }

    // 🙅‍♂️ Missing the sacred header? Total blasphemy.
    if (steveHeaderValue === null) {
        return res.status(400).send(
            `Steve the Fish, still orange and furious, leaps out of the water with legs bent and arms crossed. “Come on,” he snaps, “where’s the X-Steve-Supposition header? You want me to guess your intentions? Do you think I read TCP packets? That header is fundamental—it’s where you declare your assumptions, your intentions, your respect for Steve’s sacred protocol. Without it, I’m lost, confused, disoriented like a fish out of a proxy.”`
        );
    }

    // 🧪 Validate the supposition’s structure: only the most honorable characters
    if (!/^[a-zA-Z0-9{}]+$/.test(steveHeaderValue)) {
        return res.status(403).send(
            `Steve the Fish, that unique orange fish with shiny skin and muscular fins—capable of swimming on land and walking in water like a plush carpet—looks at you with indignation. He clicks his tongue—you heard that, yes, Steve has a very expressive tongue—when he sees you type your supposition into the sacred field, and you dared to include punctuation, tildes, hashes, or dollar signs, as if this were a flea market of forgotten symbols. Do you think it’s a playground? For Steve, this field is a silent pact between human and machine, a zone of pure syntax. Yet here you are, desecrating that convention with your “%” and “@,” like you think the rules are mere suggestions. Steve furiously beats his hind legs—yes, he even has hind legs for off-road traction—and sends tiny splashes of terrestrial foam, the ultimate sign of his anger. “Why?” he demands, in a grave, solemn voice, like a stranded sea captain in a digital world, “Why seek dissonance when harmony would have sufficed? Why sabotage the simple beauty of ‘azAZ09’ with your postmodern scribbles?” He approaches, eyes narrowed, and says curtly: “You’re not worthy of the X-Steve-Supposition header. Come back when you can guess with dignity.”`
        );
    }

    // ✅ If everything is fine, Steve lets the request pass
    next();
});

// 🔍 Main entry point: GET route for “guess”
app.get('/deviner', async (req, res) => {
    // 📂 Open the SQLite database
    const db = await sqlite.open({
        filename: "./database.db",           // Path to the database
        driver: sqlite3.Database,            // Engine used
        mode: sqlite3.OPEN_READONLY          // I forgot this before
    });

    // 📋 Execute an SQL query: check if Steve’s supposition is correct
    const rows = await db.all(
        `SELECT * FROM flag WHERE value = '${req.get("x-steve-supposition")}'`
    );

    res.status(200); // 👍 All good on the surface

    // 🧠 If no matching row, Steve teases you
    if (rows.length === 0) {
        res.send("Nah, that’s wrong."); // No flag for you
    } else {
        res.send("You got it right!");  // Your guess matched the flag
    }
});

// 🚪 Start the server, like opening an aquarium to the world
const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
