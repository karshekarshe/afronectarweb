
export function getPassedDays(pastDateString) {
    const currentDate = new Date()
    currentDate.setHours(0, 0, 0, 0); // Normalize time to midnight

    const pastDate = new Date(pastDateString)
    pastDate.setHours(0,0,0)

    const diffInMilliseconds = currentDate - pastDate;
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    return diffInDays === 0 ? 1: diffInDays;
}