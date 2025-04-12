export const colors = {
    merino: "#f9f6ed",
    codGray: "#121212",
    flaxSmoke: "#7f886b",
    cabbagePont: "#3e4f3c",
};

export const theme = {
    breakpoints: {
        mobileMax: 776,
        tabletMax: 922,
        smallDesktop: 1024,
    },
    headingFont: "'Waterfall', cursive;",
    colors: {
        textPrimary: colors.merino,
        primary: colors.cabbagePont,
        page: {
            background: colors.merino,
            header: colors.cabbagePont,
            text: colors.codGray,
        },
        darkSection: {
            background: colors.cabbagePont,
        },
        navBackground: colors.flaxSmoke,
        footer: {
            background: colors.codGray,
            link: colors.flaxSmoke,
        },
    },
};