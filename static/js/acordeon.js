document.querySelectorAll('.link input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        const id = this.id;
        const containerId = `show-${id.replace('check-', '')}`;
        const mapContainer = document.getElementById(containerId);

        if (this.checked) {
            mapContainer.style.maxHeight = "50vh"; // Adjust as needed
            mapContainer.style.opacity = "1";
        } else {
            mapContainer.style.maxHeight = "0";
            mapContainer.style.opacity = "0";
        }
    });
});
