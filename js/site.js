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
        "In the demo video, the VLM receives natural-language instructions, segments the screen, parses each element, and enacts the generated plan (e.g., opening a calculator and entering “9 x 5 =”).",
        "This workflow required careful finetuning across LLMs and VLMs and leverages Kiwi, our native automation product, which dispatches these instructions to endpoints ranging from Raspberry Pi and Nvidia Jetson to mini PCs.",
      ],
      links: [
        {
          label: "View the final presentation",
          url: "https://docs.google.com/presentation/d/1JNeNBYM1b8jqTu0KrhZRo-TpyKk28_gZx63piSO2N8Y/edit?usp=sharing",
        },
      ],
      tech: [
        "Python",
        "Gemma3",
        "Claude",
        "PyTorch",
        "TensorFlow",
        "CUDA",
        "VLM",
        "AWS Sagemaker",
        "Unsloth",
        "GCP",
      ],
      media: [
        {
          type: "video",
          src: "images/partial integration test demo.mov",
          mime: "video/mp4",
        },
      ],
    },
    codeassist: {
      wideMedia: true,
      title: "UT Code Assist",
      summary: "AI-assisted grading and feedback platform for UT Austin.",
      description: [
        "Architected Python/C++/Go microservices that call Gemma3, Claude, and ChatGPT to summarize student submissions.",
        "Built Angular/React dashboards backed by Next.js/Express/Flask APIs and Docker/Kubernetes deployments.",
      ],
      links: [{ label: "GitHub Repo", url: "https://github.com/kiat/codeAssist" }],
      tech: ["Python", "C++", "Go", "Docker", "Kubernetes", "Postgres"],
      media: [
        {
          type: "image",
          src: "images/codeassist/Screenshot 2025-11-16 at 2.11.26 PM.png",
          alt: "Code Assist dashboard view 1",
        },
        {
          type: "image",
          src: "images/codeassist/Screenshot 2025-11-16 at 2.18.34 PM.png",
          alt: "Code Assist dashboard view 2",
        },
        {
          type: "image",
          src: "images/codeassist/Screenshot 2025-11-16 at 2.18.45 PM.png",
          alt: "Code Assist dashboard view 3",
        },
        {
          type: "image",
          src: "images/codeassist/Screenshot 2025-11-16 at 2.18.58 PM.png",
          alt: "Code Assist dashboard view 4",
        },
      ],
    },
    monke: {
      wideMedia: true,
      title: "Monke",
      summary: "SwiftUI news companion that strips bias out of daily updates.",
      description: [
        "Monke was created to simplify news sources. Since Tiktok was acquired by Oracle and lots of different news sources are extremely biased, Monke aims to simplify the news in a way that is non-biased in any way.",
        "Monke was built using swiftUI and swift on XCode. All of the artwork and UI are hand designed by me on figma. This project is soon to be released on the appstore in January 2026.",
        "The Monke website was built using HTML, CSS, javascript, and lots of time designing and putting together a minimalistic approach to website building. The website is hosted for free on github pages.",
      ],
      links: [
        { label: "Monke website", url: "https://aidan-liu.github.io/Monke_Website/" },
      ],
      tech: ["Swift", "SwiftUI", "Figma", "HTML", "CSS", "JavaScript"],
      media: [
        {
          type: "image",
          src: "images/monke/Screenshot 2025-11-16 at 2.52.22 PM.png",
          alt: "Monke splash design",
        },
        {
          type: "image",
          src: "images/monke/Screenshot 2025-11-16 at 2.52.52 PM.png",
          alt: "Monke article feed",
        },
        {
          type: "image",
          src: "images/monke/Screenshot 2025-11-16 at 2.54.19 PM.png",
          alt: "Monke story detail",
        },
        {
          type: "image",
          src: "images/monke/Screenshot 2025-11-16 at 2.54.29 PM.png",
          alt: "Monke website preview",
        },
      ],
    },
    "riot-ml": {
      title: "Riot ML Model",
      summary: "COE competition project benchmarking TFT match outcomes.",
      description: [
        "Benchmarked LightGBM and XGBoost on 5k+ TFT matches using Scikit-learn, Pandas, NumPy, MATLAB, and Hadoop pipelines.",
        "Tuned models via grid search cross-validation to accurately surface the highest win-rate team compositions and secured 1st place.",
      ],
      links: [
        { label: "GitHub Repo", url: "https://github.com/aidan-liu/TFT-predictor" },
        {
          label: "Research Paper",
          url: "https://docs.google.com/document/d/1tknqDHkZwVIiW5IToSRE6nkqpbRoxhLR6hnih6FJfRo/edit?usp=sharing",
        },
      ],
      tech: ["LightGBM", "XGBoost", "Scikit-learn", "NumPy", "Hadoop"],
      media: [
        {
          type: "table",
          headers: ["Model", "Task", "Metric", "Score"],
          rows: [
            ["1D CNN (tensor-CNN regression)", "Regression", "RMSE", "1.9374"],
            ["Transformer (tensor-CNN regression)", "Regression", "RMSE", "1.5756"],
            ["Random Forest", "Regression", "RMSE", "1.5173"],
            ["LightGBM", "Regression", "RMSE", "1.5064"],
            ["XGBoost", "Regression", "RMSE", "1.4765"],
            ["CatBoost (fixed)", "Regression", "RMSE", "1.4635"],
            ["CatBoost (tuned)", "Regression", "RMSE", "1.4428"],
          ],
        },
      ],
    },
    "beta-climbs": {
      title: "Beta Climbs",
      summary:
        "React Native + Firebase app that blends computer vision with climber community tools.",
      description: [
        "Core features include AI scanning of bouldering holds, AI-generated route planning suggestions, leaderboard and club screens, rock wall classification, multi-screen navigation, authentication, and a real backend that stores user submissions in Firebase.",
        "We used React Native + Expo for the front end, Firebase for auth + data, and Python scripts for image processing and real-time data collection.",
        "Expo’s camera proved unreliable so we pivoted to file uploads, managed tight time constraints, and still shipped a working build.",
      ],
      links: [{ label: "GitHub Repo", url: "https://github.com/aidan-liu/beta" }],
      tech: [
        "React Native",
        "Expo",
        "Firebase",
        "JavaScript",
        "Python",
        "Computer Vision",
      ],
      media: [
        {
          type: "youtube",
          src: "https://www.youtube.com/watch?v=MaiS5LKUKqA",
        },
      ],
    },
    arcado: {
      wideMedia: true,
      title: "Schooled",
      summary: "HackTX concept that uses an arcade shell to teach AI grading.",
      description: [
        "Schooled was a HackTX 2024 project that aimed to gamify the concept of AI-assisted grading and feedback for students.", "The arcade shell houses a screen that displays various coding challenges, and students can interact with the arcade buttons to select answers or navigate through the challenges.", "The backend leverages AI models to provide instant feedback on student submissions, making the learning process more engaging and interactive.", "This project was completely created from scratch and all artwork/designs were made by me using Figma.",
      ],
      links: [{ label: "GitHub Repo", url: "https://github.com/DavidLiu2/hacktx2024" }],
      tech: [
        "React",
        "Node.js",
        "Express",
        "Python",
        "Figma",
        "Teamwork",
        "Hackathon",
      ],
      media: [
        {
          type: "image",
          src: "images/schooled/gallery (5).jpg",
          alt: "Schooled arcade gallery 5",
        },
        {
          type: "image",
          src: "images/schooled/gallery (4).jpg",
          alt: "Schooled arcade gallery 4",
        },
        {
          type: "image",
          src: "images/schooled/gallery (3).jpg",
          alt: "Schooled arcade gallery 3",
        },
        {
          type: "image",
          src: "images/schooled/gallery (2).jpg",
          alt: "Schooled arcade gallery 2",
        },
        {
          type: "image",
          src: "images/schooled/gallery (1).jpg",
          alt: "Schooled arcade gallery 1",
        },
        {
          type: "image",
          src: "images/schooled/gallery.jpg",
          alt: "Schooled arcade gallery overview",
        },
      ],
    },
    "king-domino": {
      wideMedia: true,
      title: "King Domino",
      summary: "Java-based solver + UI for the tabletop favorite.",
      description: [
        "Built a Monte Carlo + heuristic engine that evaluates tile placements and simulates future turns so players can see projected scores before committing.",
        "Packaged the project as a runnable JAR with a light Swing UI so friends can try the bot locally and compare strategies.",
      ],
      links: [
        {
          label: "Google Drive",
          url: "https://drive.google.com/drive/folders/1WabVGre5JdcNexSZ3zSYQ2wfKczvm5Hn?usp=sharing",
        },
        {
          label: "Play for yourself",
          url: "images/kingdomino/KingDominoGroupAidan.jar",
          download: true,
        },
      ],
      tech: ["Java", "Swing", "Monte Carlo", "Game AI"],
      media: [
        {
          type: "image",
          src: "images/kingdomino/Screenshot 2025-11-16 at 3.50.48 PM.png",
          alt: "King Domino tile evaluation screen",
        },
        {
          type: "image",
          src: "images/kingdomino/Screenshot 2025-11-16 at 3.50.57 PM.png",
          alt: "King Domino scoring overlay",
        },
        {
          type: "image",
          src: "images/kingdomino/Screenshot 2025-11-16 at 3.51.09 PM.png",
          alt: "King Domino simulation settings",
        },
        {
          type: "image",
          src: "images/kingdomino/Screenshot 2025-11-16 at 3.51.57 PM.png",
          alt: "King Domino board state preview",
        },
      ],
    },
  };

  const titleEl = document.getElementById("project-title");
  const summaryEl = document.getElementById("project-summary");
  const descriptionEl = document.getElementById("project-description");
  const linksEl = document.getElementById("project-links");
  const techEl = document.getElementById("project-tech");
  const imagesEl = document.getElementById("project-images");
  const imageStackEl = document.querySelector(".image-stack");
  const projectTextEl = document.getElementById("project-text");
  const tabs = document.querySelectorAll(".tab-button");

  const renderProject = (key) => {
    const project = projects[key];
    if (!project || !titleEl) {
      return;
    }

    const isWide = Boolean(project.wideMedia);
    projectTextEl?.classList.toggle("wide-media", isWide);
    imageStackEl?.classList.toggle("wide-media", isWide);

    titleEl.textContent = project.title;
    summaryEl.textContent = project.summary;

    descriptionEl.innerHTML = "";
    (project.description || []).forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      p.style.marginBottom = "1rem";
      descriptionEl.appendChild(p);
    });

    linksEl.innerHTML = "";
      (project.links || []).forEach((link) => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        if (link.download) {
          anchor.setAttribute("download", "");
          anchor.target = "_self";
        }
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
    const mediaItems = project.media || project.images || [];

    const createMediaElement = (item) => {
      if (!item) {
        return null;
      }
      if (item.type === "video") {
        const video = document.createElement("video");
        video.controls = true;
        video.width = 360;
        if (item.poster) {
          video.poster = item.poster;
        }
        const source = document.createElement("source");
        source.src = item.src;
        source.type = item.mime || "video/mp4";
        video.appendChild(source);
        return video;
      }
      if (item.type === "youtube") {
        const iframe = document.createElement("iframe");
        const url = new URL(item.src);
        let videoId = url.searchParams.get("v");
        if (!videoId) {
          videoId = url.pathname.split("/").pop() || url.href;
        }
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.title = item.alt || "YouTube video player";
        iframe.frameBorder = "0";
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        return iframe;
      }
      if (item.type === "table") {
        const container = document.createElement("div");
        container.className = "results-table-container";
        const table = document.createElement("table");
        table.className = "results-table";
        if (Array.isArray(item.headers)) {
          const thead = document.createElement("thead");
          const headerRow = document.createElement("tr");
          item.headers.forEach((header) => {
            const th = document.createElement("th");
            th.textContent = header;
            headerRow.appendChild(th);
          });
          thead.appendChild(headerRow);
          table.appendChild(thead);
        }
        if (Array.isArray(item.rows)) {
          const tbody = document.createElement("tbody");
          item.rows.forEach((row) => {
            const tr = document.createElement("tr");
            row.forEach((cell) => {
              const td = document.createElement("td");
              td.textContent = cell;
              tr.appendChild(td);
            });
            tbody.appendChild(tr);
          });
          table.appendChild(tbody);
        }
        container.appendChild(table);
        return container;
      }
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt || "";
      return img;
    };

    if (mediaItems.length > 1) {
      const slider = document.createElement("div");
      slider.className = "media-slider";
      const wrapper = document.createElement("div");
      wrapper.className = "media-wrapper";
      slider.appendChild(wrapper);

      const prevBtn = document.createElement("button");
      prevBtn.className = "media-nav prev";
      prevBtn.innerHTML = "&#10094;";
      const nextBtn = document.createElement("button");
      nextBtn.className = "media-nav next";
      nextBtn.innerHTML = "&#10095;";
      slider.appendChild(prevBtn);
      slider.appendChild(nextBtn);

      const indicator = document.createElement("div");
      indicator.className = "media-indicator";
      slider.appendChild(indicator);

      let currentIndex = 0;
      const renderSlide = (index) => {
        if (index < 0) {
          index = mediaItems.length - 1;
        }
        if (index >= mediaItems.length) {
          index = 0;
        }
        currentIndex = index;
        wrapper.innerHTML = "";
        const el = createMediaElement(mediaItems[currentIndex]);
        if (el) {
          el.classList.add("media-slide");
          wrapper.appendChild(el);
        }
        indicator.textContent = `${currentIndex + 1}/${mediaItems.length}`;
        wrapper.classList.remove("fade-in");
        void wrapper.offsetWidth;
        wrapper.classList.add("fade-in");
      };

      prevBtn.addEventListener("click", () => renderSlide(currentIndex - 1));
      nextBtn.addEventListener("click", () => renderSlide(currentIndex + 1));

      renderSlide(0);
      imagesEl.appendChild(slider);
    } else if (mediaItems.length === 1) {
      const el = createMediaElement(mediaItems[0]);
      if (el) {
        imagesEl.appendChild(el);
      }
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "image-placeholder";
      placeholder.textContent = "Preview coming soon";
      imagesEl.appendChild(placeholder);
    }
  };

  let activeProject = "cytrence-vlm";
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
  const phrases = [
    "Software Engineer",
    "Full-Stack Developer",
    "AI/ML Tinkerer",
  ];
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
