runningState = false;

// Function to identify and highlight worthy jobs
function highlightWorthyJobs() {
    if (runningState) return;  // Skip if the function is already running
    runningState = true;
    const jobElements = document.querySelectorAll('li.jobs-search-results__list-item'); // Target the list item elements for jobs

    const frenchSpeakingCantons = ['Geneva', 'Vaud', 'Neuchâtel', 'Fribourg', 'Jura', 'Valais', 'Lausanne', 'St Gallen'];
    const italianSpeakingCantons = ['Ticino', 'Graubünden'];  // Add Italian-speaking cantons
    const unwantedLocations = ['EMEA']

    // List of common German words and words with special characters
    const germanWords = [
        'Werkstudent', 'Lehrstelle', 'Ingenieur', 'Entwickler', 'Berater', 'Anwalt', 'Verkäufer', 'Lehrer', 'Kundenbetreuung', 'Buchhalter', 'Fachkraft', 'Assistent', 'Praktikant', 'Bankett', 'Augenoptiker', 'Praktikum', 'Filialleiter', 'Fachmann', 'Fachfrau', 'Wochenstunden',
        'beiter', 'Elektroniker', 'Elektronikerin', 'Elektronik', 'Bussnang', 'chauff', 'schwere', 'monteur', 'stieg', 'Druck', 'Collaborateur', 'Reifenpraktiker',
        'Automatiker', 'Zeichner', 'techniker', 'technikerin', 'technik', 'technikum', 'technikus', 'technikum', 'technikus', 'Baumas', 'Zimmermann', 'Logistiker', 'schafter', 'schafterin', 'schaft', 'schaften', 'schaftler', 'schaftlerin', 'stellter', 'Vendeur',
        'Ärzt', 'Büro', 'Schüler', 'Straße', 'Züchter', 'Über', 'Flüge', 'Größe', 'Möbel', 'Höhe', 'Können', 'Möglich', 'Wählen', 'Fähigkeit', 'Fähig', 'Lehre', 'Metzger', 'Köche', 'Köchin', 'Koch', 'Köchin', 'Fach', 'Mitarbeiterin', 'Mitarbeiter', 'Kraft', 'Kraftfahrer', 'Kraftfahrerin', 'Kraftfahrzeug', 'Kraftfahrzeugführer', 'Kraftfahrzeugführerin', 'Kraftfahrzeugmechatroniker', 'Kraftfahr',
    ];


    const unwantedEmployers = ['Rocken', 'eFinancialCareers']

    // Function to detect if a string contains special German characters
    const containsGermanSpecialChars = (text) => /[äöüßÉàá]/.test(text);

    jobElements.forEach(job => {
        const titleElement = job.querySelector('.job-card-list__title');  // Title of the job
        const jobPoster = job.querySelector('.job-card-container__primary-description');  // Employer of the job
        const locationElement = job.querySelector('.job-card-container__metadata-item');  // Location of the job
        const footerElement = job.querySelector('.job-card-container__footer-item');  // Footer, e.g. 'Promoted' or 'Viewed'

        // Skip if the title or location is missing (to avoid errors)
        if (!titleElement || !locationElement) return;

        const title = titleElement.innerText.trim();
        const location = locationElement.innerText.trim();
        const footerText = footerElement ? footerElement.innerText.trim().toLowerCase() : '';

        // Remove 'viewed' jobs (or jobs with specific keywords in the footer)
        if (footerText.includes('viewed')) {
            job.style.opacity = 0.4;  // Hide jobs that are viewed
            return;  // Skip to the next job
        }

        // Remove jobs located in French-speaking cantons
        const isFrenchCanton = frenchSpeakingCantons.some(canton => location.includes(canton));
        if (isFrenchCanton) {
            job.style.opacity = 0.4;  // Hide jobs located in French-speaking regions
            return;  // Skip to the next job
        }

        // Remove jobs located in Italian-speaking cantons
        const isItalianCanton = italianSpeakingCantons.some(canton => location.includes(canton));
        if (isItalianCanton) {
            job.style.opacity = 0.4;  // Hide jobs located in Italian-speaking regions
            return;  // Skip to the next job
        }

        // // Remove jobs located in unwanted locations
        // const isUnwantedLocation = unwantedLocations.some(location => location.includes(location));
        // if (isUnwantedLocation) {
        //     job.style.opacity = 0.4;  // Hide jobs located in unwanted locations
        //     return;  // Skip to the next job
        // }

        // Remove jobs that contain German words in the title
        const isGermanJob = germanWords.some(word => title.toLowerCase().includes(word.toLowerCase()));
        if (isGermanJob || containsGermanSpecialChars(title)) {
            job.style.opacity = 0.4;  // Hide jobs with German words or special German characters
            return;  // Skip to the next job
        }

        // Remove jobs from unwanted employers
        const isUnwantedEmployer = unwantedEmployers.some(employer => jobPoster.innerText.toLowerCase().includes(employer.toLowerCase()));
        if (isUnwantedEmployer) {
            job.style.opacity = 0.4;  // Hide jobs from unwanted employers
            return;  // Skip to the next job
        }

        // Highlight jobs that pass the filters
        job.style.backgroundColor = 'lightyellow';  // Highlight worthy jobs

        runningState = false;
    });
}

// Function to observe changes to the job list and re-apply the filtering
function observeJobListUpdates() {
    const jobList = document.querySelector('.jobs-search-results-list');  // Adjust the selector if needed
    
    console.log('observing job list updates');
    // Create a MutationObserver to monitor changes in the job list
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                // When jobs are added or updated, run the highlighting logic
                highlightWorthyJobs();
            }
        });
    });

    // Configure the observer to monitor child elements (job list items being added/removed)
    observer.observe(jobList, { childList: true, subtree: true });

    // Run the highlighting logic initially
    highlightWorthyJobs();
}

// Whenever a specific shortcut is pressed, run the function to observe job list updates
document.addEventListener('keydown', (event) => {
    if (event.key === 's' && event.ctrlKey) {
        highlightWorthyJobs();
    }
});
