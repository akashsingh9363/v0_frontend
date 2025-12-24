export const MATCH_OUTCOMES = {
  NORMAL: "NORMAL",
  WALKOVER: "WALKOVER",
};

export const isWalkover = (match) =>
  match?.match_outcome === MATCH_OUTCOMES.WALKOVER;
