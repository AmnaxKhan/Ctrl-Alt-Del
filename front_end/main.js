let recommendations = [];

// Function to generate exercise recommendations based on angle
function generateRecommendations(angle) {
    if (angle > 0 && angle < 60) {
        recommendations = [
            "Heel slides",
            "Quad sets",
            "Straight leg raises"
        ];
    } else if (angle >= 60 && angle <= 90) {
        recommendations = [
            "Prone hangs",
            "Seated knee flexion",
            "Mini-squats"
        ];
    } else if (angle > 90 && angle <= 180) {
        recommendations = [
            "Leg press machine",
            "Step-ups",
            "Lunges",
            "Cycling"
        ];
    } else {
        recommendations = [
            "Not possible"
        ];
    }

    // Update HTML content with exercise recommendations
    let exerciseContent = document.getElementById("exerciseContent");
    exerciseContent.innerHTML = "<h3>Exercise Recommendations:</h3>";
    for (let i = 0; i < recommendations.length; i++) {
        exerciseContent.innerHTML += "<p>" + recommendations[i] + "</p>";
    }
}

// Function to get flexure angle dynamically (placeholder for actual implementation)
function getFlexureAngle() {
    // Placeholder: return the angle obtained from the actual source (e.g., sensor data, user input)
    return 50; // Default value for demonstration
}

// On page load, generate exercise recommendations based on the flexure angle
window.onload = function() {
    let angle = getFlexureAngle();
    generateRecommendations(angle);
};
