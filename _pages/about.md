---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<font size=4> Currently a researcher in 2012 Labs. My research interest mainly focus on human-centric Multimodal learning, aiming to inferring how humans move in and interact in real world. Application domains of interest include Augmented and Virtual Reality, Human Robot Interaction. 
I graduated from Columbia University with a master of science degree. My major is Mechanical Engineering and my concentration is robotics and control with an excellent GPA 4.198/4. </font> 




# 📝 Publications 


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2024</div><img src='images/paper_AAAI.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Full-Body Motion Reconstruction with Sparse Sensing from Graph Perspective](https://doi.org/10.1609/aaai.v38i7.28483)

**Feiyu Yao**, Zongkai Wu, Li Yi


• We are the first to conduct research on full body pose reconstruction with sparse sensing from graph perspective.
The task is viewed as predicting missing nodes in an established graph.
  
• We propose a framework to reconstruct full body motions via Body Pose Graph (BPG). Motion features with temporal and spatial properties are generated and assigned to be initial node features. Then a Graph Neural Network with expressive edges is applied to updated nodes. Full body motion sequence is generated from the nodeassociated joint movements.
  
• Experiment results demonstrate that our framework achieves state of the art performance on on full-body
avatar estimation from sparse inputs. Further analysis shows the contribution of each component to the performance improvement, especially in the lower body joints.
  
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICASSP 2024</div><img src='images/paper3.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Graph based Environment Representation for Vision-and-Language Navigation in Continuous Environments](https://doi.org/10.1109/ICASSP48485.2024.10446850)

Ting Wang, Zongkai Wu, **Feiyu Yao** and Donglin Wang

• We propose an environment representation for VLN-CE. We introduce semantic information and construct the ERG in real time through object detection, where the relational representation is learned by GCN.
  
• We propose a new cross-modal attention VLN-CE framework combined with an environment representation module. In the training phase, We consider a combination of the two losses, the navigation cross-entropy loss and the spatial consistency loss of the relationship between the same pair of objects when the perspective changes.
  
• The experimental results demonstrate that our graph based environment representation indeed helps to improve the navigation performance. Better cross-modal matching is attained and the generalization of the navigation model is enhanced in unseen environments.
  
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Under Review</div><img src='images/paper1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Few-shot Domain Adaptation for IMU Denoising](https://arxiv.org/abs/2201.01537)

**Feiyu Yao**, Zongkai Wu, Zhenyu Wei, Donglin Wang

• We are the first to take notice of the low-cost IMU denoising generalization problem brought by different IMUs in different application scenarios and locate the problem to the Embedding module.
  
• We propose an IMU denoising method composed by a domain adaptation framework and a corresponding few-shot learning strategy for domain generalization.
  
• We implement our proposed IMU denoising method both on open dataset (EuRoC and TUM-VI) and two real robot (car and quadruped robots) with multiple IMUs. The performance verifies the effectiveness of our method.
  
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ISA Transactions</div><img src='images/paper2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Model reference adaptive tracking control for hydraulic servo systems with nonlinear neural-networks](https://doi.org/10.1016/j.isatra.2019.11.027)

Zhikai Yao, Jianyong Yao, **Feiyu Yao**, Qiang Xu, Minrui Xu, Wenxiang Deng
  

• This paper proposes a composite design of nonlinear neural-networks (NN) and continuous robust integral of the sign of the error (RISE) feedback controller. 
  
• To achieve asymptotic stability, a novel RISE term with NN-based feedforward component is developed for the first time to enable the incorporation of model reference adaptive control structure where acceleration signal is not employed. 

• The proposed controller guarantees controlled hydraulic system a semi-global asymptotic stability. 
  
</div>
</div>





# 🎖 Honors and Awards

- International Level: 

Honorable Mention in Mathematical Contest in Modeling (2018.04).

Silver Award of the 7th China International "Internet plus" College Students Innovation and Entrepreneurship Competition --- Intelligent Fusion Control Algorithm Chip.

- National Level: 

Scholarship, 2017 Ministry of Industry and Information Technology of The P.R.C. Innovation and Entrepreneurship Scholarship (2018.05).

Scholarship, 2017 Ministry of Industry and Information Technology of The P.R.C. Innovation and Entrepreneurship Scholarship (2019.05).

Third prize in National Cipher Technology Competition (2018.11).

- Provincial Level:

Second prize in Jiangsu Province 14th College Students’ Physics and Experimental Technology Works Innovation Competition (2017.11).

The first prize of Physics Olympique of Middle School students in Jiangsu Province in 2015 (2015.10).

- Municipal Level:

Excellent Intern in Summer Internship for College Students (2018.12).

- School Level:

Scholarship for People of the Year on Campus in academic year 2018-2019 (Only 10 in NUST) (2019.11).
  
Outstanding Graduate Representative (2020.06).



# 📖 Educations
- *2020.09 - 2022.05*, Master of Science, Columbia University, New York. 
- *2016.09 - 2020.06*, Bachelor of Engineering, Naning Univerisity of Science and Technology, Nanjing. 

# 💻 Course Project Gallery
<!--
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)
-->
<a href="https://www.youtube.com/watch?v=g9lacYcaEdc"> <img src="images/robotstudio.jpg" width=300pt> </a>  <a href="https://www.youtube.com/watch?v=Rx6Fo3JLdqw"> <img src="images/robot.jpg" width=300pt> </a>  <img src="images/objectdetection.jpg" width=300pt> 

<img src="images/multimodal.jpg" width=300pt> <img src="images/quardruped.jpg" width=300pt> <img src="images/robotarm.jpg" width=300pt> 



<div class='paper-box'><div class='paper-box-image'><div><img src='images/robotstudio.jpg' alt="sym" width=500pt></div></div>
<div class='paper-box-text' markdown="1">

<b>[Biped Robot Dance](https://www.youtube.com/watch?v=g9lacYcaEdc)</b>

• Brainstormed appearance of organic-looking two-legged robot, and designed the CAD model of all components.
 
• Fabricated each component of robot using 3D printing and assembled components with the Raspberry Pi, motors, controller board, etc., as entire robot.
  
• Achieved 1st in of robot speed competition.
  
• Robot dance show is online: https://www.youtube.com/watch?v=g9lacYcaEdc.

  
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><img src='images/robot.jpg' alt="sym" width=500pt></div></div>
<div class='paper-box-text' markdown="1">

<b>[Soft Robot with Genetic Algorithm](https://www.youtube.com/watch?v=Rx6Fo3JLdqw)</b>
  
  
• Built virtual physics engine and 3D environment with C++ and OpenGL to simulate the real-world that satisfies the laws of physics.
  
  
• Treated each soft robot as a parent genotype and iteratively utilized the selection, mutation, and crossover mechanism to evolve the internal state of soft robots to improve the speed of hopping gait.
  
  
• Designed multiple criteria (speed, age, mass center and support plan) and optimized robot population referring to pareto front.
  
  
• Best soft robot performance demo: https://www.youtube.com/watch?v=Rx6Fo3JLdqw  
  
 

  
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><img src='images/objectdetection.jpg' alt="sym" width=500pt></div></div>
<div class='paper-box-text' markdown="1">

<b>Object Detection in Haze</b>
  
  
• Combined dehazing network (AECR-NET) and object detection network (YOLO v5) with data augmentation strategy such as rotation, resizing and fine-tuning components on different datasets.
  
  
• Won 1st in Class

  
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><img src='images/multimodal.jpg' alt="sym" width=500pt></div></div>
<div class='paper-box-text' markdown="1">

<b>Object Detection in Haze</b>
  
  
• Developed an algorithm for referring video object segmentation task, which aimed to do object segmentation for each frame in video.
  
  
  
  
• Established causal inference analysis for existing methods and located failure cases on unbalanced object category. distribution in dataset. Applied contrastive learning to reduce image features with no causal relevance.
 
  
  
 
• The model can get better performance on fine-grained picture with less training time. 


  
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><img src='images/quardruped.jpg' alt="sym" width=500pt></div></div>
<div class='paper-box-text' markdown="1">
  
<b>Reinforcement Learning in Quadruped Robots</b>
  
  
• Controlled quadruped robot to search for specific object.
  
  
• Implemented a hierarchical control strategy for quadruped robots, with Soft Actor-Critic reinforcement learning method as upper controller and Optimal Control as lower controller. 
  
  
• Introduced a SLAM sensor for body control and object detection. 


  
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/robotarm.jpg' alt="sym" width=500pt></div></div>
<div class='paper-box-text' markdown="1">

<b>Dynamic Torque Control of Multi-link Robotic Arms</b>
  
• Controlled the state (i.e., velocity, angle, and torque) of multi-link robotic arms to achieve specific positions in OpenAI Gym.
  
  
  
• Approximated forward dynamic model with multilayer perceptron, trained on the data generated by physical analog. The Robotic arm’s performance will be similar to physical analog only when data is sufficient and target position is not far from initial position).

  
  
  
• Compared performance of traditional control method (Modern Predictive Control) with Reinforcement Learning methods (Deep Q-Network and Proximal Policy Optimization).

  
</div>
</div>





# 💬 Internships
- *2021.01 - 2021.03*, Perception and Fusion Intern of Robotics Department, Sinovation Ventures, Beijing.
- *2018.07 - 2018.08*, Quality Inspection Intern, Nanjing Bureau of Quality and Technical Supervision, Nanjing.




