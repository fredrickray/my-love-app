// function to make love match persistent 

export const calculateLoveScore = (name1, name2) => {
    let score = 0;

    // Concatenate names and convert to uppercase
    const combinedNames = (name1 + name2).toUpperCase();

    // Calculate the love score
    for (let i = 0; i < combinedNames.length; i++) {
        score += combinedNames.charCodeAt(i)
    }

    // Normalize the score to a percentage between 0 and 100
    const normalizedScore = ((score % 100) + 1) * 1.5;

    return Math.floor(Math.min(normalizedScore, 100));
}