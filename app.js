// Imports
const axios = require('axios')

const fs = require('fs');

// API key
const API_KEY = 'VU0SACNDUU6QFPMGP8E5U' // Get your API key here: https://app.rytr.me/account/api-access

// API URL
const API_URL = 'https://api.rytr.me/v1'


//const cheerio = require('cheerio');
const keword="בניית אתרים";

let main_text="";

    const mainTitle="<h1[\s\S]*?rtl..([\s\S]*?)</h1>";
    const h3title="<h3[\s\S]*?rtl..([\s\S]*?)</h3>";
    const keywords="<em>([\s\S]*?)</em>";

    const expressions = [mainTitle, h3title, keywords];
    

    const MakeArticle = async () => {
        const languageIdHebrew = '607c7c211ebe15000cbbc7b8';
        const useCaseBlogOutLineIdeaId = '60a40cf5da9d76000ccc2828';
        const useCaseBlogSectionWritingId = '60584cf2c2cdaa000c2a7954';
        const toneIdInformative = '60ff8d3afc873e000c08e8b2';
      
        const useCaseBlogOutLine = await useCaseDetail({ useCaseId: useCaseBlogOutLineIdeaId });
        const useCaseBlogSection = await useCaseDetail({ useCaseId: useCaseBlogSectionWritingId });
      
        const outputs1 = await ryte({
          languageId: languageIdHebrew,
          toneId: toneIdInformative,
          useCaseId: useCaseBlogOutLineIdeaId,
          inputContexts: {
            [useCaseBlogOutLine.contextInputs[0].keyLabel]:'מציאות מדומה',
          },
        });
        console.log("outputs1:", outputs1);
      
        const htmlContent = `<h1 style=";text-align:right;direction:rtl">בחינת האפשרויות של מציאות מדומה: כיצד היא יכולה לשנות את חיינו ועבודתנו?</h1><h3 style=";text-align:right;direction:rtl"> מבוא: מהי מציאות מדומה וכיצד היא פועלת בפועל?</h3><p style=";text-align:right;direction:rtl"> <em>מילות מפתח: מציאות מדומה, טכנולוגיית VR, אוזניות VR, חוויה סוחפת</em></p><h3 style=";text-align:right;direction:rtl"> מבט על 5 דרכים שבהן ניתן להשתמש במציאות מדומה בתעשיות</h3><p style=";text-align:right;direction:rtl"> <em>מילות מפתח: מקרי שימוש במציאות מדומה, VR בייצור, חינוך למציאות מדומה, יישומי מציאות מדומה בתחום הבריאות, VR בבידור)</em></p><h3 style=";text-align:right;direction:rtl"> כיצד המציאות המדומה משנה את הדרך בה אנו מתקשרים עם הטכנולוגיה ועם זה</h3><p style=";text-align:right;direction:rtl"> <em>מילות מפתח: טכנולוגיית אינטראקציה VR, כלי שיתוף פעולה VR, תוכנת מודלים תלת מימדיים)</em></p><h3 style=";text-align:right;direction:rtl"> היתרונות של שימוש ב-VR עבור עסקים וארגונים</h3><p style=";text-align:right;direction:rtl"> <em>מילות מפתח: מערכת הדרכה למציאות מדומה, יתרונות הכשרת עובדים של טכנולוגיית VR)</em></p><h3 style=";text-align:right;direction:rtl"> מהם הכלים והפלטפורמות הטובות ביותר של VR הזמינים כעת?</h3><p style=";text-align:right;direction:rtl"> <em>מילות מפתח: פלטפורמות המציאות המדומה הטובות ביותר, פלטפורמת VR ניסיון חינם)</em></p><h3 style=";text-align:right;direction:rtl"> סיכום</h3><p style=";text-align:right;direction:rtl"></p><p style="color: grey;text-align:right;direction:rtl"> <em>💡 טיפ: כדי לכתוב תוכן ידידותי לקידום אתרים, בחר כל כותרת מקטע יחד עם מילות מפתח והשתמש באפשרות &quot;פסקה&quot; מהרצועה. יותר תיאורי הכותרות עם מילות מפתח, יותר טוב.</em> <a href='https://rytr.me/resources#how-to-write-long-form-blogs-amp-articles-using-rytr'><em>למידע נוסף →</em></a></p>`;
        
        const regex = /<h3[^>]*>(.*?)<\/h3>.*?<em>(.*?)<\/em>/gs;
        let match;
        let index = 1;
        
        while ((match = regex.exec(htmlContent)) !== null) {
          const head = match[1].trim();
          const words = match[2].trim();
        
          const outputs = await ryte({
            languageId: languageIdHebrew,
            toneId: toneIdInformative,
            useCaseId: useCaseBlogSectionWritingId,
            inputContexts: {
              [useCaseBlogSection.contextInputs[0].keyLabel]: head,
              [useCaseBlogSection.contextInputs[1].keyLabel]: words,
            },
          });
        
          console.log('outputs:', outputs);
          index++;
        }
      }
      
      MakeArticle();
      




// Language list
async function languageList() {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${API_URL}/languages`,
      headers: {
        Authentication: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    return data ? data.data : null
  } catch (error) {
    console.log(error)
  }

  return null
}
// Tone list
async function toneList() {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${API_URL}/tones`,
      headers: {
        Authentication: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    return data ? data.data : null
  } catch (error) {
    console.log(error)
  }

  return null
}
// Use case list
async function useCaseList() {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${API_URL}/use-cases`,
      headers: {
        Authentication: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    return data ? data.data : null
  } catch (error) {
    console.log(error)
  }

  return null
}
// Use case detail
async function useCaseDetail({ useCaseId }) {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${API_URL}/use-cases/${useCaseId}`,
      headers: {
        Authentication: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    return data ? data.data : null
  } catch (error) {
    console.log(error)
  }

  return null
}
// Generate content
async function ryte({ languageId, toneId, useCaseId, inputContexts }) {
  try {
    const { data } = await axios({
      method: 'post',
      url: `${API_URL}/ryte`,
      headers: {
        Authentication: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      data: {
        languageId,
        toneId,
        useCaseId,
        inputContexts,
        variations: 1,
        userId: 'USER1',
        format: 'html',
      },
    })

    return data ? data.data : null
  } catch (error) {
    console.log(error)
  }

  return null
}
// Usage
async function usage() {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${API_URL}/usage`,
      headers: {
        Authentication: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    return data ? data.data : null
  } catch (error) {
    console.log(error)
  }

  return null
}
;(async () => {
  // Get languages
  if (false) {
    const languages = await languageList()
    console.log('languages', languages)
  }
  // Get tones
  if (false) {
    const tones = await toneList()
    console.log('tones', tones)
  }
  // Get use-cases
  if (false) {
    const useCases = await useCaseList()
    console.log('useCases', useCases)
  }
  // Get use-case detail
  if (false) {
    // Example use case: Magic command
    const useCaseIdMagicCommand = '60ed7113732a5b000cf99e8e'
    const useCaseIdBlogId="60a40cf5da9d76000ccc2828"
    const useCase = await useCaseDetail({ useCaseId: useCaseIdBlogId })
    console.log('useCase', useCase)
  }
//קוד שמייצר פסקה לפי כותרת ומילת מפתח 


if (false)
  {
    const useCaseSectionWriting="60584cf2c2cdaa000c2a7954";
    const useCaseIdBlogSection = await useCaseDetail({ useCaseId: useCaseSectionWriting });
    const languageIdHebrew="607c7c211ebe15000cbbc7b8";
    const toneIdInformative="60ff8d3afc873e000c08e8b2";

    const outputs = await ryte({
      languageId: languageIdHebrew,
      toneId: toneIdInformative,
      useCaseId: useCaseSectionWriting,
      inputContexts: {
        [useCaseIdBlogSection.contextInputs[0].keyLabel]:
          ' מבוא: מהו פיתוח אתרים ומהם הסוגים השונים שלו? '
      ,
      [useCaseIdBlogSection.contextInputs[1].keyLabel]:
          ' מילות מפתח: הגדרת פיתוח אתרים, סוגי פיתוח אתרים, תהליך פיתוח אתרים'
      }
    })
    console.log('outputs', outputs);
 
  }




// קוד שמייצר תוכן על פי מילת מפתח 
  if (false)
  {
    const useCaseIdBlogId="60a40cf5da9d76000ccc2828";
    const useCaseIdBlog = await useCaseDetail({ useCaseId: useCaseIdBlogId });
    const languageIdHebrew="607c7c211ebe15000cbbc7b8";
    const toneIdInformative="60ff8d3afc873e000c08e8b2";

    const outputs = await ryte({
      languageId: languageIdHebrew,
      toneId: toneIdInformative,
      useCaseId: useCaseIdBlogId,
      inputContexts: {
        [useCaseIdBlog.contextInputs[0].keyLabel]:
          'בניית אתרים',
      },
    })
   // console.log('outputs', outputs);
    main_text=outputs;
    console.log(main_text);
  }






  // Generate content
  if (false) {
    // Step 1 - Identify language ID (use language list API endpoint)
    const languageIdEnglish = '607adac76f8fe5000c1e636d' // English

    // Step 2 - Identify tone ID (use tone list API endpoint)
    const toneIdConvincing = '60572a639bdd4272b8fe358b' // Convincing

    if (true) {
      // Step 3 - Identify use case ID (use use-case list API endpoint)
      const useCaseIdMagicCommand = '60ed7113732a5b000cf99e8e' // Magic command

      // Step 4 - Identify use case details (use use-case detail API endpoint)
      const useCaseMagicCommand = await useCaseDetail({
        useCaseId: useCaseIdMagicCommand,
      })

      // Step 5 - Generate content (use ryte API endpoint)
      const outputs = await ryte({
        languageId: languageIdEnglish,
        toneId: toneIdConvincing,
        useCaseId: useCaseIdMagicCommand,
        inputContexts: {
          [useCaseMagicCommand.contextInputs[0].keyLabel]:
            'Write an email for taking a sick leave',
        },
      })

      console.log('outputs', outputs)
    }

    if (false) {
      // Step 3 - Identify use case ID (use use-case list API endpoint)
      const useCaseIdJobDescription = '60586b31cdebbb000c21058d' // Job description

      // Step 4 - Identify use case details (use use-case detail API endpoint)
      const useCaseJobDescription = await useCaseDetail({
        useCaseId: useCaseIdJobDescription,
      })

      // Step 5 - Generate content (use ryte API endpoint)
      const outputs = await ryte({
        languageId: languageIdEnglish,
        toneId: toneIdConvincing,
        useCaseId: useCaseIdJobDescription,
        inputContexts: {
          [useCaseJobDescription.contextInputs[0].keyLabel]: 'Product Manager',
        },
      })

      console.log('outputs', outputs)
    }

    if (false) {
      // Step 3 - Identify use case ID (use use-case list API endpoint)
      const useCaseIdBlogSection = '60584cf2c2cdaa000c2a7954' // Blog section writing

      // Step 4 - Identify use case details (use use-case detail API endpoint)
      const useCaseBlogSection = await useCaseDetail({
        useCaseId: useCaseIdBlogSection,
      })

      // Step 5 - Generate content (use ryte API endpoint)
      const outputs = await ryte({
        languageId: languageIdEnglish,
        toneId: toneIdConvincing,
        useCaseId: useCaseIdBlogSection,
        inputContexts: {
          [useCaseBlogSection.contextInputs[0].keyLabel]:
            'Role of AI Writers in the Future of Copywriting',
          [useCaseBlogSection.contextInputs[1].keyLabel]:
            'ai writer, blog generator, best writing software',
        },
      })

      console.log('outputs', outputs)
    }
  }

  // Get usage (for current billing period only)
  if (false) {
    const data = await usage()

    console.log('data', data)
  }
})()
