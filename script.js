function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function pickUnique(arr, count) {
    const copy = [...arr];
    const results = [];

    for (let i = 0; i < count && copy.length > 0; i++) {
        const index = Math.floor(Math.random() * copy.length);
        results.push(copy[index]);
        copy.splice(index, 1);
    }

    return results;
}

function randomScore() {
    return Math.floor(Math.random() * 101);
}

function generateReport() {

    const nameDefaults = [
        "Anonymous",
        "Mysterious Stranger",
        "Captain Confusion",
        "The Chosen One",
        "An Unexpected Hero"
    ];

    const occupationDefaults = [
        "Professional Human",
        "Freelance Adventurer",
        "Part-Time Legend",
        "Snack Consultant",
        "Executive Decision Maker"
    ];

    const foodDefaults = [
        "Pizza",
        "Burritos",
        "Nachos",
        "Mystery Casserole",
        "Emergency Donuts"
    ];

    const hobbyDefaults = [
        "Looking Suspicious",
        "Collecting Questionable Ideas",
        "Competitive Napping",
        "Avoiding Responsibilities",
        "Advanced Loitering"
    ];

    const name =
        document.getElementById("name").value.trim() ||
        pick(nameDefaults);

    const occupation =
        document.getElementById("occupation").value.trim() ||
        pick(occupationDefaults);

    const food =
        document.getElementById("food").value.trim() ||
        pick(foodDefaults);

    const hobby =
        document.getElementById("hobby").value.trim() ||
        pick(hobbyDefaults);

    const easterEgg =
        `${name} ${occupation} ${food} ${hobby}`.toLowerCase();

    const hasBatman =
        easterEgg.includes("batman");

    const hasNinja =
        easterEgg.includes("ninja");

    const hasTaco =
        easterEgg.includes("taco");

    const hasTimeTravel =
        easterEgg.includes("time travel") ||
        easterEgg.includes("timetravel");

    // =====================================
    // BREAKING NEWS
    // =====================================

    const newsHeadline = pick([
        "Authorities Baffled",
        "Scientists Demand Answers",
        "Experts Deeply Concerned",
        "Neighborhood In Shock",
        "International Incident Declared",
        "Situation Escalates Rapidly",
        "Government Issues Statement",
        "Local Residents Confused",
        "Emergency Meeting Scheduled",
        "United Nations Monitoring Situation"
    ]);

    const newsOpenings = [
        "Residents woke up stunned today when",
        "Chaos erupted shortly after sunrise when",
        "Officials were forced to respond after",
        "Reporters rushed to the scene when",
        "Local authorities became concerned after",
        "The situation escalated unexpectedly when",
        "Witnesses immediately called the news when"
    ];

    const newsEvents = [
        `${name} accidentally became the leader of a small cult devoted to ${food}.`,
        `${name} triggered a citywide debate while practicing ${hobby}.`,
        `${name} was spotted carrying ${food} into a highly restricted meeting.`,
        `${name} convinced strangers that ${hobby} should be an Olympic sport.`,
        `${name} caused three emergency meetings and nobody knows why.`,
        `${name} was elected honorary mayor after a dramatic ${hobby} demonstration.`,
        `${name} achieved minor celebrity status through excessive use of ${food}.`,
        `${name} attempted to solve local problems using only ${food}.`,
        `${name} accidentally inspired a documentary series.`,
        `${name} was named Person of the Week by a confused committee.`
    ];

    const newsConsequences = [
        "The event has already generated six conspiracy theories.",
        "Several witnesses demanded an explanation.",
        "A committee has been formed to investigate.",
        "Experts remain completely confused.",
        "Three podcasts have already covered the incident.",
        "Nobody can agree on what actually happened.",
        "Local pigeons appear supportive.",
        "Social media remains divided."
    ];

    const witnessQuote = pick([
        "\"I've never seen anything like it,\" said one witness.",
        "\"This could change everything,\" reported local media.",
        "\"We're just trying to understand what happened.\"",
        "\"Frankly, we're impressed.\"",
        "\"Several pigeons appeared to approve.\"",
        "\"Nobody was prepared for this level of commitment.\"",
        "\"Experts remain cautiously confused.\"",
        "\"The paperwork alone may take years.\""
    ]);

    // =====================================
    // PERFORMANCE REVIEW
    // =====================================

    const strengths = [
        `Exceptional dedication to ${food}`,
        `Advanced ${hobby} capabilities`,
        `Can appear productive with minimal evidence`,
        `Strong confidence during completely avoidable situations`,
        `Maintains enthusiasm under confusing circumstances`,
        `Displays elite snack-management skills`,
        `Creative interpretation of workplace rules`,
        `Shows remarkable persistence`,
        `Excellent emergency improvisation`,
        `Keeps morale high despite the facts`
    ];

    const weaknesses = [
        `Attempts to involve ${food} in business decisions`,
        `Frequently distracted by ${hobby}`,
        `Refers to ordinary tasks as "epic quests"`,
        `Maintains suspicious relationships with birds`,
        `Asks difficult questions during easy meetings`,
        `Treats minor inconveniences like movie plots`,
        `Occasionally invents unnecessary procedures`,
        `May overestimate personal expertise`,
        `Uses dramatic narration during routine tasks`,
        `Shows questionable judgment around ${food}`
    ];

    const selectedStrengths = pickUnique(strengths, 3);
    const selectedWeaknesses = pickUnique(weaknesses, 3);

    // =====================================
    // DATING PROFILE
    // =====================================

    const datingOpening = pick([
        `Hello, I'm ${name}.`,
        `Greetings, future adventure partner.`,
        `My friends describe me as "legally interesting."`,
        `Hi. I'm ${name}, and this is probably a mistake.`,
        `Nice to meet you.`,
        `Let's skip the small talk and discuss snacks.`,
        `I was told to write something impressive.`
    ]);

    const datingMiddle = pick([
        `I work as a ${occupation} and spend my free time enjoying ${hobby}.`,
        `As a ${occupation}, I've learned many skills. None are useful.`,
        `My passion for ${hobby} is exceeded only by my passion for ${food}.`,
        `People often ask why I enjoy ${hobby}. I change the subject.`,
        `I bring a unique blend of confidence and questionable judgment.`,
        `I've dedicated years to mastering the art of ${hobby}.`,
        `I once considered turning ${hobby} into a career.`
    ]);

    const datingClosing = pick([
        `Ideal date: ${food}, adventure, and poor decisions.`,
        `Looking for someone who won't judge my relationship with ${food}.`,
        `Must tolerate stories involving ${hobby}.`,
        `If you can explain my life choices, please contact me.`,
        `Bonus points if you also enjoy chaos.`,
        `Applications are currently being accepted.`,
        `References available upon request.`
    ]);

    // =====================================
    // SUPERHERO
    // =====================================

    const heroName =
        pick(["Captain", "Professor", "Doctor", "Mega", "Ultra", "Mystery"])
        + " " + food;

    const superPower = pick([
        `the ability to summon unlimited ${food}`,
        `extreme ${hobby} powers`,
        `telepathic communication with pigeons`,
        `the power of dramatic entrances`,
        `advanced snack detection`,
        `unreasonable confidence`
    ]);

    const superheroWeaknesses = [
        `${food}`,
        `basic mathematics`,
        `strongly worded emails`,
        `small ducks`,
        `office meetings`,
        `their own overconfidence`
    ];

    // =====================================
    // COURTROOM
    // =====================================

    const defense = pick([
        `the ${food} made me do it`,
        `I was conducting important research`,
        `nobody specifically told me not to`,
        `it seemed like a good idea at the time`,
        `the pigeons approved`,
        `I misunderstood the assignment`
    ]);

    const courtroomEvidence = [
        `a suspiciously large amount of ${food}`,
        `a handwritten manifesto about ${hobby}`,
        `four confused witnesses`,
        `an unexplained receipt`,
        `a pigeon that refused to testify`,
        `a series of unfortunate photographs`
    ];

    // =====================================
    // ALIEN REPORT
    // =====================================

    const alienObservation = pick([
        `subject displays unusual attachment to ${food}`,
        `subject frequently discusses ${hobby}`,
        `subject appears harmless but unpredictable`,
        `subject possesses advanced snack acquisition skills`,
        `subject demonstrates confidence unsupported by evidence`,
        `subject may be attempting leadership`
    ]);

    const alienRecommendations = [
        `Continue observation.`,
        `Proceed with caution.`,
        `Offer snacks and observe reaction.`,
        `Avoid discussing taxes.`,
        `Further study required.`,
        `Subject may be important to local customs.`
    ];

    // =====================================
    // Special Easter Egg Card
    // =====================================

    let specialCard = "";

    if (hasBatman) {

        specialCard = `
        <div class="card easterEggCard">

            <h2>🦇 CLASSIFIED BATMAN FILE</h2>

            <p>
                Authorities have confirmed that
                ${name} has been operating at night.
            </p>

            <p>
                Witnesses report dramatic exits,
                excessive preparation,
                and suspicious access to grappling hooks.
            </p>

            <p>
                Official conclusion:
                Definitely Batman.
            </p>

        </div>
        `;
    }

    if (hasNinja) {

        specialCard += `
        <div class="card easterEggCard">

            <h2>🥷 SECRET NINJA DOSSIER</h2>

            <p>
                Surveillance efforts failed because
                the subject keeps disappearing.
            </p>

            <p>
                Investigators found only a receipt
                for ${food}.
            </p>

            <p>
                Threat Level:
                Surprisingly Sneaky.
            </p>

        </div>
        `;
    }

    if (hasTaco) {

        specialCard += `
        <div class="card easterEggCard">

            <h2>🌮 TACO PROPHECY</h2>

            <p>
                Ancient legends foretold the arrival
                of ${name}.
            </p>

            <p>
                The prophecy stated that unlimited tacos
                would bring balance to the world.
            </p>

            <p>
                Scholars remain divided.
            </p>

        </div>
        `;
    }

    if (hasTimeTravel) {

        specialCard += `
        <div class="card easterEggCard">

            <h2>⏰ TEMPORAL INCIDENT REPORT</h2>

            <p>
                ${name} accidentally traveled
                through time while attempting
                ${hobby}.
            </p>

            <p>
                Historians are now dealing with
                seventeen contradictory timelines.
            </p>

            <p>
                Recommendation:
                Stop touching mysterious buttons.
            </p>

        </div>
        `;
    }

    const hasAllSecrets =
        hasBatman &&
        hasNinja &&
        hasTaco &&
        hasTimeTravel;

    let absurdityScores = {
        mainCharacter: randomScore(),
        villain: randomScore(),
        professionalism: randomScore(),
        birdApproval: randomScore(),
        cultLeader: randomScore(),
        sceneMaking: randomScore(),
        legend: randomScore()
    };

    const absurdityTitle =
    hasAllSecrets
        ? "👑 ABSOLUTE CHAOS ACHIEVED 👑"
        : "📊 ABSURDITY METER";

    if (hasAllSecrets) {

        absurdityScores = {
            mainCharacter: 100,
            villain: 100,
            professionalism: 100,
            birdApproval: 100,
            cultLeader: 100,
            sceneMaking: 100,
            legend: 100
        };
    }
    
    if (hasAllSecrets) {

        specialCard += `
        <div class="card easterEggCard ultimateEgg">

            <h2>🏆 ULTIMATE SECRET ENDING</h2>

            <p>
                You have unlocked the rarest ending.
            </p>

            <p>
                Batman and the Ninjas have joined forces
                to protect the Sacred Taco Timeline.
            </p>

            <p>
                Reality survives another day.
            </p>

        </div>
        `;
    }

    // =====================================
    // OUTPUT
    // =====================================

    document.getElementById("results").innerHTML = `

    <div id="shareArea">

        <div class="card">
            <h2>🚨 BREAKING NEWS</h2>

            <h3>${newsHeadline}</h3>

            <p>
                ${pick(newsOpenings)}
                ${name}, a local ${occupation},
                was observed using ${food}
                while participating in ${hobby}.
            </p>

            <p>${pick(newsEvents)}</p>

            <p>${pick(newsConsequences)}</p>

            <p>${witnessQuote}</p>
        </div>

        ${specialCard}

        <div class="card">
            <h2>🤖 AI PERFORMANCE REVIEW</h2>

            <p><strong>Employee:</strong> ${name}</p>

            <h4>Strengths</h4>

            <ul>
                <li>${selectedStrengths[0]}</li>
                <li>${selectedStrengths[1]}</li>
                <li>${selectedStrengths[2]}</li>
            </ul>

            <h4>Areas For Improvement</h4>

            <ul>
                <li>${selectedWeaknesses[0]}</li>
                <li>${selectedWeaknesses[1]}</li>
                <li>${selectedWeaknesses[2]}</li>
            </ul>

            <p>
                <strong>Overall Rating:</strong>
                ${pick([
                    "Exceeds Expectations",
                    "Technically Employed",
                    "A Mystery To Management",
                    "Needs Adult Supervision",
                    "Unexpectedly Effective"
                ])}
            </p>
        </div>

        <div class="card">
            <h2>❤️ DATING PROFILE</h2>

            <p>${datingOpening}</p>
            <p>${datingMiddle}</p>
            <p>${datingClosing}</p>
        </div>

        <div class="card">
            <h2>🦸 SUPERHERO ORIGIN STORY</h2>

            <p>
                After a bizarre accident involving ${food},
                ${name} became <strong>${heroName}</strong>.
            </p>

            <p>
                Their powers include ${superPower}.
            </p>

            <p>
                Their only weakness is
                ${pick(superheroWeaknesses)}.
            </p>

            <p>
                Citizens remain cautiously optimistic.
            </p>
        </div>

        <div class="card">
            <h2>⚖️ COURTROOM DEFENSE</h2>

            <p>
                Your Honor, my client ${name},
                a respected ${occupation},
                would like the court to understand that
                "${defense}."
            </p>

            <p>
                Evidence submitted includes
                ${pick(courtroomEvidence)}.
            </p>

            <p>
                The jury remains unconvinced.
            </p>
        </div>

        <div class="card">
            <h2>👽 ALIEN FIELD REPORT</h2>

            <p>Subject Name: ${name}</p>

            <p>
                Observation:
                ${alienObservation}
            </p>

            <p>
                Additional Notes:
                Subject appears unusually interested in ${food}.
            </p>

            <p>
                Recommendation:
                ${pick(alienRecommendations)}
            </p>
        </div>

        <div class="card">
            <h2>${absurdityTitle}</h2>

            <div class="score">Main Character Energy: ${absurdityScores.mainCharacter}%</div>
            <div class="score">Villain Potential: ${absurdityScores.villain}%</div>
            <div class="score">Professionalism: ${absurdityScores.professionalism}%</div>
            <div class="score">Bird Approval Rating: ${absurdityScores.birdApproval}%</div>
            <div class="score">Cult Leader Potential: ${absurdityScores.cultLeader}%</div>
            <div class="score">Likelihood Of Causing A Scene: ${absurdityScores.sceneMaking}%</div>
            <div class="score">Probability Of Becoming A Legend: ${absurdityScores.legend}%</div>
        </div>

    </div>

    <div class="buttonRow">

        <button class="repeatBtn" onclick="generateReport()">
            🎲 Generate Another Version
        </button>

        <button class="shareBtn" onclick="shareImage()">
            📸 Share Image
        </button>

    </div>
    `;
}

function shareImage() {

    const target = document.getElementById("shareArea");

    html2canvas(target, {
        scale: 2
    }).then(canvas => {

        const image = canvas.toDataURL("image/png");

        const link = document.createElement("a");

        link.href = image;
        link.download = "life-report.png";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    });
}
