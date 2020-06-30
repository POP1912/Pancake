pancake.content = {};

pancake.content.load = function(json_content) {
    return JSON.parse(JSON.stringify(json_content));
};
