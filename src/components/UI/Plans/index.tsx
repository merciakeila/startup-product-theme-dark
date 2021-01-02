import React from "react";
import { Card, Heading, Description, Img } from "./styles";
import LinkButton from "_UI/Button/LinkButton";
import IPlans from "_models/IPlans";

type Props = {
  plans: IPlans;
  /*
  heading: string;
  description: string;
  plan: string;
  dashboard: string;
  link: string;
  */
};

const Plan: React.FC<Props> = ({ plans }) => {
  const { heading, description, plan, link, dashboard } = plans;

  return (
    <Card>
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
      <div>
        <LinkButton isBlue to={link}>
          {plan}
        </LinkButton>
      </div>
      <Img src={dashboard} />
    </Card>
  );
};

Plan.displayName = "UI/plan";
export default Plan;
