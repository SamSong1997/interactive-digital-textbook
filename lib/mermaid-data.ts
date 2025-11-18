export interface MermaidTimeline {
  chapterId: string;
  chapterTitle: string;
  duration: number;
  timeline: Array<{
    time: number;
    content: string;
    description: string;
  }>;
}

export const mermaidData: MermaidTimeline[] = [
  {
    chapterId: '1-1',
    chapterTitle: '第1章 能源的前世今生',
    duration: 150,
    timeline: [
      {
        time: -1,
        description: '准备开始',
        content: `graph TD
    A["🎓 能源知识体系"]
    B["点击播放开始学习"]
    A --> B
    style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
    style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 0,
        description: '第一步：能源的核心概念',
        content: `graph TD
A[能源]
style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff`,
      },
      {
        time: 20,
        description: '第二步：能源的定义',
        content: `graph TD
A[能源] --> B[定义]
B --> C[向人类提供能量的资源]
style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 40,
        description: '第三步：能源的三大来源',
        content: `graph TD
A[能源] --> B[定义]
B --> C[向人类提供能量的资源]
A --> D[主要来源]
D --> E[太阳辐射]
D --> F[地球内部]
D --> G[天体引力]
style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px
style D fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 60,
        description: '第四步：能源的分类体系',
        content: `graph TD
A[能源] --> B[定义]
B --> C[向人类提供能量的资源]
A --> D[主要来源]
D --> E[太阳辐射]
D --> F[地球内部]
D --> G[天体引力]
A --> H[分类]
H --> I[一次能源]
H --> J[二次能源]
style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px
style D fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px
style H fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 80,
        description: '第五步：一次能源的具体类型',
        content: `graph TD
A[能源] --> B[定义]
B --> C[向人类提供能量的资源]
A --> D[主要来源]
D --> E[太阳辐射]
D --> F[地球内部]
D --> G[天体引力]
A --> H[分类]
H --> I[一次能源]
H --> J[二次能源]
I --> K[煤炭]
I --> L[石油]
I --> M[天然气]
I --> N[太阳能]
I --> O[风能]
style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px
style D fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px
style H fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px
style I fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 100,
        description: '第六步：二次能源的具体类型',
        content: `graph TD
A[能源] --> B[定义]
B --> C[向人类提供能量的资源]
A --> D[主要来源]
D --> E[太阳辐射]
D --> F[地球内部]
D --> G[天体引力]
A --> H[分类]
H --> I[一次能源]
H --> J[二次能源]
I --> K[煤炭]
I --> L[石油]
I --> M[天然气]
I --> N[太阳能]
I --> O[风能]
J --> P[电能]
J --> Q[氢能]
J --> R[汽油]
style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px
style D fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px
style H fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px
style I fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px
style J fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 120,
        description: '完整图：能源的完整知识体系',
        content: `graph TD
A[能源] --> B[定义]
B --> C[向人类提供能量的资源]
A --> D[主要来源]
D --> E[太阳辐射]
D --> F[地球内部]
D --> G[天体引力]
A --> H[分类]
H --> I[一次能源]
H --> J[二次能源]
I --> K[煤炭]
I --> L[石油]
I --> M[天然气]
I --> N[太阳能]
I --> O[风能]
J --> P[电能]
J --> Q[氢能]
J --> R[汽油]
A --> S[特性]
S --> T[可再生]
S --> U[不可再生]
style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px
style D fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px
style H fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px
style I fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px
style J fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px
style S fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
    ],
  },
  {
    chapterId: '2-2',
    chapterTitle: '第2章 风力发电原理',
    duration: 150,
    timeline: [
      {
        time: -1,
        description: '准备开始',
        content: `graph TD
A[⚡ 风力发电原理]
B[点击播放开始学习]
A --> B
style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 0,
        description: '风能转换基本流程',
        content: `graph LR
    A[风能] --> B[风力机]
    B --> C[机械能]
    C --> D[发电机]
    D --> E[电能]`,
      },
      {
        time: 30,
        description: '风力发电系统组成',
        content: `graph TD
    A[风力发电系统] --> B[风力机]
    A --> C[传动系统]
    A --> D[发电机]
    A --> E[控制系统]
    A --> F[塔架基础]
    B --> G[叶片]
    B --> H[轮毂]
    C --> I[齿轮箱]`,
      },
      {
        time: 60,
        description: '风能捕获与转换',
        content: `graph TD
    A[风能捕获] --> B[叶片设计]
    B --> C[气动外形]
    C --> D[升力产生]
    D --> E[叶片旋转]
    E --> F[转子转速]
    F --> G[变桨距调节]
    G --> H[功率控制]`,
      },
      {
        time: 90,
        description: '发电机类型',
        content: `graph TD
    A[发电机类型] --> B[双馈异步]
    A --> C[直驱永磁]
    A --> D[半直驱]
    B --> E[需要齿轮箱]
    B --> F[成本较低]
    C --> G[无齿轮箱]
    C --> H[效率高]`,
      },
      {
        time: 120,
        description: '并网与控制',
        content: `graph LR
    A[发电机输出] --> B[变流器]
    B --> C[电网适配]
    C --> D[并网]
    B --> E[功率控制]
    B --> F[频率调节]
    B --> G[电压稳定]`,
      },
    ],
  },
  {
    chapterId: '3-2',
    chapterTitle: '第3章 光伏基本原理',
    duration: 180,
    timeline: [
      {
        time: -1,
        description: '准备开始',
        content: `graph TD
A[☀️ 光伏基本原理]
B[点击播放开始学习]
A --> B
style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 0,
        description: '介绍半导体基本概念',
        content: `graph TD
    A[半导体材料] --> B[硅Si]
    A --> C[锗Ge]
    B --> D[共价键结构]
    D --> E[价电子]`,
      },
      {
        time: 30,
        description: '载流子的产生',
        content: `graph TD
    A[半导体材料] --> B[硅Si]
    A --> C[锗Ge]
    B --> D[共价键结构]
    D --> E[价电子]
    E --> F[自由电子]
    E --> G[空穴]
    F --> H[负电荷]
    G --> I[正电荷]`,
      },
      {
        time: 60,
        description: '能带结构形成',
        content: `graph TD
    A[能带结构] --> B[导带]
    A --> C[禁带Eg]
    A --> D[价带]
    B --> E[自由电子]
    D --> F[束缚电子]
    C --> G[1.12eV硅]`,
      },
      {
        time: 90,
        description: '掺杂半导体类型',
        content: `graph TD
    A[掺杂半导体] --> B[N型半导体]
    A --> C[P型半导体]
    B --> D[掺入五价元素]
    B --> E[电子为多数载流子]
    C --> F[掺入三价元素]
    C --> G[空穴为多数载流子]
    D --> H[磷P砷As]
    F --> I[硼B铝Al]`,
      },
      {
        time: 120,
        description: 'pn结的形成',
        content: `graph TD
    A[pn结] --> B[P型区]
    A --> C[N型区]
    B --> D[空穴扩散]
    C --> E[电子扩散]
    D --> F[空间电荷区]
    E --> F
    F --> G[内建电场]
    G --> H[阻止扩散]`,
      },
      {
        time: 150,
        description: '光伏效应过程',
        content: `graph TD
    A[光伏效应] --> B[光子吸收]
    B --> C[电子-空穴对]
    C --> D[内建电场分离]
    D --> E[电子到N区]
    D --> F[空穴到P区]
    E --> G[形成电流]
    F --> G
    G --> H[外电路输出]`,
      },
    ],
  },
  {
    chapterId: '4-1',
    chapterTitle: '第4章 光伏发电系统',
    duration: 120,
    timeline: [
      {
        time: -1,
        description: '准备开始',
        content: `graph TD
A[🔆 光伏发电系统]
B[点击播放开始学习]
A --> B
style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 0,
        description: '光伏系统组成',
        content: `graph TD
    A[光伏发电系统] --> B[光伏组件]
    A --> C[逆变器]
    A --> D[支架系统]
    A --> E[储能系统]
    A --> F[监控系统]`,
      },
      {
        time: 30,
        description: '系统类型分类',
        content: `graph TD
    A[光伏系统类型] --> B[独立运行系统]
    A --> C[并网发电系统]
    B --> D[需要储能]
    B --> E[离网应用]
    C --> F[无需储能]
    C --> G[接入电网]`,
      },
      {
        time: 60,
        description: '逆变器技术',
        content: `graph TD
    A[逆变器] --> B[功能]
    B --> C[DC转AC]
    B --> D[MPPT跟踪]
    B --> E[并网保护]
    A --> F[类型]
    F --> G[集中式]
    F --> H[组串式]
    F --> I[微型逆变器]`,
      },
      {
        time: 90,
        description: '分布式光伏与微电网',
        content: `graph TD
    A[分布式光伏] --> B[屋顶系统]
    A --> C[建筑一体化]
    A --> D[微电网]
    D --> E[多能源协调]
    D --> F[智能控制]
    D --> G[并离网切换]`,
      },
    ],
  },
  {
    chapterId: '5-1',
    chapterTitle: '第5章 储热技术',
    duration: 120,
    timeline: [
      {
        time: -1,
        description: '准备开始',
        content: `graph TD
A[🌡️ 储热技术]
B[点击播放开始学习]
A --> B
style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 0,
        description: '储热技术概述',
        content: `graph TD
    A[储热技术] --> B[热量的时空调度]
    A --> C[应用场景]
    C --> D[工业余热回收]
    C --> E[太阳能热利用]
    C --> F[建筑采暖制冷]
    C --> G[电力调峰]`,
      },
      {
        time: 30,
        description: '储热技术分类',
        content: `graph TD
    A[储热技术类型] --> B[显热储热]
    A --> C[潜热储热]
    A --> D[化学储热]
    B --> E[水/熔盐]
    C --> F[相变材料]
    D --> G[化学反应]`,
      },
      {
        time: 60,
        description: '显热储热原理',
        content: `graph TD
    A[显热储热] --> B[温度变化]
    B --> C[储热]
    B --> D[放热]
    A --> E[材料]
    E --> F[液体]
    E --> G[固体]
    F --> H[水/导热油]
    G --> I[岩石/混凝土]`,
      },
      {
        time: 90,
        description: '相变储热技术',
        content: `graph TD
    A[相变储热] --> B[固-液相变]
    A --> C[固-固相变]
    B --> D[石蜡]
    B --> E[水合盐]
    C --> F[高分子材料]
    A --> G[优势]
    G --> H[储热密度高]
    G --> I[温度恒定]`,
      },
    ],
  },
  {
    chapterId: '6-1',
    chapterTitle: '第6章 热电材料',
    duration: 135,
    timeline: [
      {
        time: -1,
        description: '准备开始',
        content: `graph TD
A[⚛️ 热电材料]
B[点击播放开始学习]
A --> B
style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 0,
        description: '热电效应基础',
        content: `graph TD
    A[热电效应] --> B[塞贝克效应]
    A --> C[帕尔帖效应]
    A --> D[汤姆逊效应]
    B --> E[温差产生电压]
    C --> F[电流产生温差]`,
      },
      {
        time: 30,
        description: '热电优值ZT',
        content: `graph TD
    A[热电优值ZT] --> B[塞贝克系数S]
    A --> C[电导率σ]
    A --> D[热导率κ]
    A --> E[温度T]
    F[ZT公式] --> G[ZT = S²σT/κ]`,
      },
      {
        time: 60,
        description: '热电材料分类',
        content: `graph TD
    A[按温度分类] --> B[低温型]
    A --> C[中温型]
    A --> D[高温型]
    B --> E[Bi2Te3]
    B --> F[<300℃]
    C --> G[PbTe]
    C --> H[300-600℃]
    D --> I[SiGe]
    D --> J[>600℃]`,
      },
      {
        time: 90,
        description: '热电材料应用',
        content: `graph TD
    A[热电应用] --> B[温差发电]
    A --> C[固态制冷]
    B --> D[工业余热回收]
    B --> E[汽车尾气发电]
    B --> F[航天器电源]
    C --> G[便携冰箱]
    C --> H[精密温控]`,
      },
      {
        time: 105,
        description: '性能优化策略',
        content: `graph TD
    A[性能优化] --> B[材料创新]
    A --> C[结构设计]
    B --> D[纳米结构]
    B --> E[复合材料]
    C --> F[能带工程]
    C --> G[声子散射]`,
      },
    ],
  },
  {
    chapterId: '7-1',
    chapterTitle: '第7章 热电转换装备',
    duration: 120,
    timeline: [
      {
        time: -1,
        description: '准备开始',
        content: `graph TD
A[🔧 热电转换装备]
B[点击播放开始学习]
A --> B
style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 0,
        description: '热电器件基本结构',
        content: `graph TD
    A[热电器件] --> B[热电偶]
    B --> C[P型半导体]
    B --> D[N型半导体]
    A --> E[热端]
    A --> F[冷端]
    E --> G[吸收热量]
    F --> H[散发热量]`,
      },
      {
        time: 30,
        description: '热电发电装备',
        content: `graph TD
    A[热电发电] --> B[工业余热]
    A --> C[汽车尾气]
    A --> D[航天电源]
    B --> E[冶金/化工]
    C --> F[提升燃效5-10%]
    D --> G[RTG核电池]`,
      },
      {
        time: 60,
        description: '热电制冷装备',
        content: `graph TD
    A[热电制冷] --> B[便携冰箱]
    A --> C[精密温控]
    A --> D[电子器件散热]
    C --> E[实验室设备]
    C --> F[医疗器械]
    D --> G[CPU散热]`,
      },
      {
        time: 90,
        description: '性能优化与应用前景',
        content: `graph TD
    A[未来发展] --> B[提高转换效率]
    A --> C[降低成本]
    A --> D[新型应用]
    B --> E[新材料研发]
    C --> F[规模化生产]
    D --> G[可穿戴设备]
    D --> H[物联网传感]`,
      },
    ],
  },
  {
    chapterId: '8-2',
    chapterTitle: '第8章 电催化制氢',
    duration: 120,
    timeline: [
      {
        time: -1,
        description: '准备开始',
        content: `graph TD
A[💧 电催化制氢]
B[点击播放开始学习]
A --> B
style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 0,
        description: '电解水制氢原理',
        content: `graph TD
    A[电解水] --> B[阳极反应]
    A --> C[阴极反应]
    B --> D[析氧OER]
    C --> E[析氢HER]
    D --> F[2H2O → O2 + 4H+ + 4e-]
    E --> G[4H+ + 4e- → 2H2]`,
      },
      {
        time: 30,
        description: '电解槽类型',
        content: `graph TD
    A[电解槽] --> B[碱性电解槽]
    A --> C[质子交换膜PEM]
    A --> D[固体氧化物SOEC]
    B --> E[KOH电解液]
    B --> F[成本低]
    C --> G[高效率]
    C --> H[快速响应]`,
      },
      {
        time: 60,
        description: '催化剂作用',
        content: `graph TD
    A[催化剂] --> B[降低过电位]
    A --> C[提高反应速率]
    B --> D[HER催化剂]
    B --> E[OER催化剂]
    D --> F[铂Pt]
    D --> G[过渡金属]
    E --> H[氧化物]
    E --> I[氢氧化物]`,
      },
      {
        time: 90,
        description: '制氢效率优化',
        content: `graph TD
    A[效率提升] --> B[催化剂优化]
    A --> C[电解液优化]
    A --> D[反应条件]
    B --> E[纳米结构]
    B --> F[复合材料]
    C --> G[浓度调节]
    D --> H[温度控制]
    D --> I[压力控制]`,
      },
    ],
  },
  {
    chapterId: '9-2',
    chapterTitle: '第9章 氢气存储',
    duration: 150,
    timeline: [
      {
        time: -1,
        description: '准备开始',
        content: `graph TD
A[🧪 氢气存储]
B[点击播放开始学习]
A --> B
style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 0,
        description: '氢的基本特性',
        content: `graph TD
    A[氢的特性] --> B[能量密度高]
    A --> C[易燃易爆]
    A --> D[密度小]
    B --> E[142 MJ/kg]
    C --> F[安全挑战]
    D --> G[储存困难]`,
      },
      {
        time: 30,
        description: '氢气储存方式',
        content: `graph TD
    A[储氢方式] --> B[高压气态]
    A --> C[低温液态]
    A --> D[固态储氢]
    B --> E[35-70 MPa]
    C --> F[-253℃]
    D --> G[金属氢化物]
    D --> H[MOFs材料]`,
      },
      {
        time: 60,
        description: '高压气态储氢',
        content: `graph TD
    A[高压气态储氢] --> B[优点]
    A --> C[缺点]
    B --> D[技术成熟]
    B --> E[充放速度快]
    C --> F[储氢密度低]
    C --> G[能耗大]
    C --> H[安全要求高]`,
      },
      {
        time: 90,
        description: '低温液态储氢',
        content: `graph TD
    A[低温液态储氢] --> B[优点]
    A --> C[缺点]
    B --> D[储氢密度高]
    B --> E[适合长距离运输]
    C --> F[液化能耗高]
    C --> G[蒸发损失]
    C --> H[成本高]`,
      },
      {
        time: 120,
        description: '固态储氢技术',
        content: `graph TD
    A[固态储氢] --> B[物理吸附]
    A --> C[化学氢化物]
    B --> D[MOFs]
    B --> E[碳材料]
    C --> F[金属氢化物]
    C --> G[复杂氢化物]
    A --> H[优势]
    H --> I[安全性高]
    H --> J[储氢密度大]`,
      },
    ],
  },
  {
    chapterId: '10-1',
    chapterTitle: '第10章 燃料电池',
    duration: 165,
    timeline: [
      {
        time: -1,
        description: '准备开始',
        content: `graph TD
A[🔋 燃料电池]
B[点击播放开始学习]
A --> B
style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 0,
        description: '燃料电池基本原理',
        content: `graph TD
    A[燃料电池] --> B[化学能]
    B --> C[直接转换]
    C --> D[电能]
    A --> E[特点]
    E --> F[不燃烧]
    E --> G[无噪声]
    E --> H[高效率]`,
      },
      {
        time: 30,
        description: '燃料电池工作过程',
        content: `graph LR
    A[氢气] --> B[阳极]
    B --> C[H2 → 2H+ + 2e-]
    D[氧气] --> E[阴极]
    C --> F[电子通过外电路]
    F --> E
    C --> G[质子通过电解质]
    G --> E
    E --> H[O2 + 4H+ + 4e- → 2H2O]`,
      },
      {
        time: 60,
        description: '燃料电池类型概览',
        content: `graph TD
    A[燃料电池类型] --> B[PEMFC]
    A --> C[SOFC]
    A --> D[MCFC]
    A --> E[PAFC]
    A --> F[AFC]
    B --> G[低温/汽车]
    C --> H[高温/发电]
    D --> I[中高温/电站]`,
      },
      {
        time: 90,
        description: 'PEMFC质子交换膜燃料电池',
        content: `graph TD
    A[PEMFC] --> B[特点]
    B --> C[低温运行]
    B --> D[功率密度高]
    B --> E[启动快]
    A --> F[应用]
    F --> G[燃料电池汽车]
    F --> H[便携电源]
    F --> I[分布式发电]`,
      },
      {
        time: 120,
        description: 'SOFC固体氧化物燃料电池',
        content: `graph TD
    A[SOFC] --> B[特点]
    B --> C[高温运行]
    B --> D[效率极高]
    B --> E[燃料灵活]
    A --> F[应用]
    F --> G[大型电站]
    F --> H[分布式发电]
    F --> I[热电联供]`,
      },
      {
        time: 135,
        description: '燃料电池应用场景',
        content: `graph TD
    A[应用场景] --> B[交通运输]
    A --> C[固定发电]
    A --> D[便携电源]
    B --> E[汽车/巴士]
    B --> F[船舶/无人机]
    C --> G[家庭供能]
    C --> H[备用电源]
    D --> I[军用电源]
    D --> J[应急设备]`,
      },
    ],
  },
  {
    chapterId: '11-1',
    chapterTitle: '第11章 电能与化学能——转换之美',
    duration: 180,
    timeline: [
      {
        time: -1,
        description: '准备开始',
        content: `graph TD
    A["⚡ 电能与化学能"]
    B["点击播放开始学习"]
    A --> B
    style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
    style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 0,
        description: '锂离子电池概览',
        content: `graph TD
    A[锂离子电池] --> B[工作原理]
    A --> C[关键材料]
    A --> D[优缺点]
    style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff`,
      },
      {
        time: 30,
        description: '锂离子电池关键材料',
        content: `graph TD
    A[关键材料] --> B[正极材料]
    A --> C[负极材料]
    A --> D[电解质]
    B --> E[钴酸锂]
    B --> F[磷酸铁锂]
    B --> G[三元材料]
    C --> H[石墨]
    C --> I[硅基材料]`,
      },
      {
        time: 60,
        description: '钠离子电池',
        content: `graph TD
    A[钠离子电池] --> B[优势]
    A --> C[应用]
    B --> D[资源丰富]
    B --> E[成本低]
    C --> F[大规模储能]
    C --> G[低速电动车]`,
      },
      {
        time: 90,
        description: '锌离子电池',
        content: `graph TD
    A[锌离子电池] --> B[特点]
    A --> C[挑战]
    B --> D[安全性高]
    B --> E[成本低]
    B --> F[环境友好]
    C --> G[锌枝晶]
    C --> H[析氢反应]`,
      },
      {
        time: 120,
        description: '多价离子电池',
        content: `graph TD
    A[多价离子电池] --> B[镁离子]
    A --> C[铝离子]
    A --> D[钙离子]
    B --> E[体积能量密度高]
    C --> F[理论容量高]
    D --> G[低成本优势]`,
      },
      {
        time: 150,
        description: '超级电容器',
        content: `graph TD
    A[超级电容器] --> B[储能机制]
    A --> C[特点]
    A --> D[应用]
    B --> E[双电层储能]
    B --> F[赝电容储能]
    C --> G[超高功率密度]
    C --> H[超长循环寿命]
    D --> I[能量回收]
    D --> J[瞬时大功率支撑]`,
      },
    ],
  },
  {
    chapterId: '12-1',
    chapterTitle: '第12章 储能技术与装备——电力银行',
    duration: 200,
    timeline: [
      {
        time: -1,
        description: '准备开始',
        content: `graph TD
    A["🏦 储能技术"]
    B["点击播放开始学习"]
    A --> B
    style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
    style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 0,
        description: '储能技术分类',
        content: `graph TD
    A[储能技术] --> B[机械储能]
    A --> C[电化学储能]
    A --> D[热能储能]
    style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff`,
      },
      {
        time: 30,
        description: '机械储能技术',
        content: `graph TD
    A[机械储能] --> B[抽水蓄能]
    A --> C[飞轮储能]
    B --> D[容量大]
    B --> E[技术成熟]
    C --> F[功率密度高]
    C --> G[响应迅速]`,
      },
      {
        time: 70,
        description: '抽水蓄能详解',
        content: `graph TD
    A[抽水蓄能] --> B[工作原理]
    A --> C[优势]
    A --> D[挑战]
    C --> E[容量大]
    C --> F[技术成熟]
    C --> G[寿命长]
    D --> H[地理条件依赖]
    D --> I[建设周期长]
    D --> J[初始投资高]`,
      },
      {
        time: 100,
        description: '电化学储能',
        content: `graph TD
    A[电化学储能] --> B[锂离子电池]
    A --> C[钠离子电池]
    A --> D[液流电池]
    A --> E[铅酸电池]
    B --> F[能量密度高]
    B --> G[循环寿命长]`,
      },
      {
        time: 140,
        description: '热能储能技术',
        content: `graph TD
    A[热能储能] --> B[显热储热]
    A --> C[相变储热]
    A --> D[化学储热]
    B --> E[技术简单]
    B --> F[成本低]
    C --> G[储能密度高]
    D --> H[密度极高]
    D --> I[长期无损失]`,
      },
      {
        time: 170,
        description: '储能技术对比',
        content: `graph TD
    A[技术选择] --> B[能量密度]
    A --> C[功率密度]
    A --> D[成本]
    A --> E[寿命]
    A --> F[安全性]
    A --> G[环境影响]`,
      },
    ],
  },
  {
    chapterId: '13-1',
    chapterTitle: '第13章 其他新能源——电力宇宙的新英雄',
    duration: 160,
    timeline: [
      {
        time: -1,
        description: '准备开始',
        content: `graph TD
    A["🌊 其他新能源"]
    B["点击播放开始学习"]
    A --> B
    style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
    style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 0,
        description: '新能源概览',
        content: `graph TD
    A[其他新能源] --> B[海洋能]
    A --> C[地热能]
    A --> D[生物质能]
    style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff`,
      },
      {
        time: 30,
        description: '海洋能类型',
        content: `graph TD
    A[海洋能] --> B[潮汐能]
    A --> C[波浪能]
    A --> D[海流能]
    A --> E[温差能]
    A --> F[盐差能]
    B --> G[资源丰富]
    C --> H[能量密度低]`,
      },
      {
        time: 60,
        description: '地热能发电',
        content: `graph TD
    A[地热能] --> B[资源分类]
    A --> C[发电技术]
    B --> D[水热型]
    B --> E[干热岩型]
    B --> F[岩浆型]
    C --> G[直接蒸汽法]
    C --> H[闪蒸法]
    C --> I[双循环法]`,
      },
      {
        time: 90,
        description: '生物质能利用',
        content: `graph TD
    A[生物质能] --> B[来源]
    A --> C[转化技术]
    B --> D[农业废弃物]
    B --> E[林业残余物]
    B --> F[城市垃圾]
    B --> G[能源作物]
    C --> H[直接燃烧]
    C --> I[气化发电]
    C --> J[沼气发电]`,
      },
      {
        time: 120,
        description: '新能源的挑战',
        content: `graph TD
    A[共性挑战] --> B[间歇性与波动性]
    A --> C[能量密度低]
    A --> D[地理分布不均]
    E[解决方案] --> F[多能互补]
    E --> G[智能电网]
    E --> H[储能配套]`,
      },
    ],
  },
  {
    chapterId: '14-1',
    chapterTitle: '第14章 新能源互联网——"网"打尽新能源',
    duration: 170,
    timeline: [
      {
        time: -1,
        description: '准备开始',
        content: `graph TD
    A["🌐 新能源互联网"]
    B["点击播放开始学习"]
    A --> B
    style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff
    style B fill:#E6F0FF,stroke:#0F60FF,stroke-width:2px`,
      },
      {
        time: 0,
        description: '新能源互联网概览',
        content: `graph TD
    A[新能源互联网] --> B[内涵转变]
    A --> C[新能源微网]
    A --> D[智慧能源]
    style A fill:#0F60FF,stroke:#173F73,stroke-width:3px,color:#fff`,
      },
      {
        time: 30,
        description: '从电力互联到能源互联',
        content: `graph TD
    A[能源互联] --> B[内涵扩展]
    A --> C[核心特征]
    B --> D[多种能源形式]
    B --> E[产销者出现]
    B --> F[信息流耦合]
    C --> G[多能互补]
    C --> H[高效配置]
    C --> I[开放互联]`,
      },
      {
        time: 70,
        description: '新能源微网',
        content: `graph TD
    A[新能源微网] --> B[定义]
    A --> C[运行模式]
    A --> D[关键作用]
    C --> E[并网运行]
    C --> F[孤岛运行]
    D --> G[消纳新能源]
    D --> H[提高可靠性]`,
      },
      {
        time: 110,
        description: '智慧能源技术支撑',
        content: `graph TD
    A[智慧能源] --> B[信息技术]
    A --> C[能源技术]
    B --> D[物联网]
    B --> E[大数据]
    B --> F[云计算]
    B --> G[人工智能]
    C --> H[先进储能]
    C --> I[高效转换]
    C --> J[柔性输配电]`,
      },
      {
        time: 140,
        description: '智慧能源愿景',
        content: `graph TD
    A[最终愿景] --> B[智能化]
    A --> C[去中心化]
    A --> D[市场化]
    A --> E[物联化]
    F[实现方式] --> G[即产即销]
    F --> H[隔墙交易]
    F --> I[余量上网]`,
      },
    ],
  },
];
