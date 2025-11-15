document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.querySelector(
    ".theme-switch-wrapper input[type='checkbox']",
  );
  const storedTheme = localStorage.getItem("aidan-theme");

  if (storedTheme === "dark") {
    body.classList.add("dark-theme");
    if (themeToggle) {
      themeToggle.checked = true;
    }
  }

  themeToggle?.addEventListener("change", (event) => {
    const isDark = event.currentTarget.checked;
    body.classList.toggle("dark-theme", isDark);
    localStorage.setItem("aidan-theme", isDark ? "dark" : "light");
  });

  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") {
        return;
      }
      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const projects = {
    "cytrence-vlm": {
      title: "Cytrence VLM",
      summary: "Vision-language pipeline powering UI automation at Cytrence.",
      description: [
        "Built a vision-language system that interprets UI screenshots and translates them into structured automation steps.",
        "Optimized CUDA kernels and deployed models across AWS SageMaker, Azure, and GCP GPU fleets for real-time assistance.",
      ],
      links: [{ label: "Overview", url: "https://aidan-liu.github.io" }],
      tech: ["PyTorch", "TensorFlow", "CUDA", "VLM", "AWS", "Azure", "GCP"],
      images: [],
    },
    codeassist: {
      title: "UT Code Assist",
      summary: "AI-assisted grading and feedback platform for UT Austin.",
      description: [
        "Architected Python/C++/Go microservices that call Gemma3, Claude, and ChatGPT to summarize student submissions.",
        "Built Angular/React dashboards backed by Next.js/Express/Flask APIs and Docker/Kubernetes deployments.",
      ],
      links: [{ label: "Case Study", url: "https://aidan-liu.github.io" }],
      tech: ["Python", "C++", "Go", "Docker", "Kubernetes", "Postgres"],
      images: [],
    },
    monke: {
      title: "Monke",
      summary:
        "Fun side project exploring interactive hardware + software loops.",
      description: [
        "Rapid prototyping project blending microcontrollers, sensors, and web dashboards for playful automation.",
      ],
      links: [{ label: "Demo", url: "https://aidan-liu.github.io" }],
      tech: ["TypeScript", "Node.js", "Arduino", "WebSockets"],
      images: [],
    },
    "riot-ml": {
      title: "Riot ML",
      summary: "COE competition project benchmarking TFT match outcomes.",
      description: [
        "Benchmarked LightGBM and XGBoost on 5k+ TFT matches using Scikit-learn, Pandas, NumPy, MATLAB, and Hadoop pipelines.",
        "Tuned models via grid search cross-validation to accurately surface the highest win-rate team compositions and secured 1st place.",
      ],
      links: [{ label: "GitHub", url: "https://github.com/aidan-liu" }],
      tech: ["LightGBM", "XGBoost", "Scikit-learn", "NumPy", "Hadoop"],
      images: [],
    },
    "beta-climbs": {
      title: "Beta Climbs",
      summary:
        "Full-stack climbing companion app built with React Native/Expo.",
      description: [
        "Open-source mobile app with microservices backend, TensorFlow computer vision pipeline, and noSQL datastore.",
      ],
      links: [{ label: "GitHub", url: "https://github.com/aidan-liu" }],
      tech: ["React Native", "Expo", "TensorFlow", "NoSQL"],
      images: [],
    },
    arcado: {
      title: "Arcado",
      summary: "Community project for building an arcade-inspired dashboard.",
      description: [
        "Designed a full-stack interface for tracking events, leaderboards, and real-time stats for campus arcade nights.",
      ],
      links: [{ label: "Overview", url: "https://aidan-liu.github.io" }],
      tech: ["Next.js", "Supabase", "TailwindCSS"],
      images: [],
    },
    "king-domino": {
      title: "King Domino",
      summary: "Board-game inspired automation toolkit.",
      description: [
        "Experimented with rule engines and Monte Carlo simulations to replicate game strategies in software.",
      ],
      links: [{ label: "Prototype", url: "https://aidan-liu.github.io" }],
      tech: ["Python", "FastAPI", "Redis", "Monte Carlo"],
      images: [],
    },
  };

  const titleEl = document.getElementById("project-title");
  const summaryEl = document.getElementById("project-summary");
  const descriptionEl = document.getElementById("project-description");
  const linksEl = document.getElementById("project-links");
  const techEl = document.getElementById("project-tech");
  const imagesEl = document.getElementById("project-images");
  const tabs = document.querySelectorAll(".tab-button");

  const renderProject = (key) => {
    const project = projects[key];
    if (!project || !titleEl) {
      return;
    }

    titleEl.textContent = project.title;
    summaryEl.textContent = project.summary;

    descriptionEl.innerHTML = "";
    (project.description || []).forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      descriptionEl.appendChild(p);
    });

    linksEl.innerHTML = "";
    (project.links || []).forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.textContent = link.label;
      linksEl.appendChild(anchor);
    });

    techEl.innerHTML = "";
    (project.tech || []).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      techEl.appendChild(li);
    });

    imagesEl.innerHTML = "";
    if (project.images && project.images.length > 0) {
      project.images.forEach((image) => {
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        imagesEl.appendChild(img);
      });
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "image-placeholder";
      placeholder.textContent = "Preview coming soon";
      imagesEl.appendChild(placeholder);
    }
  };

  let activeProject = "riot-ml";
  renderProject(activeProject);

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.project;
      if (!key || key === activeProject) {
        return;
      }
      activeProject = key;
      tabs.forEach((button) => button.classList.remove("active-tab"));
      tab.classList.add("active-tab");
      renderProject(key);
    });
  });

  const typewriterEl = document.getElementById("typewriter-text");
  const phrases = ["software engineer", "full-stack builder", "AI/ML tinkerer"];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    if (!typewriterEl) {
      return;
    }
    const current = phrases[phraseIndex];
    const nextText = current.slice(0, charIndex);
    typewriterEl.textContent = nextText;

    if (!isDeleting && charIndex <= current.length) {
      charIndex += 1;
    } else if (isDeleting && charIndex > 0) {
      charIndex -= 1;
    }

    if (charIndex === current.length + 1) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const delay = isDeleting ? 60 : 120;
    setTimeout(type, delay);
  };

  type();
});
