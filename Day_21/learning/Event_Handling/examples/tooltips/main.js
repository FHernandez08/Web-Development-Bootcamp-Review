// Get Elements
const tooltipButton = document.querySelector('.tooltip-button');
const tooltip = document.getElementById('tooltip');

// Function to Show Tooltip
function showTooltip(event) {
    const tooltipText = event.target.getAttribute('data-tooltip');
    tooltip.textContent = tooltipText;
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;
    tooltip.style.display = 'block';
}

// Function to Hide Tooltip
function hideTooltip() {
    tooltip.style.display = 'none';
}

// Event Listeners
tooltipButton.addEventListener('mouseover', showTooltip);
tooltipButton.addEventListener('mousemove', showTooltip);
tooltipButton.addEventListener('mouseout', hideTooltip);