
export default function (a, b) {
    if (a.position < b.position) {
        return -1;
    }
    if (a.position > b.position) {
        return 1;
    }
    if (a.position == b.position) {
        return 0;
    }
};
