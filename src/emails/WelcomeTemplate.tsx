import { easeIn } from 'framer-motion';
import * as React from 'react';

interface WelcomeTemplateProps {
  firstName: string;
}

const WelcomeTemplate: React.FC<Readonly<WelcomeTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);

export default WelcomeTemplate;