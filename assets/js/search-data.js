// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/TreadwayCV_Feb2026.pdf";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "This page is under construction. Come back soon!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses taught at the University of Florida organized by course level.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-join-me-this-week-at-hsp2025-for-my-presentation-on-recent-work-entitled-cognitive-control-adaptation-in-code-switching-an-erp-study",
          title: 'Join me this week at HSP2025 for my presentation on recent work entitled...',
          description: "",
          section: "News",},{id: "news-honored-to-have-been-named-outstanding-phd-student-in-spanish-linguistics-for-2024-2025-by-the-uf-department-of-spanish-and-portuguese-studies-so-thankful-for-my-sps-community",
          title: 'Honored to have been named Outstanding PhD Student in Spanish Linguistics for 2024-2025...',
          description: "",
          section: "News",},{id: "news-thankful-to-have-been-granted-the-uf-department-of-spanish-and-portuguese-studies-contraseña-fund-award-to-attend-the-ninth-summer-school-on-statistical-methods-for-linguistics-and-psychology-in-potsdam-germany-this-august",
          title: 'Thankful to have been granted the UF Department of Spanish and Portuguese Studies...',
          description: "",
          section: "News",},{id: "news-just-returned-from-six-weeks-teaching-with-uf-in-costa-rica-cultivating-community-through-service-learning-leaving-san-josé-with-new-lifelong-friendships-and-students-with-a-fresh-outlook-on-cross-cultural-collaboration",
          title: 'Just returned from six weeks teaching with UF in Costa Rica: Cultivating Community...',
          description: "",
          section: "News",},{id: "news-celebrating-having-been-named-a-language-learning-dissertation-grant-recipient-today-the-award-will-be-used-to-fund-part-of-my-dissertation-entitled-code-switching-in-context-a-field-to-cognition-approach-to-experience-based-variation-in-spanish-english-processing",
          title: 'Celebrating having been named a Language Learning Dissertation Grant recipient today! The award...',
          description: "",
          section: "News",},{id: "news-hope-to-connect-with-many-of-you-next-week-at-amlap2025-come-see-my-talk-entitled-cognitive-control-adaptation-in-code-switching-an-erp-study-where-we-present-updated-erp-tfr-and-individual-differences-analyses-of-work-originally-presented-at-hsp2025",
          title: 'Hope to connect with many of you next week at AMLaP2025! Come see...',
          description: "",
          section: "News",},{id: "news-reflecting-on-my-final-day-in-the-advanced-frequentist-course-at-the-ninth-summer-school-on-statistical-methods-for-linguistics-and-psychology-at-the-university-of-potsdam-in-potsdam-germany-photos-and-major-takeaways-soon-to-come",
          title: 'Reflecting on my final day in the Advanced Frequentist course at the Ninth...',
          description: "",
          section: "News",},{id: "news-looking-forward-to-meeting-up-with-many-of-you-at-snl2025-later-this-week-stop-by-at-my-posters-entitled-the-neural-bases-of-theory-of-mind-the-role-of-language-profile-and-new-language-training-promotes-neurocognitive-resilience-in-healthy-aging-my-work-is-being-sponsored-by-a-travel-award-from-the-university-of-florida-center-for-cognitive-aging-and-memory-cam-excited-to-represent-the-work-being-done-at-the-cam-center",
          title: 'Looking forward to meeting up with many of you at SNL2025 later this...',
          description: "",
          section: "News",},{id: "news-looking-forward-to-serving-the-language-science-community-this-year-as-junior-member-of-the-executive-committee-of-the-society-for-human-sentence-processing-stay-tuned-for-upcoming-event-announcements",
          title: 'Looking forward to serving the language science community this year as junior member...',
          description: "",
          section: "News",},{id: "news-excited-to-be-in-reading-for-bilingualism-in-the-hispanic-and-lusophone-world-2026-if-you-re-in-town-for-the-conference-stop-by-my-talks-perceived-accent-impacts-sentence-processing-of-bilingual-code-switching-on-day-1-and-the-neural-bases-of-theory-of-mind-the-role-of-bilingual-typology-on-day-2",
          title: 'Excited to be in Reading for Bilingualism in the Hispanic and Lusophone World...',
          description: "",
          section: "News",},{id: "projects-sensitivity-to-code-switching-asymmetries-in-l2-sentence-processing",
          title: 'Sensitivity to Code-Switching Asymmetries in L2 Sentence Processing',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-cognitive-control-adaptation-in-code-switching",
          title: 'Cognitive Control Adaptation in Code-Switching',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-the-role-of-exposure-to-spanish-english-code-switching",
          title: 'The Role of Exposure to Spanish-English Code-Switching',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-attention-and-prediction-in-sentence-processing",
          title: 'Attention and Prediction in Sentence Processing',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-online-comprehension-of-community-specific-code-switching-norms-in-spanish-heritage-speakers",
          title: 'Online Comprehension of Community-Specific Code-Switching Norms in Spanish Heritage Speakers',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-effects-of-perceived-accent-on-code-switching-processing",
          title: 'Effects of Perceived Accent on Code-Switching Processing',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-new-language-training-promotes-neurocognitive-resilience-in-aging",
          title: 'New Language Training Promotes Neurocognitive Resilience in Aging',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-the-neural-bases-of-theory-of-mind-in-bilinguals",
          title: 'The Neural Bases of Theory of Mind in Bilinguals',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-dynamic-impacts-of-personal-social-network-on-language-learning-outcomes",
          title: 'Dynamic Impacts of Personal Social Network on Language Learning Outcomes',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-analyzing-changes-in-vot-in-short-term-l2-learning-in-aging",
          title: 'Analyzing Changes in VOT in Short-Term L2 Learning in Aging',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%72%65%61%64%77%61%79%68%61%6E%6E%61%68@%75%66%6C.%65%64%75", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/https://orcid.org/0000-0001-6244-7674", "_blank");
        },
      },{
        id: 'social-osf',
        title: 'Open Science Framework',
        section: 'Socials',
        handler: () => {
          window.open("https://osf.io/osf.io/8fydm/", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/treadwayhannah.bsky.social", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
