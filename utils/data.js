const usernames = [
  'Simon',
  'Garfunkel',
];

const thoughtDescriptions = [
  'The sound of silence',
  'Mrs Robinson',
];

const Reactions = [
  'Hello Darkness my old friend',
  'Do-dee-do-do-do-do-de-de-doo',
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random Thoughts that we can add to the database. Includes Thought tags.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      description: getRandomArrItem(thoughtDescriptions),
      buildSuccess: Math.random() < 0.5,
      Reactions: [...getThoughtReactions(3)],
    });
  }
  return results;
};

// Create the tags that will be added to each Thought
const getThoughtReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(Reactions);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      ReactionBody: getRandomArrItem(Reactions),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts };
