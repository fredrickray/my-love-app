export const matchConditions = (matchScore, crushName, ) => {
    let loveMessage;
    if (matchScore >= 90) {
        loveMessage = `Congratulations! You and ${crushName} are a match made in heaven! 💖`
    } else if (matchScore >= 80) {
        loveMessage `You and ${crushName} have a strong connection! Keep the love alive! ❤️`;
    } else if (matchScore >= 70) {
        loveMessage = `Wow! There's a spark between you and ${crushName}! 🌟`;
    } else if (matchScore >= 60) {
        loveMessage = `You and ${crushName} have potential! Nurture your relationship! 🌱`;
    } else if (matchScore >= 50) {
        loveMessage = `It's a decent start between you and ${crushName}. Keep exploring! 🔍`;
    } else if (matchScore >= 40) {
        loveMessage = `Hmm... You and ${crushName} might need to work on some things. 💔`;
    } else if (matchScore >= 30) {
        loveMessage = `See ehn ${name}, this love na be by force sometimes.`;
    } else if (matchScore >= 20) {
        loveMessage = `A little effort could go a long way in your relationship with ${crushName}. 🌠`;
    } else if (matchScore >= 10) {
        loveMessage = `Omo ${matchScore}% 😂💔💔 just give up`;
    } else {
        loveMessage = `E be like say this love na comedy show between you and ${crushName}. 🤡`;
    }

    return loveMessage
}