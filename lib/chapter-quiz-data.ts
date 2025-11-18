// 章节测试题目数据

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface ResourceLink {
  title: string;
  description: string;
  url: string;
}

export interface ChapterResources {
  quizQuestions: QuizQuestion[];
  resourceLinks: ResourceLink[];
}

// 第一章测试题目和资源
export const chapter1Resources: Record<string, ChapterResources> = {
  '1-1': {
    quizQuestions: [
      {
        id: 1,
        question: '能源的本质是什么？',
        options: [
          '能够向人类提供某种形式能量的原料和资源',
          '只包括煤炭、石油和天然气',
          '仅指可再生的清洁能源',
          '专指用于发电的资源'
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: '人类所需能量的绝大部分直接或间接来自哪里？',
        options: [
          '地球内部',
          '太阳',
          '月球',
          '化石燃料'
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: '按能源的可再生性分类，下列哪项属于可再生能源？',
        options: [
          '煤炭',
          '石油',
          '天然气',
          '太阳能'
        ],
        correctAnswer: 3
      },
      {
        id: 4,
        question: '能量守恒定律（热力学第一定律）说明了什么？',
        options: [
          '能量可以被创造',
          '能量可以被消灭',
          '能量只能从一种形式转换成另一种形式，总量保持不变',
          '能量会随着时间自然增加'
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        question: '核能的释放符合哪个方程？',
        options: [
          'E = mgh',
          'E = 1/2mv²',
          'E = mc²',
          'E = hν'
        ],
        correctAnswer: 2
      }
    ],
    resourceLinks: [
      {
        title: '能源科学与技术前沿',
        description: '探讨能源领域的最新研究进展和技术突破',
        url: 'http://www.qikan.com.cn/'
      },
      {
        title: '可再生能源发展报告',
        description: '全球可再生能源发展现状与趋势分析',
        url: 'http://www.qikan.com.cn/'
      },
      {
        title: '能源转型与碳中和',
        description: '碳达峰碳中和目标下的能源转型路径',
        url: 'http://www.qikan.com.cn/'
      }
    ]
  },
  '1-2': {
    quizQuestions: [
      {
        id: 1,
        question: '钻木取火是人类能源利用的哪一次技术革命？',
        options: [
          '第一次',
          '第二次',
          '第三次',
          '第四次'
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: '中国古代农用动力的发展顺序是？',
        options: [
          '人力→水力→畜力→风力',
          '人力→畜力→水力→风力',
          '畜力→人力→风力→水力',
          '风力→水力→畜力→人力'
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: '三峡水电站的装机容量是多少？',
        options: [
          '10.5 GW',
          '15.0 GW',
          '22.5 GW',
          '30.0 GW'
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: '中国可开发利用的风能储量约为多少？',
        options: [
          '5亿kW',
          '10亿kW',
          '15亿kW',
          '20亿kW'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: '薪柴燃烧产生的能量属于哪种能源形式？',
        options: [
          '化石能源',
          '生物质能',
          '核能',
          '地热能'
        ],
        correctAnswer: 1
      }
    ],
    resourceLinks: [
      {
        title: '中国古代能源利用史',
        description: '从钻木取火到水力风力的历史演变',
        url: 'http://www.qikan.com.cn/'
      },
      {
        title: '水力发电技术与应用',
        description: '现代水力发电技术原理与工程实践',
        url: 'http://www.qikan.com.cn/'
      },
      {
        title: '风能资源评估与开发',
        description: '风能资源分布特征及开发利用技术',
        url: 'http://www.qikan.com.cn/'
      }
    ]
  },
  '1-3': {
    quizQuestions: [
      {
        id: 1,
        question: '煤炭的形成经历了哪两个主要阶段？',
        options: [
          '泥炭化阶段和煤化阶段',
          '碳化阶段和矿化阶段',
          '沉积阶段和压实阶段',
          '氧化阶段和还原阶段'
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: '2020年全球探明煤炭储量最多的国家是？',
        options: [
          '中国',
          '俄罗斯',
          '美国',
          '澳大利亚'
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: '石油的主要成分是什么？',
        options: [
          '碳氢化合物',
          '碳氧化合物',
          '氮氧化合物',
          '硫化物'
        ],
        correctAnswer: 0
      },
      {
        id: 4,
        question: '天然气相比煤炭的主要优势是？',
        options: [
          '储量更大',
          '开采成本更低',
          '清洁高效，污染物排放少',
          '运输更方便'
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        question: '根据预测，化石能源峰值将在何时到来？',
        options: [
          '2020年前',
          '2030年前',
          '2050年前',
          '2100年前'
        ],
        correctAnswer: 1
      }
    ],
    resourceLinks: [
      {
        title: '化石能源开发与利用',
        description: '煤炭、石油、天然气的开采技术与应用',
        url: 'http://www.qikan.com.cn/'
      },
      {
        title: '能源地质学基础',
        description: '化石能源的形成机理与分布规律',
        url: 'http://www.qikan.com.cn/'
      },
      {
        title: '能源环境影响评估',
        description: '化石能源利用的环境问题与对策',
        url: 'http://www.qikan.com.cn/'
      }
    ]
  },
  '1-4': {
    quizQuestions: [
      {
        id: 1,
        question: '储采比（R/P）是什么？',
        options: [
          '储量与产量的比值',
          '剩余储量除以年度开采量',
          '开采量与储量的比值',
          '年度产量的平均值'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: '中国煤炭的储采比约为多少年？',
        options: [
          '37年',
          '147年',
          '200年',
          '407年'
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: '"绿氢"是指通过什么方式制取的氢气？',
        options: [
          '工业副产气',
          '化石燃料制取',
          '可再生能源或核能制取',
          '煤炭气化'
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: '全球可再生能源发电占比已达到约多少？',
        options: [
          '5%',
          '12%',
          '25%',
          '35%'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: '能源革命的关键取决于什么？',
        options: [
          '政策支持',
          '资金投入',
          '科技突破',
          '国际合作'
        ],
        correctAnswer: 2
      }
    ],
    resourceLinks: [
      {
        title: '碳达峰碳中和行动方案',
        description: '中国实现双碳目标的路径与措施',
        url: 'http://www.qikan.com.cn/'
      },
      {
        title: '氢能产业发展白皮书',
        description: '氢能技术现状与未来发展趋势',
        url: 'http://www.qikan.com.cn/'
      },
      {
        title: '新能源材料与技术',
        description: '新能源领域的材料创新与技术进步',
        url: 'http://www.qikan.com.cn/'
      }
    ]
  }
};
