// Published With MIT License, 2018.
// Details on LICENSE

let code_list = {
    B: "sen",
    C: "pen",
    D: "dge",
    E: "ice",
    F: "gen",
    G: "dje",
    H: "use",
    I: "sje",
    J: "goe",
    K: "kwe",
    M: "cbe",
    N: "cne",
    P: "jbe",
    Q: "jne",
    R: "gbe",
    S: "gne",
    T: "jje"
}

function find_domain(code) {
    // Actions for National High School
    if (process.env.DOMAIN) return process.env.DOMAIN;
    else return code_list[ code.substring(0, 1) ];
}

module.exports = find_domain;
