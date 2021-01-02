import IPlans from "_models/IPlans";
import work from "_assets/screen.png";
import product from '_assets/product.png';

const plans: IPlans[] = [
  {
    heading: "Work",
    description: `Ever wondered if you're too reliant on a client for work? Slate helps you identify.`,
    plan: "Sing up",
    dashboard: work,
    link: "/signup",
  },
   {
    heading: "Design with real data",
    description: `Ever wondered if you're too reliant on a client for work? Slate helps you identify.`,
    plan: "Try for Free",
    dashboard: product,
    link: "/tryfree",
  },
];

export default plans;
