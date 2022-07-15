import styled from 'styled-components';

export default styled.div`
  --primary-back-color: ${props => props.primaryColor};
  --primary-color: ${props => props.color};

  --blue-badge: ${props => props.blueBadge};
  --black-badge: ${props => props.blackBadge};
  --blue-badge-color: ${props => props.blueBadgeColor};
  --black-badge-color: ${props => props.blackBadgeColor};

  --p-color: ${props => props.pColor};

  --blue-button-color: ${props => props.btnColor};

  --newsletter: ${props => props.newsletter};
  --newsletter-color: ${props => props.newsletterColor};

  --gradient-start: ${props => props.gradientStart};
  --inside: ${props => props.inside};

  --card-back: ${props => props.cardBack};

  --line: ${props => props.line};

`;

