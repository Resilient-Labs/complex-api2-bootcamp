# Taxonomy Time Complex API

<img width="1467" alt="Screenshot 2023-10-23 at 12 13 41 AM" src="https://github.com/codedbycass/Taxonomy-Time/assets/122684139/7d208889-61fd-4680-a533-56e69299187a">

## What

This project makes a request to 2 external servers using a biology database and the wikimedia API. It's purpose to learn more about an animal's taxonomic family!

## How it works
Tools: HTML, CSS, JavaScript

I used 2 fetches and nested them; first the biology database API and the wikimedia API. I strategically chose wikimedia, because it has a page for almost everything, whereas my first option (a dictonary) lacked some capacity to define all scientific terms.

## Lessons learned
This project was a challenge in choosing the correct API that will be the most generative for users. Since the initial API was weak, as in, it was inconsistent and some animals lacked their key/values, it would sometimes return undefined. I chose to be strategic and chose the "family" key to pass it is a parameter in the Wikimedia API. 
