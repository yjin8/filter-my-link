# Filter My Link (FML)

A Google Chrome extension that filters certain words and replaces them with random quotes, phrases or text emojis.

## What's Up?
This extension was originally designed with the primary motivation of fighting against online harassment and bullying. Firstly, it is designed to create awareness about the thin line between being friendly and harassing women through digital content that degrade the integrity of woman on social platforms. Also,in a world full of stress, we wish that we replace the some of the sources of negativity found on the web and to make an effort to bring smile on each individual's face by replacing the certain content with humorous words and emojis.

This extension should work on non-React webpages.

## Challenges
We spent a large chunck of time trying to incorporating Google's NLP Sentimental Analysis with the Chrome extension in order to get a more wholistic understanding of the user's state of mind and to relay this information to the user in an direct educational way.

However, we were unable to find a way to integrate Google Cloud's Flask Web App with the JS content script the way we needed to. We decided to focus on creating a demo-able and usable Chrome extension.

This extension isn't exactly what we imagined it to be, but it certainly made us laugh many times while testing it and we hope it will make users' days a little bit brighter.

## Installation
To install this extension, open ``chrome://extensions`` or go to Menu and select Extensions under More Tools. Make sure that Developer's mode is checked and then click on Load unpacked extension. Select the extension directory and ensure that Filter My Link is enabled. 

## Files
* ``content.js``: contains the processes that analyzes and filters the text in a webpage
* ``popup.html``: contains the design of the popup that appears when the extension button is clicked
* ``manifest.json``
** ``language archive\language`` contains our unfinished work with Google Cloud

## Next Steps
There are plenty of immediate improvements that can be made. First of all, FML should allow users to personalize the list of words that they do or don't want to see. FML can also be extended to provide a "kid-safe-browsing" feature. We would also like to find a way for FML to interact and parse through React webpages such as Facebook and Instagram. We hope to find a way to incorporate Google's Natural Language Processing Sentimental Analysis to improve the efficiency of the extension and to provide a better analysis of the content from the web. 
