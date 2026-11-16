// content.js — every word on the site lives here.
// Edit text in CONTENT.en / CONTENT.ja; URLs shared by both languages are in LINKS.

const LINKS = {
  linkedin:  "https://www.linkedin.com/in/pratyush-mohanty-8161b9222",
  instagram: "https://www.instagram.com/mohanty_pratyush_xo/",
  github:    "https://github.com/pratyush532",

  planet:    "http://github.com/pratyush532/3D-and-Blender/tree/main/Planet%20Creation",
  physics:   "https://www.linkedin.com/posts/pratyush-mohanty-8161b9222_python-apitesting-blender3d-activity-7043952169170976768-cuwx",
  webModels: "https://64b0c57266aafd0008d6ff0e--preeminent-rolypoly-6833f5.netlify.app/",

  agroDetect: "https://drive.google.com/file/d/15kMXunLikw8A-FVX4otFSD8Hl3kWgDMh/view?usp=drive_link",
  diabetes:   "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=jbrS_tYAAAAJ&citation_for_view=jbrS_tYAAAAJ:u5HHmVD_uO8C",
  disability: "https://drive.google.com/file/d/1Ll2frNCsTUrgBPxdlAU0DEuTQiFP1XWM/view?usp=drive_link",

  certCan:     "https://www.udemy.com/certificate/UC-0c3377df-dbf4-4b37-8400-412c9090db22/",
  certNat:     "https://drive.google.com/file/d/1cf3PMImbRjtiVixjs5hL8KotTaM4rHgr/view?usp=sharing",
  certJlpt:    "https://drive.google.com/file/d/1XkGwWab65sm6gIsFrCqhguL6OPM_JEQa/view?usp=sharing",
  certIcetsis: "https://www.linkedin.com/feed/update/urn:li:activity:7160282252805869568/",
  // certIbm:    "https://courses.ibmcep.cognitiveclass.ai/certificates/b496c3da890f4dfa9c53f7fb9fd32521",
  // certNvidia: "https://courses.nvidia.com/certificates/ae21b59f8ac54bacac5221c3ab77f13a/",

  awardRank:     "https://drive.google.com/file/d/1JUqG6DID4MT_kL0zdQEv--m56U5IrCxj/view?usp=drive_link",
  awardClinics:  "https://www.linkedin.com/posts/pratyush-mohanty-8161b9222_team-androidapp-engineeringdesign-activity-7024057892177674240-6E8l",
  awardCapstone: "https://drive.google.com/file/d/123FNu-pcuJvU6n-fU72irf1M472Lznz1/view?usp=drive_link"
};

const CONTENT = {
  /* ───────────────────────── English ───────────────────────── */
  en: {
    name: "Pratyush Mohanty",
    nameLines: ["Pratyush", "Mohanty"],
    role: "3D, machine learning and AI engineer",
    intro: [
      "I studied computer science with a specialisation in AI, and I've been making things in Blender and Godot since 2019.",
      "I like projects where machine learning, 3D and hardware meet. So far that has meant <span class=\"mark mark-ml\">a crop-disease classifier</span> that works from a phone photo, <span class=\"mark mark-hw\">an IoT device</span> that helps people quit smoking, and <span class=\"mark\">a node system</span> that grows planets."
    ],
    photo: "1682097621086.jpeg",
    social: [
      { label: "GitHub",    href: LINKS.github },
      { label: "LinkedIn",  href: LINKS.linkedin },
      { label: "Instagram", href: LINKS.instagram }
    ],
    nav: {
      threeD: "3D",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      recognition: "Awards",
      langSwitch: "日本語",
      langSwitchHref: "profile_japanese.html",
      theme: "Switch between light and dark theme"
    },
    sections: {
      // Each 3D item takes an optional image, e.g. image: "renders/planet.jpg".
      // Leave it "" to show the item as text only. Landscape images work best.
      threeD: {
        id: "three-d",
        title: "3D and game development",
        note: "Made with Blender, Unity, Godot and Aseprite.",
        items: [
          {
            title: "3D gallery",
            description: "Renders and scenes made in Blender and Godot.",
            link: LINKS.instagram,
            image: "",
            linkText: "See it on Instagram"
          },
          {
            title: "Procedural planet generator",
            description: "A Blender node system that builds whole planets procedurally.",
            link: LINKS.planet,
            image: "",
            linkText: "Get the node setup on GitHub"
          },
          {
            title: "Physics simulation",
            description: "A physics simulation scripted with the Blender Python API.",
            link: LINKS.physics,
            image: "",
            linkText: "Watch it on LinkedIn"
          },
          {
            title: "3D models on the web",
            description: "An experiment in embedding interactive 3D models in a web page.",
            link: LINKS.webModels,
            image: "",
            linkText: "Open the demo"
          }
        ]
      },

      projects: {
        id: "projects",
        title: "Projects",
        areas: { "3d": "3D", ml: "Machine learning", hw: "Hardware" },
        items: [
          {
            title: "Agro Detect",
            area: "ml",
            summary: "Deep learning that identifies paddy diseases from a photo of the crop.",
            bullets: [
              "Custom CNN architectures using Octave Convolution and Squeeze-and-Excitation networks, trained on the Paddy Doctor dataset. Final accuracy: 97.59%.",
              "Built as a deployable pipeline behind an Android app, where users upload a crop photo to identify the disease."
            ],
            award: "Outstanding Capstone Project Award",
            stack: ["Python", "Keras", "Streamlit", "Android (Java)"],
            link: LINKS.agroDetect,
            linkText: "View the project"
          },
          {
            title: "Smoother Quit",
            area: "hw",
            status: "Patent pending",
            summary: "An IoT device and app that track nicotine use and help people quit smoking.",
            bullets: [
              "A Raspberry Pi device in a 3D-printed housing administers nicotine patches and reports its usage to an Android app.",
              "I led the team that built the device."
            ],
            stack: ["Raspberry Pi", "Python", "Android (Java)", "PHP", "Blender", "FreeCAD"],
            link: LINKS.github,
            linkText: "GitHub"
          },
          {
            title: "Integrated Disability Support System",
            area: "hw",
            summary: "A sensor-equipped walking stick with obstacle detection and depth perception.",
            bullets: [
              "The stick communicates wirelessly with an Android app, which displays the user's gait data."
            ],
            award: "Best Contemporary Project, VIT-AP Engineering Clinics (IoT)",
            stack: ["Arduino", "C", "Android (Java)", "PHP"],
            link: LINKS.disability,
            linkText: "View the project"
          },
          {
            title: "Fragility Flow plot generation",
            area: "ml",
            summary: "An AI tool that generates Fragility Flow plots from a building's structural data.",
            bullets: [
              "Deployed as a web app that draws the graphs interactively, in real time."
            ],
            stack: ["Python", "NumPy", "Keras", "scikit-learn", "Streamlit"],
            link: LINKS.github,
            linkText: "GitHub"
          },
          {
            title: "Diabetic healthcare data analytics",
            area: "ml",
            summary: "ML models that predict early-onset diabetes from symptoms and complications such as diabetic retinopathy.",
            bullets: [
              "Published in the book “Data Modelling and Analytics for the Internet of Medical Things”."
            ],
            stack: ["Research", "Machine learning"],
            link: LINKS.diabetes,
            linkText: "View the publication"
          }
        ]
      },

      experience: {
        id: "experience",
        title: "Experience",
        items: [
          {
            period: "Jan – Jun 2024",
            title: "Web development intern",
            org: "Human Resocia Co., Ltd.",
            place: "Tokyo, Japan (remote)",
            bullets: [
              "Built the prototype of a report-generation product.",
              "Turned an install-based application into a SaaS platform with account creation, login and report previews.",
              "Worked across UI/UX development, tech-stack research and back-end file processing."
            ]
          },
          {
            period: "Jan – Jun 2023",
            title: "Data analytics and web development intern",
            org: "Chairman of Rasipuram Town",
            place: "Amaravati, Andhra Pradesh",
            bullets: [
              "Created the concept and front end of the town's official website, a single home for public service announcements and local news.",
              "Devised the data collection strategy and implemented cleaning procedures that improved data quality."
            ]
          },
          {
            period: "May – Oct 2022",
            title: "UI/UX design and 3D development intern",
            org: "Mukham, VIT-AP Innovation & Incubation Center",
            place: "Amaravati, Andhra Pradesh",
            bullets: [
              "Modelled and sculpted the campus in Blender to enable geo-tagging.",
              "Redesigned the Mukham app's UI/UX and developed its companion app, MauTHN, from start to finish."
            ]
          },
          {
            period: "May 2019 – Nov 2020",
            title: "Freelance game and 3D developer",
            org: "Fiverr, Instagram, DeviantArt and itch.io",
            place: "",
            bullets: [
              "Took commissions for level design, concept design and 3D rendering using Aseprite, Blender and Photoshop.",
              "Used Godot for level design, Unity for terrain and environments, and the Blender Python API with OpenGL for add-ons.",
              "Generated large environments with realistic corrosion effects using Godot and Python."
            ]
          }
        ]
      },

      education: {
        id: "education",
        title: "Education",
        items: [
          {
            period: "Graduated Sep 2024",
            title: "Vellore Institute of Technology, Andhra Pradesh",
            sub: "B.Tech in Computer Science, specialising in Artificial Intelligence",
            meta: "CGPA 9.47, ranked 5th in the 2024 class"
          },
          {
            period: "2020",
            title: "CMR National Public School, Bengaluru",
            sub: "Class 12, CBSE (PCMC)",
            meta: "93.6%"
          },
          {
            period: "2018",
            title: "Presidency School, Kasturinagar, Bengaluru",
            sub: "Class 10, CBSE",
            meta: "96.8%"
          }
        ]
      },

      recognition: {
        id: "recognition",
        title: "Awards and certifications",
        awardsTitle: "Awards",
        certsTitle: "Certifications",
        awards: [
          {
            title: "5th rank, B.Tech CSE-AI class of 2024",
            meta: "Academic Excellence Award, VIT-AP University",
            link: LINKS.awardRank
          },
          {
            title: "Outstanding Capstone Project Award",
            meta: "For Agro Detect",
            link: LINKS.awardCapstone
          },
          {
            title: "Best Contemporary Project",
            meta: "VIT-AP Engineering Clinics (IoT), for the Integrated Disability Support System",
            link: LINKS.awardClinics
          }
        ],
        certs: [
          {
            title: "Master CAN protocol completely from scratch (CAN + CAN-FD)",
            meta: "Udemy, May 2025",
            link: LINKS.certCan
          },
          {
            title: "Japanese NAT-TEST, level 4Q",
            meta: "Senmon Kyouiku Publishing Co., Ltd., Sep 2024",
            link: LINKS.certNat
          },
          {
            title: "JLPT N5",
            meta: "The Japan Foundation, Aug 2024",
            link: LINKS.certJlpt
          },
          {
            title: "Presenter, ICETSIS 2024",
            meta: "Applied Science University, Bahrain, Feb 2024. Paper: “Presence Detection with Wi-Fi using ESP32”",
            link: LINKS.certIcetsis
          }
          // {
          //   title: "IBM Artificial Intelligence Analyst",
          //   meta: "IBM Developer Skills Network, Jul 2023",
          //   link: LINKS.certIbm
          // },
          // {
          //   title: "Fundamentals of Deep Learning",
          //   meta: "NVIDIA Deep Learning Institute, Sep 2022",
          //   link: LINKS.certNvidia
          // }
        ]
      }
    },
    footer: "Pratyush Mohanty"
  },

  /* ───────────────────────── 日本語 ───────────────────────── */
  ja: {
    name: "プラトユシュ・モハンティ",
    nameLines: ["プラトユシュ・", "モハンティ"],
    role: "3D・機械学習・AIエンジニア",
    intro: [
      "大学でコンピュータサイエンス（人工知能専攻）を学び、2019年からBlenderとGodotでものづくりを続けています。",
      "機械学習・3D・ハードウェアが交わるプロジェクトが好きです。これまでに、スマートフォンの写真から<span class=\"mark mark-ml\">稲の病気を判定する分類モデル</span>、禁煙を支援する<span class=\"mark mark-hw\">IoTデバイス</span>、惑星を生成する<span class=\"mark\">ノードシステム</span>などを作りました。"
    ],
    photo: "1682097621086.jpeg",
    social: [
      { label: "GitHub",    href: LINKS.github },
      { label: "LinkedIn",  href: LINKS.linkedin },
      { label: "Instagram", href: LINKS.instagram }
    ],
    nav: {
      threeD: "3D",
      projects: "プロジェクト",
      experience: "職歴",
      education: "学歴",
      recognition: "受賞・資格",
      langSwitch: "English",
      langSwitchHref: "index.html",
      theme: "ライト／ダークテーマを切り替える"
    },
    sections: {
      threeD: {
        id: "three-d",
        title: "3D・ゲーム開発",
        note: "使用ツール：Blender、Unity、Godot、Aseprite",
        items: [
          {
            title: "3Dギャラリー",
            description: "BlenderとGodotで制作したレンダーやシーン。",
            link: LINKS.instagram,
            image: "",
            linkText: "Instagramで見る"
          },
          {
            title: "プロシージャル惑星ジェネレーター",
            description: "惑星をまるごとプロシージャルに生成するBlenderのノードシステム。",
            link: LINKS.planet,
            image: "",
            linkText: "GitHubでノード構成を見る"
          },
          {
            title: "物理シミュレーション",
            description: "Blender Python APIで組んだ物理シミュレーション。",
            link: LINKS.physics,
            image: "",
            linkText: "LinkedInで見る"
          },
          {
            title: "ウェブ上の3Dモデル",
            description: "ウェブページに3Dモデルをインタラクティブに埋め込む試み。",
            link: LINKS.webModels,
            image: "",
            linkText: "デモを開く"
          }
        ]
      },

      projects: {
        id: "projects",
        title: "プロジェクト",
        areas: { "3d": "3D", ml: "機械学習", hw: "ハードウェア" },
        items: [
          {
            title: "Agro Detect",
            area: "ml",
            summary: "作物の写真から稲の病気を判定する深層学習モデル。",
            bullets: [
              "Octave ConvolutionとSqueeze-and-Excitation Networksを用いた独自のCNNアーキテクチャを、Paddy Doctorデータセットで学習。最終精度は97.59%。",
              "ユーザーが作物の写真をアップロードして病気を特定できるAndroidアプリ向けに、デプロイ可能なMLパイプラインを構築。"
            ],
            award: "優秀キャップストーンプロジェクト賞",
            stack: ["Python", "Keras", "Streamlit", "Android（Java）"],
            link: LINKS.agroDetect,
            linkText: "プロジェクトを見る"
          },
          {
            title: "Smoother Quit",
            area: "hw",
            status: "特許出願中",
            summary: "ニコチン摂取量を記録し、禁煙を支援するIoTデバイスとアプリ。",
            bullets: [
              "3Dプリント製の筐体に収めたRaspberry Piデバイスがニコチンパッチを管理し、使用状況をAndroidアプリに送信。",
              "デバイス開発チームのリーダーを担当。"
            ],
            stack: ["Raspberry Pi", "Python", "Android（Java）", "PHP", "Blender", "FreeCAD"],
            link: LINKS.github,
            linkText: "GitHub"
          },
          {
            title: "統合障害支援システム",
            area: "hw",
            summary: "障害物検知と深度認識を備えた、センサー付きの歩行杖。",
            bullets: [
              "杖がAndroidアプリと無線で通信し、歩行データをアプリに表示。"
            ],
            award: "VIT-AP エンジニアリングクリニック（IoT部門）最優秀コンテンポラリープロジェクト",
            stack: ["Arduino", "C", "Android（Java）", "PHP"],
            link: LINKS.disability,
            linkText: "プロジェクトを見る"
          },
          {
            title: "Fragility Flowプロット生成",
            area: "ml",
            summary: "建物の構造データからFragility Flowプロットを生成するAIツール。",
            bullets: [
              "グラフをリアルタイムかつインタラクティブに描画するウェブアプリとして公開。"
            ],
            stack: ["Python", "NumPy", "Keras", "scikit-learn", "Streamlit"],
            link: LINKS.github,
            linkText: "GitHub"
          },
          {
            title: "糖尿病ヘルスケアデータ分析",
            area: "ml",
            summary: "症状や糖尿病網膜症などの合併症から、糖尿病の早期発症を予測する機械学習モデル。",
            bullets: [
              "書籍『Data Modelling and Analytics for the Internet of Medical Things』に掲載。"
            ],
            stack: ["研究", "機械学習"],
            link: LINKS.diabetes,
            linkText: "掲載情報を見る"
          }
        ]
      },

      experience: {
        id: "experience",
        title: "職歴",
        items: [
          {
            period: "2024年1月〜6月",
            title: "ウェブ開発インターン",
            org: "ヒューマンリソシア株式会社",
            place: "東京（リモート勤務）",
            bullets: [
              "レポート生成ソフトウェアのプロトタイプを開発。",
              "インストール型ソフトウェアをSaaS化し、アカウント作成・ログイン・レポートプレビュー機能を実装。",
              "UI/UX開発、技術スタックの調査、バックエンドのファイル処理を担当。"
            ]
          },
          {
            period: "2023年1月〜6月",
            title: "データ分析・ウェブ開発インターン",
            org: "ラシプラム町議会議長",
            place: "アーンドラ・プラデーシュ州アマラヴァティ",
            bullets: [
              "町の公式ウェブサイトのコンセプト立案とフロントエンド開発を担当。公共サービスのお知らせや地域ニュースをまとめて掲載するサイトを構築。",
              "データ収集の方針を策定し、クリーニング手順を実装してデータ品質を向上。"
            ]
          },
          {
            period: "2022年5月〜10月",
            title: "UI/UXデザイン・3D開発インターン",
            org: "Mukham（VIT-AP イノベーション＆インキュベーションセンター）",
            place: "アーンドラ・プラデーシュ州アマラヴァティ",
            bullets: [
              "ジオタグ付けのため、Blenderでキャンパスを3Dモデリング・スカルプト。",
              "MukhamアプリのUI/UXを再設計し、連携アプリMauTHNを一から開発。"
            ]
          },
          {
            period: "2019年5月〜2020年11月",
            title: "フリーランス ゲーム・3D開発者",
            org: "Fiverr、Instagram、DeviantArt、itch.io",
            place: "",
            bullets: [
              "Aseprite、Blender、Photoshopを使い、レベルデザイン、コンセプトデザイン、3Dレンダリングの依頼を受注。",
              "レベルデザインにGodot、地形・環境制作にUnity、アドオン開発にBlender Python APIとOpenGLを使用。",
              "GodotとPythonで、リアルな腐食表現を備えた広大な環境を生成。"
            ]
          }
        ]
      },

      education: {
        id: "education",
        title: "学歴",
        items: [
          {
            period: "2024年9月 卒業",
            title: "ヴェロール工科大学 アーンドラ・プラデーシュ校（VIT-AP）",
            sub: "工学士（コンピュータサイエンス）、人工知能専攻",
            meta: "CGPA 9.47、2024年度 学年5位"
          },
          {
            period: "2020年",
            title: "CMRナショナル・パブリックスクール（ベンガルール）",
            sub: "第12学年、CBSE（PCMC）",
            meta: "93.6%"
          },
          {
            period: "2018年",
            title: "プレジデンシー・スクール カストゥリナガル校（ベンガルール）",
            sub: "第10学年、CBSE",
            meta: "96.8%"
          }
        ]
      },

      recognition: {
        id: "recognition",
        title: "受賞・資格",
        awardsTitle: "受賞",
        certsTitle: "資格",
        awards: [
          {
            title: "B.Tech CSE-AI 2024年度 学年5位",
            meta: "VIT-AP大学 学術優秀賞",
            link: LINKS.awardRank
          },
          {
            title: "優秀キャップストーンプロジェクト賞",
            meta: "Agro Detectにて受賞",
            link: LINKS.awardCapstone
          },
          {
            title: "最優秀コンテンポラリープロジェクト",
            meta: "VIT-AP エンジニアリングクリニック（IoT部門）、統合障害支援システムにて受賞",
            link: LINKS.awardClinics
          }
        ],
        certs: [
          {
            title: "CANプロトコルを基礎から完全にマスターする（CAN + CAN-FD）",
            meta: "Udemy、2025年5月",
            link: LINKS.certCan
          },
          {
            title: "日本語NAT-TEST 4級",
            meta: "専門教育出版、2024年9月",
            link: LINKS.certNat
          },
          {
            title: "日本語能力試験（JLPT）N5",
            meta: "国際交流基金、2024年8月",
            link: LINKS.certJlpt
          },
          {
            title: "ICETSIS 2024 発表者",
            meta: "Applied Science University（バーレーン）、2024年2月。論文：「Presence Detection with Wi-Fi using ESP32」",
            link: LINKS.certIcetsis
          }
          // {
          //   title: "IBM人工知能アナリスト",
          //   meta: "IBM Developer Skills Network、2023年7月",
          //   link: LINKS.certIbm
          // },
          // {
          //   title: "深層学習の基礎",
          //   meta: "NVIDIA Deep Learning Institute、2022年9月",
          //   link: LINKS.certNvidia
          // }
        ]
      }
    },
    footer: "プラトユシュ・モハンティ"
  }
};