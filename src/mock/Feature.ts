import IFeature from '_models/IFeature';
import intuitive from '_assets/intuitive.svg'
import source from '_assets/source.svg'
import rules from "_assets/rules.svg";


const features: IFeature[] = [
    {
        id: 1,
        icon: source,
        title: 'Sou um teste',
        description: 'Sou um texto aleatório',
    },
    {
        id: 2,
        icon: intuitive,
        title: 'Um exemplo',
        description: 'Sou um texto aleatório',
    },
    {
        id: 3,
        icon: rules,
        title: 'Um exemplo',
        description: 'Sou um texto aleatório',
    },
    
]

export default features;