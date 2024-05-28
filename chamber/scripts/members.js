document.addEventListener("DOMContentLoaded", () => {
    const members = [
        { name: "Member A", level: "gold" },
        { name: "Member B", level: "silver" },
        { name: "Member C", level: "gold" },
        { name: "Member D", level: "silver" },
        // add more members as needed
    ];

    const eligibleMembers = members.filter(member => member.level === "gold" || member.level === "silver");
    const randomMembers = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

    const spotlightContainer = document.getElementById('spotlight-container');
    spotlightContainer.innerHTML = '';

    randomMembers.forEach(member => {
        spotlightContainer.innerHTML += `<div class="spotlight"><h3>${member.name}</h3><p>Membership Level: ${member.level}</p></div>`;
    });
});
