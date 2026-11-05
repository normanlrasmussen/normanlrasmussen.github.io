export interface ResearchItem {
  title: string;
  field: string;
  status: string;
  summary: string;
  methods: string[];
  link?: string;
  note?: string;
}
export const research: ResearchItem[] = [
  {
    title: 'Airport Departure Scheduling',
    field: 'Optimization & Queuing',
    status: 'Research project',
    summary: 'Theoretical and computational analysis of aircraft release and runway queue policies, with attention to worst-case delay and comparisons against clairvoyant scheduling benchmarks.',
    methods: ['Scheduling', 'Constraint programming', 'Discrete-event simulation'],
    note: 'Public manuscript and reproducible materials can be linked after publication or release approval.'
  },
  {
    title: 'Multiscale Dynamical Systems',
    field: 'Scientific Computing',
    status: 'Collaborative research',
    summary: 'Parameter estimation and system identification in nonlinear dynamical systems, including experiments with multiscale Lorenz-type models.',
    methods: ['ODEs', 'Parameter estimation', 'Numerical optimization'],
    note: 'Collaborative research artifacts are not redistributed here.'
  },
  {
    title: 'Supply Chain Network Models',
    field: 'Stochastic Systems',
    status: 'Research project',
    summary: 'Exploring uncertainty, information, and coordination in abstract supply-chain networks through simulation and mathematical modeling.',
    methods: ['Stochastic modeling', 'Simulation', 'Networks'],
    note: 'This overview intentionally omits nonpublic data and unpublished collaborative materials.'
  },
  {
    title: 'Information-State Compression in Games',
    field: 'Game Theory',
    status: 'Ongoing investigation',
    summary: 'Studying how information-state structure can reduce the computational burden of solving hidden-information positional games without losing strategically relevant distinctions.',
    methods: ['Game theory', 'Linear programming', 'Equilibrium computation'],
    link: 'https://github.com/normanlrasmussen/Tic-Tac-Nope'
  },
  {
    title: 'Kidnapping and Ransom Insurance',
    field: 'Economic Modeling',
    status: 'Literature review & model development',
    summary: 'Investigating incentive design, insurance coverage, bargaining, and strategic behavior through formal economic and game-theoretic models.',
    methods: ['Bayesian games', 'Contract design', 'Literature synthesis'],
    note: 'Research questions and hypotheses should not be confused with established findings.'
  }
];
