function generateHero() {
    // Get user input values
    let name = document.getElementById("heroName").value;
    let power = document.getElementById("heroPower").value;
    let weakness = document.getElementById("heroWeakness").value;

    // Update the output section
    document.getElementById("displayName").textContent = name ? name : "???";
    document.getElementById("displayPower").textContent = power ? power : "???";
    document.getElementById("displayWeakness").textContent = weakness ? weakness : "???";
}
