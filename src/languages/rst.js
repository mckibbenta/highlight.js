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
            // Interpreted text is generally not highlighted. However,
            // including the mode might help relevancy and allow users to
            // implement custom styling if they wish.
            {
                className: "interpreted-text",
                begin: /`{1}[^`]/, end: /`/
            },
            {
                className: "literal",
                begin: /`{2}[^`]/, end: /`{2}/
            }
        ]
    };
}
