/*
Language: reStructuredText
Author: Alex McKibben <alex@nullscope.net>
*/

function(hljs) {
    return {
        contains:[
            {
                className: "emphasis",
                begin: /\*{1}[^*]/, end: /\*{1}/
            },
            {
                className: "strong",
                begin: /\*{2}[^*]/, end: /\*{2}/
            }
        ]
    };
}
