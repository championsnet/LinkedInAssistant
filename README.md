LinkedIn Job Highlighter Chrome Extension
=========================================

This Chrome extension was built for a specific person, Pepa, and filters out jobs on LinkedIn based on specific criteria such as jobs marked as 'viewed', jobs located in French-speaking or Italian-speaking cantons of Switzerland, and job titles containing German words or special German characters. It highlights worthy jobs that meet your criteria when you press **Ctrl + S**.

Table of Contents
-----------------

1.  [Features](#features)
2.  [Installation](#installation)
3.  [Usage](#usage)
4.  [How it Works](#how-it-works)
5.  [Contributing](#contributing)
6.  [License](#license)

Features
--------

*   **Filters out jobs** that are marked as 'viewed'.
*   **Removes jobs** from French-speaking cantons (Geneva, Vaud, etc.) and Italian-speaking cantons (Ticino, Graubünden) of Switzerland.
*   **Filters out jobs with German words** or special German characters in the title (e.g., ä, ö, ü, ß).
*   **Highlights worthy jobs** that meet your selection criteria in yellow for easier browsing.
*   Works **on-demand** when you press **Ctrl + S**.

Installation
------------

### Step 1: Download the Extension Files

1.  Download or clone this GitHub repository to your computer:
    *   `git clone https://github.com/championsnet/LinkedInAssistant.git`
    *   Or download it as a **ZIP** file and extract it on your computer.

### Step 2: Open Chrome Extensions

1.  Open Google Chrome and navigate to chrome://extensions/ in the URL bar.
2.  Enable **Developer Mode** by toggling the switch at the top right corner.

### Step 3: Load the Unpacked Extension

1.  Click the **"Load unpacked"** button.
2.  Browse to the folder where you downloaded or extracted the repository and select it.
3.  The extension will be loaded, and you should see the icon in your Chrome toolbar.

Usage
-----

1.  **Navigate to LinkedIn Jobs**:
    *   Go to [LinkedIn Jobs](https://www.linkedin.com/jobs) and search for jobs.

2.  **Press Ctrl + S**:
    *   When you press **Ctrl + S**, the extension will:
        *   Remove jobs marked as **viewed**.
        *   Remove jobs from **French-speaking cantons** (Geneva, Vaud, etc.).
        *   Remove jobs from **Italian-speaking cantons** (Ticino, Graubünden).
        *   Remove jobs containing **German words** or special characters in the job title (e.g., ä, ö, ü, ß).

3.  **Highlighted Jobs**:
    *   All remaining jobs that meet your criteria will be highlighted in **yellow**, making it easy for you to spot worthy job opportunities.

How it Works
------------

### File Structure:

*   **manifest.json**: Describes the extension's settings, including permissions and what scripts run.
*   **content.js**: Contains the core logic for filtering jobs and highlighting them.
*   **popup.js**: Handles any interactions with the extension's popup (if applicable).

Analytical Guide
----------------

### Criteria and Use Cases:

*   **Why remove jobs from French- and Italian-speaking cantons?**
    *   This is useful for users who are not interested in jobs from specific regions or language areas.
*   **Why remove jobs with German words or special characters?**
    *   If you're filtering for jobs that require English (or another language) and wish to avoid German-speaking positions, this filter helps eliminate those postings.
*   **Highlighting Jobs for Attention**:
    *   Jobs that pass all the filters are automatically highlighted. This helps you focus on relevant job postings without getting distracted by irrelevant ones.

### Customization:

*   **Add More German Words**: You can easily add more German words to the filter by editing the `containsGermanSpecialChars` function in [content.js](content.js).
*   **Modify the Highlighting Color**: Change the highlighting color in [content.js](content.js) by modifying the `backgroundColor` property in the [`highlightWorthyJobs`](content.js) function.

Contributing
------------

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find bugs or have suggestions for improvements.

License
-------

This project is licensed under the MIT License.