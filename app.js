const pronouns = ['the', 'our'];
const adjectives = ['great', 'big'];
const nouns = ['bat', 'ball', 'jogger', 'racoon'];
const topLevelDomains = ['.com', '.net', '.cl', '.io', 'com.br', '.co', '.org'];

function generateDomains(pronounList, adjectiveList, nounList, tldList) {
  const domains = [];

  for (let pronounIndex = 0; pronounIndex < pronounList.length; pronounIndex++) {
    for (let adjectiveIndex = 0; adjectiveIndex < adjectiveList.length; adjectiveIndex++) {
      for (let nounIndex = 0; nounIndex < nounList.length; nounIndex++) {
        for (let tldIndex = 0; tldIndex < tldList.length; tldIndex++) {
          domains.push(pronounList[pronounIndex] + adjectiveList[adjectiveIndex] + nounList[nounIndex] + tldList[tldIndex]);
        }
      }
    }
  }

  console.log(domains);
}

generateDomains(pronouns, adjectives, nouns, topLevelDomains);
