export type Category = 'Optimization' | 'Software' | 'Machine Learning' | 'Algorithms' | 'Mathematical Computing';

export interface Project {
  slug: string;
  name: string;
  category: Category;
  subtitle: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  caveat?: string;
  stack: string[];
  repo: string;
  demo?: string;
  featured?: boolean;
  status: 'Project' | 'Prototype' | 'Learning exercise';
  visual: string;
  accent: 'blue' | 'sage' | 'sand' | 'lavender';
}

const github = 'https://github.com/normanlrasmussen/';

export const projects: Project[] = [
  {
    slug: 'aeroyield',
    name: 'AeroYield',
    category: 'Optimization',
    subtitle: 'Airline revenue management',
    summary: 'Interactive decision support for airline seat inventory under uncertain future demand.',
    problem: 'Airline seats are perishable inventory. Accepting a booking now can prevent a higher-value booking later, while holding seats too long can leave capacity unused.',
    approach: 'Built a stochastic booking simulator and compared open sales, EMSR-b, dynamic programming, LP bid-price controls, Bayesian adaptation, robust optimization, and a neural policy. Distinguished observed route data from modeled booking behavior and evaluated policies on shared simulated customer streams.',
    outcome: 'A browser-based optimizer that allows policy comparisons, sensitivity testing, and inspection of revenue, load factor, spoilage, spill, and regret metrics.',
    caveat: 'Booking streams and behavioral assumptions are simulated, not observed airline transactions. Results represent controlled experiments, not airline accounting outcomes.',
    stack: ['Python', 'JavaScript', 'Dynamic programming', 'Linear programming', 'Monte Carlo', 'Machine learning'],
    repo: github + 'airline-revenue-optimizer',
    demo: 'https://normanlrasmussen.github.io/airline-revenue-optimizer/',
    featured: true, status: 'Project', visual: '01 / OR', accent: 'blue'
  },
  {
    slug: 'tic-tac-nope',
    name: 'Tic-Tac-Nope',
    category: 'Algorithms',
    subtitle: 'Imperfect-information game theory',
    summary: 'A hidden-information positional game and a computational laboratory for strategic play.',
    problem: 'When parts of a board are hidden, a player must act on information sets rather than a fully observed game state.',
    approach: 'Implemented the game mechanics, belief-state tracking, strategy evaluation, sequence-form linear programming, and computational experiments using exact and approximate equilibrium methods.',
    outcome: 'A playable game implementation alongside solver variants, validation scripts, and reproducible benchmark tooling for equilibrium computation.',
    caveat: 'The repository contains both a command-line game and web-related files. Solver scope and certification depend on the selected variant and backend.',
    stack: ['Python', 'JavaScript', 'Game theory', 'Linear programming', 'HiGHS', 'Algorithms'],
    repo: github + 'Tic-Tac-Nope',
    featured: true, status: 'Project', visual: '02 / GT', accent: 'sage'
  },
  {
    slug: 'football-recruiting',
    name: 'College Football Recruiting Dashboard',
    category: 'Software',
    subtitle: 'Geospatial data visualization',
    summary: 'Interactive maps and analytics for exploring geographic recruiting patterns.',
    problem: 'Recruiting networks span many institutions, regions, and seasons, making connections difficult to inspect in a conventional table.',
    approach: 'Processed recruiting data and built a React dashboard with interactive map views, geographic aggregation, and filters for institutions and years.',
    outcome: 'A frontend application for exploring recruiting pathways, regional concentration, and historical patterns.',
    stack: ['React', 'Plotly', 'Python', 'Pandas', 'Data visualization'],
    repo: github + 'IDeA-FBSC',
    featured: true, status: 'Project', visual: '03 / DATA', accent: 'sand'
  },
  {
    slug: 'demand-forecasting',
    name: 'Neural Demand Forecasting',
    category: 'Machine Learning',
    subtitle: 'Quantile regression and time series',
    summary: 'Neural-network forecasting experiments for estimating future retail demand.',
    problem: 'Point predictions do not always capture the uncertainty needed for inventory decisions.',
    approach: 'Investigated PyTorch models with lagged values, rolling statistics, calendar encoding, training choices, and quantile-oriented forecasting experiments.',
    outcome: 'A collection of training, feature-engineering, and analytical experiments that can be consolidated into a reproducible forecasting benchmark.',
    caveat: 'The repository needs a canonical README and a final clearly documented benchmark before quantitative performance claims are featured.',
    stack: ['Python', 'PyTorch', 'Time series', 'Feature engineering', 'Quantile regression'],
    repo: github + 'Demand_NN',
    featured: true, status: 'Project', visual: '04 / ML', accent: 'lavender'
  },
  {
    slug: 'shipping-optimization',
    name: 'Shipping Optimization',
    category: 'Optimization',
    subtitle: 'Packing and vehicle routing',
    summary: 'Constraint-based approaches to loading trucks and routing deliveries.',
    problem: 'Shipping operations must pack limited vehicle space and design routes that serve demand within capacity limits.',
    approach: 'Used OR-Tools and custom experiments for two-dimensional packing and multi-vehicle routing, with solution visualization and performance exploration.',
    outcome: 'Solver experiments and visualizations covering packing layouts and delivery-routing scenarios.',
    caveat: 'Some README sections still contain placeholders and will be revised before this project receives a featured placement.',
    stack: ['Python', 'OR-Tools', 'Constraint programming', 'Vehicle routing'],
    repo: github + 'Shipping_OR_Optimizer',
    status: 'Project', visual: '05 / CP', accent: 'sand'
  },
  {
    slug: 'traffic-prediction',
    name: 'Traffic Prediction Models',
    category: 'Machine Learning',
    subtitle: 'Classification benchmark',
    summary: 'Comparison of classical machine-learning models and a neural network for traffic classification.',
    problem: 'Traffic patterns depend on temporal features and observed vehicle mix.',
    approach: 'Compared logistic regression, SVM, random forest, gradient boosting, XGBoost, and PyTorch models with engineered time features.',
    outcome: 'An organized set of notebooks and reported model comparisons across multiple classification metrics.',
    caveat: 'Very high reported scores should be revalidated against temporal leakage and target construction before being presented as generalization evidence.',
    stack: ['Python', 'scikit-learn', 'XGBoost', 'PyTorch', 'Classification'],
    repo: github + 'Traffic-Prediction-Models',
    status: 'Project', visual: '06 / ML', accent: 'blue'
  },
  {
    slug: 'dice-game',
    name: 'Quick Dice Game',
    category: 'Software',
    subtitle: 'Browser-based game',
    summary: 'A compact interactive game built with a modern frontend toolchain.',
    problem: 'Build an interactive game with clear rules and a responsive web interface.',
    approach: 'Used a TypeScript and Vite-based frontend, with supplemental notebook experiments.',
    outcome: 'A small browser-game project whose implementation and user experience can be demonstrated directly.',
    stack: ['TypeScript', 'Vite', 'Frontend'],
    repo: github + 'quick_dice_game',
    status: 'Project', visual: '07 / WEB', accent: 'sage'
  },
  {
    slug: 'bank-analysis',
    name: 'Bank Analysis Experiments',
    category: 'Algorithms',
    subtitle: 'C++, game theory, and reinforcement learning',
    summary: 'Explorations of bank-related decision models, game theory, and reinforcement learning.',
    problem: 'Investigate decisions and agent behavior within mathematical banking models.',
    approach: 'Developed C++ implementations and supporting game-theoretic, mathematical, and reinforcement-learning modules.',
    outcome: 'An experimental codebase intended for further benchmarking and documentation.',
    caveat: 'The problem definition and validation need a clear top-level README before showcasing detailed results.',
    stack: ['C++', 'Game theory', 'Reinforcement learning'],
    repo: github + 'Bank_Analysis',
    status: 'Prototype', visual: '08 / C++', accent: 'lavender'
  },
  {
    slug: 'multi-armed-bandits',
    name: 'Multi-Armed Bandit Comparison',
    category: 'Algorithms',
    subtitle: 'Sequential decision-making',
    summary: 'Notebook experiments exploring multi-armed bandit algorithms.',
    problem: 'Balance exploration and exploitation when action rewards are uncertain.',
    approach: 'Used notebook experiments to compare sequential decision-making strategies.',
    outcome: 'Exploratory experiments that can be expanded with controlled benchmark plots.',
    stack: ['Python', 'Bandit algorithms', 'Jupyter'],
    repo: github + 'MultiArmedBanditComp',
    status: 'Learning exercise', visual: '09 / RL', accent: 'sage'
  },
  {
    slug: 'sat-solvers',
    name: 'SAT Solver Exploration',
    category: 'Algorithms',
    subtitle: 'Boolean satisfiability',
    summary: 'An implementation-oriented exploration of SAT-solving methods.',
    problem: 'Determine whether a Boolean formula admits a satisfying assignment.',
    approach: 'Explored DPLL-style search and related solver components in Python.',
    outcome: 'Solver implementation exercises and a foundation for further benchmarking.',
    stack: ['Python', 'DPLL', 'SAT'],
    repo: github + 'SAT-revolver',
    status: 'Prototype', visual: '10 / SAT', accent: 'sand'
  },
  {
    slug: 'hospital-scheduling',
    name: 'Hospital Scheduling Prototype',
    category: 'Software',
    subtitle: 'Database-backed scheduling exploration',
    summary: 'A scheduling prototype with synthetic hospital data generation.',
    problem: 'Represent scheduling records and explore programmatic allocation workflows.',
    approach: 'Created Python scripts and a local SQLite database for a hospital-scheduling prototype.',
    outcome: 'An early-stage repository, suitable for a project archive rather than a flagship page.',
    caveat: 'The data generator and embedded database should be audited before any further publication.',
    stack: ['Python', 'SQLite', 'Scheduling'],
    repo: github + 'RIPS',
    status: 'Prototype', visual: '11 / DB', accent: 'blue'
  },
  {
    slug: 'fourier-experiments',
    name: 'Fourier Signal Experiments',
    category: 'Mathematical Computing',
    subtitle: 'Signal processing',
    summary: 'Notebook-based experiments with frequency-domain signal analysis.',
    problem: 'Explore how frequency representations reveal structure in signals.',
    approach: 'Used a notebook and sample audio files for Fourier-oriented experiments.',
    outcome: 'A small mathematical computing exercise.',
    stack: ['Python', 'Fourier analysis', 'Jupyter'],
    repo: github + 'Back_FFT',
    status: 'Learning exercise', visual: '12 / FFT', accent: 'lavender'
  },
  {
    slug: 'linear-algebra-exercises',
    name: 'Linear Algebra Exercises',
    category: 'Mathematical Computing',
    subtitle: 'Programming exercises',
    summary: 'Early computational linear algebra and Python practice.',
    problem: 'Implement small programs to strengthen mathematical and programming foundations.',
    approach: 'Worked through scripts, notebooks, and experiments.',
    outcome: 'A record of foundational programming practice.',
    stack: ['Python', 'Jupyter', 'Linear algebra'],
    repo: github + 'Simple_Add_LinAlg',
    status: 'Learning exercise', visual: '13 / LA', accent: 'sage'
  },
  {
    slug: 'optimization-exercises',
    name: 'Optimization Exercises',
    category: 'Optimization',
    subtitle: 'Operations management problems',
    summary: 'Small optimization problem implementations.',
    problem: 'Translate optimization exercises into programmatic models.',
    approach: 'Built experimental solutions and example problem files.',
    outcome: 'A compact record of optimization practice.',
    stack: ['Optimization', 'Algorithms'],
    repo: github + 'OM_problems',
    status: 'Learning exercise', visual: '14 / OR', accent: 'sand'
  },
  {
    slug: 'gas-optimization',
    name: 'Optimal Gas Problem',
    category: 'Optimization',
    subtitle: 'Notebook experiment',
    summary: 'A small notebook investigating an optimization problem.',
    problem: 'Explore an optimization setup through computational experimentation.',
    approach: 'Used Jupyter to test an initial model.',
    outcome: 'An exploratory notebook that would need a problem statement and results to become a case study.',
    stack: ['Python', 'Jupyter', 'Optimization'],
    repo: github + 'Optimal_Gas_Problem',
    status: 'Learning exercise', visual: '15 / OPT', accent: 'blue'
  },
  {
    slug: 'bank-rl',
    name: 'Bank Reinforcement Learning Practice',
    category: 'Machine Learning',
    subtitle: 'RL learning environment',
    summary: 'A reinforcement learning exercise involving a bank simulation.',
    problem: 'Study agent decisions in a controlled simulation environment.',
    approach: 'Built or explored environment, player, and training scripts.',
    outcome: 'Learning-oriented code with experiment artifacts.',
    caveat: 'Review exercise materials and answer-key files before promoting or reusing this repository.',
    stack: ['Python', 'Reinforcement learning'],
    repo: github + 'bank_rl_practice_problem',
    status: 'Learning exercise', visual: '16 / RL', accent: 'lavender'
  },
  {
    slug: 'neural-network-learning',
    name: 'Neural Network Learning Exercises',
    category: 'Machine Learning',
    subtitle: 'Deep learning foundations',
    summary: 'Hands-on notebooks studying neural network implementations.',
    problem: 'Understand neural networks through small implementation exercises.',
    approach: 'Worked through foundational experiments and training examples.',
    outcome: 'An educational record separate from larger original ML projects.',
    stack: ['Python', 'Neural networks', 'Jupyter'],
    repo: github + 'nrl_nn_0_to_hero',
    status: 'Learning exercise', visual: '17 / NN', accent: 'sage'
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const categories: Array<Category | 'All'> = ['All', 'Optimization', 'Software', 'Machine Learning', 'Algorithms', 'Mathematical Computing'];
