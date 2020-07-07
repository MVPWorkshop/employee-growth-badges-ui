import { EBadgeType } from '../../components/atoms/BadgeItem/badgeItem.types';

export const badgeImageByType = {
  [EBadgeType.ANNIVERSARY]: require('../assets/img/anniversary.svg'),
  [EBadgeType.PROMOTED]: require('../assets/img/promoted.svg'),
  [EBadgeType.TEAMMATE_MONTH]: require('../assets/img/teammate-month.svg'),
  [EBadgeType.TEAMMATE_YEAR]: require('../assets/img/teammate-year.svg'),
  [EBadgeType.THANK_YOU]: require('../assets/img/thankyou.svg'),
};

export const badgeRepresentationImageByType = {
  [EBadgeType.ANNIVERSARY]: require('../assets/img/anniversary-icon.svg'),
  [EBadgeType.PROMOTED]: require('../assets/img/promoted-icon.svg'),
  [EBadgeType.TEAMMATE_MONTH]: require('../assets/img/teammate-m-icon.svg'),
  [EBadgeType.TEAMMATE_YEAR]: require('../assets/img/teammate-y-icon.svg'),
  [EBadgeType.THANK_YOU]: require('../assets/img/thankyou-icon.svg'),
};
