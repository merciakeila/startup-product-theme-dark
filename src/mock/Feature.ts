import IFeature from '_models/IFeature';
import intuitive from '_assets/intuitive.svg'
import source from '_assets/source.svg'
import rules from "_assets/rules.svg";


const features: IFeature[] = [
    {
        id: 1,
        icon: source,
        heading: `A single source \n of truth`,
        description: 'When you add work to your Slate calendar we automatically calculate useful insights.',
    },
    {
        id: 2,
        icon: intuitive,
        heading: 'Intuitive \n interface',
        description: 'When you add work to your Slate calendar we automatically calculate useful insights.',
    },
    {
        id: 3,
        icon: rules,
        heading: 'Or with rules',
        description: 'When you add work to your Slate calendar we automatically calculate useful insights.',
    },

]

export default features;
