import Image from "next/image";
import styles from "./WrestlerCard.module.css";

const WrestlerCard = ({
  Name,
  Championship,
  Nickname,
  SinglesWins,
  SinglesLosses,
  TagWins,
  TagLosses,
  TriosWins,
  TriosLosses,
  CurrentYearLosses,
  CurrentYearWins,
  MatchesWon,
  MatchesLost,
  AvatarSrc,
}) => {
  return (
    <div className={styles.wrestlerCard}>
      <div className={styles.titleSection}>
        <p className={styles.championship}>{Championship && Championship}</p>
        <p className={styles.name}>{Name}</p>
        <p className={styles.nickname}>{Nickname && Nickname}</p>
      </div>
      <Image src={AvatarSrc} alt={Name} height="375" width="474" />
      <div className={styles.records}>
        <div>
          <p className={styles.division}>Singles</p>
          <p className={styles.record}>Record</p>
          <p className={styles.winsLosses}>
            {SinglesWins?.length || 0} - {SinglesLosses?.length || 0}
          </p>
        </div>
        <div>
          <p className={styles.division}>Tag-Team</p>
          <p className={styles.record}>Record</p>
          <p className={styles.winsLosses}>
            {TagWins?.length || 0} - {TagLosses?.length || 0}
          </p>
        </div>
        <div>
          <p className={styles.division}>Trios</p>
          <p className={styles.record}>Record</p>
          <p className={styles.winsLosses}>
            {TriosWins?.length || 0} - {TriosLosses?.length || 0}
          </p>
        </div>
      </div>
      <div className={styles.overall}>
        <div className={styles.current}>
          <p>
            <span className={styles.bold}>2021</span> Overall
          </p>
          <p>
            {CurrentYearWins?.length || 0} - {CurrentYearLosses?.length || 0}
          </p>
        </div>
        <div className={styles.career}>
          <p>
            <span className={styles.bold}>Career</span>
          </p>
          <p>
            {MatchesWon?.length || 0} - {MatchesLost?.length || 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WrestlerCard;
