String.prototype.slugify = function (separator = "-") {
    return this
        .toString()
        .normalize("NFD")                                   // split an accented letter in the base letter and the accent
        .replace(/[\u0300-\u036f]/g, "")    // remove all previously split accents
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 ]/g, "")         // remove all non-alphanumeric chars and spaces
        .replace(/\s+/g, separator);
};

let text = "Isso é apenas um exemplo";

text.slugify();
//isso-e-apenas-um-exemplo