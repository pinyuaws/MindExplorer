// === Mind Explorer — Script ===
// Global State
let currentLang = 'en';
let drawnPhotoNumber = null;
let drawnWord = null;

// === Language Content ===
const content = {
    "en": {
        label: "English",
        heroTitle: "Mind Explorer",
        heroSubtitle: "Explore your inner world through images and words.",
        welcomeText: `<p>This is a website to help you explore your own thoughts. When you encounter things in life that are difficult to decide, this website will help you filter out all distracting thoughts and return to the decision your subconscious most prefers, allowing you to truly examine your inner heart, gain a deeper understanding of what you truly want in difficult situations, and help you face challenges more easily.</p><p>If this is your first time using this website, you can start with Practice to train your imagination, creativity, and association abilities, so you can more precisely discover your inner thoughts during the formal exploration.</p>`,
        exploreTitle: "Explore",
        exploreDesc: "Discover your inner mind",
        practiceTitle: "Practice",
        practiceDesc: "Train your imagination",
        howTitle: "How It Works",
        step1: "Draw an Image Card",
        step2: "Draw a Word Card",
        step3: "Discover Your Story",
        navHome: "Home", navExplore: "Explore", navPractice: "Practice",
        comingSoon: "Coming soon...",
        practiceIntro: "This practice will effectively help you train your imagination and creativity, as well as your ability to associate images with words, helping you better explore your own thoughts. Next, please draw an image card.",
        afterPhoto: "Based on this image, please describe a short story of about 1 minute. Please describe in detail, including the people, events, time, place, and objects you see. Feel free to create background information if needed. When you're done, press Next.",
        next: "Next",
        beforeWord: "Now, please draw a word card.",
        afterWord: "Based on the story you told earlier, please continue extending it, but connect the meaning of \"{word}\" as the overall outcome or judgment of the story. How do you think the story should develop, or what would you add? Please explain in about 1 minute.",
        startOver: "Start Over",
        tapHint: "Tap the cards to draw"
    },
    "zh-TW": {
        label: "繁體中文",
        heroTitle: "Mind Explorer",
        heroSubtitle: "透過圖像與文字，探索你的內在世界。",
        welcomeText: `<p>這是幫助你探索自己想法的網站，當你遇到生活中難以決定的事情時，這個網站會幫助你篩掉所有的雜念，回到潛意識中你最偏好的決定，讓你能夠真正檢視你的本心，更深刻了解你在困境中真正想要的選擇，幫助你更容易面對挑戰與困難。</p><p>如果你是第一次使用這個網站，可以先按練習，來訓練相關的想像力、創造力與聯想能力，這樣才能在正式探索中更精準的發覺自己內心的想法。</p>`,
        exploreTitle: "探索",
        exploreDesc: "探索你的內心世界",
        practiceTitle: "練習",
        practiceDesc: "訓練你的想像力",
        howTitle: "如何使用",
        step1: "抽一張圖像卡",
        step2: "抽一張文字卡",
        step3: "發現你的故事",
        navHome: "首頁", navExplore: "探索", navPractice: "練習",
        comingSoon: "即將推出...",
        practiceIntro: "這個練習將有效幫助你訓練你的想像與創造力，以及圖案與文字的聯想能力，來協助你更能探索自己的想法，接下來會請你先抽出一張圖樣卡。",
        afterPhoto: "請您根據這個圖案，描述一個1分鐘左右的小故事，請盡量詳細描述，包含你看到圖樣的人、事、時、地、物，必要時可以自己創造背景資訊。等你描述完，請按下一步。",
        next: "下一步",
        beforeWord: "現在，請抽出一張文字卡。",
        afterWord: "請你依據之前所說明的故事繼續延伸，但是要連結這個「{word}」涵義當作故事的整體結果或者評斷，你認為整個故事應該要怎麼發展或者有什麼補充，請用約 1 分鐘說明內容。",
        startOver: "重新開始",
        tapHint: "點擊卡牌抽取"
    },
    "fr": {
        label: "Français",
        heroTitle: "Mind Explorer",
        heroSubtitle: "Explorez votre monde intérieur à travers images et mots.",
        welcomeText: `<p>Ceci est un site pour explorer l'esprit. Lorsque vous rencontrez des situations difficiles, ce site vous aidera à filtrer les pensées distrayantes et à revenir à la décision que votre subconscient préfère, vous permettant d'examiner véritablement votre cœur intérieur et d'affronter les défis plus facilement.</p><p>Ce site peut également servir de plateforme pour l'imagination et la créativité, entraînant vos capacités d'association pour affiner votre pensée quotidienne.</p>`,
        exploreTitle: "Explorer",
        exploreDesc: "Découvrez votre esprit intérieur",
        practiceTitle: "Pratiquer",
        practiceDesc: "Entraînez votre imagination",
        howTitle: "Comment ça marche",
        step1: "Tirez une carte image",
        step2: "Tirez une carte mot",
        step3: "Découvrez votre histoire",
        navHome: "Accueil", navExplore: "Explorer", navPractice: "Pratiquer",
        comingSoon: "Bientôt disponible...",
        practiceIntro: "Cet exercice vous aidera efficacement à entraîner votre imagination et créativité, ainsi que votre capacité à associer images et mots, pour mieux explorer vos propres pensées. Ensuite, tirez une carte image.",
        afterPhoto: "En vous basant sur cette image, décrivez une courte histoire d'environ 1 minute. Décrivez en détail, y compris les personnes, événements, temps, lieu et objets que vous voyez. N'hésitez pas à créer des informations contextuelles si nécessaire. Quand vous avez terminé, appuyez sur Suivant.",
        next: "Suivant",
        beforeWord: "Maintenant, tirez une carte de mots.",
        afterWord: "Continuez à développer votre histoire précédente, mais connectez le sens de « {word} » comme résultat global ou jugement de l'histoire. Comment pensez-vous que l'histoire devrait évoluer, ou qu'ajouteriez-vous ? Expliquez en environ 1 minute.",
        startOver: "Recommencer",
        tapHint: "Touchez les cartes pour tirer"
    },
    "es": {
        label: "Español",
        heroTitle: "Mind Explorer",
        heroSubtitle: "Explora tu mundo interior a través de imágenes y palabras.",
        welcomeText: `<p>Este es un sitio para explorar la mente. Cuando encuentres situaciones difíciles de decidir, este sitio te ayudará a filtrar pensamientos distractores y volver a la decisión que tu subconsciente prefiere, permitiéndote examinar tu corazón interior y enfrentar desafíos con mayor facilidad.</p><p>También puede servir como plataforma de práctica para la imaginación y creatividad, entrenando tus habilidades de asociación para expandir tu pensamiento en la vida diaria.</p>`,
        exploreTitle: "Explorar",
        exploreDesc: "Descubre tu mente interior",
        practiceTitle: "Practicar",
        practiceDesc: "Entrena tu imaginación",
        howTitle: "Cómo funciona",
        step1: "Saca una carta de imagen",
        step2: "Saca una carta de palabra",
        step3: "Descubre tu historia",
        navHome: "Inicio", navExplore: "Explorar", navPractice: "Practicar",
        comingSoon: "Próximamente...",
        practiceIntro: "Este ejercicio te ayudará eficazmente a entrenar tu imaginación y creatividad, así como tu capacidad para asociar imágenes con palabras, para explorar mejor tus propios pensamientos. A continuación, saca una carta de imagen.",
        afterPhoto: "Basándote en esta imagen, describe una historia corta de aproximadamente 1 minuto. Describe detalladamente, incluyendo las personas, eventos, tiempo, lugar y objetos que ves. Si es necesario, puedes crear información de contexto. Cuando termines, presiona Siguiente.",
        next: "Siguiente",
        beforeWord: "Ahora, saca una carta de palabras.",
        afterWord: "Continúa extendiendo tu historia anterior, pero conecta el significado de \"{word}\" como resultado global o juicio de la historia. ¿Cómo crees que debería desarrollarse la historia, o qué añadirías? Explica en aproximadamente 1 minuto.",
        startOver: "Empezar de nuevo",
        tapHint: "Toca las cartas para sacar"
    },
    "ja": {
        label: "日本語",
        heroTitle: "Mind Explorer",
        heroSubtitle: "イメージと言葉を通じて、内なる世界を探求する。",
        welcomeText: `<p>これは心を探求するウェブサイトです。人生で決断が難しいことに直面したとき、すべての雑念を取り除き、潜在意識が最も好む決断に戻る手助けをします。本心を真に見つめ、困難な状況で本当に望んでいる選択を深く理解し、挑戦に立ち向かえるようにします。</p><p>想像力と創造力の練習プラットフォームとしても機能し、連想能力を訓練して日常生活の思考を広げることができます。</p>`,
        exploreTitle: "探求する",
        exploreDesc: "内なる心を発見する",
        practiceTitle: "練習する",
        practiceDesc: "想像力を鍛える",
        howTitle: "使い方",
        step1: "絵柄カードを引く",
        step2: "言葉カードを引く",
        step3: "あなたの物語を発見する",
        navHome: "ホーム", navExplore: "探求", navPractice: "練習",
        comingSoon: "近日公開...",
        practiceIntro: "この練習は、想像力と創造力、そしてイメージと言葉の連想能力を効果的に訓練し、自分の考えをより深く探るのに役立ちます。次に、絵柄カードを1枚引いてください。",
        afterPhoto: "この画像に基づいて、約1分間の短い物語を描写してください。見える人物、出来事、時間、場所、物をできるだけ詳しく描写してください。必要に応じて背景情報を創作しても構いません。描写し終わったら、次へを押してください。",
        next: "次へ",
        beforeWord: "次に、言葉カードを引いてください。",
        afterWord: "前の物語を引き続き発展させてください。ただし、「{word}」の意味を物語全体の結果や判断として結びつけてください。物語はどう展開すべきか、何を補足しますか？約1分間で説明してください。",
        startOver: "最初から",
        tapHint: "カードをタップして引く"
    },
    "ko": {
        label: "한국어",
        heroTitle: "Mind Explorer",
        heroSubtitle: "이미지와 단어를 통해 내면의 세계를 탐구하세요.",
        welcomeText: `<p>마음을 탐구하는 웹사이트입니다. 삶에서 결정하기 어려운 일에 직면했을 때, 모든 잡념을 걸러내고 잠재의식이 가장 선호하는 결정으로 돌아갈 수 있도록 도와줍니다. 내면의 마음을 검토하고, 어려운 상황에서 진정으로 원하는 선택을 이해하며, 도전을 쉽게 직면할 수 있도록 합니다.</p><p>상상력과 창의력의 연습 플랫폼으로도 활용하여 연상 능력을 훈련하고 일상의 사고를 확장할 수 있습니다.</p>`,
        exploreTitle: "탐구하기",
        exploreDesc: "내면의 마음을 발견하기",
        practiceTitle: "연습하기",
        practiceDesc: "상상력을 훈련하기",
        howTitle: "사용 방법",
        step1: "이미지 카드 뽑기",
        step2: "단어 카드 뽑기",
        step3: "당신의 이야기 발견",
        navHome: "홈", navExplore: "탐구", navPractice: "연습",
        comingSoon: "곧 출시...",
        practiceIntro: "이 연습은 상상력과 창의력, 그리고 이미지와 단어의 연상 능력을 효과적으로 훈련하여 자신의 생각을 더 잘 탐구할 수 있도록 도와줍니다. 다음으로 그림 카드를 한 장 뽑아주세요.",
        afterPhoto: "이 이미지를 바탕으로 약 1분 정도의 짧은 이야기를 묘사해 주세요. 보이는 사람, 사건, 시간, 장소, 사물을 가능한 한 상세히 묘사하세요. 필요하면 배경 정보를 만들어도 됩니다. 끝나면 다음을 눌러주세요.",
        next: "다음",
        beforeWord: "이제 단어 카드를 뽑아주세요.",
        afterWord: "이전 이야기를 계속 발전시키되, \"{word}\"의 의미를 이야기 전체의 결과나 판단으로 연결하세요. 이야기가 어떻게 전개되어야 하거나 무엇을 추가하시겠습니까? 약 1분으로 설명해 주세요.",
        startOver: "다시 시작",
        tapHint: "카드를 탭하여 뽑기"
    },
    "de": {
        label: "Deutsch",
        heroTitle: "Mind Explorer",
        heroSubtitle: "Erkunden Sie Ihre innere Welt durch Bilder und Worte.",
        welcomeText: `<p>Dies ist eine Website zur Erforschung des Geistes. Bei schwierigen Entscheidungen hilft sie, ablenkende Gedanken herauszufiltern und zur bevorzugten Entscheidung Ihres Unterbewusstseins zurückzukehren, damit Sie Ihr inneres Herz prüfen und Herausforderungen leichter begegnen können.</p><p>Die Website dient auch als Übungsplattform für Vorstellungskraft und Kreativität, um Assoziationsfähigkeiten für das tägliche Denken zu trainieren.</p>`,
        exploreTitle: "Erkunden",
        exploreDesc: "Entdecken Sie Ihren inneren Geist",
        practiceTitle: "Üben",
        practiceDesc: "Trainieren Sie Ihre Vorstellungskraft",
        howTitle: "So funktioniert es",
        step1: "Eine Bildkarte ziehen",
        step2: "Eine Wortkarte ziehen",
        step3: "Ihre Geschichte entdecken",
        navHome: "Start", navExplore: "Erkunden", navPractice: "Üben",
        comingSoon: "Demnächst...",
        practiceIntro: "Diese Übung hilft Ihnen effektiv, Vorstellungskraft und Kreativität sowie die Assoziation von Bildern und Wörtern zu trainieren, um Ihre eigenen Gedanken besser zu erkunden. Ziehen Sie als Nächstes eine Bildkarte.",
        afterPhoto: "Beschreiben Sie basierend auf diesem Bild eine kurze Geschichte von etwa 1 Minute. Beschreiben Sie detailliert, einschließlich der Personen, Ereignisse, Zeit, Ort und Objekte. Erstellen Sie bei Bedarf Hintergrundinformationen. Wenn Sie fertig sind, drücken Sie Weiter.",
        next: "Weiter",
        beforeWord: "Ziehen Sie jetzt eine Wortkarte.",
        afterWord: "Erweitern Sie Ihre vorherige Geschichte, aber verbinden Sie die Bedeutung von \"{word}\" als Gesamtergebnis oder Beurteilung der Geschichte. Wie sollte sich die Geschichte entwickeln, oder was würden Sie ergänzen? Erklären Sie in etwa 1 Minute.",
        startOver: "Neu starten",
        tapHint: "Tippen Sie zum Ziehen"
    },
    "ru": {
        label: "Русский",
        heroTitle: "Mind Explorer",
        heroSubtitle: "Исследуйте свой внутренний мир через образы и слова.",
        welcomeText: `<p>Это сайт для исследования разума. При столкновении с трудными решениями он помогает отфильтровать отвлекающие мысли и вернуться к решению, которое подсознание предпочитает больше всего, позволяя изучить внутреннее сердце и легче справляться с трудностями.</p><p>Сайт также служит платформой для практики воображения и творчества, тренируя ассоциативные способности для развития мышления.</p>`,
        exploreTitle: "Исследовать",
        exploreDesc: "Откройте свой внутренний разум",
        practiceTitle: "Практика",
        practiceDesc: "Тренируйте воображение",
        howTitle: "Как это работает",
        step1: "Вытяните карту-образ",
        step2: "Вытяните карту-слово",
        step3: "Откройте свою историю",
        navHome: "Главная", navExplore: "Исследовать", navPractice: "Практика",
        comingSoon: "Скоро...",
        practiceIntro: "Это упражнение эффективно поможет тренировать воображение и креативность, а также способность ассоциировать образы со словами, чтобы лучше исследовать свои мысли. Вытяните карту с изображением.",
        afterPhoto: "На основе этого изображения опишите короткую историю примерно на 1 минуту. Опишите подробно, включая людей, события, время, место и объекты. При необходимости создайте фоновую информацию. Когда закончите, нажмите Далее.",
        next: "Далее",
        beforeWord: "Теперь вытяните карту со словом.",
        afterWord: "Продолжите развивать предыдущую историю, но свяжите значение \"{word}\" как общий результат или оценку истории. Как, по-вашему, должна развиваться история, или что бы вы добавили? Объясните примерно за 1 минуту.",
        startOver: "Начать заново",
        tapHint: "Нажмите на карты"
    },
    "ar": {
        label: "العربية",
        heroTitle: "Mind Explorer",
        heroSubtitle: "استكشف عالمك الداخلي من خلال الصور والكلمات.",
        welcomeText: `<p>هذا موقع لاستكشاف العقل. عندما تواجه أموراً يصعب اتخاذ قرار بشأنها، سيساعدك على تصفية الأفكار المشتتة والعودة إلى القرار الذي يفضله عقلك الباطن، مما يتيح لك فحص قلبك الداخلي ومواجهة التحديات بسهولة.</p><p>يمكن أن يكون أيضاً منصة لممارسة الخيال والإبداع وتدريب قدرات الربط لتوسيع تفكيرك.</p>`,
        exploreTitle: "استكشاف",
        exploreDesc: "اكتشف عقلك الداخلي",
        practiceTitle: "ممارسة",
        practiceDesc: "تدريب خيالك",
        howTitle: "كيف يعمل",
        step1: "اسحب بطاقة صورة",
        step2: "اسحب بطاقة كلمة",
        step3: "اكتشف قصتك",
        navHome: "الرئيسية", navExplore: "استكشاف", navPractice: "ممارسة",
        comingSoon: "قريباً...",
        practiceIntro: "هذا التمرين سيساعدك بفعالية على تدريب خيالك وإبداعك وقدرتك على ربط الصور بالكلمات، لمساعدتك على استكشاف أفكارك بشكل أفضل. اسحب بطاقة صورة.",
        afterPhoto: "بناءً على هذه الصورة، صف قصة قصيرة مدتها حوالي دقيقة. صف بالتفصيل، بما في ذلك الأشخاص والأحداث والزمان والمكان والأشياء التي تراها. يمكنك إنشاء معلومات خلفية إذا لزم الأمر. عندما تنتهي، اضغط التالي.",
        next: "التالي",
        beforeWord: "الآن، اسحب بطاقة كلمات.",
        afterWord: "واصل تطوير قصتك السابقة، لكن اربط معنى \"{word}\" كنتيجة إجمالية أو حكم للقصة. كيف تعتقد أن القصة يجب أن تتطور، أو ماذا ستضيف؟ اشرح في حوالي دقيقة واحدة.",
        startOver: "ابدأ من جديد",
        tapHint: "اضغط على البطاقات للسحب"
    },
    "pt": {
        label: "Português",
        heroTitle: "Mind Explorer",
        heroSubtitle: "Explore seu mundo interior através de imagens e palavras.",
        welcomeText: `<p>Este é um site para explorar a mente. Quando encontrar situações difíceis de decidir, ele ajudará a filtrar pensamentos distrativos e retornar à decisão que seu subconsciente prefere, permitindo examinar seu coração interior e enfrentar desafios com mais facilidade.</p><p>Também serve como plataforma de prática para imaginação e criatividade, treinando habilidades de associação para expandir o pensamento cotidiano.</p>`,
        exploreTitle: "Explorar",
        exploreDesc: "Descubra sua mente interior",
        practiceTitle: "Praticar",
        practiceDesc: "Treine sua imaginação",
        howTitle: "Como funciona",
        step1: "Tire uma carta de imagem",
        step2: "Tire uma carta de palavra",
        step3: "Descubra sua história",
        navHome: "Início", navExplore: "Explorar", navPractice: "Praticar",
        comingSoon: "Em breve...",
        practiceIntro: "Este exercício ajudará efetivamente a treinar sua imaginação e criatividade, bem como a capacidade de associar imagens com palavras, para explorar melhor seus próprios pensamentos. Tire uma carta de imagem.",
        afterPhoto: "Com base nesta imagem, descreva uma história curta de aproximadamente 1 minuto. Descreva detalhadamente, incluindo as pessoas, eventos, tempo, lugar e objetos que você vê. Sinta-se à vontade para criar informações de contexto se necessário. Quando terminar, pressione Próximo.",
        next: "Próximo",
        beforeWord: "Agora, tire uma carta de palavras.",
        afterWord: "Continue estendendo sua história anterior, mas conecte o significado de \"{word}\" como resultado global ou julgamento da história. Como você acha que a história deveria se desenvolver, ou o que acrescentaria? Explique em aproximadamente 1 minuto.",
        startOver: "Recomeçar",
        tapHint: "Toque nas cartas para tirar"
    }
};

// === Words Data (from Words.csv) ===
const wordsData = [
{en:"Joy",zhTW:"喜悅",fr:"Joie",es:"Alegría",ja:"喜び",ko:"기쁨",de:"Freude",ru:"Радость",ar:"فرح",pt:"Alegria"},
{en:"Wonder",zhTW:"驚奇",fr:"Émerveillement",es:"Asombro",ja:"驚き",ko:"경이",de:"Staunen",ru:"Удивление",ar:"دهشة",pt:"Admiração"},
{en:"Curiosity",zhTW:"好奇",fr:"Curiosité",es:"Curiosidad",ja:"好奇心",ko:"호기심",de:"Neugier",ru:"Любопытство",ar:"فضول",pt:"Curiosidade"},
{en:"Hope",zhTW:"希望",fr:"Espoir",es:"Esperanza",ja:"希望",ko:"희망",de:"Hoffnung",ru:"Надежда",ar:"أمل",pt:"Esperança"},
{en:"Gratitude",zhTW:"感恩",fr:"Gratitude",es:"Gratitud",ja:"感謝",ko:"감사",de:"Dankbarkeit",ru:"Благодарность",ar:"امتنان",pt:"Gratidão"},
{en:"Trust",zhTW:"信任",fr:"Confiance",es:"Confianza",ja:"信頼",ko:"신뢰",de:"Vertrauen",ru:"Доверие",ar:"ثقة",pt:"Confiança"},
{en:"Peace",zhTW:"平靜",fr:"Paix",es:"Paz",ja:"平和",ko:"평화",de:"Frieden",ru:"Мир",ar:"سلام",pt:"Paz"},
{en:"Excitement",zhTW:"興奮",fr:"Enthousiasme",es:"Emoción",ja:"興奮",ko:"흥분",de:"Begeisterung",ru:"Волнение",ar:"حماس",pt:"Entusiasmo"},
{en:"Courage",zhTW:"勇氣",fr:"Courage",es:"Coraje",ja:"勇気",ko:"용기",de:"Mut",ru:"Смелость",ar:"شجاعة",pt:"Coragem"},
{en:"Compassion",zhTW:"同理",fr:"Compassion",es:"Compasión",ja:"思いやり",ko:"연민",de:"Mitgefühl",ru:"Сострадание",ar:"تعاطف",pt:"Compaixão"},
{en:"Fear",zhTW:"恐懼",fr:"Peur",es:"Miedo",ja:"恐れ",ko:"두려움",de:"Angst",ru:"Страх",ar:"خوف",pt:"Medo"},
{en:"Doubt",zhTW:"懷疑",fr:"Doute",es:"Duda",ja:"疑い",ko:"의심",de:"Zweifel",ru:"Сомнение",ar:"شك",pt:"Dúvida"},
{en:"Anxiety",zhTW:"焦慮",fr:"Anxiété",es:"Ansiedad",ja:"不安",ko:"불안",de:"Angst",ru:"Тревога",ar:"قلق",pt:"Ansiedade"},
{en:"Anger",zhTW:"憤怒",fr:"Colère",es:"Ira",ja:"怒り",ko:"분노",de:"Wut",ru:"Гнев",ar:"غضب",pt:"Raiva"},
{en:"Loneliness",zhTW:"孤獨",fr:"Solitude",es:"Soledad",ja:"孤独",ko:"외로움",de:"Einsamkeit",ru:"Одиночество",ar:"وحدة",pt:"Solidão"},
{en:"Regret",zhTW:"遺憾",fr:"Regret",es:"Arrepentimiento",ja:"後悔",ko:"후회",de:"Bedauern",ru:"Сожаление",ar:"ندم",pt:"Arrependimento"},
{en:"Guilt",zhTW:"愧疚",fr:"Culpabilité",es:"Culpa",ja:"罪悪感",ko:"죄책감",de:"Schuld",ru:"Вина",ar:"ذنب",pt:"Culpa"},
{en:"Sorrow",zhTW:"悲傷",fr:"Chagrin",es:"Pesar",ja:"悲しみ",ko:"슬픔",de:"Kummer",ru:"Печаль",ar:"حزن",pt:"Tristeza"},
{en:"Envy",zhTW:"嫉妒",fr:"Envie",es:"Envidia",ja:"嫉妬",ko:"질투",de:"Neid",ru:"Зависть",ar:"حسد",pt:"Inveja"},
{en:"Relief",zhTW:"釋然",fr:"Soulagement",es:"Alivio",ja:"安堵",ko:"안도",de:"Erleichterung",ru:"Облегчение",ar:"ارتياح",pt:"Alívio"},
{en:"Balance",zhTW:"平衡",fr:"Équilibre",es:"Equilibrio",ja:"均衡",ko:"균형",de:"Gleichgewicht",ru:"Баланс",ar:"توازن",pt:"Equilíbrio"},
{en:"Chaos",zhTW:"混亂",fr:"Chaos",es:"Caos",ja:"混沌",ko:"혼돈",de:"Chaos",ru:"Хаос",ar:"فوضى",pt:"Caos"},
{en:"Stillness",zhTW:"靜止",fr:"Immobilité",es:"Quietud",ja:"静寂",ko:"고요",de:"Stille",ru:"Тишина",ar:"سكون",pt:"Quietude"},
{en:"Motion",zhTW:"流動",fr:"Mouvement",es:"Movimiento",ja:"動き",ko:"움직임",de:"Bewegung",ru:"Движение",ar:"حركة",pt:"Movimento"},
{en:"Growth",zhTW:"成長",fr:"Croissance",es:"Crecimiento",ja:"成長",ko:"성장",de:"Wachstum",ru:"Рост",ar:"نمو",pt:"Crescimento"},
{en:"Change",zhTW:"改變",fr:"Changement",es:"Cambio",ja:"変化",ko:"변화",de:"Veränderung",ru:"Перемена",ar:"تغيير",pt:"Mudança"},
{en:"Transition",zhTW:"轉變",fr:"Transition",es:"Transición",ja:"移行",ko:"전환",de:"Übergang",ru:"Переход",ar:"انتقال",pt:"Transição"},
{en:"Beginning",zhTW:"開始",fr:"Commencement",es:"Comienzo",ja:"始まり",ko:"시작",de:"Anfang",ru:"Начало",ar:"بداية",pt:"Começo"},
{en:"Ending",zhTW:"結束",fr:"Fin",es:"Final",ja:"終わり",ko:"끝",de:"Ende",ru:"Конец",ar:"نهاية",pt:"Fim"},
{en:"Renewal",zhTW:"新生",fr:"Renouveau",es:"Renovación",ja:"再生",ko:"갱신",de:"Erneuerung",ru:"Обновление",ar:"تجديد",pt:"Renovação"},
{en:"Healing",zhTW:"療癒",fr:"Guérison",es:"Sanación",ja:"癒し",ko:"치유",de:"Heilung",ru:"Исцеление",ar:"شفاء",pt:"Cura"},
{en:"Freedom",zhTW:"自由",fr:"Liberté",es:"Libertad",ja:"自由",ko:"자유",de:"Freiheit",ru:"Свобода",ar:"حرية",pt:"Liberdade"},
{en:"Limitation",zhTW:"限制",fr:"Limitation",es:"Limitación",ja:"制限",ko:"제한",de:"Begrenzung",ru:"Ограничение",ar:"قيد",pt:"Limitação"},
{en:"Uncertainty",zhTW:"未知",fr:"Incertitude",es:"Incertidumbre",ja:"不確実性",ko:"불확실성",de:"Unsicherheit",ru:"Неопределённость",ar:"عدم يقين",pt:"Incerteza"},
{en:"Clarity",zhTW:"清晰",fr:"Clarté",es:"Claridad",ja:"明晰",ko:"명확",de:"Klarheit",ru:"Ясность",ar:"وضوح",pt:"Clareza"},
{en:"Focus",zhTW:"專注",fr:"Concentration",es:"Enfoque",ja:"集中",ko:"집중",de:"Fokus",ru:"Фокус",ar:"تركيز",pt:"Foco"},
{en:"Flow",zhTW:"順流",fr:"Flux",es:"Flujo",ja:"流れ",ko:"흐름",de:"Fluss",ru:"Поток",ar:"تدفق",pt:"Fluxo"},
{en:"Resistance",zhTW:"抗拒",fr:"Résistance",es:"Resistencia",ja:"抵抗",ko:"저항",de:"Widerstand",ru:"Сопротивление",ar:"مقاومة",pt:"Resistência"},
{en:"Stability",zhTW:"穩定",fr:"Stabilité",es:"Estabilidad",ja:"安定",ko:"안정",de:"Stabilität",ru:"Стабильность",ar:"استقرار",pt:"Estabilidade"},
{en:"Fragility",zhTW:"脆弱",fr:"Fragilité",es:"Fragilidad",ja:"脆さ",ko:"취약",de:"Zerbrechlichkeit",ru:"Хрупкость",ar:"هشاشة",pt:"Fragilidade"},
{en:"Wisdom",zhTW:"智慧",fr:"Sagesse",es:"Sabiduría",ja:"知恵",ko:"지혜",de:"Weisheit",ru:"Мудрость",ar:"حكمة",pt:"Sabedoria"},
{en:"Truth",zhTW:"真實",fr:"Vérité",es:"Verdad",ja:"真実",ko:"진실",de:"Wahrheit",ru:"Истина",ar:"حقيقة",pt:"Verdade"},
{en:"Integrity",zhTW:"正直",fr:"Intégrité",es:"Integridad",ja:"誠実",ko:"정직",de:"Integrität",ru:"Честность",ar:"نزاهة",pt:"Integridade"},
{en:"Kindness",zhTW:"善意",fr:"Gentillesse",es:"Amabilidad",ja:"優しさ",ko:"친절",de:"Freundlichkeit",ru:"Доброта",ar:"لطف",pt:"Bondade"},
{en:"Respect",zhTW:"尊重",fr:"Respect",es:"Respeto",ja:"尊敬",ko:"존경",de:"Respekt",ru:"Уважение",ar:"احترام",pt:"Respeito"},
{en:"Responsibility",zhTW:"責任",fr:"Responsabilité",es:"Responsabilidad",ja:"責任",ko:"책임",de:"Verantwortung",ru:"Ответственность",ar:"مسؤولية",pt:"Responsabilidade"},
{en:"Patience",zhTW:"耐心",fr:"Patience",es:"Paciencia",ja:"忍耐",ko:"인내",de:"Geduld",ru:"Терпение",ar:"صبر",pt:"Paciência"},
{en:"Humility",zhTW:"謙遜",fr:"Humilité",es:"Humildad",ja:"謙虚",ko:"겸손",de:"Demut",ru:"Смирение",ar:"تواضع",pt:"Humildade"},
{en:"Generosity",zhTW:"慷慨",fr:"Générosité",es:"Generosidad",ja:"寛大",ko:"관대",de:"Großzügigkeit",ru:"Щедрость",ar:"كرم",pt:"Generosidade"},
{en:"Loyalty",zhTW:"忠誠",fr:"Loyauté",es:"Lealtad",ja:"忠誠",ko:"충성",de:"Treue",ru:"Верность",ar:"ولاء",pt:"Lealdade"},
{en:"Justice",zhTW:"公正",fr:"Justice",es:"Justicia",ja:"正義",ko:"정의",de:"Gerechtigkeit",ru:"Справедливость",ar:"عدالة",pt:"Justiça"},
{en:"Simplicity",zhTW:"純粹",fr:"Simplicité",es:"Simplicidad",ja:"簡素",ko:"단순",de:"Einfachheit",ru:"Простота",ar:"بساطة",pt:"Simplicidade"},
{en:"Creativity",zhTW:"創造",fr:"Créativité",es:"Creatividad",ja:"創造性",ko:"창의성",de:"Kreativität",ru:"Творчество",ar:"إبداع",pt:"Criatividade"},
{en:"Harmony",zhTW:"和諧",fr:"Harmonie",es:"Armonía",ja:"調和",ko:"조화",de:"Harmonie",ru:"Гармония",ar:"انسجام",pt:"Harmonia"},
{en:"Authenticity",zhTW:"真我",fr:"Authenticité",es:"Autenticidad",ja:"真正",ko:"진정성",de:"Authentizität",ru:"Подлинность",ar:"أصالة",pt:"Autenticidade"},
{en:"Purpose",zhTW:"使命",fr:"But",es:"Propósito",ja:"目的",ko:"목적",de:"Zweck",ru:"Цель",ar:"هدف",pt:"Propósito"},
{en:"Legacy",zhTW:"傳承",fr:"Héritage",es:"Legado",ja:"遺産",ko:"유산",de:"Vermächtnis",ru:"Наследие",ar:"إرث",pt:"Legado"},
{en:"Excellence",zhTW:"卓越",fr:"Excellence",es:"Excelencia",ja:"卓越",ko:"탁월",de:"Exzellenz",ru:"Превосходство",ar:"تميز",pt:"Excelência"},
{en:"Gratitude",zhTW:"珍惜",fr:"Gratitude",es:"Gratitud",ja:"感謝",ko:"감사",de:"Dankbarkeit",ru:"Благодарность",ar:"امتنان",pt:"Gratidão"},
{en:"Faith",zhTW:"信念",fr:"Foi",es:"Fe",ja:"信仰",ko:"믿음",de:"Glaube",ru:"Вера",ar:"إيمان",pt:"Fé"},
{en:"Connection",zhTW:"連結",fr:"Connexion",es:"Conexión",ja:"繋がり",ko:"연결",de:"Verbindung",ru:"Связь",ar:"اتصال",pt:"Conexão"},
{en:"Distance",zhTW:"距離",fr:"Distance",es:"Distancia",ja:"距離",ko:"거리",de:"Distanz",ru:"Расстояние",ar:"مسافة",pt:"Distância"},
{en:"Belonging",zhTW:"歸屬",fr:"Appartenance",es:"Pertenencia",ja:"帰属",ko:"소속",de:"Zugehörigkeit",ru:"Принадлежность",ar:"انتماء",pt:"Pertencimento"},
{en:"Partnership",zhTW:"夥伴",fr:"Partenariat",es:"Asociación",ja:"協力",ko:"파트너십",de:"Partnerschaft",ru:"Партнёрство",ar:"شراكة",pt:"Parceria"},
{en:"Support",zhTW:"支持",fr:"Soutien",es:"Apoyo",ja:"支援",ko:"지지",de:"Unterstützung",ru:"Поддержка",ar:"دعم",pt:"Apoio"},
{en:"Forgiveness",zhTW:"原諒",fr:"Pardon",es:"Perdón",ja:"許し",ko:"용서",de:"Vergebung",ru:"Прощение",ar:"مغفرة",pt:"Perdão"},
{en:"Acceptance",zhTW:"接納",fr:"Acceptation",es:"Aceptación",ja:"受容",ko:"수용",de:"Akzeptanz",ru:"Принятие",ar:"قبول",pt:"Aceitação"},
{en:"Conflict",zhTW:"衝突",fr:"Conflit",es:"Conflicto",ja:"対立",ko:"갈등",de:"Konflikt",ru:"Конфликт",ar:"صراع",pt:"Conflito"},
{en:"Reunion",zhTW:"重逢",fr:"Retrouvailles",es:"Reencuentro",ja:"再会",ko:"재회",de:"Wiedersehen",ru:"Воссоединение",ar:"لم شمل",pt:"Reencontro"},
{en:"Separation",zhTW:"分離",fr:"Séparation",es:"Separación",ja:"別離",ko:"분리",de:"Trennung",ru:"Разлука",ar:"انفصال",pt:"Separação"},
{en:"Commitment",zhTW:"承諾",fr:"Engagement",es:"Compromiso",ja:"献身",ko:"헌신",de:"Engagement",ru:"Обязательство",ar:"التزام",pt:"Compromisso"},
{en:"Vulnerability",zhTW:"坦誠",fr:"Vulnérabilité",es:"Vulnerabilidad",ja:"脆弱性",ko:"취약성",de:"Verletzlichkeit",ru:"Уязвимость",ar:"ضعف",pt:"Vulnerabilidade"},
{en:"Understanding",zhTW:"理解",fr:"Compréhension",es:"Comprensión",ja:"理解",ko:"이해",de:"Verständnis",ru:"Понимание",ar:"تفاهم",pt:"Compreensão"},
{en:"Communication",zhTW:"溝通",fr:"Communication",es:"Comunicación",ja:"コミュニケーション",ko:"소통",de:"Kommunikation",ru:"Общение",ar:"تواصل",pt:"Comunicação"},
{en:"Empathy",zhTW:"共鳴",fr:"Empathie",es:"Empatía",ja:"共感",ko:"공감",de:"Empathie",ru:"Эмпатия",ar:"تعاطف",pt:"Empatia"},
{en:"Discover",zhTW:"發現",fr:"Découvrir",es:"Descubrir",ja:"発見する",ko:"발견하다",de:"Entdecken",ru:"Открывать",ar:"اكتشاف",pt:"Descobrir"},
{en:"Create",zhTW:"創造",fr:"Créer",es:"Crear",ja:"創る",ko:"창조하다",de:"Erschaffen",ru:"Создавать",ar:"إبداع",pt:"Criar"},
{en:"Build",zhTW:"建立",fr:"Construire",es:"Construir",ja:"築く",ko:"건설하다",de:"Bauen",ru:"Строить",ar:"بناء",pt:"Construir"},
{en:"Release",zhTW:"放下",fr:"Libérer",es:"Soltar",ja:"手放す",ko:"놓아주다",de:"Loslassen",ru:"Отпускать",ar:"إطلاق",pt:"Soltar"},
{en:"Protect",zhTW:"守護",fr:"Protéger",es:"Proteger",ja:"守る",ko:"보호하다",de:"Schützen",ru:"Защищать",ar:"حماية",pt:"Proteger"},
{en:"Explore",zhTW:"探索",fr:"Explorer",es:"Explorar",ja:"探検する",ko:"탐험하다",de:"Erkunden",ru:"Исследовать",ar:"استكشاف",pt:"Explorar"},
{en:"Adapt",zhTW:"適應",fr:"S'adapter",es:"Adaptarse",ja:"適応する",ko:"적응하다",de:"Anpassen",ru:"Адаптироваться",ar:"تكيف",pt:"Adaptar"},
{en:"Transform",zhTW:"蛻變",fr:"Transformer",es:"Transformar",ja:"変容する",ko:"변화하다",de:"Verwandeln",ru:"Преобразовать",ar:"تحول",pt:"Transformar"},
{en:"Decide",zhTW:"決定",fr:"Décider",es:"Decidir",ja:"決める",ko:"결정하다",de:"Entscheiden",ru:"Решать",ar:"قرر",pt:"Decidir"},
{en:"Wait",zhTW:"等待",fr:"Attendre",es:"Esperar",ja:"待つ",ko:"기다리다",de:"Warten",ru:"Ждать",ar:"انتظار",pt:"Esperar"},
{en:"Persist",zhTW:"堅持",fr:"Persévérer",es:"Persistir",ja:"粘り強く続ける",ko:"인내하다",de:"Beharren",ru:"Упорствовать",ar:"مثابرة",pt:"Persistir"},
{en:"Surrender",zhTW:"臣服",fr:"Se rendre",es:"Rendirse",ja:"降伏する",ko:"항복하다",de:"Sich ergeben",ru:"Сдаваться",ar:"استسلام",pt:"Render-se"},
{en:"Learn",zhTW:"學習",fr:"Apprendre",es:"Aprender",ja:"学ぶ",ko:"배우다",de:"Lernen",ru:"Учиться",ar:"تعلم",pt:"Aprender"},
{en:"Inspire",zhTW:"啟發",fr:"Inspirer",es:"Inspirar",ja:"鼓舞する",ko:"영감을 주다",de:"Inspirieren",ru:"Вдохновлять",ar:"إلهام",pt:"Inspirar"},
{en:"Lead",zhTW:"引領",fr:"Mener",es:"Liderar",ja:"導く",ko:"이끌다",de:"Führen",ru:"Вести",ar:"قيادة",pt:"Liderar"},
{en:"Destiny",zhTW:"命運",fr:"Destin",es:"Destino",ja:"運命",ko:"운명",de:"Schicksal",ru:"Судьба",ar:"قدر",pt:"Destino"},
{en:"Opportunity",zhTW:"契機",fr:"Opportunité",es:"Oportunidad",ja:"機会",ko:"기회",de:"Gelegenheit",ru:"Возможность",ar:"فرصة",pt:"Oportunidade"},
{en:"Time",zhTW:"時間",fr:"Temps",es:"Tiempo",ja:"時間",ko:"시간",de:"Zeit",ru:"Время",ar:"وقت",pt:"Tempo"},
{en:"Memory",zhTW:"記憶",fr:"Mémoire",es:"Memoria",ja:"記憶",ko:"기억",de:"Erinnerung",ru:"Память",ar:"ذاكرة",pt:"Memória"},
{en:"Identity",zhTW:"自我",fr:"Identité",es:"Identidad",ja:"アイデンティティ",ko:"정체성",de:"Identität",ru:"Идентичность",ar:"هوية",pt:"Identidade"},
{en:"Possibility",zhTW:"可能",fr:"Possibilité",es:"Posibilidad",ja:"可能性",ko:"가능성",de:"Möglichkeit",ru:"Возможность",ar:"إمكانية",pt:"Possibilidade"},
{en:"Mystery",zhTW:"未知之謎",fr:"Mystère",es:"Misterio",ja:"神秘",ko:"신비",de:"Geheimnis",ru:"Тайна",ar:"غموض",pt:"Mistério"},
{en:"Infinity",zhTW:"無限",fr:"Infini",es:"Infinito",ja:"無限",ko:"무한",de:"Unendlichkeit",ru:"Бесконечность",ar:"لانهاية",pt:"Infinito"},
{en:"Home",zhTW:"歸處",fr:"Foyer",es:"Hogar",ja:"故郷",ko:"집",de:"Zuhause",ru:"Дом",ar:"وطن",pt:"Lar"},
{en:"Journey",zhTW:"旅程",fr:"Voyage",es:"Viaje",ja:"旅",ko:"여정",de:"Reise",ru:"Путешествие",ar:"رحلة",pt:"Jornada"}
];

// === Language Key Map ===
const langKeyMap = {
    'en':'en','zh-TW':'zhTW','fr':'fr','es':'es',
    'ja':'ja','ko':'ko','de':'de','ru':'ru','ar':'ar','pt':'pt'
};

// === Explore Content (Sub-Web 1) ===
const exploreContent = {
    "en": {
        intro: "Exploring your subconscious will help you better understand what your inner self truly needs. Please think about the issue currently troubling you, and enter it in the box below.",
        placeholder: "Describe your current dilemma or question...",
        next: "Next",
        tapHint: "Tap the cards to draw",
        afterPhoto: "Please think about the dilemma you raised. Describe in detail what you see in this image, including relevant people, events, time, place, and objects. Please write in a storytelling style in the text box below.",
        connectionQ: "Assuming you have a connection to this story, what do you think that connection is? Or what is your relationship with the people or things in the image? Why does this connection exist? Please describe in detail using a storytelling style below.",
        afterWord: 'If the story you told ultimately carries the meaning of "{word}", why do you think that is, or how might it happen? Please extend the original story and describe in detail below.',
        finalText: "You can copy the result and paste it into an AI conversation for interpretation.",
        copyBtn: "Copy Result",
        restart: "Start Over",
        copied: "Copied!",
        minHint25: "Min 25 chars, max 500",
        minHint30: "Min 30 chars, max 1000",
        minHint50: "Min 50 chars, max 300",
        minHint60: "Min 60 chars, max 1000",
        disclaimer: "This exploration is purely experimental in nature and does not carry any psychological or psychiatric scientific significance or purpose.\nTo make the exploration content align with your thoughts as much as possible, please describe each section in a \"storytelling\" manner with as much detail as possible, or add background information you feel is necessary. Each input section has minimum and maximum character limits that must be met to proceed.",
        understood: "I understand"
    },
    "zh-TW": {
        intro: "探索你的潛意識，將能夠幫助你更了解你內心所需要的，請先思考目前困擾你的問題，並填入下面的方塊中。",
        placeholder: "描述你目前的困境或問題...",
        next: "下一步",
        tapHint: "點擊卡牌抽取",
        afterPhoto: "請思考你提出的困境，然後盡量詳細描述你看到的畫面，最好包含相關的人、事、時、地、物資訊，並以說故事的方式輸入在下方的文字方塊中。",
        connectionQ: "假設你跟這個故事有連結，你認為這個連結是什麼？或者你跟畫面中的人或物有什麼關係？為什麼這樣的連結存在？請盡量用說故事的方式，詳細輸入在下方文字方塊中。",
        afterWord: '如果你所訴說的這個故事，最後會具有「{word}」的意涵，請問是為什麼或怎麼發生的？請用延伸原本故事的方式，盡量詳細輸入在下面文字方塊。',
        finalText: "可將結果複製貼上到AI對話中，請AI幫忙解讀。",
        copyBtn: "複製結果",
        restart: "重新開始",
        copied: "已複製！",
        minHint25: "最少25字，不超過500字",
        minHint30: "最少30字，不超過1000字",
        minHint50: "最少50字，不超過300字",
        minHint60: "最少60字，不超過1000字",
        disclaimer: "本探索純屬實驗性質，並不具備任何心理學或精神科學上的意義及目的。\n為使探索內容盡量切合你的想法，在每一段輸入時，請用「說故事」的方式盡量詳細描述整個故事，或添加你認為需要補充說明的背景訊息。每一段輸入內容都有文字字數最低及最高的限制，必須要滿足才能往下進行。",
        understood: "我知道了"
    },
    "fr": {
        intro: "Explorer votre subconscient vous aidera à mieux comprendre vos besoins intérieurs. Réfléchissez au problème qui vous préoccupe et entrez-le ci-dessous.",
        placeholder: "Décrivez votre dilemme actuel...",
        next: "Suivant",
        tapHint: "Touchez les cartes pour tirer",
        afterPhoto: "Pensez à votre dilemme. Décrivez en détail ce que vous voyez dans cette image, y compris les personnes, événements, lieux et objets. Entrez ci-dessous, puis appuyez sur Suivant.",
        connectionQ: "Si vous ressentez un lien avec cette image, quel est-il ? Qui êtes-vous dans l'image et quelle est votre relation ? Pourquoi ce lien ? Décrivez en détail ci-dessous.",
        afterWord: 'En vous basant sur l\'histoire globale que vous avez décrite, si on vous dit que l\'histoire mènera au sens de « {word} », pourquoi pensez-vous que c\'est le cas ? Décrivez en détail ci-dessous.',
        finalText: "Vous pouvez copier le résultat et le coller dans une conversation IA pour interprétation.",
        copyBtn: "Copier le résultat",
        restart: "Recommencer",
        copied: "Copié !",
        minHint30: "Min 30 car., max 1000",
        minHint100: "Min 100 car., max 300",
        minHint25: "Min 25 car., max 500",
        minHint50: "Min 50 car., max 300",
        minHint60: "Min 60 car., max 1000",
        disclaimer: "Cette exploration est purement expérimentale et ne revêt aucune signification ou finalité psychologique ou psychiatrique.\nPour que le contenu de l'exploration corresponde au mieux à vos pensées, veuillez décrire chaque section sous forme de « récit » avec autant de détails que possible, ou ajoutez les informations contextuelles nécessaires. Chaque section a des limites de caractères minimales et maximales à respecter.",
        understood: "J'ai compris"
    },
    "es": {
        intro: "Explorar tu subconsciente te ayudará a entender mejor lo que tu interior necesita. Piensa en el problema que te preocupa y escríbelo abajo.",
        placeholder: "Describe tu dilema actual...",
        next: "Siguiente",
        tapHint: "Toca las cartas para sacar",
        afterPhoto: "Piensa en tu dilema. Describe detalladamente lo que ves en esta imagen, incluyendo personas, eventos, tiempo, lugar y objetos. Escríbelo abajo y presiona Siguiente.",
        connectionQ: "Si sientes una conexión con esta imagen, ¿cuál es? ¿Quién eres en la imagen y qué relación tienes? ¿Por qué esa conexión? Describe en detalle abajo.",
        afterWord: 'Basándote en la historia que describiste, si te dicen que al final llevará al significado de "{word}", ¿por qué crees que es así o cómo podría ocurrir? Describe en detalle abajo.',
        finalText: "Puedes copiar el resultado y pegarlo en una conversación con IA para interpretación.",
        copyBtn: "Copiar resultado",
        restart: "Empezar de nuevo",
        copied: "¡Copiado!",
        minHint30: "Mín 30 car., máx 1000",
        minHint100: "Mín 100 car., máx 300",
        minHint25: "Mín 25 car., máx 500",
        minHint50: "Mín 50 car., máx 300",
        minHint60: "Mín 60 car., máx 1000",
        disclaimer: "Esta exploración es puramente experimental y no tiene ningún significado o propósito psicológico o psiquiátrico científico.\nPara que el contenido se ajuste a tus pensamientos, describe cada sección de la forma más detallada posible en estilo de \"historia\", o añade información de contexto que consideres necesaria. Cada sección tiene límites mínimos y máximos de caracteres que deben cumplirse.",
        understood: "Entendido"
    },
    "ja": {
        intro: "潜在意識を探ることで、内心が本当に必要としているものをより深く理解できます。今あなたを悩ませている問題を考え、下のボックスに入力してください。",
        placeholder: "現在の悩みや問題を記述してください...",
        next: "次へ",
        tapHint: "カードをタップして引く",
        afterPhoto: "あなたの悩みについて考えてください。この画像に何が見えるか、背景の人物、出来事、時間、場所、物を含めて詳しく描写し、下に入力してください。",
        connectionQ: "この画像とつながりを感じるなら、そのつながりは何ですか？画像の中の誰で、どんな関係ですか？なぜそのつながりがあるのですか？詳しく入力してください。",
        afterWord: '以前に描写した全体のストーリーに基づき、最終的に「{word}」の意味に至ると言われたら、なぜそうなると思いますか？詳しく入力してください。',
        finalText: "結果をコピーしてAI会話に貼り付けて解釈してもらえます。",
        copyBtn: "結果をコピー",
        restart: "最初から",
        copied: "コピーしました！",
        minHint30: "最低30文字、最大1000文字",
        minHint100: "最低100文字、最大300文字",
        minHint25: "最低25文字、最大500文字",
        minHint50: "最低50文字、最大300文字",
        minHint60: "最低60文字、最大1000文字",
        disclaimer: "この探索は純粋に実験的なものであり、心理学的または精神科学的な意味や目的は一切ありません。\n探索内容があなたの考えに沿うように、各セクションではできるだけ詳しく「物語」形式で説明するか、必要な背景情報を追加してください。各入力セクションには最低・最大文字数の制限があり、満たす必要があります。",
        understood: "了解しました"
    },
    "ko": {
        intro: "잠재의식을 탐구하면 내면이 진정으로 필요한 것을 더 잘 이해할 수 있습니다. 현재 고민하고 있는 문제를 생각하고 아래에 입력해 주세요.",
        placeholder: "현재의 고민이나 질문을 설명하세요...",
        next: "다음",
        tapHint: "카드를 탭하여 뽑기",
        afterPhoto: "고민에 대해 생각하세요. 이 이미지에서 무엇이 보이는지 배경의 사람, 사건, 시간, 장소, 사물을 포함하여 상세히 설명하고 아래에 입력한 후 다음을 누르세요.",
        connectionQ: "이 이미지와 연결을 느낀다면 그 연결은 무엇인가요? 이미지 속에서 당신은 누구이며 어떤 관계인가요? 왜 그런 연결이 있나요? 상세히 입력하세요.",
        afterWord: '이전에 설명한 전체 이야기를 기반으로, 이야기가 결국 "{word}"의 의미로 이어진다면 왜 그렇다고 생각하거나 어떻게 발생할까요? 상세히 입력하세요.',
        finalText: "결과를 복사하여 AI 대화에 붙여넣어 해석을 받을 수 있습니다.",
        copyBtn: "결과 복사",
        restart: "다시 시작",
        copied: "복사됨!",
        minHint30: "최소 30자, 최대 1000자",
        minHint100: "최소 100자, 최대 300자",
        minHint25: "최소 25자, 최대 500자",
        minHint50: "최소 50자, 최대 300자",
        minHint60: "최소 60자, 최대 1000자",
        disclaimer: "이 탐구는 순수하게 실험적인 성격이며, 어떠한 심리학적 또는 정신과학적 의미나 목적도 없습니다.\n탐구 내용이 당신의 생각에 부합하도록, 각 섹션에서 가능한 한 자세히 '이야기하기' 방식으로 설명하거나, 필요한 배경 정보를 추가해 주세요. 각 입력 섹션에는 최소 및 최대 글자 수 제한이 있으며, 이를 충족해야 진행할 수 있습니다.",
        understood: "알겠습니다"
    },
    "de": {
        intro: "Die Erforschung Ihres Unterbewusstseins hilft Ihnen, Ihre inneren Bedürfnisse besser zu verstehen. Denken Sie über Ihr aktuelles Problem nach und geben Sie es unten ein.",
        placeholder: "Beschreiben Sie Ihr aktuelles Dilemma...",
        next: "Weiter",
        tapHint: "Tippen Sie zum Ziehen",
        afterPhoto: "Denken Sie an Ihr Dilemma. Beschreiben Sie detailliert, was Sie in diesem Bild sehen, einschließlich Personen, Ereignisse, Zeit, Ort und Objekte. Geben Sie es unten ein.",
        connectionQ: "Wenn Sie eine Verbindung zu diesem Bild spüren, was ist sie? Wer sind Sie im Bild und in welcher Beziehung? Warum diese Verbindung? Beschreiben Sie ausführlich.",
        afterWord: 'Basierend auf der Gesamtgeschichte, wenn das Ende zur Bedeutung von „{word}" führt, warum glauben Sie das oder wie könnte es geschehen? Beschreiben Sie ausführlich.',
        finalText: "Sie können das Ergebnis kopieren und in eine KI-Konversation einfügen.",
        copyBtn: "Ergebnis kopieren",
        restart: "Neu starten",
        copied: "Kopiert!",
        minHint30: "Min 30 Zeichen, max 1000",
        minHint100: "Min 100 Zeichen, max 300",
        minHint25: "Min 25 Zeichen, max 500",
        minHint50: "Min 50 Zeichen, max 300",
        minHint60: "Min 60 Zeichen, max 1000",
        disclaimer: "Diese Erforschung ist rein experimenteller Natur und hat keinerlei psychologische oder psychiatrische wissenschaftliche Bedeutung oder Zweck.\nDamit der Inhalt Ihren Gedanken m\u00F6glichst entspricht, beschreiben Sie bitte jeden Abschnitt so detailliert wie m\u00F6glich in Form einer Geschichte oder f\u00FCgen Sie notwendige Hintergrundinformationen hinzu. Jeder Abschnitt hat Mindest- und H\u00F6chstzeichenbegrenzungen.",
        understood: "Verstanden"
    },
    "ru": {
        intro: "Исследование подсознания поможет лучше понять, что вам действительно нужно. Подумайте о проблеме, которая вас беспокоит, и введите её ниже.",
        placeholder: "Опишите вашу текущую проблему...",
        next: "Далее",
        tapHint: "Нажмите на карты",
        afterPhoto: "Подумайте о вашей проблеме. Подробно опишите, что вы видите на изображении, включая людей, события, время, место и объекты. Введите ниже.",
        connectionQ: "Если вы чувствуете связь с изображением, какая она? Кто вы на изображении и в каких отношениях? Почему эта связь? Опишите подробно.",
        afterWord: 'На основе описанной истории, если итог ведёт к смыслу «{word}», почему вы так думаете или как это может произойти? Опишите подробно.',
        finalText: "Скопируйте результат и вставьте в разговор с ИИ для интерпретации.",
        copyBtn: "Скопировать",
        restart: "Начать заново",
        copied: "Скопировано!",
        minHint30: "Мин 30 символов, макс 1000",
        minHint100: "Мин 100 символов, макс 300",
        minHint25: "Мин 25 символов, макс 500",
        minHint50: "Мин 50 символов, макс 300",
        minHint60: "Мин 60 символов, макс 1000",
        disclaimer: "Данное исследование носит исключительно экспериментальный характер и не имеет психологического или психиатрического научного значения или цели.\nЧтобы содержание соответствовало вашим мыслям, описывайте каждый раздел как можно подробнее в формате «рассказа» или добавляйте необходимую фоновую информацию. Каждый раздел имеет минимальное и максимальное ограничение по количеству символов.",
        understood: "Понятно"
    },
    "ar": {
        intro: "استكشاف عقلك الباطن سيساعدك على فهم ما تحتاجه حقاً. فكر في المشكلة التي تزعجك وأدخلها أدناه.",
        placeholder: "صف مشكلتك الحالية...",
        next: "التالي",
        tapHint: "اضغط على البطاقات للسحب",
        afterPhoto: "فكر في مشكلتك. صف بالتفصيل ما تراه في هذه الصورة، بما في ذلك الأشخاص والأحداث والزمان والمكان والأشياء. أدخله أدناه.",
        connectionQ: "إذا شعرت بارتباط مع الصورة، ما هو؟ من أنت في الصورة وما علاقتك؟ لماذا هذا الارتباط؟ صف بالتفصيل أدناه.",
        afterWord: 'بناءً على القصة التي وصفتها، إذا قيل لك أن النهاية ستؤدي إلى معنى "{word}"، لماذا تعتقد ذلك أو كيف قد يحدث؟ صف بالتفصيل أدناه.',
        finalText: "يمكنك نسخ النتيجة ولصقها في محادثة ذكاء اصطناعي للتفسير.",
        copyBtn: "نسخ النتيجة",
        restart: "ابدأ من جديد",
        copied: "تم النسخ!",
        minHint30: "٣٠ حرف كحد أدنى، ١٠٠٠ كحد أقصى",
        minHint100: "١٠٠ حرف كحد أدنى، ٣٠٠ كحد أقصى",
        minHint25: "٢٥ حرف كحد أدنى، ٥٠٠ كحد أقصى",
        minHint50: "٥٠ حرف كحد أدنى، ٣٠٠ كحد أقصى",
        minHint60: "٦٠ حرف كحد أدنى، ١٠٠٠ كحد أقصى",
        disclaimer: "هذا الاستكشاف تجريبي بحت ولا يحمل أي أهمية أو غرض نفسي أو علمي.\nلكي يتوافق المحتوى مع أفكارك، يرجى وصف كل قسم بأسلوب \"سرد القصة\" بأكبر قدر ممكن من التفصيل، أو إضافة معلومات خلفية تراها ضرورية. لكل قسم حدود دنيا وقصوى لعدد الأحرف يجب استيفاؤها.",
        understood: "فهمت"
    },
    "pt": {
        intro: "Explorar seu subconsciente ajudará você a entender melhor o que seu interior precisa. Pense no problema que te preocupa e digite abaixo.",
        placeholder: "Descreva seu dilema atual...",
        next: "Próximo",
        tapHint: "Toque nas cartas para tirar",
        afterPhoto: "Pense em seu dilema. Descreva detalhadamente o que você vê nesta imagem, incluindo pessoas, eventos, tempo, lugar e objetos. Digite abaixo.",
        connectionQ: "Se você sente uma conexão com esta imagem, qual é? Quem é você na imagem e qual sua relação? Por que essa conexão? Descreva em detalhes abaixo.",
        afterWord: 'Com base na história que descreveu, se te disserem que o final levará ao significado de "{word}", por que acha isso ou como poderia acontecer? Descreva em detalhes abaixo.',
        finalText: "Você pode copiar o resultado e colar em uma conversa com IA para interpretação.",
        copyBtn: "Copiar resultado",
        restart: "Recomeçar",
        copied: "Copiado!",
        minHint30: "Mín 30 car., máx 1000",
        minHint100: "Mín 100 car., máx 300",
        minHint25: "Mín 25 car., máx 500",
        minHint50: "Mín 50 car., máx 300",
        minHint60: "Mín 60 car., máx 1000",
        disclaimer: "Esta exploração é puramente experimental e não possui qualquer significado ou propósito psicológico ou psiquiátrico.\nPara que o conteúdo corresponda aos seus pensamentos, descreva cada seção da forma mais detalhada possível no estilo de \"contar uma história\", ou adicione informações de contexto necessárias. Cada seção tem limites mínimos e máximos de caracteres que devem ser cumpridos.",
        understood: "Entendi"
    }
};

// =============================================
// PAGE NAVIGATION
// =============================================

function switchPage(hideId, showId) {
    const hidePage = document.getElementById(hideId);
    const showPage = document.getElementById(showId);
    hidePage.classList.add('page-fade-out');
    setTimeout(() => {
        hidePage.classList.remove('active', 'page-fade-out');
        showPage.classList.add('active', 'page-fade-in');
        window.scrollTo(0, 0);
        setTimeout(() => { showPage.classList.remove('page-fade-in'); }, 500);
    }, 500);
}

function selectLanguage(lang) {
    currentLang = lang;
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.removeAttribute('dir');
    }
    updateMainPage();
    incrementTotalVisit();
    switchPage('language-page', 'main-page');
    localStorage.setItem('mindExplorerLang', lang);
}

function updateMainPage() {
    const d = content[currentLang];
    document.getElementById('hero-title').textContent = d.heroTitle;
    document.getElementById('hero-subtitle').textContent = d.heroSubtitle;
    document.getElementById('welcome-text').innerHTML = d.welcomeText;
    document.getElementById('current-lang-label').textContent = d.label;
    document.getElementById('option-explore-title').textContent = d.exploreTitle;
    document.getElementById('option-explore-desc').textContent = d.exploreDesc;
    document.getElementById('option-practice-title').textContent = d.practiceTitle;
    document.getElementById('option-practice-desc').textContent = d.practiceDesc;
    document.getElementById('how-title').textContent = d.howTitle;
    document.getElementById('step1-text').textContent = d.step1;
    document.getElementById('step2-text').textContent = d.step2;
    document.getElementById('step3-text').textContent = d.step3;
    document.getElementById('nav-home-text').textContent = d.navHome;
    document.getElementById('nav-explore-text').textContent = d.navExplore;
    document.getElementById('nav-practice-text').textContent = d.navPractice;
}

function goToLanguagePage() {
    const activePage = document.querySelector('.page.active');
    activePage.classList.add('page-fade-out');
    setTimeout(() => {
        activePage.classList.remove('active', 'page-fade-out');
        document.getElementById('language-page').classList.add('active', 'page-fade-in');
        document.documentElement.removeAttribute('dir');
        setTimeout(() => { document.getElementById('language-page').classList.remove('page-fade-in'); }, 500);
    }, 500);
}

function goToMain() {
    const activePage = document.querySelector('.page.active');
    if (currentLang === 'ar') document.documentElement.setAttribute('dir', 'rtl');
    incrementTotalVisit();
    switchPage(activePage.id, 'main-page');
}

function showMainFromNav() { /* already on main page */ }

function goToExplore() {
    const d = content[currentLang];
    const e = exploreContent[currentLang];
    document.getElementById('current-lang-label-explore').textContent = d.label;
    document.getElementById('explore-intro-text').textContent = e.intro;
    document.getElementById('explore-issue-input').placeholder = e.placeholder;
    document.getElementById('explore-next1').textContent = e.next;
    document.getElementById('explore-tap-hint-1').textContent = e.tapHint;
    document.getElementById('explore-tap-hint-2').textContent = e.tapHint;
    // Disclaimer
    document.getElementById('explore-disclaimer').textContent = e.disclaimer;
    document.getElementById('explore-disclaimer-btn').textContent = e.understood;
    exploreReset();
    switchPage('main-page', 'explore-page');
}

function exploreDisclaimerOk() {
    const e = exploreContent[currentLang];
    showExploreStep('explore-step1');
    setupCharCounter('explore-issue-input', 'issue-counter', 25, 500, 'explore-next1', e.minHint25 || e.minHint30);
}

function goToPractice() {
    const d = content[currentLang];
    document.getElementById('current-lang-label-practice').textContent = d.label;
    document.getElementById('practice-intro-text').textContent = d.practiceIntro;
    document.getElementById('tap-hint-1').textContent = d.tapHint;
    document.getElementById('tap-hint-2').textContent = d.tapHint;
    // Disclaimer — use per-language content
    const practiceDisclaimers = {
        'en': "This exploration is purely experimental in nature and does not carry any psychological or psychiatric scientific significance or purpose.\nFor each practice section, please describe in a \"storytelling\" manner with as much detail as possible, or add background information you feel is necessary.",
        'zh-TW': "本探索純屬實驗性質，並不具備任何心理學或精神科學上的意義及目的。\n針對每一段的練習，請用「說故事」的方式盡量詳細描述整個故事，或添加你認為需要補充說明的背景訊息。",
        'fr': "Cette exploration est purement expérimentale et ne revêt aucune signification ou finalité psychologique ou psychiatrique.\nPour chaque exercice, veuillez décrire de manière détaillée sous forme de « récit », ou ajoutez les informations contextuelles que vous jugez nécessaires.",
        'es': "Esta exploración es puramente experimental y no tiene ningún significado o propósito psicológico o psiquiátrico.\nPara cada ejercicio, describe de la manera más detallada posible en forma de \"historia\", o añade información de contexto que consideres necesaria.",
        'ja': "この探索は純粋に実験的なものであり、心理学的または精神科学的な意味や目的は一切ありません。\n各練習では、「物語を語る」ように、できるだけ詳しく説明するか、必要と思われる背景情報を追加してください。",
        'ko': "이 탐구는 순수하게 실험적인 성격이며, 어떠한 심리학적 또는 정신과학적 의미나 목적도 없습니다.\n각 연습에서 가능한 한 자세히 '이야기하기' 방식으로 설명하거나, 필요하다고 생각되는 배경 정보를 추가해 주세요.",
        'de': "Diese Erforschung ist rein experimenteller Natur und hat keinerlei psychologische oder psychiatrische wissenschaftliche Bedeutung oder Zweck.\nBitte beschreiben Sie jeden Abschnitt so detailliert wie möglich in Form einer \"Geschichte\" oder fügen Sie Hintergrundinformationen hinzu, die Sie für notwendig halten.",
        'ru': "Данное исследование носит исключительно экспериментальный характер и не имеет психологического или психиатрического научного значения или цели.\nДля каждого упражнения, пожалуйста, описывайте как можно подробнее в формате «рассказа» или добавляйте фоновую информацию, которую считаете необходимой.",
        'ar': "هذا الاستكشاف تجريبي بحت ولا يحمل أي أهمية أو غرض نفسي أو علمي.\nلكل تمرين، يرجى الوصف بأكبر قدر ممكن من التفصيل بأسلوب \"سرد القصة\"، أو إضافة معلومات خلفية تراها ضرورية.",
        'pt': "Esta exploração é puramente experimental e não possui qualquer significado ou propósito psicológico ou psiquiátrico.\nPara cada exercício, descreva da forma mais detalhada possível no estilo de \"contar uma história\", ou adicione informações de contexto que considere necessárias."
    };
    document.getElementById('practice-disclaimer').textContent = practiceDisclaimers[currentLang] || practiceDisclaimers['en'];
    const understoodTexts = {
        'en': 'I understand', 'zh-TW': '我知道了', 'fr': "J'ai compris", 'es': 'Entendido',
        'ja': '了解しました', 'ko': '알겠습니다', 'de': 'Verstanden', 'ru': 'Понятно',
        'ar': 'فهمت', 'pt': 'Entendi'
    };
    document.getElementById('practice-disclaimer-btn').textContent = understoodTexts[currentLang] || understoodTexts['en'];
    resetPractice();
    switchPage('main-page', 'practice-page');
}

function practiceDisclaimerOk() {
    document.getElementById('practice-step0').classList.remove('active');
    document.getElementById('practice-step1').classList.add('active');
}

// =============================================
// PRACTICE FLOW (Sub-Web 2)
// =============================================

function resetPractice() {
    document.querySelectorAll('.practice-step').forEach(s => s.classList.remove('active'));
    document.getElementById('practice-step0').classList.add('active');
    document.getElementById('photo-revealed').classList.remove('visible');
    document.getElementById('word-revealed').classList.remove('visible');
    document.querySelectorAll('#practice-page .shuffle-scene').forEach(s => { s.classList.remove('playing'); s.style.display = 'none'; });
    drawnPhotoNumber = null;
    drawnWord = null;
}

function showStep(stepId) {
    document.querySelectorAll('.practice-step').forEach(s => s.classList.remove('active'));
    document.getElementById(stepId).classList.add('active');
}

// Step 1 → 2: Draw photo card
function drawPhotoCard() {
    const d = content[currentLang];
    drawnPhotoNumber = String(Math.floor(Math.random() * 102) + 1).padStart(3, '0');

    showStep('practice-step2');
    const shuffle = document.getElementById('shuffle-scene-1');
    shuffle.style.display = 'block';
    shuffle.classList.add('playing');
    // Hide text and button during shuffle
    document.getElementById('practice-step2-text').style.display = 'none';
    document.getElementById('next-step-btn').style.display = 'none';

    // Shuffle animation ~3s: cards spread in 8 directions, gather back, then reveal
    setTimeout(() => {
        shuffle.classList.remove('playing');
        shuffle.style.display = 'none';
        document.getElementById('photo-card-image').src = drawnPhotoNumber + '.PNG';
        document.getElementById('photo-revealed').classList.add('visible');
        // Show text and button after reveal
        document.getElementById('practice-step2-text').style.display = '';
        document.getElementById('practice-step2-text').textContent = d.afterPhoto;
        document.getElementById('next-step-btn').style.display = '';
        document.getElementById('next-step-btn').textContent = d.next;
    }, 3200);
}

// Step 2 → 3: User presses Next
function goToStep3() {
    const d = content[currentLang];
    showStep('practice-step3');
    document.getElementById('practice-step3-intro').textContent = d.beforeWord;
}

// Step 3 → 4: Draw word card
function drawWordCard() {
    const d = content[currentLang];
    const langKey = langKeyMap[currentLang];

    // Random word
    const wordIndex = Math.floor(Math.random() * 100);
    drawnWord = wordsData[wordIndex];

    showStep('practice-step4');
    const shuffle = document.getElementById('shuffle-scene-2');
    shuffle.style.display = 'block';
    shuffle.classList.add('playing');

    // Shuffle animation ~3s: cards spread in 8 directions, gather back, then reveal word
    setTimeout(() => {
        shuffle.classList.remove('playing');
        shuffle.style.display = 'none';

        const wordInLang = drawnWord[langKey] || drawnWord.en;
        document.getElementById('word-card-text').textContent = wordInLang;
        document.getElementById('word-revealed').classList.add('visible');

        // Stay 1.5 seconds on word card, then transition to step 5 (recap)
        setTimeout(() => {
            showStep('practice-step5');
            // Set up recap: photo + word (user language + English)
            document.getElementById('recap-photo-img').src = drawnPhotoNumber + '.PNG';
            const wordDisplay = (currentLang === 'en')
                ? drawnWord.en
                : wordInLang + ' / ' + drawnWord.en;
            document.getElementById('recap-word-display').textContent = wordDisplay;
            document.getElementById('practice-step5-text').textContent = d.afterWord.replace('{word}', wordInLang);
            document.getElementById('restart-btn').textContent = d.startOver;
        }, 1500);
    }, 3200);
}

// Restart
function restartPractice() {
    goToMain();
}

// =============================================
// EXPLORE FLOW (Sub-Web 1)
// =============================================

let exploreData = { issue: '', picDesc: '', personalDesc: '', wordpicDesc: '', photoNum: '', word: null };

// Helper: setup character counter with min/max validation
function setupCharCounter(inputId, counterId, minChars, maxChars, btnId, hintText) {
    const input = document.getElementById(inputId);
    const counter = document.getElementById(counterId);
    const btn = document.getElementById(btnId);
    counter.textContent = hintText + ' — 0/' + maxChars;
    input.oninput = () => {
        const len = input.value.length;
        counter.textContent = hintText + ' — ' + len + '/' + maxChars;
        // Style
        counter.classList.remove('warning', 'over');
        if (len > maxChars) counter.classList.add('over');
        else if (len >= minChars) counter.classList.add('warning');
        // Button state
        btn.disabled = (len < minChars || len > maxChars);
    };
}

function exploreReset() {
    exploreData = { issue: '', picDesc: '', personalDesc: '', wordpicDesc: '', photoNum: '', word: null };
    document.querySelectorAll('.explore-step').forEach(s => s.classList.remove('active'));
    document.getElementById('explore-step0').classList.add('active');
    document.getElementById('sticky-issue-bar').classList.remove('visible');
    document.getElementById('explore-issue-input').value = '';
    document.getElementById('explore-pic-desc').value = '';
    document.getElementById('explore-personal-desc').value = '';
    document.getElementById('explore-wordpic-desc').value = '';
    document.getElementById('explore-photo-revealed').classList.remove('visible');
    document.getElementById('explore-word-revealed').classList.remove('visible');
    document.querySelectorAll('#explore-page .shuffle-scene').forEach(s => { s.classList.remove('playing'); s.style.display = 'none'; });
}

function showExploreStep(stepId) {
    document.querySelectorAll('.explore-step').forEach(s => s.classList.remove('active'));
    document.getElementById(stepId).classList.add('active');
}

// Step 1 → 2: User enters issue
function exploreNext1() {
    const e = exploreContent[currentLang];
    exploreData.issue = document.getElementById('explore-issue-input').value.trim();
    // Show sticky bar
    document.getElementById('sticky-issue-text').textContent = exploreData.issue;
    document.getElementById('sticky-issue-bar').classList.add('visible');
    showExploreStep('explore-step2');
}

// Step 2 → 3: Draw photo card
function exploreDrawPhoto() {
    exploreData.photoNum = String(Math.floor(Math.random() * 102) + 1).padStart(3, '0');
    const e = exploreContent[currentLang];

    showExploreStep('explore-step3');
    const shuffle = document.getElementById('explore-shuffle-1');
    shuffle.style.display = 'block';
    shuffle.classList.add('playing');
    // Hide instruction and input during shuffle
    document.getElementById('explore-step3-text').style.display = 'none';
    document.getElementById('explore-next3').style.display = 'none';
    const picWrapper = document.getElementById('explore-pic-desc').closest('.input-wrapper');
    if (picWrapper) picWrapper.style.display = 'none';

    setTimeout(() => {
        shuffle.classList.remove('playing');
        shuffle.style.display = 'none';
        document.getElementById('explore-photo-img').src = exploreData.photoNum + '.PNG';
        document.getElementById('explore-photo-revealed').classList.add('visible');
        // Show instruction and input after reveal
        document.getElementById('explore-step3-text').style.display = '';
        document.getElementById('explore-step3-text').textContent = e.afterPhoto;
        document.getElementById('explore-next3').style.display = '';
        document.getElementById('explore-next3').textContent = e.next;
        document.getElementById('explore-next3').disabled = true;
        if (picWrapper) picWrapper.style.display = '';
        // Setup char counter (min 60, max 1000)
        setupCharCounter('explore-pic-desc', 'pic-desc-counter', 60, 1000, 'explore-next3', e.minHint60 || e.minHint100);
    }, 3200);
}

// Step 3 → 4: After pic description
function exploreNext3() {
    const e = exploreContent[currentLang];
    exploreData.picDesc = document.getElementById('explore-pic-desc').value.trim();
    showExploreStep('explore-step4');
    document.getElementById('explore-photo-img-step4').src = exploreData.photoNum + '.PNG';
    document.getElementById('explore-step4-text').textContent = e.connectionQ;
    document.getElementById('explore-next4').textContent = e.next;
    document.getElementById('explore-next4').disabled = true;
    // Setup char counter (min 30, max 1000)
    setupCharCounter('explore-personal-desc', 'personal-desc-counter', 30, 1000, 'explore-next4', e.minHint30);
}

// Step 4 → 5: After personal description
function exploreNext4() {
    exploreData.personalDesc = document.getElementById('explore-personal-desc').value.trim();
    const e = exploreContent[currentLang];
    showExploreStep('explore-step5');
}

// Step 5 → 6: Draw word card
function exploreDrawWord() {
    const e = exploreContent[currentLang];
    const langKey = langKeyMap[currentLang];
    const wordIndex = Math.floor(Math.random() * 100);
    exploreData.word = wordsData[wordIndex];

    showExploreStep('explore-step6');
    const shuffle = document.getElementById('explore-shuffle-2');
    shuffle.style.display = 'block';
    shuffle.classList.add('playing');

    setTimeout(() => {
        shuffle.classList.remove('playing');
        shuffle.style.display = 'none';
        const wordInLang = exploreData.word[langKey] || exploreData.word.en;
        document.getElementById('explore-word-text').textContent = wordInLang;
        document.getElementById('explore-word-revealed').classList.add('visible');

        // Stay 1.5 seconds then go to step 7
        setTimeout(() => {
            showExploreStep('explore-step7');
            document.getElementById('explore-recap-img').src = exploreData.photoNum + '.PNG';
            const wordDisplay = (currentLang === 'en') ? exploreData.word.en : wordInLang + ' / ' + exploreData.word.en;
            document.getElementById('explore-recap-word').textContent = wordDisplay;
            // Build step 7 question with word inserted
            const questionText = e.afterWord.replace('{word}', wordInLang);
            document.getElementById('explore-step7-text').textContent = questionText;
            document.getElementById('explore-next7').textContent = e.next;
            document.getElementById('explore-next7').disabled = true;
            // Setup char counter (min 50, max 300)
            setupCharCounter('explore-wordpic-desc', 'wordpic-desc-counter', 50, 300, 'explore-next7', e.minHint50);
        }, 1500);
    }, 3200);
}

// Step 7 → 8: Final result
function exploreNext7() {
    const e = exploreContent[currentLang];
    exploreData.wordpicDesc = document.getElementById('explore-wordpic-desc').value.trim();
    showExploreStep('explore-step8');
    document.getElementById('explore-final-text').textContent = e.finalText;
    document.getElementById('copy-result-btn').textContent = e.copyBtn;
    document.getElementById('explore-restart-btn').textContent = e.restart;
}

// Copy result to clipboard using AIPrompt format
function copyResult() {
    const e = exploreContent[currentLang];
    const langKey = langKeyMap[currentLang];
    const wordInLang = exploreData.word[langKey] || exploreData.word.en;
    const langLabel = content[currentLang].label;

    const prompt = `I have great uncertainty about the situation described in "${exploreData.issue}" and want to better understand my own thoughts.
Through subconscious exploration, I believe my feelings about this situation are conveyed through my description of an image: "${exploreData.picDesc}"
And my dilemma or involvement with this environment/situation is like: "${exploreData.personalDesc}"
When returning to my true inner thoughts, combined with the word "${exploreData.word.en}", I feel that I actually want a result or influence related to: "${exploreData.wordpicDesc}"

Please help me clarify my true inner thoughts based on the above, and generate your response primarily in ${langLabel}:
1. Assume you are a subconscious psychology expert who specializes in using image descriptions and object associations to determine intentions and true thoughts. Do not be judgmental about correctness — describe everything objectively, prioritizing what the person truly desires inside, and help them follow their inner needs.
2. Please use an empathetic, calm emotional tone and objective language to analyze my current situation and my true thoughts and intentions.
3. First, based on my dilemma and related descriptions, tell me how I objectively observe the overall state of this dilemma and possible future developments.
4. Also tell me how I perceive this difficulty or situation, and what impact or worries it might bring to my life if it continues, or what kind of dilemma I am facing.
5. Finally, tell me what my innermost desire or preferred way of handling this is, but what difficulties or problems I might face that prevent me from following my heart, and how I should properly handle this to align with my deepest expectations and thoughts.
6. After concluding, continue to ask me if there are thoughts I'd like to share and discuss — you are willing to assist me, and continue answering based on the previous context.`;

    navigator.clipboard.writeText(prompt).then(() => {
        document.getElementById('copy-result-btn').textContent = e.copied;
        setTimeout(() => {
            document.getElementById('copy-result-btn').textContent = e.copyBtn;
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = prompt;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        document.getElementById('copy-result-btn').textContent = e.copied;
        setTimeout(() => {
            document.getElementById('copy-result-btn').textContent = e.copyBtn;
        }, 2000);
    });
}

function exploreRestart() {
    goToMain();
}

// =============================================
// VISIT COUNTER
// =============================================
function incrementVisitCounter(key, elementId) {
    let count = parseInt(localStorage.getItem(key) || '0', 10);
    count++;
    localStorage.setItem(key, count);
    document.getElementById(elementId).textContent = '#' + count;
}

function incrementTotalVisit() {
    let count = parseInt(localStorage.getItem('totalVisitCount') || '0', 10);
    count++;
    localStorage.setItem('totalVisitCount', count);
    updateTotalVisitDisplay(count);
}

function updateTotalVisitDisplay(count) {
    const padded = String(count).padStart(6, '0');
    document.getElementById('total-visit-counter').textContent = 'Total Visit: ' + padded;
}

// =============================================
// BACKGROUND MUSIC
// =============================================
let musicPlaying = false;

function toggleMusic() {
    const audio = document.getElementById('bg-music');
    const btn = document.getElementById('music-toggle');
    if (musicPlaying) {
        audio.pause();
        btn.textContent = '🔇';
        musicPlaying = false;
    } else {
        audio.volume = 0.3;
        audio.play();
        btn.textContent = '🔊';
        musicPlaying = true;
    }
}

// Auto-play music on first user interaction
function startMusicOnInteraction() {
    if (!musicPlaying) {
        const audio = document.getElementById('bg-music');
        audio.volume = 0.3;
        audio.play().then(() => {
            musicPlaying = true;
            document.getElementById('music-toggle').textContent = '🔊';
        }).catch(() => {});
    }
    document.removeEventListener('click', startMusicOnInteraction);
}
document.addEventListener('click', startMusicOnInteraction);

// =============================================
// INIT
// =============================================
window.addEventListener('DOMContentLoaded', () => {
    // Display current total visit count
    const count = parseInt(localStorage.getItem('totalVisitCount') || '0', 10);
    updateTotalVisitDisplay(count);
});