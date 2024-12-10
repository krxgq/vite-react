const LOVE_ALL = "Love-All";
const FIFTEEN_ALL = "Fifteen-All";
const THIRTY_ALL = "Thirty-All";
const DEUCE = "Deuce";

export function getScore(m_score1: number, m_score2: number): string {
    if (m_score1 === m_score2) {
        return getEqualScore(m_score1);
    } else if (m_score1 >= 4 || m_score2 >= 4) {
        return getAdvantageOrWin(m_score1, m_score2);
    } else {
        return getScoreName(m_score1, m_score2);
    }
}

function getEqualScore(score: number): string {
    switch (score) {
        case 0:
            return LOVE_ALL;
        case 1:
            return FIFTEEN_ALL;
        case 2:
            return THIRTY_ALL;
        default:
            return DEUCE;
    }
}

function getAdvantageOrWin(m_score1: number, m_score2: number): string {
    const minusResult = m_score1 - m_score2;
    if (minusResult === 1) {
        return "Advantage player1";
    } else if (minusResult === -1) {
        return "Advantage player2";
    } else if (minusResult >= 2) {
        return "Win for player1";
    } else {
        return "Win for player2";
    }
}

function getScoreName(m_score1: number, m_score2: number): string {
    return `${getScoreNameHelper(m_score1)}-${getScoreNameHelper(m_score2)}`;
}

function getScoreNameHelper(score: number): string {
    switch (score) {
        case 0:
            return "Love";
        case 1:
            return "Fifteen";
        case 2:
            return "Thirty";
        case 3:
            return "Forty";
        default:
            return "";
    }
}
    /* let score = "";
    let tempScore = 0;
    if (m_score1 === m_score2) {
      switch (m_score1) {
        case 0:
          score = "Love-All";
          break;
        case 1:
          score = "Fifteen-All";
          break;
        case 2:
          score = "Thirty-All";
          break;
        default:
          score = "Deuce";
          break;
      }
    } else if (m_score1 >= 4 || m_score2 >= 4) {
      let minusResult = m_score1 - m_score2;
      if (minusResult === 1) {
        score = "Advantage player1";
      } else if (minusResult === -1) {
        score = "Advantage player2";
      } else if (minusResult >= 2) {
        score = "Win for player1";
      } else {
        score = "Win for player2";
      }
    } else {
      for (var i = 1; i < 3; i++) {
        if (i === 1) {
          tempScore = m_score1;
        } else {
          score += "-";
          tempScore = m_score2;
        }
        switch (tempScore) {
          case 0:
            score += "Love";
            break;
          case 1:
            score += "Fifteen";
            break;
          case 2:
            score += "Thirty";
            break;
          case 3:
            score += "Forty";
            break;
        }
      }
    }
    return score; */
  
  