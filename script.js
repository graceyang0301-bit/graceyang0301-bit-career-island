// Get the current year
const currentYear = new Date().getFullYear();

const yearElement = document.getElementById("year");

yearElement.textContent = currentYear;

/* ==================================================
   CURRENT YEAR
   ================================================== */

/* ==================================================
   LANGUAGE TRANSLATIONS
   ================================================== */

const translations = {

    en: {

        navExplore: "Explore",
        navContact: "Contact",

        welcome: "WELCOME TO",

        careerIsland: "My Career Island",

        islandDescription:
            "A visual map of my journey across AI, data, product, and technology.",


        aboutTitle: "ABOUT ME",

        aboutSubtitle:
            "Me · Education · Skills",


        aiTitle: "AI PROJECTS",

        aiSubtitle:
            "AI · ML · NLP · Computer Vision",


        dataTitle: "DATA LAB",

        dataSubtitle:
            "Data · Analytics · EDA",


        productTitle: "PRODUCT STUDIO",

        productSubtitle:
            "Product · AI · Growth",


        experienceTitle: "EXPERIENCE",

        experienceSubtitle:
            "Internships · Product · E-commerce",

        experiencePageEyebrow: "EXPERIENCE",
        experiencePageTitle: "My Experience",
        experiencePageSubtitle: "Internships · Product · E-commerce",
        experienceWorkedOn: "What I Worked On",
        experience01Date: "Apr 2025 – Jun 2025",
        experience01Company: "Dongfang Pump Industry Co., Ltd.",
        experience01Role: "Product Intern",
        experience01Overview: "Worked as a Product Intern, supporting e-commerce product presentation, customer development, and sales-related activities.",
        experience01Work1: "Designed visual content and promotional materials for pump products on e-commerce platforms.",
        experience01Work2: "Photographed and edited product images and created short-form promotional videos.",
        experience01Work3: "Developed online customer relationships and supported sales conversion.",
        experience01Work4: "Maintained customer relationships to encourage repeat purchases.",
        experience01Work5: "Coordinated with offline teams to support order fulfillment.",
        experience02Date: "Jul 2024 – Sep 2024",
        experience02Company: "Yikoupai Snack Company",
        experience02Role: "Product Operations",
        experience02Overview: "Worked in product operations, supporting e-commerce store management, marketing activities, and content creation.",
        experience02Work1: "Managed product listings and optimized store pages on e-commerce platforms.",
        experience02Work2: "Developed and executed promotional campaigns.",
        experience02Work3: "Produced and published short-form videos to increase product exposure and user engagement.",
        experience03Date: "Apr 2022 – Jun 2022",
        experience03Company: "E-commerce Internship",
        experience03Role: "E-commerce Operations",
        experience03Overview: "Managed an online Taobao store, gaining hands-on experience in e-commerce operations, product presentation, market analysis, and promotion.",
        experience03Work1: "Listed and managed products on the Taobao platform.",
        experience03Work2: "Photographed products and created promotional videos.",
        experience03Work3: "Designed product detail pages to improve customer appeal.",
        experience03Work4: "Analyzed market trends and product demand.",
        experience03Work5: "Identified product improvement opportunities and supported promotional activities.",
        experienceHighlightsTitle: "EXPERIENCE HIGHLIGHTS",
        experienceHighlight1: "E-commerce",
        experienceHighlight2: "Product Operations",
        experienceHighlight3: "Customer & Market",
        experienceHighlightsText: "From e-commerce operations to AI and business analytics, my experience has shaped a practical understanding of products, users, and data.",
        backToCareerIsland: "Back to Career Island",

        aboutMePageEyebrow: "ABOUT ME",
        aboutMePageTitle: "ABOUT ME",
        aboutMePageSubtitle: "AI · Business Analytics · Product",
        aboutMeProfileTitle: "PERSONAL PROFILE",
        aboutMePhotoPending: "Photo",
        aboutMeNameCn: "杨鑫康",
        aboutMeNameEn: "Grace Yang",
        aboutMeDegree: "MSc Artificial Intelligence & Business Analytics",
        aboutMeNameLabel: "Name",
        aboutMeGenderLabel: "Gender",
        aboutMeGender: "Female",
        aboutMeEmailLabel: "Email",
        aboutMePhoneLabel: "Phone",
        aboutMeEducationTitle: "EDUCATION",
        aboutMeCoreCourses: "Core Courses",
        aboutMeAwardsTitle: "AWARDS & CERTIFICATIONS",
        aboutMeHonorLabel: "Honor",
        aboutMeCertificationLabel: "Certification",
        aboutMeCollegeLevel: "College-level",
        aboutMeAward01: "Outstanding Student",
        aboutMeAward02: "Outstanding Youth League Cadre",
        aboutMeSkillsTitle: "SKILLS",
        aboutMeProgramming: "PROGRAMMING",
        aboutMeDataAnalytics: "DATA & ANALYTICS",
        aboutMeAiTools: "AI & DEVELOPMENT TOOLS",
        aboutMeCreativeAi: "CREATIVE AI",
        aboutMeLanguagesTitle: "LANGUAGES",
        aboutMeMandarin: "Native",
        aboutMeCantonese: "Beginner",
        aboutMeStatementTitle: "PERSONAL STATEMENT",
        aboutMeStatement: "I am a curious and hands-on learner with an interdisciplinary background in e-commerce, business, AI, and data analytics.\n\nI enjoy exploring how technology can solve practical problems and improve products, user experiences, and business processes.\n\nThrough academic projects, internships, and independent projects, I have developed experience in data analysis, AI applications, product operations, and digital content creation.\n\nI am also comfortable learning new tools and technologies independently, and I enjoy turning ideas into practical solutions through experimentation and hands-on development.",
        backToIsland: "Back to Island",

        sideProjectsPageEyebrow: "SIDE PROJECTS",
        sideProjectsPageTitle: "Products · Games · Experiments",
        sideProjectsPageSubtitle: "A collection of independent product experiments and creative builds.",
        viewProject: "View Project",
        backToSideProjects: "Back to Side Projects",
        sideProjectOverviewTitle: "Project Overview",
        sideProjectRoleTitle: "My Role",
        sideProjectResultTitle: "Result",
        sideProjectLearningTitle: "What I've Learned",
        sideProjectLearnedLabel: "What I've learned",
        sideProjectSurprisedLabel: "What surprised me",
        sideProjectImproveLabel: "What I would improve next",

        sideProject01Title: "AI-driven End-to-End Product Development & Promotion",
        sideProject01ShortDescription: "AI-assisted product development, user analysis, content creation, and go-to-market execution.",
        sideProject01Tags: "AI Product · Product Design · AI-assisted Creation",
        sideProject01Tag1: "AI Product",
        sideProject01Tag2: "Product Design",
        sideProject01Tag3: "AI-assisted Creation",
        sideProject01Role: "End-to-End Product Development & AI-assisted Creation",
        sideProject01Overview1: "This project leveraged artificial intelligence to build an end-to-end product development and go-to-market framework, addressing challenges such as long product iteration cycles, limited alignment with user needs, fragmented promotion strategies, and unpredictable conversion performance.",
        sideProject01Overview2: "By combining user data analysis, AI-powered content analysis, and intelligent modeling, the project established a complete workflow covering user research, product feature design, solution validation, and market-oriented promotion.",
        sideProject01Overview3: "Through user profiling, optimization of core product features, and iterative refinement of promotion strategies, the project aimed to achieve more precise product positioning and more efficient market execution, improving both product iteration efficiency and promotional conversion effectiveness.",
        sideProject01RoleText1: "I independently contributed to the overall product development and implementation process, covering product concept development, user-oriented analysis, product feature design, solution validation, and promotional planning.",
        sideProject01RoleText2: "I also used AI tools to support content analysis and the creation of promotional materials, including promotional videos, posters, and original music, while contributing to the development of both a mobile application and a desktop platform.",
        sideProject01ResultTitle: "AI-driven End-to-End Product",
        sideProject01ResultText: "Developed an end-to-end product solution integrating AI-assisted product development, user analysis, content creation, and multi-platform implementation.",
        sideProject01ResultAward: "The project received 1st place in the professional evaluation.",
        sideProjectResultTag2: "End-to-End Development",
        sideProject01LearnedText: "I learned that building a product with AI requires more than using AI tools for content generation. User needs, product positioning, data analysis, and iterative validation are equally important in turning an idea into a usable product.",
        sideProject01SurprisedText: "I was surprised by how AI could support multiple stages of the product lifecycle, from content creation and product design to promotion, making it possible to prototype and iterate much faster.",
        sideProject01ImproveText: "I would further explore data-driven product experimentation and user feedback analysis, using more systematic evaluation methods to improve product decisions and measure the effectiveness of different promotion strategies.",

        sideProject02Title: "Treasure Hunter",
        sideProject02ShortDescription: "An independently developed single-player game built with Python and Pygame.",
        sideProject02Subtitle: "Independent Game Development",
        sideProject02Tags: "Python · Pygame · Game Development",
        sideProject02Tag1: "Python",
        sideProject02Tag2: "Pygame",
        sideProject02Tag3: "Game Development",
        sideProject02Overview1: "Treasure Hunter is an independently developed single-player game built with Python and Pygame.",
        sideProject02Overview2: "The project was developed as a complete game development exercise, covering core gameplay logic and implementation from concept to a playable executable.",
        sideProject02Role: "Independent Game Developer",
        sideProject02RoleText1: "I independently handled the full development process, including gameplay logic, player movement, treasure collection, collision detection, and overall game implementation.",
        sideProject02RoleText2: "The project allowed me to practice programming logic, interactive system design, debugging, and the development of a complete playable application.",
        sideProject02ResultTitle: "Playable Treasure Hunter Game",
        sideProject02ResultText: "Delivered a playable single-player Treasure Hunter game with core gameplay mechanics implemented in Python and Pygame, including player movement, treasure collection, and collision detection.",
        sideProject02YoutubeLink: "YouTube — Project Walkthrough",
        sideProject02GithubLink: "GitHub — Treasure Hunter",
        sideProject02LearnedText: "I learned how important it is to break a game into smaller interactive systems, such as movement, collision detection, and item collection, and then integrate them into a complete playable experience.",
        sideProject02SurprisedText: "I was surprised by how many small interactions need to work together to make a simple game feel complete. Debugging these interactions also helped me better understand how programming logic translates into user experience.",
        sideProject02ImproveText: "I would improve the game by adding more levels, richer gameplay mechanics, and a more polished user interface, while continuing to explore game development with Python and other interactive technologies.",

        sideProject03Title: "Independent Product & AI Advertising Creation",
        sideProject03ShortDescription: "An independent product development and creative practice connecting product design, concept development, and promotional advertising creation.",
        sideProject03Tags: "AI Product · Product Design · AI-assisted Creation · Advertising",
        sideProject03Subtitle: "AI Product · Product Design · AI-assisted Creation · Advertising",
        sideProject03Tag1: "AI Product",
        sideProject03Tag2: "Product Design",
        sideProject03Tag3: "AI-assisted Creation",
        sideProject03Tag4: "Advertising",
        sideProject03Overview: "This project is an independently initiated product development and creative practice centered around an original product concept. It covers three core areas: product visual design, product concept development, and promotional advertising creation.",
        sideProject03Overview2: "The project aims to develop the product from 0 to 1 by connecting product positioning, visual design, and marketing communication into one coherent workflow. The final outcome is a complete product concept with clear positioning, a consistent visual identity, and strong potential for market communication.",
        sideProject03Role: "Independent Project Lead",
        sideProject03RoleIntro: "Independent Project Lead, responsible for the planning and execution of the entire project.",
        sideProject03Role1: "Led product positioning and user research, identifying the core product concept, differentiated value proposition, and overall product strategy.",
        sideProject03Role2: "Designed the complete set of product visuals, including hero product images, detailed product breakdowns, and contextual application visuals, while maintaining the overall visual quality and style.",
        sideProject03Role3: "Developed the creative concept and visual execution for product promotional advertising, creating advertising materials adapted to different communication channels.",
        sideProject03Role4: "Managed overall visual and conceptual consistency throughout the project, ensuring alignment across product positioning, product design, and promotional communication.",
        sideProject03Result1Label: "Visual Design Deliverables:",
        sideProject03Result1Text: "Developed a standardized product visual library covering multiple presentation perspectives, establishing a consistent visual system that can be adapted for e-commerce product pages, brand guidelines, offline displays, and other scenarios.",
        sideProject03Result2Label: "Product Strategy Deliverables:",
        sideProject03Result2Text: "Developed a complete product concept framework centered around the dual value proposition of functional value and emotional resonance, establishing differentiated market positioning and defining the target audience.",
        sideProject03Result3Label: "Promotional Materials:",
        sideProject03Result3Text: "Created multiple types of product advertising materials, including key visual posters, feed advertisements, and contextual promotional visuals, adapted to the content characteristics of social media and digital platforms.",
        sideProject03Result4Label: "Methodology:",
        sideProject03Result4Text: "Developed a reusable product development framework of “Strategy Anchoring → Design Execution → Communication Amplification”, which can be applied to similar product design projects.",
        sideProject03VideoLink: "▶ Watch Project Video",
        sideProject03LearnedText1: "Developed an end-to-end product mindset: I moved beyond the idea that product design is limited to visual execution and developed a deeper understanding of how strategic positioning, design execution, and marketing communication are interconnected to form a complete product value loop.",
        sideProject03LearnedText2Label: "Visual Consistency",
        sideProject03LearnedText2: "Learned how to build visual consistency: From the product's materials and color palette to the storytelling and visual style of promotional advertising, I learned how a consistent design language can create a coherent and memorable product identity.",
        sideProject03LearnedText3Label: "User-Centered Design",
        sideProject03LearnedText3: "Strengthened user-centered design thinking: Whether developing the product concept or creating advertising ideas, I learned to anchor decisions in the real usage scenarios and emotional needs of the target audience rather than focusing solely on visual aesthetics.",
        sideProject03LearnedText4Label: "Independent Project Management",
        sideProject03LearnedText4: "Improved independent project management skills: By leading the project from 0 to 1, I learned how to structure the project timeline, balance strategic thinking with practical execution, and ensure complete delivery according to the original objectives.",

        myJourney: "MY JOURNEY",


        sideProjectsTitle:
            "SIDE PROJECTS",

        sideProjectsSubtitle:
            "Products · Games · Experiments",

        treasureHunter:
            "🎮 Treasure Hunter · Python / Pygame",


        keepInTouch:
            "KEEP IN TOUCH",

        letsConnect:
            "Let's connect.",

        contactDescription:
            "Interested in AI, data, product, or building something interesting together?",


        email: "Email",

        linkedin: "LinkedIn",

        github: "GitHub",

        resume: "Resume",


        footerName:
            "Your Name · Career Island"

    },


    zh: {

        navExplore: "探索",

        navContact: "联系",


        welcome:
            "欢迎来到",

        careerIsland:
            "我的职业岛",

        islandDescription:
            "探索我在 AI、数据、产品与技术领域的学习与成长旅程。",


        aboutTitle:
            "关于我",

        aboutSubtitle:
            "个人 · 教育 · 技能",


        aiTitle:
            "AI 项目",

        aiSubtitle:
            "AI · 机器学习 · NLP · 计算机视觉",


        dataTitle:
            "数据实验室",

        dataSubtitle:
            "数据 · 分析 · EDA",


        productTitle:
            "产品工作室",

        productSubtitle:
            "产品 · AI · 增长",


        experienceTitle:
            "经历",

        experienceSubtitle:
            "实习 · 产品 · 电商",

        experiencePageEyebrow: "经历",
        experiencePageTitle: "我的经历",
        experiencePageSubtitle: "实习 · 产品 · 电商",
        experienceWorkedOn: "主要工作内容",
        experience01Date: "2025年4月 – 2025年6月",
        experience01Company: "东方泵业有限公司",
        experience01Role: "产品实习生",
        experience01Overview: "担任产品实习生，参与电商产品展示、客户开发及销售相关工作。",
        experience01Work1: "为电商平台上的泵类产品设计视觉内容和宣传素材。",
        experience01Work2: "拍摄并编辑产品图片，制作短视频宣传内容。",
        experience01Work3: "开发线上客户关系并支持销售转化。",
        experience01Work4: "维护客户关系，促进复购。",
        experience01Work5: "与线下团队协调，支持订单履约。",
        experience02Date: "2024年7月 – 2024年9月",
        experience02Company: "怡口派零食公司",
        experience02Role: "产品运营",
        experience02Overview: "从事产品运营工作，参与电商店铺管理、营销活动及内容创作。",
        experience02Work1: "管理电商平台商品上架，并优化店铺页面。",
        experience02Work2: "策划并执行推广活动。",
        experience02Work3: "制作并发布短视频，提升产品曝光和用户互动。",
        experience03Date: "2022年4月 – 2022年6月",
        experience03Company: "电商实习",
        experience03Role: "电商运营",
        experience03Overview: "负责淘宝网店运营，积累了电商运营、产品展示、市场分析和推广方面的实践经验。",
        experience03Work1: "在淘宝平台上上架并管理商品。",
        experience03Work2: "拍摄产品并制作宣传视频。",
        experience03Work3: "设计产品详情页，提升产品吸引力。",
        experience03Work4: "分析市场趋势和产品需求。",
        experience03Work5: "发现产品改进机会并支持推广活动。",
        experienceHighlightsTitle: "经历亮点",
        experienceHighlight1: "电商",
        experienceHighlight2: "产品运营",
        experienceHighlight3: "客户与市场",
        experienceHighlightsText: "从电商运营到 AI 与商业分析，这些经历帮助我形成了对产品、用户和数据的实践理解。",
        backToCareerIsland: "返回 Career Island",

        aboutMePageEyebrow: "关于我",
        aboutMePageTitle: "关于我",
        aboutMePageSubtitle: "AI · 商业分析 · 产品",
        aboutMeProfileTitle: "个人资料",
        aboutMePhotoPending: "证件照",
        aboutMeNameCn: "杨鑫康",
        aboutMeNameEn: "Grace Yang",
        aboutMeDegree: "人工智能与商业分析理学硕士",
        aboutMeNameLabel: "姓名",
        aboutMeGenderLabel: "性别",
        aboutMeGender: "女",
        aboutMeEmailLabel: "邮箱",
        aboutMePhoneLabel: "电话",
        aboutMeEducationTitle: "教育经历",
        aboutMeCoreCourses: "核心课程",
        aboutMeAwardsTitle: "荣誉与证书",
        aboutMeHonorLabel: "荣誉",
        aboutMeCertificationLabel: "证书",
        aboutMeCollegeLevel: "院级",
        aboutMeAward01: "优秀学生",
        aboutMeAward02: "优秀共青团干部",
        aboutMeSkillsTitle: "技能",
        aboutMeProgramming: "编程",
        aboutMeDataAnalytics: "数据与分析",
        aboutMeAiTools: "AI 与开发工具",
        aboutMeCreativeAi: "生成式 AI",
        aboutMeLanguagesTitle: "语言",
        aboutMeMandarin: "母语",
        aboutMeCantonese: "入门",
        aboutMeStatementTitle: "个人陈述",
        aboutMeStatement: "我是一名好奇且注重实践的学习者，拥有电商、商业、人工智能与数据分析的跨学科背景。\n\n我喜欢探索技术如何解决实际问题，并改善产品、用户体验与业务流程。\n\n通过学术项目、实习和独立项目，我积累了数据分析、AI 应用、产品运营和数字内容创作方面的实践经验。\n\n我也习惯独立学习新的工具与技术，并喜欢通过实验和动手实践，将想法转化为实际可行的解决方案。",
        backToIsland: "返回职业岛",

        sideProjectsPageEyebrow: "个人项目",
        sideProjectsPageTitle: "产品 · 游戏 · 实验",
        sideProjectsPageSubtitle: "记录我独立完成的产品探索与创意实践。",
        viewProject: "查看项目",
        backToSideProjects: "返回个人项目",
        sideProjectOverviewTitle: "项目概览",
        sideProjectRoleTitle: "我的角色",
        sideProjectResultTitle: "项目成果",
        sideProjectLearningTitle: "项目收获",
        sideProjectLearnedLabel: "我学到了什么",
        sideProjectSurprisedLabel: "让我意外的地方",
        sideProjectImproveLabel: "下一步我会改进什么",

        sideProject01Title: "AI 驱动的端到端产品开发与推广",
        sideProject01ShortDescription: "结合 AI 辅助产品开发、用户分析、内容创作与市场推广，完成端到端产品实践。",
        sideProject01Tags: "AI 产品 · 产品设计 · AI 辅助创作",
        sideProject01Tag1: "AI 产品",
        sideProject01Tag2: "产品设计",
        sideProject01Tag3: "AI 辅助创作",
        sideProject01Role: "端到端产品开发与 AI 辅助创作",
        sideProject01Overview1: "本项目依托人工智能技术搭建端到端产品开发与推广落地体系，解决传统产品迭代周期长、用户需求匹配度低、推广策略粗放、转化效率不可控等问题。",
        sideProject01Overview2: "结合用户数据挖掘、AI 内容分析与智能建模能力，完成从需求调研、产品功能设计、方案验证到市场化推广的全流程闭环搭建。",
        sideProject01Overview3: "通过数据分析用户画像、优化产品核心功能、迭代推广投放策略，实现产品精准定位与高效落地，有效提升产品迭代效率与市场推广转化效果。",
        sideProject01RoleText1: "我独立参与了整体产品开发与落地过程，涵盖产品概念构思、用户导向分析、产品功能设计、方案验证与推广规划。",
        sideProject01RoleText2: "同时，我使用 AI 工具辅助内容分析及宣传素材创作，包括宣传视频、海报和原创音乐，并参与移动端应用与桌面端平台的开发。",
        sideProject01ResultTitle: "AI 驱动的端到端产品",
        sideProject01ResultText: "完成了一个融合 AI 辅助产品开发、用户分析、内容创作与多平台落地的端到端产品方案。",
        sideProject01ResultAward: "该项目在专业评审中获得第一名。",
        sideProjectResultTag2: "端到端开发",
        sideProject01LearnedText: "我认识到，使用 AI 构建产品并不只是利用 AI 工具生成内容。用户需求、产品定位、数据分析和迭代验证同样重要，只有将这些环节结合起来，才能把一个想法转化为真正可用的产品。",
        sideProject01SurprisedText: "让我意外的是，AI 可以支持产品生命周期中的多个阶段，从内容创作、产品设计到推广，使产品原型制作和迭代的速度明显加快。",
        sideProject01ImproveText: "下一步我会进一步探索数据驱动的产品实验与用户反馈分析，并使用更系统的评估方法来优化产品决策、衡量不同推广策略的实际效果。",

        sideProject02Title: "Treasure Hunter",
        sideProject02ShortDescription: "使用 Python 和 Pygame 独立开发的单人游戏。",
        sideProject02Subtitle: "独立游戏开发",
        sideProject02Tags: "Python · Pygame · 游戏开发",
        sideProject02Tag1: "Python",
        sideProject02Tag2: "Pygame",
        sideProject02Tag3: "游戏开发",
        sideProject02Overview1: "Treasure Hunter 是一款使用 Python 和 Pygame 独立开发的单人游戏。",
        sideProject02Overview2: "该项目作为一次完整的游戏开发实践，覆盖了从概念构思到可运行游戏程序的核心玩法逻辑与实现。",
        sideProject02Role: "独立游戏开发者",
        sideProject02RoleText1: "我独立负责完整的开发过程，包括游戏玩法逻辑、玩家移动、宝藏收集、碰撞检测以及整体游戏实现。",
        sideProject02RoleText2: "通过这个项目，我练习了编程逻辑、交互系统设计、调试，以及完整可运行应用程序的开发。",
        sideProject02ResultTitle: "可运行的 Treasure Hunter 游戏",
        sideProject02ResultText: "完成了一款可运行的单人 Treasure Hunter 游戏，使用 Python 和 Pygame 实现了玩家移动、宝藏收集和碰撞检测等核心游戏机制。",
        sideProject02YoutubeLink: "YouTube — 项目演示",
        sideProject02GithubLink: "GitHub — Treasure Hunter",
        sideProject02LearnedText: "我学会了将游戏拆分为移动、碰撞检测、物品收集等更小的交互系统，再将这些系统整合成完整可玩的体验。",
        sideProject02SurprisedText: "让我意外的是，一个看似简单的游戏也需要许多细小的交互协同工作才能形成完整体验。调试这些交互也让我更好地理解了编程逻辑如何转化为用户体验。",
        sideProject02ImproveText: "下一步我会增加更多关卡、更丰富的游戏机制和更完善的用户界面，同时继续探索 Python 及其他交互技术在游戏开发中的应用。",

        sideProject03Title: "独立产品与 AI 广告创作",
        sideProject03ShortDescription: "围绕原创产品，串联产品设计、理念构建与推广广告创作的独立产品实践。",
        sideProject03Tags: "AI 产品 · 产品设计 · AI 辅助创作 · 广告创作",
        sideProject03Subtitle: "AI 产品 · 产品设计 · AI 辅助创作 · 广告创作",
        sideProject03Tag1: "AI 产品",
        sideProject03Tag2: "产品设计",
        sideProject03Tag3: "AI 辅助创作",
        sideProject03Tag4: "广告创作",
        sideProject03Overview: "本项目为自主发起的原创产品全案设计实践项目，围绕一款原创产品完整覆盖产品视觉图设计、产品核心理念构建、产品推广广告创作三大核心模块。",
        sideProject03Overview2: "项目以产品从0到1的全链路落地为目标，打通定位策略、视觉设计、传播推广的完整逻辑，最终打造一套定位清晰、视觉统一、具备市场传播力的产品完整方案。",
        sideProject03Role: "项目独立负责人",
        sideProject03RoleIntro: "项目独立负责人，全程主导所有环节的策划与执行。",
        sideProject03Role1: "负责产品定位与用户研究，提炼产品核心理念与差异化价值主张，搭建整体产品策略框架；",
        sideProject03Role2: "负责全套产品视觉图设计，包括产品主视图、细节拆解图、场景应用图等，把控产品质感与视觉风格；",
        sideProject03Role3: "负责产品推广广告的创意策划与视觉落地，针对不同传播渠道设计适配化的广告物料；",
        sideProject03Role4: "统筹全项目的风格一致性，确保产品理念、产品设计、推广表达三者口径统一、逻辑贯通。",
        sideProject03Result1Label: "视觉设计产出：",
        sideProject03Result1Text: "完成全套标准化产品设计图库，覆盖多维度展示视角，形成统一的产品视觉规范，可直接适配电商详情页、品牌手册、线下陈列等多场景使用；",
        sideProject03Result2Label: "策略体系产出：",
        sideProject03Result2Text: "形成完整的产品理念体系，确立了「功能价值+情感共鸣」双内核的产品主张，明确了产品的差异化市场定位与目标人群；",
        sideProject03Result3Label: "推广物料产出：",
        sideProject03Result3Text: "输出多套产品推广广告素材，包含主视觉海报、信息流广告、场景化推广图等类型，适配社交媒体、内容平台等不同传播渠道的内容特性；",
        sideProject03Result4Label: "方法沉淀：",
        sideProject03Result4Text: "总结出「策略锚定-设计落地-传播放大」的产品全案设计方法论，可复用至同类产品设计项目。",
        sideProject03VideoLink: "▶ 查看项目视频",
        sideProject03LearnedText1: "建立了全链路的产品思维：打破了“产品设计只做视觉”的认知，理解了前端策略定位、中端设计落地、后端传播推广三者环环相扣的关系，形成了完整的产品价值闭环思维；",
        sideProject03LearnedText2Label: "视觉一致性",
        sideProject03LearnedText2: "掌握了视觉一致性的打造逻辑：从产品本体的材质、色彩，到推广广告的叙事、风格，通过统一的设计语言能够打造连贯且有记忆点的产品品牌形象；",
        sideProject03LearnedText3Label: "用户导向设计",
        sideProject03LearnedText3: "深化了用户导向的设计原则：无论是产品理念提炼还是广告创意设计，都需要锚定目标用户的真实使用场景与情感需求，而非单纯追求视觉形式的美观；",
        sideProject03LearnedText4Label: "独立项目统筹",
        sideProject03LearnedText4: "提升了独立项目的统筹能力：从零到一主导完整项目，学会了合理规划项目节奏，平衡策略性与落地性，保障项目按预期完整交付。",

        myJourney:
            "我的旅程",


        sideProjectsTitle:
            "个人探索",

        sideProjectsSubtitle:
            "产品 · 游戏 · 实验",

        treasureHunter:
            "🎮 Treasure Hunter · Python / Pygame",


        keepInTouch:
            "联系我",

        letsConnect:
            "期待与你交流。",

        contactDescription:
            "如果你对 AI、数据、产品，或有趣的项目感兴趣，欢迎与我联系。",


        email:
            "邮箱",

        linkedin:
            "LinkedIn",

        github:
            "GitHub",

        resume:
            "简历",


        footerName:
            "Your Name · 我的职业岛"

    }

};


/* ==================================================
   LANGUAGE SWITCHING
   ================================================== */

const languageButtons =
    document.querySelectorAll(".language-button");


const translatableElements =
    document.querySelectorAll("[data-i18n]");


function setLanguage(language) {

    /*
       Make sure the requested language exists.
       If not, fall back to English.
    */

    if (!translations[language]) {
        language = "en";
    }


    /*
       Replace all translatable text.
    */

    translatableElements.forEach((element) => {

        const translationKey =
            element.dataset.i18n;

        const translatedText =
            translations[language][translationKey];

        if (translatedText) {
            element.textContent = translatedText;
        }

    });


    /*
       Update the active language button.
    */

    languageButtons.forEach((button) => {

        const isActive =
            button.dataset.language === language;

        button.classList.toggle(
            "active",
            isActive
        );

    });


    /*
       Update the HTML language attribute.
       This helps browsers and screen readers
       understand the current language.
    */

    document.documentElement.lang =
        language === "zh" ? "zh-CN" : "en";


    /*
       Remember the user's language choice.
    */

    localStorage.setItem(
        "preferredLanguage",
        language
    );

}


/* ==================================================
   LANGUAGE BUTTON EVENTS
   ================================================== */

languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedLanguage =
            button.dataset.language;

        setLanguage(selectedLanguage);

    });

});


/* ==================================================
   INITIAL LANGUAGE
   ================================================== */

/*
   Check whether the user has previously
   selected a language.

   If not, English is used by default.
*/

const savedLanguage =
    localStorage.getItem("preferredLanguage");


setLanguage(
    savedLanguage || "en"
);

/* ==================================================
   AI LAB PROJECT DETAIL TRANSLATIONS
   ================================================== */

Object.assign(translations.en, {

    siteTitle: "CAREER ISLAND",

    backToAiLab: "Back to AI Lab",

    caseStudyEyebrow: "AI LAB · PROJECT",

    caseStudyTitle:
        "Uber User Feedback Multi-class Classification",

    caseStudySubtitle:
        "NLP · Machine Learning · Python",

    sectionLabel:
        "PROJECT",

    projectOverviewTitle:
        "Project Overview",

    overviewIntro:
        "This project built a multi-class user feedback classification system for large-scale Uber user review data, enabling automated intent recognition across five categories such as complaints, suggestions, and praise.",

    overviewApproach:
        "The project used large-scale real-world user review text data and involved text cleaning, preprocessing, TF-IDF + Word N-gram feature engineering, and a GBT-based multi-class classification model.",

    myContributionTitle:
        "My Contribution",

    contributionBullet1:
        "Participated in model development and evaluation.",

    contributionBullet2:
        "Built the GBT classification model using TF-IDF features.",

    contributionBullet3:
        "Participated in text preprocessing and feature engineering.",

    contributionBullet4:
        "Evaluated model performance using Macro F1.",

    resultsTitle:
        "Results",

    macroF1Label:
        "Macro F1 Score",

    vsLightgbm:
        "compared with the LightGBM baseline",

    resultsExplanation:
        "The model improved performance by 12% compared with the LightGBM baseline.",

    projectNotebookLabel:
        "Project Notebook",

    projectNotebookDescription:
        "Open the project notebook in Google Colab.",

    viewColabNotebook:
        "Google Colab →",

    whatLearnedTitle:
        "What I Learned",

    whatLearnedLabel:
        "What I learned",

    whatLearnedText:
        "Feature engineering and data quality can be more important than algorithm selection for text classification. Proper baseline setup and objective metrics such as Macro F1 help evaluate model performance reliably.",

    whatSurprisedLabel:
        "What surprised me",

    whatSurprisedText:
        "Combining TF-IDF with Word N-gram brought greater performance gains than simply switching models. Small changes in feature engineering can significantly affect model performance.",

    whatImproveLabel:
        "What I would improve next",

    whatImproveText:
        "Explore pre-trained language models for better semantic understanding, and analyze misclassified samples more deeply to improve the dataset and model."

});


Object.assign(translations.en, {

    paperTitle:
        "LLM-based Academic Paper Evaluation",

    paperTech:
        "Transformers · ROUGE",

    paperCaseStudyEyebrow:
        "AI / ML PROJECT",

    paperCaseStudyTitle:
        "LLM-based Academic Paper Evaluation",

    paperCaseStudySubtitle:
        "LLM · NLP · Prompt Engineering",

    paperOverviewTitle:
        "Project Overview",

    paperOverviewIntro:
        "This project developed an LLM-based academic paper evaluation system to address the low efficiency, subjectivity, and high cost of traditional manual paper review.",

    paperOverviewApproach:
        "Based on an open-source academic paper dataset, the project structured and processed paper abstracts, main texts, and keywords, while applying prompt engineering and model fine-tuning to adapt LLMs to the academic evaluation scenario.",

    paperOverviewEvaluation:
        "The system evaluates papers across multiple dimensions, including originality, completeness, logical coherence, and academic value, and generates standardized scores and evaluations.",

    paperOverviewComparison:
        "The project also compared the LLM-based approach with traditional text-based models to explore its effectiveness and generalization in automated academic assessment.",

    paperRoleTitle:
        "My Role",

    paperRoleSubtitle:
        "Team Leader · Project Coordination",

    paperRoleIntro:
        "As the team leader, I was responsible for organizing the project workflow, coordinating team members, and facilitating the development of the LLM-based academic paper evaluation system.",

    paperRoleDetails:
        "I helped coordinate the implementation of different project components and ensured that the final work was integrated into a complete evaluation system.",

    paperRoleFocusLabel:
        "TEAM ROLE",

    paperRoleFocusRole:
        "Team Leader",

    paperRoleFocusLabel2:
        "FOCUS",

    paperRoleFocus:
        "Project Coordination · System Development · LLM Application",

    paperResultsTitle:
        "Result",

    paperResultLabel:
        "Result",

    paperResultHeadline:
        "LLM-based Academic Paper Evaluation System",

    paperResultText:
        "Developed a complete prototype system for automated academic paper evaluation, supporting multi-dimensional assessment and standardized evaluation output.",

    paperResultItem1Title:
        "Automated Evaluation",

    paperResultItem1Text:
        "Automated assessment of academic papers",

    paperResultItem2Title:
        "Multi-dimensional Scoring",

    paperResultItem2Text:
        "Evaluation across multiple academic dimensions",

    paperResultItem3Title:
        "System Prototype",

    paperResultItem3Text:
        "Integrated the project into a complete working system",

    paperGithubLabel:
        "Project Link",

    paperGithubDescription:
        "View the project repository on GitHub.",

    viewGithub:
        "GitHub →",

    paperLearningTitle:
        "What I've Learned",

    paperWhatLearnedLabel:
        "What I've learned",

    paperWhatLearnedText:
        "I learned that building an LLM application requires more than simply selecting a powerful model. Data structure, prompt design, evaluation criteria, and system integration all have a significant impact on the final application.",

    paperWhatSurprisedLabel:
        "What surprised me",

    paperWhatSurprisedText:
        "I was surprised by how much prompt design and task formulation can influence the consistency and usefulness of LLM-generated evaluations.",

    paperWhatImproveLabel:
        "What I would improve next",

    paperWhatImproveText:
        "Next, I would explore more systematic evaluation methods and experiment with different prompting and fine-tuning strategies to improve the reliability and consistency of automated academic assessment."

});


Object.assign(translations.zh, {

    siteTitle:
        "职业岛",

    backToAiLab:
        "返回 AI 实验室",

    caseStudyEyebrow:
        "AI 实验室 · 项目",

    caseStudyTitle:
        "Uber 用户反馈文本多分类",

    caseStudySubtitle:
        "NLP · 机器学习 · Python",

    sectionLabel:
        "项目",

    projectOverviewTitle:
        "项目概览",

    overviewIntro:
        "该项目构建了一个面向大规模 Uber 用户评论数据的多分类用户反馈系统，实现对投诉、建议、表扬等五类意图的自动识别。",

    overviewApproach:
        "项目使用大规模真实用户评论文本数据，涉及文本清洗与预处理、TF-IDF + Word N-gram 特征工程，以及基于 GBT 的多分类模型。",

    myContributionTitle:
        "我的贡献",

    contributionBullet1:
        "参与模型开发与评估。",

    contributionBullet2:
        "使用 TF-IDF 特征构建 GBT 分类模型。",

    contributionBullet3:
        "参与文本预处理与特征工程。",

    contributionBullet4:
        "使用 Macro F1 评估模型表现。",

    resultsTitle:
        "项目结果",

    macroF1Label:
        "Macro F1 分数",

    vsLightgbm:
        "相比 LightGBM 基线模型",

    resultsExplanation:
        "模型表现较 LightGBM 基线模型提升了 12%。",

    projectNotebookLabel:
        "项目 Notebook",

    projectNotebookDescription:
        "在 Google Colab 中打开项目 Notebook。",

    viewColabNotebook:
        "Google Colab →",

    whatLearnedTitle:
        "我的收获",

    whatLearnedLabel:
        "我学到了什么",

    whatLearnedText:
        "在文本分类中，特征工程与数据质量可能比算法选择更加重要。合理设置基线，以及使用 Macro F1 等客观指标，有助于更可靠地评估模型表现。",

    whatSurprisedLabel:
        "最让我意外的是",

    whatSurprisedText:
        "将 TF-IDF 与 Word N-gram 结合起来所带来的性能提升，比单纯更换模型更加明显。特征工程上的小幅调整，也可能显著影响模型表现。",

    whatImproveLabel:
        "下一步改进",

    whatImproveText:
        "探索预训练语言模型，以获得更好的语义理解，并进一步分析误分类样本，从而改进数据集与模型。"

});

Object.assign(translations.zh, {

    paperTitle:
        "基于 LLM 的学术论文评估",

    paperTech:
        "Transformers · ROUGE",

    paperCaseStudyEyebrow:
        "AI / ML 项目",

    paperCaseStudyTitle:
        "基于 LLM 的学术论文评估",

    paperCaseStudySubtitle:
        "LLM · NLP · Prompt Engineering",

    paperOverviewTitle:
        "项目概览",

    paperOverviewIntro:
        "该项目开发了一个基于 LLM 的学术论文评估系统，用于解决传统人工论文评审效率低、主观性强以及成本高等问题。",

    paperOverviewApproach:
        "项目基于开源学术论文数据集，对论文摘要、正文和关键词进行结构化处理，并结合提示词工程与模型微调，使 LLM 适应学术论文评估场景。",

    paperOverviewEvaluation:
        "系统从原创性、完整性、逻辑连贯性和学术价值等多个维度对论文进行评估，并生成标准化的评分与评价结果。",

    paperOverviewComparison:
        "项目还将基于 LLM 的方法与传统文本模型进行了对比，以探索其在自动化学术评估中的有效性与泛化能力。",

    paperRoleTitle:
        "我的角色",

    paperRoleSubtitle:
        "团队负责人 · 项目协调",

    paperRoleIntro:
        "作为团队负责人，我负责组织项目流程、协调团队成员，并推动基于 LLM 的学术论文评估系统的开发。",

    paperRoleDetails:
        "我协调整合不同项目模块的实现，并确保最终工作整合为一个完整的评估系统。",

    paperRoleFocusLabel:
        "团队角色",

    paperRoleFocusRole:
        "团队负责人",

    paperRoleFocusLabel2:
        "重点",

    paperRoleFocus:
        "项目协调 · 系统开发 · LLM 应用",

    paperResultsTitle:
        "项目结果",

    paperResultLabel:
        "项目结果",

    paperResultHeadline:
        "基于 LLM 的学术论文评估系统",

    paperResultText:
        "完成了一个用于自动化学术论文评估的完整原型系统，支持多维度评估与标准化评价输出。",

    paperResultItem1Title:
        "自动化评估",

    paperResultItem1Text:
        "自动完成学术论文评估",

    paperResultItem2Title:
        "多维度评分",

    paperResultItem2Text:
        "从多个学术维度进行评估",

    paperResultItem3Title:
        "系统原型",

    paperResultItem3Text:
        "将项目整合为完整的工作系统",

    paperGithubLabel:
        "项目链接",

    paperGithubDescription:
        "在 GitHub 上查看项目代码仓库。",

    viewGithub:
        "GitHub →",

    paperLearningTitle:
        "我的收获",

    paperWhatLearnedLabel:
        "我学到了什么",

    paperWhatLearnedText:
        "我了解到，构建一个 LLM 应用不仅仅是选择一个强大的模型。数据结构、提示词设计、评估标准以及系统整合都会对最终应用产生重要影响。",

    paperWhatSurprisedLabel:
        "最让我意外的是",

    paperWhatSurprisedText:
        "我意外地发现，提示词设计和任务定义方式会显著影响 LLM 生成评估结果的一致性与实用性。",

    paperWhatImproveLabel:
        "下一步改进",

    paperWhatImproveText:
        "下一步我会探索更加系统的评估方法，并尝试不同的提示词设计与模型微调策略，以提高自动化学术评估的可靠性与一致性。"

});


Object.assign(translations.en, {
    fakeNewsTitle: "Fake News Detection",
    fakeNewsTech: "NLP · Classification",
    vitTitle: "Lightweight ViT Object Detection Research",
    vitTech: "ViT · Computer Vision",

    project04Eyebrow: "AI / ML PROJECT",
    project04Title: "Fake News Detection",
    project04Subtitle: "NLP · Text Classification · Machine Learning",
    project04OverviewTitle: "Project Overview",
    project04OverviewText: "This project developed a fake news detection model to address the challenges of massive online news content, the rapid spread of misinformation, the high cost of manual verification, and the subjectivity of credibility assessment.",
    project04OverviewText2: "Based on a large-scale news text dataset, the project performed data cleaning, noise removal, and text preprocessing, followed by the construction of a text feature system. Traditional machine learning and deep learning-based text classification models were compared to identify an effective modeling approach for binary classification of real and fake news.",
    project04OverviewText3: "The project ultimately developed an automated detection solution to improve the efficiency of identifying misleading online content and provide intelligent support for content moderation, information verification, and online risk management.",
    project04RoleTitle: "My Role",
    project04RoleSubtitle: "Team Leader · EDA & Project Coordination",
    project04RoleText: "As the team leader, I was responsible for coordinating the overall project workflow, organizing task allocation, following up on project progress, and facilitating communication between team members to ensure the different project components were integrated into the final detection system.",
    project04RoleText2: "I was also responsible for exploratory data analysis and visualization. Using box plots, word clouds, heatmaps, and other visualizations, I explored differences between real and fake news and identified textual characteristics such as shorter text length and a higher frequency of exclamation marks in fake news.",
    project04RoleText3: "In addition, I contributed to NLP-based text preprocessing and feature engineering, including text cleaning and noise reduction, helping prepare the data for subsequent model development. I summarized the EDA findings and produced analytical reports to support the team's modeling decisions.",
    project04ResultsTitle: "Result",
    project04ResultLabel: "Result",
    project04ResultHeadline: "Fake News Detection System",
    project04ResultText: "Developed a fake news detection system for automated binary classification of real and fake news, integrating text preprocessing, feature engineering, exploratory analysis, and machine learning/deep learning-based modeling.",
    project04Tag1: "Text Classification",
    project04Tag2: "Fake News Detection",
    project04Tag3: "NLP Application",
    projectLinkLabel: "Project Link",
    project04LinkDescription: "GitHub — 525 Group Project",
    project04GithubLink: "GitHub — 525 Group Project",
    comingSoon: "Coming Soon",
    project04LearningTitle: "What I've Learned",
    project04WhatLearnedLabel: "What I've learned",
    project04WhatLearnedText: "I learned that effective text classification depends not only on model selection, but also on data quality, preprocessing, and feature engineering. Careful EDA helped us better understand the characteristics of different types of news and provided a foundation for subsequent modeling.",
    project04WhatSurprisedLabel: "What surprised me",
    project04WhatSurprisedText: "I was surprised by how much simple textual characteristics could reveal meaningful differences between real and fake news. Visualization made these patterns much easier to identify and communicate within the team.",
    project04WhatImproveLabel: "What I would improve next",
    project04WhatImproveText: "I would explore more advanced NLP and LLM-based approaches to better capture the semantic and contextual information of news articles. I would also further investigate model interpretability to make the detection results easier to understand and evaluate.",

    project05Eyebrow: "AI / ML PROJECT",
    project05Title: "Lightweight ViT Object Detection Research",
    project05Subtitle: "ViT · Computer Vision",
    project05OverviewTitle: "Project Overview",
    project05OverviewText: "This project focused on addressing the challenges of traditional object detection models, including large model size, slow inference speed, high deployment costs on embedded devices, and the difficulty of balancing detection accuracy with efficiency.",
    project05OverviewText2: "Based on a lightweight Vision Transformer (ViT) architecture, the project developed an efficient object detection model for edge-side deployment. The Vision Transformer architecture was optimized through structural pruning, parameter reduction, and feature fusion improvements to reduce computational cost and model complexity.",
    project05OverviewText3: "The project also incorporated dataset augmentation, hyperparameter tuning, and comparative experiments to improve model performance. The final approach aimed to maintain strong detection accuracy while improving inference efficiency, making it suitable for real-time object detection on mobile and embedded devices.",
    project05RoleTitle: "My Role",
    project05RoleSubtitle: "Data Preparation & Lightweight ViT Architecture Research",
    project05RoleText: "I was responsible for dataset cleaning, annotation verification, and data augmentation to improve sample quality and distribution, helping enhance training stability and model generalization.",
    project05RoleText2: "I also studied the structure of lightweight Vision Transformer backbones and contributed to simplifying and modifying traditional Transformer modules to reduce the number of model parameters and computational overhead.",
    project05ResultsTitle: "Result",
    project05ResultLabel: "Result",
    project05ResultHeadline: "Lightweight ViT Object Detection Model",
    project05ResultText: "The project applied knowledge distillation, iterative pruning, INT8 quantization, and TensorRT optimization to improve the efficiency of the lightweight object detection model. On the COCO-80 dataset, the best-performing model achieved an mAP@0.5 of 0.752. INT8 quantization reduced the model size from 22.1 MB to 5.8 MB, representing a 74% reduction in model size. After the combined optimization, overall inference speed increased by 5.5×, with an inference latency of 8 ms. The optimized model maintained strong detection accuracy with only a small decrease in overall precision, meeting the requirements for real-time object detection on edge devices.",
    project05Metric1Value: "0.752",
    project05Metric1Label: "mAP@0.5",
    project05Metric2Value: "74%",
    project05Metric2Label: "Model Size Reduction",
    project05Metric2Detail: "22.1 MB → 5.8 MB",
    project05Metric3Value: "5.5×",
    project05Metric3Label: "Inference Speed",
    project05Metric4Value: "8 ms",
    project05Metric4Label: "Inference Latency",
    project05Tag1: "Lightweight ViT",
    project05Tag2: "Object Detection",
    project05Tag3: "Edge AI",
    project05LinkDescription: "GitHub — Lightweight ViT Detection",
    project05GithubLink: "GitHub — Lightweight ViT Detection",
    project05LearningTitle: "What I've Learned",
    project05WhatLearnedLabel: "What I've learned",
    project05WhatLearnedText: "I learned that building an efficient computer vision model requires balancing accuracy, model complexity, and inference efficiency rather than optimizing for accuracy alone. Dataset quality and augmentation also play an important role in improving model stability and generalization.",
    project05WhatSurprisedLabel: "What surprised me",
    project05WhatSurprisedText: "I was surprised by how much the architecture of a Vision Transformer can be simplified while still maintaining useful representation capabilities. Small structural changes can have a meaningful impact on computational cost and deployment efficiency.",
    project05WhatImproveLabel: "What I would improve next",
    project05WhatImproveText: "I would further explore more efficient attention mechanisms and lightweight model architectures, while conducting more systematic experiments on accuracy, inference speed, and model size across different edge devices."
});

Object.assign(translations.zh, {
    fakeNewsTitle: "虚假新闻检测",
    fakeNewsTech: "NLP · 文本分类",
    vitTitle: "轻量级 ViT 目标检测研究",
    vitTech: "ViT · 计算机视觉",

    project04Eyebrow: "AI / ML 项目",
    project04Title: "虚假新闻检测",
    project04Subtitle: "NLP · 文本分类 · 机器学习",
    project04OverviewTitle: "项目概览",
    project04OverviewText: "本项目针对海量在线新闻内容、虚假信息快速传播、人工核验成本高以及可信度判断存在主观性等问题，构建了虚假新闻检测模型。",
    project04OverviewText2: "基于大规模新闻文本数据集，项目完成了数据清洗、噪声去除和文本预处理，并构建文本特征体系。同时对比传统机器学习和基于深度学习的文本分类模型，以寻找适用于真实新闻与虚假新闻二分类的有效建模方法。",
    project04OverviewText3: "项目最终构建了自动化检测方案，提高误导性在线内容的识别效率，并为内容审核、信息核验和在线风险管理提供智能化辅助。",
    project04RoleTitle: "我的角色",
    project04RoleSubtitle: "团队负责人 · EDA 与项目协调",
    project04RoleText: "作为团队负责人，我负责协调整体项目流程、组织任务分配、跟进项目进度，并促进团队成员之间的沟通，确保不同项目模块最终整合到完整的检测系统中。",
    project04RoleText2: "我还负责探索性数据分析与可视化。通过箱线图、词云、热力图等可视化方法，我分析真实新闻与虚假新闻之间的差异，并识别出虚假新闻中较短文本长度以及更高感叹号频率等文本特征。",
    project04RoleText3: "此外，我参与了基于 NLP 的文本预处理和特征工程，包括文本清洗与噪声降低，为后续模型开发准备数据。我总结了 EDA 分析结果并制作分析报告，为团队的建模决策提供支持。",
    project04ResultsTitle: "项目结果",
    project04ResultLabel: "项目结果",
    project04ResultHeadline: "虚假新闻检测系统",
    project04ResultText: "构建了用于真实新闻与虚假新闻自动二分类的虚假新闻检测系统，整合文本预处理、特征工程、探索性分析以及机器学习/深度学习文本建模方法。",
    project04Tag1: "虚假新闻检测",
    project04Tag2: "文本分类",
    project04Tag3: "NLP 应用",
    projectLinkLabel: "项目链接",
    project04LinkDescription: "GitHub — 525 Group Project",
    project04GithubLink: "GitHub — 525 Group Project",
    project04LearningTitle: "我的收获",
    project04WhatLearnedLabel: "我学到了什么",
    project04WhatLearnedText: "我了解到，有效的文本分类不仅取决于模型选择，也取决于数据质量、预处理和特征工程。细致的 EDA 帮助我们更好地理解不同新闻类型的特征，并为后续建模提供基础。",
    project04WhatSurprisedLabel: "最让我意外的是",
    project04WhatSurprisedText: "我意外地发现，一些简单的文本特征也能够揭示真实新闻与虚假新闻之间有意义的差异。可视化让这些规律更容易被识别，也更方便在团队中进行沟通。",
    project04WhatImproveLabel: "下一步改进",
    project04WhatImproveText: "下一步我会探索更先进的 NLP 和基于 LLM 的方法，以更好地捕捉新闻文章的语义和上下文信息。同时，我也会进一步研究模型可解释性，让检测结果更容易理解和评估。",

    project05Eyebrow: "AI / ML 项目",
    project05Title: "轻量级 ViT 目标检测研究",
    project05Subtitle: "ViT · 计算机视觉",
    project05OverviewTitle: "项目概览",
    project05OverviewText: "本项目聚焦于解决传统目标检测模型存在的模型规模大、推理速度慢、嵌入式设备部署成本高，以及检测精度与效率难以平衡等问题。",
    project05OverviewText2: "基于轻量级 Vision Transformer（ViT）架构，项目开发了面向边缘侧部署的高效目标检测模型。通过结构化剪枝、参数量削减和特征融合改进，对 Vision Transformer 架构进行优化，以降低计算成本和模型复杂度。",
    project05OverviewText3: "项目还结合数据集增强、超参数调优和对比实验来提升模型性能。最终方案旨在保持较强检测精度的同时提高推理效率，使其适用于移动设备和嵌入式设备上的实时目标检测。",
    project05RoleTitle: "我的角色",
    project05RoleSubtitle: "数据准备与轻量级 ViT 架构研究",
    project05RoleText: "我负责数据集清洗、标注核验和数据增强，以改善样本质量与分布，并帮助提升训练稳定性和模型泛化能力。",
    project05RoleText2: "我还研究了轻量级 Vision Transformer 主干网络的结构，并参与简化和修改传统 Transformer 模块，以减少模型参数量和计算开销。",
    project05ResultsTitle: "项目结果",
    project05ResultLabel: "项目结果",
    project05ResultHeadline: "轻量级 ViT 目标检测模型",
    project05ResultText: "项目采用知识蒸馏、迭代剪枝、INT8 量化和 TensorRT 优化来提升轻量级目标检测模型的效率。在 COCO-80 数据集上，表现最佳的模型达到 0.752 的 mAP@0.5。INT8 量化将模型大小从 22.1 MB 降至 5.8 MB，模型大小减少 74%。综合优化后，整体推理速度提升 5.5 倍，推理延迟达到 8 ms。优化后的模型在仅有小幅整体精度下降的情况下保持了较强的检测能力，满足边缘设备实时目标检测的要求。",
    project05Metric1Value: "0.752",
    project05Metric1Label: "mAP@0.5",
    project05Metric2Value: "74%",
    project05Metric2Label: "模型大小减少",
    project05Metric2Detail: "22.1 MB → 5.8 MB",
    project05Metric3Value: "5.5×",
    project05Metric3Label: "推理速度",
    project05Metric4Value: "8 ms",
    project05Metric4Label: "推理延迟",
    project05Tag1: "轻量级 ViT",
    project05Tag2: "目标检测",
    project05Tag3: "边缘 AI",
    project05LinkDescription: "GitHub — Lightweight ViT Detection",
    project05GithubLink: "GitHub — Lightweight ViT Detection",
    project05LearningTitle: "我的收获",
    project05WhatLearnedLabel: "我学到了什么",
    project05WhatLearnedText: "我了解到，构建高效的计算机视觉模型需要在精度、模型复杂度和推理效率之间进行平衡，而不能只追求精度。数据集质量和数据增强也对提升模型稳定性与泛化能力发挥重要作用。",
    project05WhatSurprisedLabel: "最让我意外的是",
    project05WhatSurprisedText: "我意外地发现，Vision Transformer 的架构可以在保持有用表征能力的同时进行较大程度的简化。细小的结构调整也可能对计算成本和部署效率产生明显影响。",
    project05WhatImproveLabel: "下一步改进",
    project05WhatImproveText: "下一步我会进一步探索更高效的注意力机制和轻量级模型架构，并在不同边缘设备上针对准确率、推理速度和模型大小开展更加系统的实验。"
});

/*
   Run the language setup again after adding the
   project-detail translations so the saved language
   also applies to the modal content.
*/

setLanguage(savedLanguage || "en");


/* ==================================================
   AI LAB → PROJECT DIRECTORY → PROJECT DETAIL
   ================================================== */

const aiLabBuilding =
    document.querySelector(".ai-lab");

const aiLabModal =
    document.getElementById("aiLabModal");

const projectModals = {
    uber: document.getElementById("uberCaseStudyModal"),
    fraud: document.getElementById("fraudCaseStudyModal"),
    paper: document.getElementById("paperCaseStudyModal"),
    "project-04": document.getElementById("project04CaseStudyModal"),
    "project-05": document.getElementById("project05CaseStudyModal")
};

const projectCards =
    document.querySelectorAll(".ai-project-card-clickable");

function openAiLab() {

    if (!aiLabModal) {
        return;
    }

    aiLabModal.classList.add("is-open");

    aiLabModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("modal-open");

}

function closeAiLab() {

    if (!aiLabModal) {
        return;
    }

    aiLabModal.classList.remove("is-open");

    aiLabModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("modal-open");

}

function openProject(projectKey) {

    const projectModal = projectModals[projectKey];

    if (!projectModal) {
        return;
    }

    /*
       The AI LAB directory is the parent view.
       Hide it temporarily while the selected child
       detail view is open.
    */
    closeAiLab();

    projectModal.classList.add("is-open");

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("modal-open");

}

function closeProject(projectKey, returnToDirectory = true) {

    const projectModal = projectModals[projectKey];

    if (!projectModal) {
        return;
    }

    projectModal.classList.remove("is-open");

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    if (returnToDirectory) {
        openAiLab();
    } else {
        document.body.classList.remove("modal-open");
    }

}

/* Open the AI LAB project directory from the island. */
if (aiLabBuilding) {
    aiLabBuilding.addEventListener("click", openAiLab);
}

/* Close the AI LAB directory itself. */
if (aiLabModal) {
    aiLabModal
        .querySelectorAll("[data-close-ai-lab]")
        .forEach((button) => {
            button.addEventListener("click", closeAiLab);
        });
}

/*
   Every clickable project has its own data-project key.
   The key selects the matching detail modal above, so
   project 01 cannot accidentally open project 03/02/etc.
*/
projectCards.forEach((card) => {

    card.addEventListener("click", () => {

        const projectKey = card.dataset.project;

        openProject(projectKey);

    });

});

/*
   Existing detail-page close/back controls are preserved.
   Closing a detail page returns to the AI LAB directory.
*/

[
    ["uber", "[data-close-case-study]", "[data-back-to-ai-from-case-study]"],
    ["fraud", "[data-close-fraud-case-study]", "[data-back-to-ai-from-fraud-case-study]"],
    ["paper", "[data-close-paper-case-study]", "[data-back-to-ai-from-paper-case-study]"],
    ["project-04", "[data-close-project-04]", "[data-back-to-ai-from-project-04]"],
    ["project-05", "[data-close-project-05]", "[data-back-to-ai-from-project-05]"]
].forEach(([projectKey, closeSelector, backSelector]) => {

    const projectModal = projectModals[projectKey];

    if (!projectModal) {
        return;
    }

    projectModal
        .querySelectorAll(closeSelector)
        .forEach((button) => {
            button.addEventListener("click", () => {
                closeProject(projectKey);
            });
        });

    projectModal
        .querySelectorAll(backSelector)
        .forEach((button) => {
            button.addEventListener("click", () => {
                closeProject(projectKey);
            });
        });

});

/* ==================================================
   KEYBOARD CLOSE
   ================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key !== "Escape") {
        return;
    }

    if (
        experienceModal &&
        experienceModal.classList.contains("is-open")
    ) {
        closeExperience();
        return;
    }

    const openProjectEntry =
        Object.entries(projectModals).find(
            ([, modal]) =>
                modal && modal.classList.contains("is-open")
        );

    if (openProjectEntry) {
        closeProject(openProjectEntry[0]);
        return;
    }

    if (
        aiLabModal &&
        aiLabModal.classList.contains("is-open")
    ) {
        closeAiLab();
    }

});



/* ==================================================
   EXPERIENCE PAGE
   ================================================== */

const experienceBuilding =
    document.querySelector(".experience-house");

const experienceModal =
    document.getElementById("experienceModal");

function openExperience() {

    if (!experienceModal) {
        return;
    }

    experienceModal.classList.add("is-open");
    experienceModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("experience-page-open");

}

function closeExperience() {

    if (!experienceModal) {
        return;
    }

    experienceModal.classList.remove("is-open");
    experienceModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("experience-page-open");

}

if (experienceBuilding) {
    experienceBuilding.addEventListener("click", openExperience);
}

if (experienceModal) {
    experienceModal
        .querySelectorAll("[data-close-experience]")
        .forEach((button) => {
            button.addEventListener("click", closeExperience);
        });
}




/* ==================================================
   SIDE PROJECTS PAGE
   ================================================== */

const sideProjectsTrigger =
    document.querySelector(".side-projects-trigger, .side-projects");

const sideProjectsModal =
    document.getElementById("sideProjectsModal");

const sideProjectModals = {
    "side-project-01": document.getElementById("sideProject01Modal"),
    "side-project-02": document.getElementById("sideProject02Modal"),
    "side-project-03": document.getElementById("sideProject03Modal")
};

function openSideProjects() {
    if (!sideProjectsModal) {
        return;
    }

    sideProjectsModal.classList.add("is-open");
    sideProjectsModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("side-projects-page-open");
}

function closeSideProjects() {
    Object.values(sideProjectModals).forEach((modal) => {
        if (modal) {
            modal.classList.remove("is-open");
            modal.setAttribute("aria-hidden", "true");
        }
    });

    if (!sideProjectsModal) {
        return;
    }

    sideProjectsModal.classList.remove("is-open");
    sideProjectsModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("side-projects-page-open");
}

function openSideProject(projectKey) {
    const projectModal = sideProjectModals[projectKey];

    if (!projectModal || !sideProjectsModal) {
        return;
    }

    sideProjectsModal.classList.add("is-open");
    sideProjectsModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("side-projects-page-open");

    Object.entries(sideProjectModals).forEach(([key, modal]) => {
        if (!modal) {
            return;
        }

        const isTarget = key === projectKey;
        modal.classList.toggle("is-open", isTarget);
        modal.setAttribute("aria-hidden", isTarget ? "false" : "true");
    });
}

function closeSideProject(projectKey, returnToDirectory = true) {
    const projectModal = sideProjectModals[projectKey];

    if (projectModal) {
        projectModal.classList.remove("is-open");
        projectModal.setAttribute("aria-hidden", "true");
    }

    if (returnToDirectory) {
        openSideProjects();
        return;
    }

    closeSideProjects();
}

if (sideProjectsTrigger) {
    sideProjectsTrigger.addEventListener("click", openSideProjects);

    sideProjectsTrigger.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openSideProjects();
        }
    });
}

if (sideProjectsModal) {
    sideProjectsModal
        .querySelectorAll("[data-close-side-projects]")
        .forEach((button) => {
            button.addEventListener("click", closeSideProjects);
        });

    sideProjectsModal
        .querySelectorAll("[data-side-project]")
        .forEach((card) => {
            card.addEventListener("click", () => {
                openSideProject(card.dataset.sideProject);
            });
        });
}

[
    ["side-project-01", "[data-close-side-project-01]", "[data-back-to-side-projects-01]"],
    ["side-project-02", "[data-close-side-project-02]", "[data-back-to-side-projects-02]"],
    ["side-project-03", "[data-close-side-project-03]", "[data-back-to-side-projects-03]"]
].forEach(([projectKey, closeSelector, backSelector]) => {
    const projectModal = sideProjectModals[projectKey];

    if (!projectModal) {
        return;
    }

    projectModal
        .querySelectorAll(closeSelector)
        .forEach((button) => {
            button.addEventListener("click", () => {
                closeSideProject(projectKey, false);
            });
        });

    projectModal
        .querySelectorAll(backSelector)
        .forEach((button) => {
            button.addEventListener("click", () => {
                closeSideProject(projectKey, true);
            });
        });
});

/* Side Projects Escape handling is isolated from the existing AI logic. */
document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
        return;
    }

    const openSideProjectEntry =
        Object.entries(sideProjectModals).find(
            ([, modal]) =>
                modal && modal.classList.contains("is-open")
        );

    if (openSideProjectEntry) {
        closeSideProject(openSideProjectEntry[0], true);
        return;
    }

    if (
        sideProjectsModal &&
        sideProjectsModal.classList.contains("is-open")
    ) {
        closeSideProjects();
    }
});


/* ==================================================
   ABOUT ME PAGE — ISOLATED LOGIC
   ================================================== */

const aboutMeBuilding =
    document.querySelector(".about-house");

const aboutMeModal =
    document.getElementById("aboutMeModal");

function openAboutMe() {
    if (!aboutMeModal) {
        return;
    }

    aboutMeModal.classList.add("is-open");
    aboutMeModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("about-me-page-open");
}

function closeAboutMe() {
    if (!aboutMeModal) {
        return;
    }

    aboutMeModal.classList.remove("is-open");
    aboutMeModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("about-me-page-open");
}

if (aboutMeBuilding) {
    aboutMeBuilding.addEventListener("click", openAboutMe);
}

if (aboutMeModal) {
    aboutMeModal
        .querySelectorAll("[data-close-about-me]")
        .forEach((button) => {
            button.addEventListener("click", closeAboutMe);
        });
}

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
        return;
    }

    if (
        aboutMeModal &&
        aboutMeModal.classList.contains("is-open")
    ) {
        closeAboutMe();
    }
});
