import { type LessonsData } from './Pages/Lessons/types';

export const lessonData: LessonsData = {
  A1: {
    Grammar: {
      'present-simple-to-be': {
        title: "Present Simple 'to be'",
        id: 1,
        content:
          "## Present simple forms of '**to be**'\n The verb **'to be'** is one of the most important verbs in English. It is used to describe people, things, feelings, professions, nationality, location, and states. \n| Subject | Form | Positive | Negative | Question |\n|---------|------|---------|----------|----------|\n| I | am | I am | I am not | Am I |\n| You | are | You are | You are not | Are you |\n| He\\She\\It | is | She is | He is not | Is it |\n| We | are | We are | We are not | Are we |\n| They | are | They are | They are not | Are they |\n\n As you may notice we use this structure - ***Subject + verb***\n\n ***Subject*** is someone or something that completes an action.\n\n ### Main **subjects** \n - **I** - we use when you talk about yourself. \n\n\t*Example* - **I am happy**\n - **You** - used when you talk to one person or many people. \n\n\t*Example* - **You are my friend**\n - **He** - used for a man or boy.\n\n\t*Example* - **He is my brother**\n - **She** - used for a woman or girl. \n\n\t*Example* - **She is my teacher**\n - **It** - used for objects, animals, places, or situations. \n\n\t*Example* - **It is a sunny day**\n - **We** - used when you talk about yourself and other people together. \n\n\t*Example* - **We are classmates**\n - **They** - used for people, animals, or things in plural. \n\n\t*Example* - **They are in the park** \n ### Short **forms** \n |  | I | You | We | They | He-She-It |\n|---|---|-----|----|------|-----------|\n| Positive | I'm | You're | We're | They're | He's |\n| Negative | I'm not | You're not \\ aren't | We're not \\ aren't | They're not \\ aren't | She's not \\ isn't |",
        examples: [
          '### Examples',
          '\n #### **Subject - I**\n - I am a doctor\n - I am hungry\n - I am a teacher',
          '\n***\n #### **Subject - You**\n - You are beautiful\n - You are too young\n - You are the best',
          "\n***\n #### **Subject - He\\She\\It**\n - He is my friend\n - She is my brother's wife\n - It is my book",
          '\n***\n#### **Subject - We**\n- We are students\n- We are from Ukraine\n- We are happy\n',
          '\n***\n#### **Subject - They**\n- They are my friends\n- They are teachers\n- They are at home',
        ],
        exercises: {
          text: [
            {
              question: 'I ... a teacher. \n',
              options: ['...'],
              answer: 'am',
            },
            {
              question: 'You ... very kind.\n',
              options: ['...'],
              answer: 'are',
            },
            {
              question: 'He ... my friend.\n',
              options: ['...'],
              answer: 'is',
            },
            {
              question: 'We ... happy today.\n',
              options: ['...'],
              answer: 'are',
            },
            {
              question: 'She ... not at home.\n',
              options: ['...'],
              answer: 'is',
            },
            {
              question: 'They ... students.\n',
              options: ['...'],
              answer: 'are',
            },
            {
              question: 'It ... a sunny day.\n',
              options: ['...'],
              answer: 'is',
            },
            {
              question: 'I ... tired today.\n',
              options: ['...'],
              answer: 'am',
            },
            {
              question: 'You ... late for the meeting.\n',
              options: ['...'],
              answer: 'are',
            },
            {
              question: 'He ... a doctor.\n',
              options: ['...'],
              answer: 'is',
            },
            {
              question: 'She ... very friendly.\n',
              options: ['...'],
              answer: 'is',
            },
            {
              question: 'We ... in the park.\n',
              options: ['...'],
              answer: 'are',
            },
            {
              question: 'They ... ready for the test.\n',
              options: ['...'],
              answer: 'are',
            },
            {
              question: 'It ... cold outside.\n',
              options: ['...'],
              answer: 'is',
            },
          ],
          options: [
            {
              question: 'I ... a teacher',
              options: ['', 'am', 'is', 'are'],
              answer: 'am',
            },
            {
              question: 'They ... ready for the test.\n',
              options: ['', 'am', 'are'],
              answer: 'are',
            },
            {
              question: 'It ... cold outside.\n',
              options: ['', 'is', 'am', 'are'],
              answer: 'is',
            },
            {
              question: 'I ... at home now.\n',
              options: ['', 'am', 'is', 'are'],
              answer: 'am',
            },
            {
              question: 'You ... my best friend.\n',
              options: ['', 'am', 'is', 'are'],
              answer: 'are',
            },
            {
              question: 'He ... very busy today.\n',
              options: ['', 'am', 'is', 'are'],
              answer: 'is',
            },
            {
              question: 'She ... not hungry.\n',
              options: ['', 'am', 'is', 'are'],
              answer: 'is',
            },
            {
              question: 'We ... ready to start.\n',
              options: ['', 'Am', 'Is', 'Are'],
              answer: 'Are',
            },
            {
              question: 'They ... in the classroom.\n',
              options: ['', 'am', 'is', 'are'],
              answer: 'are',
            },
            {
              question: 'It ... raining outside?\n',
              options: ['', 'Am', 'Is', 'Are'],
              answer: 'Is',
            },
            {
              question: 'I ... very happy today.\n',
              options: ['', 'am', 'is', 'are'],
              answer: 'am',
            },
            {
              question: 'You ... late for class.\n',
              options: ['', 'am', 'is', 'are'],
              answer: 'are',
            },
            {
              question: 'He ... in the kitchen.\n',
              options: ['', 'am', 'is', 'are'],
              answer: 'is',
            },
          ],
          wordwall: [
            {
              question: 'string',
              answer: 'string',
              link: 'https://wordwall.net/embed/ec1297bce4bc4c4ebcd37a7229685dc7?themeId=1&templateId=36&fontStackId=0',
            },
          ],
        },
        exerciseInfo:
          "## Input the correct form of Present Simple ***'to be'***",
        audioUrl: '...',
        videoUrl: 'https://www.youtube.com/watch?v=2JuEB2AKQbc',
        tips: ['...'],
        links: [{ text: '...', url: '...' }],
      },
      'simple-word-order': {
        title: 'Simple word order',
        id: 2,
        content:
          "## ***Subject*** + ***verb*** + ***object*** + *(place)* + *(time)* \n In the **Present simple 'to be'** topic we already mentioned this structure, but here we will dive deep into that.\n\n Let's identify each part.\n - **Subject** - *someone or something*\n - **Verb** - *action that someone or something does*\n - **Object** - *the person or thing that receives the action*\n - **Place** - *where*\n - **Time** - *when*. \n\n ",
        examples: [
          '### Examples',
          '\n #### **Subject + Verb + Object**\n - I like apples\n - She reads a book\n - We watch movies',
          '\n***\n #### **Subject + Verb + Place**\n - I live in London\n - She works at school\n - They stay at home',
          '\n***\n #### **Subject + Verb + Time**\n - He goes to work every day\n - We play football on Sundays\n - I wake up at 7 a.m.',
          '\n***\n #### **Subject + Verb + Object + Place + Time**\n - I eat breakfast at home every morning\n - She reads a book in the library every day\n - We watch movies at the cinema on Saturdays',
        ],
        exercises: {
          text: [
            {
              question: 'a sandwich / ate / for lunch / I / yesterday - ... \n',
              options: ['...'],
              answer: 'I ate a sandwich for lunch yesterday',
            },
            {
              question:
                'at the park / play / we / football / every Saturday - ... \n',
              options: ['...'],
              answer: 'We play football at the park every Saturday',
            },
            {
              question: 'books / reads / she / in the evening / many - ... \n',
              options: ['...'],
              answer: 'She reads many books in the evening',
            },
            {
              question: 'in the kitchen / cooking / is / my mother - ... \n',
              options: ['...'],
              answer: 'My mother is cooking in the kitchen',
            },
            {
              question:
                'the bus / takes / every morning / he / to school - ... \n',
              options: ['...'],
              answer: 'He takes the bus to school every morning',
            },
            {
              question: 'watch / TV / we / at night / often - ... \n',
              options: ['...'],
              answer: 'We often watch TV at night',
            },
            {
              question:
                'to music / listens / she / carefully / in class - ... \n',
              options: ['...'],
              answer: 'She listens to music carefully in class',
            },
            {
              question: 'at the café / a cake / I / yesterday / ate - ... \n',
              options: ['...'],
              answer: 'I ate a cake at the café yesterday',
            },
            {
              question: 'walks / every morning / dog / he / with his - ... \n',
              options: ['...'],
              answer: 'He walks his dog every morning',
            },
            {
              question: 'homework / does / in the evening / we - ... \n',
              options: ['...'],
              answer: 'We do homework in the evening',
            },
            {
              question:
                'in the garden / flowers / water / she / every day - ... \n',
              options: ['...'],
              answer: 'She waters flowers in the garden every day',
            },
            {
              question: 'movie / watch / tonight / will / we / a - ... \n',
              options: ['...'],
              answer: 'We will watch a movie tonight',
            },
            {
              question:
                'for breakfast / eats / cereal / he / every day - ... \n',
              options: ['...'],
              answer: 'He eats cereal for breakfast every day',
            },
            {
              question:
                'at the library / studies / English / she / every weekend - ... \n',
              options: ['...'],
              answer: 'She studies English at the library every weekend',
            },
            {
              question:
                'birthday / give / I / a gift / my friend / for - ... \n',
              options: ['...'],
              answer: 'I give my friend a gift for their birthday',
            },
          ],

          options: [
            {
              question: 'I like ...',
              options: [
                '',
                'very much pizza',
                'pizza very much',
                'much pizza very',
                'very pizza much',
              ],
              answer: 'pizza very much',
            },
            {
              question: 'She reads ...',
              options: [
                '',
                'every day books',
                'books day every',
                'books every day',
                'day every books',
              ],
              answer: 'books every day',
            },
            {
              question: 'They play ...',
              options: [
                '',
                'on Sundays football',
                'Sundays on football',
                'football on Sundays',
                'football Sundays on',
              ],
              answer: 'football on Sundays',
            },
            {
              question: 'I am ...',
              options: [
                '',
                'now at home',
                'home now at',
                'at home now',
                'at now home',
              ],
              answer: 'at home now',
            },
            {
              question: 'We visit ...',
              options: [
                '',
                'grandparents our every weekend',
                'our grandparents every weekend',
                'weekend every our grandparents',
                'every weekend our grandparents',
              ],
              answer: 'our grandparents every weekend',
            },
            {
              question: 'He drinks ...',
              options: [
                '',
                'coffee morning in the',
                'morning coffee in the',
                'coffee in the morning',
                'in the morning coffee',
              ],
              answer: 'coffee in the morning',
            },
            {
              question: 'They watch ...',
              options: [
                'TV at night',
                'at night TV',
                'night TV at',
                'TV night at',
                '',
              ],
              answer: 'TV at night',
            },
            {
              question: 'She goes ...',
              options: [
                '',
                'to school every day',
                'every day to school',
                'to every day school',
                'school every day to',
              ],
              answer: 'to school every day',
            },
            {
              question: 'We have lunch ...',
              options: ['', 'at noon', 'noon at', 'at at noon', 'noon'],
              answer: 'at noon',
            },
            {
              question: 'I usually drink ...',
              options: [
                '',
                'tea in the morning',
                'in the morning tea',
                'morning tea in the',
                'tea morning in the',
              ],
              answer: 'tea in the morning',
            },
          ],
          wordwall: [
            {
              question: 'string',
              answer: 'string',
              link: 'https://wordwall.net/ru/embed/f8a4686377e3485db977c8d5c699f458?themeId=52&templateId=72&fontStackId=0',
            },
          ],
        },
        exerciseInfo: '## Input the right **word order**',
        audioUrl: '...',
        videoUrl: 'https://www.youtube.com/watch?v=3a8H6JDI_aE',
        tips: ['...'],
        links: [{ text: '...', url: '...' }],
      },
    },
    Reading: {
      lesson1: {
        title: '',
        id: 0,
        content: '',
        examples: [],
        exercises: {
          text: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          options: [
            {
              question: 'I ... a teacher',
              options: ['am', 'is', 'are'],
              answer: 'string',
            },
          ],
          wordwall: [
            {
              question: 'string',
              answer: 'string',
            },
          ],
        },
        exerciseInfo: '',
        audioUrl: '',
        videoUrl: '',
        tips: [],
        links: [{ text: '...', url: '...' }],
      },
    },
    Vocabulary: {
      lesson1: {
        title: '',
        id: 0,
        content: '',
        examples: [],
        exercises: {
          text: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          options: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          wordwall: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
        },
        exerciseInfo: '',
        audioUrl: '',
        videoUrl: '',
        tips: [],
        links: [{ text: '...', url: '...' }],
      },
    },
    Listening: {
      lesson1: {
        title: '',
        id: 0,
        content: '',
        examples: [],
        exercises: {
          text: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          options: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          wordwall: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
        },
        exerciseInfo: '',
        audioUrl: '',
        videoUrl: '',
        tips: [],
        links: [{ text: '...', url: '...' }],
      },
    },
  },
  A2: {
    Grammar: {
      'present-simple-to-be': {
        title: "Present Simple 'to be'",
        id: 1,
        content: '',
        examples: [''],
        exercises: {
          text: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          options: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          wordwall: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
        },
        exerciseInfo: '',
        audioUrl: '...',
        videoUrl: '',
        tips: ['...'],
        links: [{ text: '...', url: '...' }],
      },
    },
    Reading: {
      lesson1: {
        title: '',
        id: 0,
        content: '',
        examples: [],
        exercises: {
          text: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          options: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          wordwall: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
        },
        exerciseInfo: '',
        audioUrl: '',
        videoUrl: '',
        tips: [],
        links: [{ text: '...', url: '...' }],
      },
    },
    Vocabulary: {
      lesson1: {
        title: '',
        id: 0,
        content: '',
        examples: [],
        exercises: {
          text: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          options: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          wordwall: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
        },
        exerciseInfo: '',
        audioUrl: '',
        videoUrl: '',
        tips: [],
        links: [{ text: '...', url: '...' }],
      },
    },
    Listening: {
      lesson1: {
        title: '',
        id: 0,
        content: '',
        examples: [],
        exercises: {
          text: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          options: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          wordwall: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
        },
        exerciseInfo: '',
        audioUrl: '',
        videoUrl: '',
        tips: [],
        links: [{ text: '...', url: '...' }],
      },
    },
  },
  B1: {
    Grammar: {
      'present-simple-to-be': {
        title: '',
        id: 1,
        content: '',
        examples: [''],
        exercises: {
          text: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          options: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          wordwall: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
        },
        exerciseInfo: '',
        audioUrl: '...',
        videoUrl: '',
        tips: ['...'],
        links: [{ text: '...', url: '...' }],
      },
    },
    Reading: {
      lesson1: {
        title: '',
        id: 0,
        content: '',
        examples: [],
        exercises: {
          text: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          options: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          wordwall: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
        },
        exerciseInfo: '',
        audioUrl: '',
        videoUrl: '',
        tips: [],
        links: [{ text: '...', url: '...' }],
      },
    },
    Vocabulary: {
      lesson1: {
        title: '',
        id: 0,
        content: '',
        examples: [],
        exercises: {
          text: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          options: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          wordwall: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
        },
        exerciseInfo: '',
        audioUrl: '',
        videoUrl: '',
        tips: [],
        links: [{ text: '...', url: '...' }],
      },
    },
    Listening: {
      lesson1: {
        title: '',
        id: 0,
        content: '',
        examples: [],
        exercises: {
          text: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          options: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          wordwall: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
        },
        exerciseInfo: '',
        audioUrl: '',
        videoUrl: '',
        tips: [],
        links: [{ text: '...', url: '...' }],
      },
    },
  },
  B2: {
    Grammar: {
      'present-simple-to-be': {
        title: '',
        id: 1,
        content: '',
        examples: [''],
        exercises: {
          text: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          options: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          wordwall: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
        },
        exerciseInfo: '',
        audioUrl: '...',
        videoUrl: '',
        tips: ['...'],
        links: [{ text: '...', url: '...' }],
      },
    },
    Reading: {
      lesson1: {
        title: '',
        id: 0,
        content: '',
        examples: [],
        exercises: {
          text: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          options: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          wordwall: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
        },
        exerciseInfo: '',
        audioUrl: '',
        videoUrl: '',
        tips: [],
        links: [{ text: '...', url: '...' }],
      },
    },
    Vocabulary: {
      lesson1: {
        title: '',
        id: 0,
        content: '',
        examples: [],
        exercises: {
          text: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          options: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          wordwall: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
        },
        exerciseInfo: '',
        audioUrl: '',
        videoUrl: '',
        tips: [],
        links: [{ text: '...', url: '...' }],
      },
    },
    Listening: {
      lesson1: {
        title: '',
        id: 0,
        content: '',
        examples: [],
        exercises: {
          text: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          options: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
          wordwall: [
            {
              question: 'string',
              options: ['...'],
              answer: 'string',
            },
          ],
        },
        exerciseInfo: '',
        audioUrl: '',
        videoUrl: '',
        tips: [],
        links: [{ text: '...', url: '...' }],
      },
    },
  },
};
