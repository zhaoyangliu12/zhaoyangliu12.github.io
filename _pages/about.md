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

<span class='anchor' id='about'></span>

I began my Ph.D. in Computer Science and Engineering at The Hong Kong University of Science and Technology (HKUST) in September 2023, advised by [Prof. Qifeng Chen](https://cqf.io/). Since then, I have worked closely with Shanghai AI Laboratory on multimodal foundation models and agentic systems, with recent efforts centered on open-source computer use agents, multimodal large language models, AI-generated content, and video understanding. My recent research includes projects such as ScaleCUA, InternVL, VisionLLM, ControlLLM, AudioX, and InternGPT, and I am broadly interested in building practical multimodal systems that can perceive, reason, and act in complex real-world settings.

<span class='anchor' id='news'></span>

# 🔥 News
- *2026.04*: 🎉 One paper accepted to ACL 2026.
- *2026.03*: 🎉 One paper accepted to SIGGRAPH 2026.
- *2026.02*: 🎉 Two papers accepted to CVPR 2026.
- *2026.01*: 🎉 Three papers accepted to ICLR 2026, including one Oral and two Posters.

<span class='anchor' id='experience'></span>

# 💼 Experience
- *2023.04 - 2025.10* | **Research Intern**, Shanghai AI Laboratory, Shanghai, China  
  Worked with Wenhai Wang and Jifeng Dai on large language models and multimodal learning.
- *2022.04 - 2023.04* | **Part-time Researcher**, Shanghai AI Laboratory, Shanghai, China  
  Led interns on video understanding, multimodal learning, and pose pretraining.
- *2020.07 - 2023.04* | **Algorithm Engineer**, SenseTime, Shanghai, China  
  Led a project on detecting highlight moments in videos and worked on video classification, highlight detection, and boundary detection.
- *2019.09 - 2020.07* | **Research Intern**, SenseTime, Beijing, China  
  Worked on action recognition.
- *2019.05 - 2019.09* | **Research Intern**, Tencent Youtu Lab, Shanghai, China  
  Worked on action recognition.

<span class='anchor' id='selected-publications'></span>

# 📚 Selected Publications

<div class="paper-box">
  <div class="paper-box-image">
    <img src="/images/papers/scalecua.png" alt="ScaleCUA publication thumbnail">
  </div>
  <div class="paper-box-text">
    <p class="paper-links">
      <a class="paper-link paper-link-github" href="https://github.com/OpenGVLab/ScaleCUA" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a class="paper-link paper-link-huggingface" href="https://huggingface.co/collections/OpenGVLab/scalecua" target="_blank" rel="noopener noreferrer">Hugging Face</a>
    </p>
    <p class="paper-title"><a href="https://arxiv.org/abs/2509.15221">ScaleCUA: Scaling Open-Source Computer Use Agents with Cross-Platform Data</a></p>
    <p class="paper-authors"><strong>Zhaoyang Liu</strong>, JingJing Xie, Zichen Ding, Zehao Li, Bowen Yang, Zhenyu Wu, et al.</p>
    <div class="paper-meta-row">
      <p class="paper-meta"><em>ICLR 2026 <span class="paper-meta-highlight">Oral</span></em></p>
    </div>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <img src="/images/papers/internvl35.png" alt="InternVL3.5 publication thumbnail">
  </div>
  <div class="paper-box-text">
    <p class="paper-links">
      <a class="paper-link paper-link-github" href="https://github.com/OpenGVLab/InternVL" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a class="paper-link paper-link-huggingface" href="https://huggingface.co/collections/OpenGVLab/internvl35" target="_blank" rel="noopener noreferrer">Hugging Face</a>
    </p>
    <p class="paper-title"><a href="https://arxiv.org/abs/2508.18265">InternVL3.5: Advancing Open-Source Multimodal Models in Versatility, Reasoning, and Efficiency</a></p>
    <p class="paper-authors">Weiyun Wang*, Zhangwei Gao*, Lixin Gu*, Hengjun Pu*, Long Cui*, Xingguang Wei*, <strong>Zhaoyang Liu*</strong>, et al.</p>
    <div class="paper-meta-row">
      <p class="paper-meta"><em>arXiv preprint, 2025</em></p>
    </div>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <img src="/images/papers/audiox.png" alt="AudioX publication thumbnail">
  </div>
  <div class="paper-box-text">
    <p class="paper-links">
      <a class="paper-link paper-link-github" href="https://github.com/ZeyueT/AudioX" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a class="paper-link paper-link-huggingface" href="https://huggingface.co/HKUSTAudio/AudioX" target="_blank" rel="noopener noreferrer">Hugging Face</a>
    </p>
    <p class="paper-title"><a href="https://arxiv.org/abs/2503.10522">AudioX: A Unified Framework for Anything-to-Audio Generation</a></p>
    <p class="paper-authors">Zeyue Tian, <strong>Zhaoyang Liu</strong>, Yizhu Jin, Ruibin Yuan, Liumeng Xue, et al.</p>
    <div class="paper-meta-row">
      <p class="paper-meta"><em>Accepted to ICLR, 2026</em></p>
    </div>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <img src="/images/papers/visionllmv2.png" alt="VisionLLM v2 publication thumbnail">
  </div>
  <div class="paper-box-text">
    <p class="paper-links">
      <a class="paper-link paper-link-github" href="https://github.com/OpenGVLab/VisionLLM" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a class="paper-link paper-link-huggingface" href="https://huggingface.co/OpenGVLab/VisionLLMv2" target="_blank" rel="noopener noreferrer">Hugging Face</a>
    </p>
    <p class="paper-title"><a href="https://arxiv.org/abs/2406.08394">VisionLLM v2: An End-to-End Generalist Multimodal Large Language Model for Hundreds of Vision-Language Tasks</a></p>
    <p class="paper-authors">Jiannan Wu*, Muyan Zhong*, Sen Xing*, Zeqiang Lai*, <strong>Zhaoyang Liu*</strong>, et al.</p>
    <div class="paper-meta-row">
      <p class="paper-meta"><em>NeurIPS, 2024</em></p>
    </div>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <img src="/images/papers/controlllm.png" alt="ControlLLM publication thumbnail">
  </div>
  <div class="paper-box-text">
    <p class="paper-links">
      <a class="paper-link paper-link-github" href="https://github.com/OpenGVLab/ControlLLM" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a class="paper-link paper-link-huggingface" href="https://huggingface.co/spaces/OpenGVLab/ControlLLM" target="_blank" rel="noopener noreferrer">Hugging Face</a>
    </p>
    <p class="paper-title"><a href="https://arxiv.org/abs/2310.17796">ControlLLM: Augment Language Models with Tools by Searching on Graphs</a></p>
    <p class="paper-authors"><strong>Zhaoyang Liu</strong>, Zeqiang Lai, Zhangwei Gao, Erfei Cui, Ziheng Li, et al.</p>
    <div class="paper-meta-row">
      <p class="paper-meta"><em>ECCV, 2024</em></p>
    </div>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <img src="/images/papers/interngpt.png" alt="InternGPT publication thumbnail">
  </div>
  <div class="paper-box-text">
    <p class="paper-links">
      <a class="paper-link paper-link-github" href="https://github.com/OpenGVLab/InternGPT" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a class="paper-link paper-link-huggingface" href="https://huggingface.co/spaces/OpenGVLab/InternGPT" target="_blank" rel="noopener noreferrer">Hugging Face</a>
    </p>
    <p class="paper-title"><a href="https://arxiv.org/abs/2305.05662">InternGPT: Solving Vision-Centric Tasks by Interacting with ChatGPT Beyond Language</a></p>
    <p class="paper-authors"><strong>Zhaoyang Liu</strong>, Yinan He, Wenhai Wang, Weiyun Wang, Yi Wang, et al.</p>
    <div class="paper-meta-row">
      <p class="paper-meta"><em>arXiv preprint, 2023</em></p>
    </div>
  </div>
</div>

{% if site.data.google_scholar_publications and site.data.google_scholar_publications.publications %}
{% assign excluded_publication_titles = "others. 2024. Expanding performance boundaries of open-source multimodal models with model, data, and test-time scaling||1 Details of optimizing network P||Supplementary Material for Progressive Attention on Multi-Level Dense Difference Maps for Generic Event Boundary Detection||Weijie Su, Gen Luo, Xiangyu Yue, Biqing Qi, Kai Chen, Bowen Zhou, Yu Qiao, Qifeng Chen, and Wenhai Wang. Scalecua: Scaling open-source computer use agents with cross-platform data||A Unified Pretraining Framework for Human Motion Analysis" | split: "||" %}
{% assign visible_publication_count = 0 %}
{% for paper in site.data.google_scholar_publications.publications %}
{% unless excluded_publication_titles contains paper.title %}
{% assign visible_publication_count = visible_publication_count | plus: 1 %}
{% endunless %}
{% endfor %}
<details class="publication-collapse">
  <summary>Show All Publications from Google Scholar</summary>
  <p class="publication-collapse-note">
    Synced from <a href="{{ site.data.google_scholar_publications.source_url }}" target="_blank" rel="noopener noreferrer">Google Scholar</a> on {{ site.data.google_scholar_publications.updated_at }}.
  </p>
  <ul class="publication-list-compact">
    {% for paper in site.data.google_scholar_publications.publications %}
	    {% unless excluded_publication_titles contains paper.title %}
	    {% assign authors_html = paper.authors | replace: 'Zhaoyang Liu', '<strong>Zhaoyang Liu</strong>' %}
	    {% unless authors_html contains '<strong>Zhaoyang Liu</strong>' %}
	    {% assign authors_html = authors_html | replace_first: 'Z Liu', '<strong>Z Liu</strong>' %}
	    {% endunless %}
	    {% case paper.title %}
	    {% when "Internvl3: Exploring advanced training and test-time recipes for open-source multimodal models" %}
	    {% assign authors_html = "J Zhu*, W Wang*, Z Chen*, <strong>Z Liu*</strong>, S Ye, L Gu, H Tian, Y Duan, W Su, J Shao, ..." %}
	    {% when "Internvl3. 5: Advancing open-source multimodal models in versatility, reasoning, and efficiency" %}
	    {% assign authors_html = "W Wang*, Z Gao*, L Gu*, H Pu*, L Cui*, X Wei*, <strong>Z Liu*</strong>, L Jing, S Ye, J Shao, ..." %}
	    {% when "Visionllm v2: An end-to-end generalist multimodal large language model for hundreds of vision-language tasks" %}
	    {% assign authors_html = "J Wu*, M Zhong*, S Xing*, Z Lai*, <strong>Z Liu*</strong>, Z Chen, W Wang, X Zhu, L Lu, T Lu, ..." %}
	    {% when "Expanding performance boundaries of open-source multimodal models with model, data, and test-time scaling, 2025" %}
	    {% assign authors_html = "Z Chen*, W Wang*, Y Cao*, Y Liu*, Z Gao*, E Cui*, J Zhu*, S Ye*, H Tian*, <strong>Z Liu*</strong>, ..." %}
	    {% when "Expanding performance boundaries of open-source multimodal models with model, data, and test-time scaling" %}
	    {% assign authors_html = "Z Chen*, W Wang*, Y Cao*, Y Liu*, Z Gao*, E Cui*, J Zhu*, S Ye*, H Tian*, <strong>Z Liu*</strong>, ..." %}
	    {% when "Llms meet multimodal generation and editing: A survey" %}
	    {% assign authors_html = "Y He*, <strong>Z Liu*</strong>, J Chen, Z Tian, H Liu, X Chi, R Liu, R Yuan, Y Xing, W Wang, ..." %}
	    {% when "Scienceboard: Evaluating multimodal autonomous agents in realistic scientific workflows" %}
	    {% assign authors_html = "Q Sun, Z Liu, C Ma, Z Ding, F Xu, Z Yin, H Zhao, Z Wu, K Cheng, <strong>Z Liu</strong>, ..." %}
	    {% endcase %}
	    {% assign display_title = paper.title %}
	    {% case paper.title %}
	    {% when "Internvl3. 5: Advancing open-source multimodal models in versatility, reasoning, and efficiency" %}
	    {% assign display_title = "Internvl3.5: Advancing open-source multimodal models in versatility, reasoning, and efficiency" %}
	    {% endcase %}
	    {% assign display_venue = paper.venue %}
	    {% case paper.title %}
	    {% when "Os-symphony: A holistic framework for robust and generalist computer-using agent" %}
	    {% assign display_venue = "Annual Meeting of the Association for Computational Linguistics (ACL), 2026" %}
	    {% when "OS-Oracle: A Comprehensive Framework for Cross-Platform GUI Critic Models" %}
	    {% assign display_venue = "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2026" %}
	    {% when "Scalecua: Scaling open-source computer use agents with cross-platform data" %}
	    {% assign display_venue = "International Conference on Learning Representations (ICLR), 2026 Oral" %}
	    {% when "Audiox: Diffusion transformer for anything-to-audio generation" %}
	    {% assign display_venue = "International Conference on Learning Representations (ICLR), 2026 Poster" %}
	    {% when "Scienceboard: Evaluating multimodal autonomous agents in realistic scientific workflows" %}
	    {% assign display_venue = "International Conference on Learning Representations (ICLR), 2026 Poster" %}
	    {% when "Expanding performance boundaries of open-source multimodal models with model, data, and test-time scaling, 2025" %}
	    {% assign display_venue = "arXiv preprint arXiv:2412.05271, 2025" %}
	    {% when "Filter-Recovery Network for Multi-Speaker Audio-Visual Speech Separation" %}
	    {% assign display_venue = "International Conference on Learning Representations (ICLR), 2023" %}
	    {% endcase %}
	    {% assign arxiv_id = "" %}
	    {% assign arxiv_parts = paper.venue | split: "arXiv:" %}
	    {% if arxiv_parts.size > 1 %}
	    {% assign arxiv_id = arxiv_parts.last | strip | split: " " | first | split: "," | first | split: ")" | first %}
	    {% elsif paper.venue contains "arxiv. org/abs/" %}
	    {% assign arxiv_id = paper.venue | split: "abs/" | last | strip | split: " " | first | split: "," | first | split: ")" | first %}
	    {% elsif paper.venue contains "arxiv.org/abs/" %}
	    {% assign arxiv_id = paper.venue | split: "abs/" | last | strip | split: " " | first | split: "," | first | split: ")" | first %}
	    {% endif %}
	    {% case paper.title %}
	    {% when "Vidmuse: A simple video-to-music generation framework with long-short-term modeling" %}
	    {% assign arxiv_id = "2406.04321" %}
	    {% when "Motionbert: A unified perspective on learning human motion representations" %}
	    {% assign arxiv_id = "2210.06551" %}
	    {% when "VLG: General Video Recognition with Web Textual Knowledge" %}
	    {% assign arxiv_id = "2212.01638" %}
	    {% when "Progressive attention on multi-level dense difference maps for generic event boundary detection" %}
	    {% assign arxiv_id = "2112.04771" %}
	    {% when "Tam: Temporal adaptive module for video recognition" %}
	    {% assign arxiv_id = "2005.06803" %}
	    {% when "Dynamic sampling networks for efficient action recognition in videos" %}
	    {% assign arxiv_id = "2006.15560" %}
	    {% when "Teinet: Towards an efficient architecture for video recognition" %}
	    {% assign arxiv_id = "1911.09435" %}
	    {% when "Visionllm v2: An end-to-end generalist multimodal large language model for hundreds of vision-language tasks" %}
	    {% assign arxiv_id = "2406.08394" %}
	    {% when "Controlllm: Augment language models with tools by searching on graphs" %}
	    {% assign arxiv_id = "2310.17796" %}
	    {% endcase %}
	    {% assign title_url = "" %}
	    {% case paper.title %}
	    {% when "Joint-modal label denoising for weakly-supervised audio-visual video parsing" %}
	    {% assign title_url = "https://arxiv.org/abs/2204.11573" %}
	    {% when "Filter-Recovery Network for Multi-Speaker Audio-Visual Speech Separation" %}
	    {% assign title_url = "https://openreview.net/pdf?id=fiB2RjmgwQ6" %}
	    {% endcase %}
	    {% assign arxiv_url = "" %}
	    {% if arxiv_id != "" %}
	    {% assign arxiv_url = "https://arxiv.org/abs/" | append: arxiv_id %}
	    {% endif %}
	    {% if title_url == "" %}
	    {% assign title_url = arxiv_url %}
	    {% endif %}
	    <li class="publication-list-item">
	      <div class="publication-list-title">
	        {% if title_url != '' %}
	        <a href="{{ title_url }}" target="_blank" rel="noopener noreferrer">{{ display_title }}</a>
        {% else %}
	        {{ display_title }}
	        {% endif %}
      </div>
      {% if paper.authors != '' %}
      <div class="publication-list-authors">{{ authors_html }}</div>
      {% endif %}
	      {% if display_venue != '' or paper.year != '' %}
	      <div class="publication-list-venue">
	        {% if display_venue != '' %}
	        {{ display_venue }}
	        {% else %}
	        {{ paper.year }}
	        {% endif %}
      </div>
      {% endif %}
    </li>
    {% endunless %}
    {% endfor %}
  </ul>
</details>
{% else %}
For a fuller list of publications, please visit [Google Scholar](https://scholar.google.com/citations?hl=en&user=btgwZosAAAAJ).
{% endif %}

<span class='anchor' id='honors-and-awards'></span>

# 🏆 Honors and Awards
- *2023* RedBird PhD Award, The Hong Kong University of Science and Technology.
- *2020* Excellent Student Award, Nanjing University.
- *2020* Outstanding Graduate Award, Nanjing University.
- *2018* First Place, China Postgraduate Innovation and Practice Competition, Action Recognition Track.
- *2018* Huawei Scholarship, Nanjing University.
- *2015* Second Prize, Oracle Cup, East China Division.
- *2015* First Prize, Jingsheng Cup Computer Programming Competition, Anhui Province.

<span class='anchor' id='academic-services'></span>

# 🤝 Academic Services
### Journal Reviewer
- IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)
- International Journal of Computer Vision (IJCV)
- IEEE Transactions on Image Processing (TIP)
- Pattern Recognition (PR)

### Conference Reviewer
- CVPR, ECCV, ICCV, NeurIPS, ICLR, ICML

<span class='anchor' id='teaching'></span>

# 🎓 Teaching
- *2018 Spring* Teaching Assistant, Experiments for Programming Design, Nanjing University.
- *2024 Spring* Teaching Assistant, Fundamentals of Artificial Intelligence, HKUST.
- *2024 Autumn* Teaching Assistant, Design and Analysis of Algorithms, HKUST.
- *2025 Autumn* Teaching Assistant, Exploring Artificial Intelligence, HKUST.

{% comment %}
<span class='anchor' id='cv'></span>

# CV
You can download my latest CV here: [Zhaoyang Liu CV (PDF)](/files/Zhaoyang_Liu_CV.pdf).
{% endcomment %}
