// Imports
const axios = require('axios')

const fs = require('fs');

// API key
const API_KEY = 'VU0SACNDUU6QFPMGP8E5U' // Get your API key here: https://app.rytr.me/account/api-access

// API URL
const API_URL = 'https://api.rytr.me/v1'



let main_text="";

    const mainTitle="<h1[\s\S]*?rtl..([\s\S]*?)</h1>";
    const h3title="<h3[\s\S]*?rtl..([\s\S]*?)</h3>";
    const keywords="<em>([\s\S]*?)</em>";

    const expressions = [mainTitle, h3title, keywords];



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


if (true)
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
  if (true)
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
