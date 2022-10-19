export const TICKET_FROM_A_TO_B_AND_BACK = "From A to B and back to A";

export const changePath = (route) => {
    return [
        `18:00 (${route})`,
        `18:30 (${route})`,
        `19:00 (${route})`,
        `19:30 (${route})`,
        `20:00 (${route})`,
        `20:30 (${route})`,
    ];
};

export const backRoute = [
    `18:30 (From B to A)`,
    `20:00 (From B to A)`,
    `21:30 (From B to A)`,
    `22:30 (From B to A)`,
    `00:00 (From B to A)`,
];