/* Content — single source of truth */
window.SITE = {
  name: "Feiyu Yao",
  role: "Researcher",
  email: "feiyu.yao@columbia.edu",
  scholar: "https://scholar.google.com/citations?user=3Q_Z_Y4AAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/feiyu-yao",

  img: "https://feiyu-yao.github.io/images/",

  tagline: "Perceiving and reconstructing the world — so embodied agents can act in it.",
  lede: "I'm a researcher at the Shanghai Qizhi Institute working on 3D computer vision, AIGC, and large language models. My work aims to help machines perceive and reconstruct the physical world, so embodied intelligence can eventually act in it.",

  now: [
    { when: "2024.10 — Present", where: "Shanghai Qizhi Institute", what: "Researcher, advised by Prof. Li Yi. Working on 4D scene reconstruction." },
    { when: "2022.10 — 2024.10", where: "Huawei · Beijing / Hangzhou", what: "Text-to-image generation, dataset construction, and LLM training for vertical-domain applications — translation, AIOps, AI agents." }
  ],

  publications: [
    {
      year: 2025,
      venue: "EMNLP",
      title: "What Do You Want? User-centric Prompt Generation for Text-to-image Synthesis via Multi-turn Guidance",
      authors: "Yilun Liu, Minggui He, <strong>Feiyu Yao</strong> (corresponding author), Yuhe Ji, Shimin Tao, Jingzhou Du, Duan Li, Jian Gao, Li Zhang, Hao Yang, Boxing Chen, Osamu Yoshie",
      featured: false,
      links: [{ label: "PDF", href: "https://aclanthology.org/2025.emnlp-main.444.pdf" }]
    },
    {
      year: 2025,
      venue: "CIKM",
      title: "Adapting Large Language Models to Log Analysis with Interpretable Domain Knowledge",
      authors: "Yuhe Ji, Yilun Liu, <strong>Feiyu Yao</strong>, Minggui He, Shimin Tao, Xiaofeng Zhao, Su Chang, Xinhua Yang, Weibin Meng, Yuming Xie, Boxing Chen, Hao Yang",
      featured: false,
      links: [{ label: "Page", href: "https://dl.acm.org/doi/10.1145/3746252.3761189" }]
    },
    {
      year: 2025,
      venue: "AAAI",
      title: "SRDC: Semantics-based Ransomware Detection and Classification with LLM-assisted Pre-training",
      authors: "Ce Zhou, Yilun Liu, Weibin Meng, Shimin Tao, Weinan Tian, <strong>Feiyu Yao</strong>, Xiaochun Li, Tao Han, Boxing Chen, Hao Yang",
      featured: false,
      links: []
    },
    {
      year: 2024,
      venue: "AAAI",
      title: "Full-Body Motion Reconstruction with Sparse Sensing from a Graph Perspective",
      authors: "<strong>Feiyu Yao</strong>, Zongkai Wu, Li Yi",
      featured: true,
      thumb: "https://ojs.aaai.org/public/journals/2/AAAI24Proceedings-Cover.jpg",
      note: "First-author work on reconstructing full-body motion from extremely sparse IMU signals using a graph-based formulation.",
      links: [
        { label: "PDF", href: "https://ojs.aaai.org/index.php/AAAI/article/view/28483" },
        { label: "Code", href: "https://github.com/Feiyu-Yao/Full-Body-Motion-Reconstruction-with-Sparse-Sensing-from-Graph-Perspective" }
      ]
    },
    {
      year: 2024,
      venue: "ICASSP",
      title: "Graph-based Environment Representation for Vision-and-Language Navigation in Continuous Environments",
      authors: "Ting Wang, Zongkai Wu, <strong>Feiyu Yao</strong>, Donglin Wang",
      featured: false,
      links: [{ label: "PDF", href: "https://arxiv.org/abs/2301.04352" }]
    },
    {
      year: 2024,
      venue: "ICSE",
      title: "LogPrompt: Prompt Engineering Towards Zero-Shot and Interpretable Log Analysis",
      authors: "Yilun Liu, Shimin Tao, Weibin Meng, <strong>Feiyu Yao</strong>, Xiaofeng Zhao, Hao Yang",
      featured: false,
      links: [{ label: "PDF", href: "https://dl.acm.org/doi/abs/10.1145/3639478.3643108" }]
    },
    {
      year: 2024,
      venue: "ACL Workshop",
      title: "Enhancing Inference Capabilities of LLMs with Knowledge Graphs",
      authors: "Wei Tang, Xiaosong Qiao, Xiaofeng Zhao, Min Zhang, Chang Su, Yuang Li, Yinglu Li, Yilun Liu, <strong>Feiyu Yao</strong>, Shimin Tao, Hao Yang, He Xianghui",
      featured: false,
      links: [{ label: "PDF", href: "https://aclanthology.org/2024.textgraphs-1.11/" }]
    },
    {
      year: 2022,
      venue: "arXiv",
      title: "Few-shot Domain Adaptation for IMU Denoising",
      authors: "<strong>Feiyu Yao</strong>, Zongkai Wu, Zhenyu Wei, Donglin Wang",
      featured: false,
      links: [{ label: "PDF", href: "http://arxiv.org/abs/2201.01537" }]
    },
    {
      year: 2019,
      venue: "ISA Transactions",
      title: "Model Reference Adaptive Tracking Control for Hydraulic Servo Systems with Nonlinear Neural Networks",
      authors: "Zhikai Yao, Jianyong Yao, <strong>Feiyu Yao</strong>, Qiang Xu, Minrui Xu, Wenxiang Deng",
      featured: false,
      links: [{ label: "Page", href: "https://www.sciencedirect.com/science/article/abs/pii/S001905781930521X" }]
    }
  ],

  projects: [
    {
      title: "Biped Robot Dance",
      tag: "Hardware · Control",
      year: "2021",
      img: "robotstudio.jpg",
      desc: "Designed and 3D-printed an organic-looking two-legged robot end-to-end — CAD, fabrication, assembly, control. Placed 1st in the robot speed competition; final dance demo went up on YouTube.",
      link: "https://www.youtube.com/watch?v=g9lacYcaEdc",
      stack: ["CAD", "3D print", "Raspberry Pi"]
    },
    {
      title: "Soft Robot with Genetic Algorithm",
      tag: "Simulation · Evolution",
      year: "2021",
      img: "robot.jpg",
      desc: "Built a custom physics engine in C++ and OpenGL, then evolved populations of soft robots via selection, mutation, and crossover — optimizing a multi-objective Pareto front for hopping speed.",
      link: "https://www.youtube.com/watch?v=Rx6Fo3JLdqw",
      stack: ["C++", "OpenGL", "Evolutionary"]
    },
    {
      title: "Object Detection in Haze",
      tag: "Perception",
      year: "2021",
      img: "objectdetection.jpg",
      desc: "Combined a dehazing network (AECR-NET) with YOLO v5, augmented via rotation, resizing, and fine-tuning across datasets. Won 1st in class.",
      link: null,
      stack: ["PyTorch", "YOLOv5"]
    },
    {
      title: "Referring Video Object Segmentation",
      tag: "Multimodal",
      year: "2022",
      img: "multimodal.jpg",
      desc: "Applied causal inference to diagnose failure cases caused by unbalanced category distribution; used contrastive learning to remove features without causal relevance — better fine-grained performance, less training.",
      link: null,
      stack: ["Causal", "Contrastive", "Video"]
    },
    {
      title: "Quadruped RL for Object Search",
      tag: "Robotics · RL",
      year: "2022",
      img: "quardruped.jpg",
      desc: "Hierarchical controller: Soft Actor-Critic as the upper controller, Optimal Control below. Added a SLAM sensor for body control and object detection.",
      link: null,
      stack: ["SAC", "SLAM", "MPC"]
    },
    {
      title: "Torque Control of Multi-Link Arms",
      tag: "Control · RL",
      year: "2022",
      img: "robotarm.jpg",
      desc: "Approximated forward dynamics with an MLP trained on analog data. Compared MPC against DQN and PPO on OpenAI Gym targets.",
      link: null,
      stack: ["OpenAI Gym", "DQN", "PPO"]
    }
  ],

  education: [
    {
      when: "2020.09 — 2022.05",
      title: "M.S., Columbia University",
      place: "",
      detail: "GPA 4.198/4.3. Focus: Robotics and Control."
    },
    {
      when: "2016.09 — 2020.06",
      title: "B.Eng.",
      place: "Nanjing University of Science and Technology",
      detail: "Focus: Automation."
    }
  ],

  awards: [
    {
      group: "International",
      items: [
        { yr: "2018", text: "Honorable Mention, Mathematical Contest in Modeling" },
        { yr: "2021", text: "Silver Award, 7th China International \"Internet+\" Innovation & Entrepreneurship Competition — Intelligent Fusion Control Algorithm Chip" }
      ]
    },
    {
      group: "National",
      items: [
        { yr: "2018", text: "MIIT Innovation & Entrepreneurship Scholarship" },
        { yr: "2019", text: "MIIT Innovation & Entrepreneurship Scholarship" },
        { yr: "2018", text: "Third Prize, National Cipher Technology Competition" }
      ]
    },
    {
      group: "Provincial",
      items: [
        { yr: "2017", text: "Second Prize, Jiangsu Physics & Experimental Technology Innovation Competition" },
        { yr: "2015", text: "First Prize, Jiangsu Middle-School Physics Olympiad" }
      ]
    },
    {
      group: "Academic",
      items: [
        { yr: "2019", text: "Scholarship for People of the Year on Campus" },
        { yr: "2020", text: "Outstanding Graduate Representative" }
      ]
    }
  ],

  service: [
    "Reviewer — CVPR, NeurIPS, ACM MM, ECCV, IJCAI, ICRA, IJCNN",
    "Reviewer — IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)",
    "Teaching Assistant — EE6601, Columbia University"
  ],

  personal: [
    { caption: "Photography", kicker: "Hobby 01", note: "Chasing light." },
    { caption: "Skiing", kicker: "Hobby 02", note: "Chasing speed." }
  ]
};
