const const_color_type = {
    RESET   : "\x1b[0m",
    BLACK   : "\x1b[30m",
    RED     : "\x1b[31m",
    GREEN   : "\x1b[32m",
    YELLOW  : "\x1b[33m",
    BLUE    : "\x1b[34m",
    MAGENTA : "\x1b[35m",
    CYAN    : "\x1b[36m",
    WHITE   : "\x1b[37m",
}

/**
 * add color to use for log.
 * @param {string} tx text value
 * @param {wrap color} color 
 */
const convert = (tx, c) => c.concat(tx, const_color_type.RESET)


module.exports = {
    black   : (tx) => convert(tx, const_color_type.BLACK  ),
    red     : (tx) => convert(tx, const_color_type.RED    ),
    green   : (tx) => convert(tx, const_color_type.GREEN  ),
    yellow  : (tx) => convert(tx, const_color_type.YELLOW ),
    blue    : (tx) => convert(tx, const_color_type.BLUE   ),
    magenta : (tx) => convert(tx, const_color_type.MAGENTA),
    cyan    : (tx) => convert(tx, const_color_type.CYAN   ),
    white   : (tx) => convert(tx, const_color_type.WHITE  ),
}