import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import Plans from "_UI/Plans";
import PlansMock from "_mock/Plans";
import IPlans from "_models/IPlans";

const Component: React.FC = () => {
  const [plans, setPlans] = useState<IPlans[]>([]); // Iniciar como array vazio, necessário para o futuro.
  useEffect(() => {
    setPlans(PlansMock);
  }, []);
  return (
    <>
      <Container>
        <div>
          {plans.map((plans, item) => (
            <Plans key={item} plans={plans} />
          ))}
        </div>
      </Container>
    </>
  );
};

Component.displayName = "components/Home/feature";
export default Component;
