import React, { useState, useEffect } from "react";
import { Title, Paragraph } from "_UI/Text";
import { Section, Container } from "./styles";
import Plans from "_UI/Plans";
import PlansMock from "_mock/Plans";
import IPlans from "_models/IPlans";

const Component: React.FC = () => {
  const [plans, setPlans] = useState<IPlans[]>([]); // Iniciar como array vazio, necessário para o futuro.
  useEffect(() => {
    setPlans(PlansMock);
  }, []);
  return (
    <Section>
      <Title>Contents</Title>
      <Paragraph>
        We focus on ergonomics and meeting you where you work. <br />
        It's only a keystroke away.
      </Paragraph>
      <Container>
        <div>
          {plans.map((plans, item) => (
            <Plans key={item} plans={plans} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

Component.displayName = "components/Home/feature";
export default Component;
