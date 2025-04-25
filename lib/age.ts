const birth = new Date("2004-07-16");
const now = new Date();
const age =
    now.getMonth() > birth.getMonth() ||
        (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate())
        ? now.getFullYear() - birth.getFullYear()
        : now.getFullYear() - birth.getFullYear() - 1;

export default age;