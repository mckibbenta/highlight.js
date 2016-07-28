/*
Language: reStructuredText
Author: Alex McKibben <alex@nullscope.net>
*/

function(hljs) {
    return {
        aliases: ["reStructuredText", "REST"],
        contains:[
            {
                className: "emphasis",
                begin: /\*{1}[^*]/, end: /\*{1}/
            },
            {
                className: "strong",
                begin: /\*{2}[^*]/, end: /\*{2}/
            },
            {
                className: "literal",
                begin: /`{2}[^`]/, end: /`{2}/
            },
            {
                className: "symbol",
                variants: [
                    // hyperlink references
                    { begin: /[a-zA-Z0-9\-_.:+]+_{1,2}\b/ },
                    { begin: /`[a-zA-Z0-9\-_.:+\s]+`_{1,2}\b/ },
                    // substitution references
                    { begin: /\|[a-zA-Z0-9\-_.:+\s]+\|/ },
                    // inline internal targets
                    { begin: /_`[a-zA-Z0-9\-_.:+\s]+`/ }
                ]
            },
            // section/title adornments
            {
                className: "section",
                begin: /^[!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]{3,}/
            }
        ]
    };
}
