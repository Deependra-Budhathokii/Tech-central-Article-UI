// schema.js
const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "URL of the article page"
    },
    "headline": "Image for apple is moving the iPhone's end call button",
    "image": "URL of the main article image",
    "datePublished": "Publication Date",
    "dateModified": "Last Modified Date",
    "author": {
        "@type": "Person",
        "name": "Andrew Koopman"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Your Publisher Name",
        "logo": {
            "@type": "ImageObject",
            "url": "URL of publisher's logo"
        }
    },
    "description": "Apple is switching to USB-C for its new phones though it remains to be seen when the change is taking place. Noted analyst Ming-Chi Kuo is confident that the port change will happen in the second half of 2023 which should coincide with the iPhone 15 series launch.",
    "articleBody": "Your article content goes here"
};
