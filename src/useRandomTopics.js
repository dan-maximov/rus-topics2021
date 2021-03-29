import { useState } from "react";
import topics from "./topics.json";
import topicDictionary from "./topicDictionary.json";

const idOrder = [
  "zabveniuNePodlejit",
  "yaIDrugie",
  "vremyaPeremen",
  "razgovorSSoboy",
  "mejduProshlimIBudushem"
];

const getRandomIndex = (arrayLength) => {
  return Math.max(Math.ceil(Math.random() * arrayLength), 1) - 1;
};

const initialState = {
  zabveniuNePodlejit: getRandomIndex(topics.zabveniuNePodlejit.length),
  yaIDrugie: getRandomIndex(topics.yaIDrugie.length),
  vremyaPeremen: getRandomIndex(topics.vremyaPeremen.length),
  razgovorSSoboy: getRandomIndex(topics.razgovorSSoboy.length),
  mejduProshlimIBudushem: getRandomIndex(topics.mejduProshlimIBudushem.length)
};

export const useRandomTopics = () => {
  const [rawCurrentTopics, setCurrentTopics] = useState(initialState);

  const generateNewTopics = () => {
    setCurrentTopics((previousTopics) =>
      Object.keys(previousTopics).reduce(
        (acc, key) => ({ ...acc, [key]: getRandomIndex(topics[key].length) }),
        {}
      )
    );
  };

  const currentTopics = idOrder.map((id) => {
    return {
      title: topicDictionary[id],
      topic: topics[id][rawCurrentTopics[id]]
    };
  });

  return [currentTopics, generateNewTopics];
};
