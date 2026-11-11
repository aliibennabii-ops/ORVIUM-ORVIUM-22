export interface TranslationSchema {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    problems: string;
    industries: string;
    process: string;
    demonstrations: string;
    about: string;
    faq: string;
    discussProject: string;
    menu: string;
    close: string;
    language: string;
  };
  hero: {
    tagline: string;
    headline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    valueProposition: string;
    activeNodesLabel: string;
    liveOrchestration: string;
  };
  problems: {
    sectionTag: string;
    headline: string;
    description: string;
    problemLabel: string;
    impactLabel: string;
    solutionLabel: string;
    items: Array<{
      id: string;
      title: string;
      problem: string;
      impact: string;
      solution: string;
    }>;
  };
  services: {
    sectionTag: string;
    headline: string;
    description: string;
    whatItIsLabel: string;
    problemSolvedLabel: string;
    howItWorksLabel: string;
    examplesLabel: string;
    benefitsLabel: string;
    ctaLabel: string;
    items: Array<{
      number: string;
      title: string;
      tagline: string;
      whatItIs: string;
      problemSolved: string;
      howItWorks: string;
      examples: string[];
      benefits: string[];
    }>;
  };
  industries: {
    sectionTag: string;
    headline: string;
    description: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      useCases: string[];
      diagramTitle: string;
    }>;
  };
  process: {
    sectionTag: string;
    headline: string;
    description: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
      detail: string;
      deliverable: string;
    }>;
  };
  demonstrations: {
    badge: string;
    sectionTag: string;
    headline: string;
    description: string;
    problemLabel: string;
    solutionLabel: string;
    technologiesLabel: string;
    benefitsLabel: string;
    workflowLabel: string;
    items: Array<{
      id: string;
      title: string;
      category: string;
      problem: string;
      solution: string;
      workflow: string[];
      technologies: string[];
      benefits: string[];
    }>;
  };
  about: {
    sectionTag: string;
    headline: string;
    manifesto: string;
    mission: string;
    pillars: Array<{
      title: string;
      description: string;
    }>;
  };
  faq: {
    sectionTag: string;
    headline: string;
    description: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  finalCta: {
    headline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  contactModal: {
    title: string;
    subtitle: string;
    whatsappTitle: string;
    whatsappDesc: string;
    whatsappAction: string;
    emailTitle: string;
    emailDesc: string;
    emailAction: string;
    socialTitle: string;
    phoneLabel: string;
    copied: string;
    copyPhone: string;
    close: string;
    officialDirectNotice: string;
  };
  footer: {
    tagline: string;
    rights: string;
    legalNotice: string;
    directContact: string;
    socials: string;
  };
}

export const translations: Record<'ar' | 'fr' | 'en', TranslationSchema> = {
  ar: {
    meta: {
      title: 'ORVIUM — وكالة هندسة الأتمتة بالذكاء الاصطناعي | نحن نؤتمت. وأنت تنمو.',
      description: 'تصمم ORVIUM أنظمة أتمتة ذكية، وكلاء ذكاء اصطناعي، ومسارات عمل متصلة. عمل يدوي أقل. عمليات أذكى. نمو مستدام.',
    },
    nav: {
      services: 'خدماتنا',
      problems: 'التحديات',
      industries: 'القطاعات',
      process: 'منهجية العمل',
      demonstrations: 'نماذج توضيحية',
      about: 'عن ORVIUM',
      faq: 'الأسئلة الشائعة',
      discussProject: 'ناقش مشروعك',
      menu: 'القائمة',
      close: 'إغلاق',
      language: 'اللغة',
    },
    hero: {
      tagline: 'نحن نؤتمت. وأنت تنمو.',
      headline: 'حوّل أعمالك مع الأتمتة الذكية.',
      description: 'نصمم أنظمة أتمتة ذكية تقضي على العمل المتكرر، وتربط أدوات أعمالك، وتساعد مؤسستك على العمل بكفاءة أعلى.',
      primaryCta: 'ناقش مشروعك',
      secondaryCta: 'استكشف حلولنا',
      valueProposition: 'عمل يدوي أقل. عمليات أذكى. نمو مستدام.',
      activeNodesLabel: 'مسارات متصلة تعمل باستمرار',
      liveOrchestration: 'بنية تحتية هندسية متكاملة',
    },
    problems: {
      sectionTag: 'التحديات التشغيلية',
      headline: 'سبعة تحديات تعيق نمو المؤسسات ونحلها جذرياً',
      description: 'تستنزف العمليات اليدوية غير المترابطة طاقة الفريق وتحد من قدرة الأعمال على التوسع. نحن نبني البنية البديلة.',
      problemLabel: 'التحدي التشغيلي',
      impactLabel: 'الأثر على المؤسسة',
      solutionLabel: 'فرصة الأتمتة الهندسية',
      items: [
        {
          id: 'admin',
          title: 'العمل الإداري المتكرر',
          problem: 'إدخال البيانات اليدوي، معالجة الفواتير، ونقل السجلات بين جداول البيانات والأنظمة.',
          impact: 'إهدار مئات الساعات شهرياً في أعمال رتيبة وارتفاع احتمالية الأخطاء البشرية الحسابية.',
          solution: 'بناء خطوط معالجة رقمية مؤتمتة تنقل وتتحقق من صحة البيانات فورياً وبلا تدخل يدوي.',
        },
        {
          id: 'crm',
          title: 'تشتت معلومات العملاء',
          problem: 'توزع بيانات العملاء بين محادثات واتساب، وصناديق البريد، وجداول إكسل المتفرقة.',
          impact: 'فقدان العملاء المحتملين، وبطء المتابعة، وانعدام الرؤية الموحدة لرحلة العميل.',
          solution: 'مزامنة مركزية فورية تجمع بيانات الاتصال والاستفسارات في مسار موحد تلقائياً.',
        },
        {
          id: 'orders',
          title: 'الإدارة اليدوية للطلبات',
          problem: 'تسجيل طلبات الشراء، وتأكيدها، وإرسالها لشركات الشحن يدوياً عبر تطبيقات متفرقة.',
          impact: 'تأخير في التجهيز، أخطاء في العناوين والكميات، وتجربة استلام محبطة للعميل.',
          solution: 'أتمتة شاملة لدورة الطلب من استلام الإشعار وحتى إصدار بوليصة الشحن وتحديث المخزون.',
        },
        {
          id: 'support',
          title: 'بطء الرد على استفسارات العملاء',
          problem: 'تراكم الاستفسارات المتكررة خارج أوقات العمل الرسمية وانتظار العميل لساعات.',
          impact: 'انخفاض معدلات التحويل وتوجه العملاء للمنافسين نتيجة التأخر في الإجابة.',
          solution: 'نشر مساعدي ذكاء اصطناعي متخصصين يجيبون على الاستفسارات وينفذون العمليات فوراً 24/7.',
        },
        {
          id: 'apps',
          title: 'تطبيقات أعمال غير متصلة',
          problem: 'عزل منصات المحاسبة، المتجر الإلكتروني، إدارة المخزون، ونظام خدمة العملاء عن بعضها.',
          impact: 'ازدواجية العمل واختلاف الأرقام بين الأقسام وصعوبة التنسيق الداخلي.',
          solution: 'هندسة تكاملية تربط واجهات البرمجة (APIs) وتجعل البيانات تتدفق بسلاسة وأمان.',
        },
        {
          id: 'reporting',
          title: 'إعداد التقارير المستهلك للوقت',
          problem: 'جمع البيانات يدوياً في نهاية كل أسبوع أو شهر لتركيب تقرير أداء مالي أو تشغيلي.',
          impact: 'اتخاذ قرارات متأخرة بناءً على أرقام قديمة غير متزامنة مع الواقع التشغيلي.',
          solution: 'لوحات قيادة مؤتمتة تجمع الإحصاءات لحظياً وتوزع ملخصات تحليلية تنفيذية في الموعد.',
        },
        {
          id: 'ops',
          title: 'عمليات تشغيلية غير فعالة',
          problem: 'غياب التوثيق الآلي للمهام وتكرار الخطوات غير المنتجة في دورات العمل اليومية.',
          impact: 'اختناقات تشغيلية وصعوبة تدريب الموظفين الجدد وانخفاض جودة المخرجات.',
          solution: 'إعادة هندسة المسارات التشغيلية وتحويلها إلى بروتوكولات مؤتمتة وموثقة برمجياً.',
        },
      ],
    },
    services: {
      sectionTag: 'خدماتنا الهندسية',
      headline: 'أنظمة متطورة مبنية خصيصاً لدقة عملياتك',
      description: 'نبتكر حلولاً تقنية تجمع بين الأتمتة العملية والذكاء الاصطناعي لرفع الكفاءة التشغيلية لأعلى مستوياتها.',
      whatItIsLabel: 'ما هي هذه الخدمة؟',
      problemSolvedLabel: 'ما المشكلة التي تعالجها؟',
      howItWorksLabel: 'كيف تعمل تقنياً؟',
      examplesLabel: 'أمثلة تطبيقية واقعية',
      benefitsLabel: 'العوائد التشغيلية المباشرة',
      ctaLabel: 'ناقش هذا الحل لمؤسستك',
      items: [
        {
          number: '01',
          title: 'أتمتة العمليات والمهام التشغيلية',
          tagline: 'Business Process Automation',
          whatItIs: 'أتمتة متكاملة للمهام المتكررة ومسارات نقل البيانات والإشعارات والعمليات الإدارية دون الحاجة لتدخل يدوي يومي.',
          problemSolved: 'معالجة استنزاف وقت الموظفين في المهام الروتينية المتكررة وإلغاء الأخطاء البشرية في نقل البيانات.',
          howItWorks: 'ربط بروتوكولات الأنظمة وتصميم مشغلات رقمية (Triggers) تنفذ إجراءات محددة وفق قواعد عمل دقيقة وموثوقة.',
          examples: [
            'إدخال ومزامنة البيانات التلقائية بين الأنظمة المختلفة',
            'إرسال الإشعارات والتنبيهات المجدولة للأطراف المعنية',
            'أتمتة الفواتير والقيود المحاسبية التأسيسية',
            'توليد التقارير الدورية وتوزيعها تلقائياً',
          ],
          benefits: [
            'توفير حتى 70% من الوقت المخصص للأعمال الروتينية',
            'انعدام الأخطاء الناتجة عن النقل اليدوي للمعلومات',
            'تسريع دورة إنجاز المعاملات من ساعات إلى ثوانٍ معدودة',
          ],
        },
        {
          number: '02',
          title: 'الأتمتة المدعومة بالذكاء الاصطناعي',
          tagline: 'AI-Powered Automation',
          whatItIs: 'دمج نماذج الذكاء الاصطناعي المتقدمة داخل تدفقات الأعمال لفهم وتصنيف وتحليل ومعالجة المستندات والنصوص المعقدة.',
          problemSolved: 'عجز الأتمتة التقليدية عن التعامل مع البيانات غير المنظمة كالمستندات الورقية ورسائل البريد غير النمطية.',
          howItWorks: 'استخراج المعاني والبيانات المهيكلة من المستندات والصور والنصوص، والتحقق منها قبل توجيهها للأنظمة المركزية.',
          examples: [
            'المعالجة الذكية للفواتير والمستندات واستخراج الأرقام بدقة',
            'تصنيف المراسلات الواردة وتوجيهها للمسؤول المختص تلقائياً',
            'تلخيص وتحليل ملفات العمل الضخمة واستخراج المؤشرات المهمة',
            'التدقيق اللغوي والمضموني لمعاملات العملاء',
          ],
          benefits: [
            'معالجة الوثائق والمستندات بسرعة فائقة ودقة عالية',
            'إمكانية قراءة وتصنيف مئات الطلبات غير المهيكلة يومياً',
            'تفريغ الكوادر المتخصصة لتحليل القرارات الاستراتيجية',
          ],
        },
        {
          number: '03',
          title: 'هندسة وكلاء الذكاء الاصطناعي',
          tagline: 'AI Agent Engineering',
          whatItIs: 'بناء وكلاء ذكاء اصطناعي متخصصين قادرين على استخدام الأدوات المعتمدة، وتنفيذ مهام متعددة الخطوات تحت إشراف بشري محكم.',
          problemSolved: 'الحاجة إلى كوادر بشرية متفرغة لأداء مهام بحثية وتنسيقية مركبة تتطلب اتخاذ إجراءات عملية في عدة أدوات متتابعة.',
          howItWorks: 'برمجة وكيل مخصص مزود بصلاحيات محددة، يتلقى الهدف، ويخطط للخطوات، ويستدعي أدوات النظام لتحقيق النتيجة بأمان.',
          examples: [
            'مساعد أعمال ذكي يبحث في قواعد المعرفة الداخلية ويجيب الموظفين',
            'وكيل دعم عملاء ينفذ إلغاء الطلب أو تحديث العنوان مباشرة',
            'وكيل جدولة ينسق المواعيد بين العملاء وفرق العمل عبر التقويم',
            'وكيل تتبع يفحص الشحنات المعلقة ويخاطب شركات التوصيل',
          ],
          benefits: [
            'استجابة فورية للعمليات المعقدة على مدار 24 ساعة',
            'تنفيذ دقيق للمهام متعددة المراحل وفق سياسات محددة مسبقاً',
            'إشراف بشري شفاف وقابلية كاملة للتدقيق والمتابعة',
          ],
        },
      ],
    },
    industries: {
      sectionTag: 'حلول القطاعات',
      headline: 'هندسة مصممة وفق متطلبات نشاطك التجاري',
      description: 'نوفر حلولاً معيارية ومصممة خصيصاً للتحديات التشغيلية الخاصة بكل مجال من مجالات الأعمال.',
      items: [
        {
          id: 'ecommerce',
          title: 'التجارة الإلكترونية (E-commerce)',
          description: 'أتمتة مبيعات المتاجر، وإدارة المخزون، وتأكيد طلبات الشراء، والتواصل مع العملاء وشركات التوصيل.',
          useCases: [
            'مزامنة فورية للطلبات بين المتجر وشركة الشحن ونظام المخازن',
            'إرسال إشعارات حالة التوصيل عبر واتساب والرسائل القصيرة تلقائياً',
            'إدارة استرجاع واستبدال المنتجات وفق شروط المتجر آلياً',
            'تحديث كميات المنتجات بين قنوات البيع المتعددة لحظياً',
          ],
          diagramTitle: 'مسار أتمتة دورة الطلب والشحن',
        },
        {
          id: 'retail',
          title: 'تجارة التجزئة (Retail)',
          description: 'ربط نقاط البيع بالمخازن وإدارة الموردين وتوحيد بيانات المبيعات عبر الفروع المتعددة.',
          useCases: [
            'تنبيهات تلقائية عند انخفاض المخزون وإعداد طلبات التوريد مسبقاً',
            'توحيد تقارير الإيرادات اليومية من كافة الفروع في لوحة مركزية',
            'أتمتة برامج ولاء العملاء وتوزيع العروض بناءً على تاريخ الشراء',
            'أرشفة رقمية فورية لإيصالات وفواتير المشتريات اليومية',
          ],
          diagramTitle: 'مسار تكامل الفروع والمخزون المركزي',
        },
        {
          id: 'services',
          title: 'الخدمات المهنية والشركات الاستشارية',
          description: 'تنظيم مسارات استقطاب العملاء، وتوقيع العقود، وجدولة الاستشارات، ومتابعة المستحقات.',
          useCases: [
            'أتمتة تهيئة العملاء الجدد (Onboarding) وجمع البيانات التأسيسية',
            'توليد عروض الأسعار والاتفاقيات تلقائياً بناءً على بيانات العميل',
            'متابعة الفواتير المستحقة وإرسال تذكيرات الدفع اللبقة في مواعيدها',
            'مزامنة المواعيد مع تقاويم المستشارين دون تضارب',
          ],
          diagramTitle: 'مسار استقطاب وخدمة العملاء',
        },
        {
          id: 'realestate',
          title: 'التطوير والتسويق العقاري',
          description: 'تأهيل المشترين والمستأجرين، وجدولة المعاينات، وإدارة ملفات العقارات والعقود.',
          useCases: [
            'تأهيل فوري لطلبات الشراء الواردة من الحملات الإعلانية ومواقع التواصل',
            'حجز مواعيد زيارة العقارات تلقائياً وتوزيعها على الوسطاء',
            'توليد كشوفات تسويقية PDF للعقارات ومشاركتها مع العميل فوراً',
            'تنبيهات تجديد عقود الإيجار ومتابعة جداول الدفعات',
          ],
          diagramTitle: 'مسار تأهيل المشترين وتنسيق المعاينات',
        },
        {
          id: 'smb',
          title: 'الشركات الصغيرة والمتوسطة (SMBs)',
          description: 'بناء العمود الفقري الرقمي للمؤسسات الصاعدة لتعمل بفاعلية تضاهي المؤسسات الكبرى وبأقل جهد بشري.',
          useCases: [
            'ربط البريد الإلكتروني والواتساب بنظام إدارة علاقات العملاء (CRM)',
            'أتمتة الإجراءات الإدارية والموافقات الداخلية للموظفين',
            'تقارير أداء دورية توضح مؤشرات التدفق المالي والإنتاجية',
            'أرشفة وتصنيف السجلات والوثائق الرسمية بانتظام',
          ],
          diagramTitle: 'البنية التشغيلية المترابطة للمؤسسة',
        },
      ],
    },
    process: {
      sectionTag: 'منهجية العمل',
      headline: 'مسار هندسي دقيق من خمس مراحل معيارية',
      description: 'نتبع أسلوباً هندسياً يضمن وضوح المتطلبات، وجودة البناء التقني، وسلاسة الانتقال التشغيلي.',
      steps: [
        {
          number: '01',
          title: 'الاستكشاف (Discovery)',
          description: 'فهم أهداف المؤسسة، والأدوات المستخدمة، وطبيعة التحديات التشغيلية اليومية.',
          detail: 'جلسة استقصائية متعمقة لرسم خارطة العمل الحالية وفهم أين يضيع الوقت والموارد.',
          deliverable: 'خريطة العمليات الحالية والملاحظات التشغيلية الأولية',
        },
        {
          number: '02',
          title: 'التحليل (Analysis)',
          description: 'تحديد العمليات القابلة للأتمتة بدقة واحتساب الجدوى والعائد المتوقع على الاستثمار.',
          detail: 'فرز المهام وفق تكرارها وتأثيرها المالي والزمني لتحديد الأولويات الهندسية.',
          deliverable: 'تقرير فرص الأتمتة وجدول الأولويات والمكتسبات السريعة',
        },
        {
          number: '03',
          title: 'الهندسة المعمارية (Architecture)',
          description: 'تصميم الهيكل التقني للحل، وروابط الأنظمة (APIs)، وتدفق البيانات وشروط الأمان.',
          detail: 'وضع مخططات تقنية دقيقة تحدد آلية تدفق البيانات ونقاط التكامل والتحقق.',
          deliverable: 'مخطط البنية التحتية ومسار تدفق البيانات المعتمد',
        },
        {
          number: '04',
          title: 'التنفيذ والاختبار (Implementation)',
          description: 'بناء مسارات الأتمتة، ودمج الأنظمة، وإجراء اختبارات دقيقة للتأكد من الموثوقية.',
          detail: 'تطوير الحل في بيئة اختبارية، محاكاة كافة السيناريوهات الاستثنائية، ثم النشر الآمن.',
          deliverable: 'نظام أتمتة عامل ومختبر وموثق بالكامل',
        },
        {
          number: '05',
          title: 'التحسين المستمر (Optimization)',
          description: 'متابعة أداء النظام، والتأكد من استقراره، وتطويره لمواكبة نمو أعمال المؤسسة.',
          detail: 'مراقبة مستمرة لمعدلات النجاح وسرعة الاستجابة وتقديم تحسينات دورية متقدمة.',
          deliverable: 'تقارير أداء تشغيلية ودعم فني لضمان استدامة النظام',
        },
      ],
    },
    demonstrations: {
      badge: 'نماذج توضيحية (Concept Demonstrations)',
      sectionTag: 'أمثلة عملية واقعية',
      headline: 'كيف تبدو الأتمتة الهندسية في أرض الواقع؟',
      description: 'أمثلة معمارية توضح كيفية دمج الأدوات والذكاء الاصطناعي لحل سيناريوهات تشغيلية شائعة (نماذج توضيحية مفاهيمية).',
      problemLabel: 'المشكلة المعالجة',
      solutionLabel: 'الحل الهندسي المقترح',
      technologiesLabel: 'فئات التكامل والتقنيات',
      benefitsLabel: 'المنافع التشغيلية المتوقعة',
      workflowLabel: 'مسار التدفق البرمجي',
      items: [
        {
          id: 'smart-order',
          title: 'إدارة الطلبات الذكية',
          category: 'التجارة والتجزئة',
          problem: 'يقضي الفريق ساعات يومياً في نقل الطلبات يدوياً بين المتجر، وشركات الشحن، وتحديث المخزون.',
          solution: 'نظام مؤتمت يلتقط الطلب الجديد فورياً، ويتحقق من المخزون، ويصدر إذن الشحن، ويخطر العميل تلقائياً.',
          workflow: [
            'تسجيل الطلب في المتجر الإلكتروني',
            'فحص فوري للمخزون واعتماد الدفع',
            'إصدار بوليصة الشحن مع شركة التوصيل',
            'إرسال رسالة تتبع عبر واتساب للعميل',
          ],
          technologies: ['واجهات برمجية للمتاجر (E-comm APIs)', 'بوابات الشحن والتوصيل', 'بروتوكول واتساب للأعمال', 'قواعد بيانات المخزون'],
          benefits: ['انخفاض زمن معالجة الطلب من 25 دقيقة إلى 5 ثوانٍ', 'صفر أخطاء في عناوين وأرقام التوصيل', 'متابعة تلقائية تقلل استفسارات تتبع الشحنات بنسبة 80%'],
        },
        {
          id: 'lead-management',
          title: 'إدارة وتأهيل العملاء المحتملين تلقائياً',
          category: 'المبيعات وتطوير الأعمال',
          problem: 'تصل استفسارات العملاء عبر واتساب ومواقع التواصل، وتضيع الفرص بسبب التأخر في الرد والتأهيل.',
          solution: 'مسار تلقائي يلتقط العميل المحتمل، ويطرح أسئلة تأهيلية ذكية، ويسجله في الـ CRM، ويوجهه لمسؤول المبيعات.',
          workflow: [
            'استلام استفسار عبر واتساب أو استمارة',
            'تأهيل العميل آلياً بناءً على الميزانية والاحتياج',
            'إنشاء بطاقة عميل في CRM مع كامل التفاصيل',
            'تنبيه فوري لمسؤول المبيعات المختص للمتابعة',
          ],
          technologies: ['أنظمة إدارة العملاء (CRM)', 'محركات التأهيل البرمجية', 'تكاملات المراسلة الفورية', 'تنبيهات الفرق'],
          benefits: ['الرد على العميل المحتمل في أقل من 30 ثانية', 'فلترة العملاء غير الجادين قبل وصولهم لفريق المبيعات', 'زيادة معدل تحويل الاستفسارات إلى صفقات بنسبة ملحوظة'],
        },
        {
          id: 'support-agent',
          title: 'مساعد خدمة العملاء بالذكاء الاصطناعي',
          category: 'خدمة العملاء والدعم الفني',
          problem: 'تراكم مئات الأسئلة المتكررة حول أوقات العمل، وسياسة التبديل، وموقع الفروع، مما يعطل الفريق.',
          solution: 'وكيل ذكاء اصطناعي مدرب على وثائق الشركة يجيب بدقة ولباقة، وينفذ الإجراءات البسيطة بإذن مسبق.',
          workflow: [
            'استقبال سؤال العميل بأي لهجة أو صياغة',
            'البحث الدلالي في قاعدة المعرفة المعتمدة فقط',
            'صياغة إجابة مباشرة ودقيقة مع روابط موثقة',
            'تصعيد المعاملات الحساسة للموظف البشري عند الحاجة',
          ],
          technologies: ['نماذج لغوية متقدمة (LLMs)', 'قواعد المعرفة الموجهة (RAG)', 'واجهات الرد الفوري', 'نظام التصعيد البشري'],
          benefits: ['حل فوري لـ 70% من الاستفسارات المتكررة دون تدخل بشري', 'توفر على مدار 24 ساعة طوال أيام الأسبوع', 'ثبات وتطابق جودة الإجابات وفق المعايير المعتمدة'],
        },
        {
          id: 'automated-reporting',
          title: 'التقارير المؤسسية المؤتمتة',
          problem: 'يستغرق جمع البيانات من عدة فروع أو أدوات أياماً لإعداد التقرير الأسبوعي أو الشهري للإدارة.',
          solution: 'خط تدفق بيانات يسحب الأرقام من مصادرها، ويوحدها، ويولد تقريراً تحليلياً شاملاً يُرسل للإدارة بموعد محدد.',
          category: 'الإدارة والعمليات',
          workflow: [
            'استخراج البيانات دورياً من المبيعات والمصاريف',
            'تنظيف ومطابقة الأرقام في محرك تحليلي مركزي',
            'توليد ملخص تنفيذي بصيغة تقرير أنيق',
            'إرسال التقرير تلقائياً عبر البريد الإلكتروني والرسائل',
          ],
          technologies: ['خطوط تكامل البيانات (ETL)', 'محركات التوليد التحليلي', 'أتمتة البريد والإشعارات', 'لوحات القيادة الإدارية'],
          benefits: ['إلغاء ساعات التجميع اليدوي كل أسبوع', 'أرقام محدثة وموثوقة خالية من أخطاء المعادلات', 'رؤية تشغيلية واضحة تساعد في اتخاذ قرارات سريعة ومبنية على بيانات'],
        },
      ],
    },
    about: {
      sectionTag: 'عن ORVIUM',
      headline: 'هندسة عملية تُحدث فارقاً ملموساً',
      manifesto: 'تأسست ORVIUM لتكون الشريك الهندسي الذي يمكّن المؤسسات من الانتقال من العمليات اليدوية المرهقة إلى أنظمة ذكية ومترابطة تعمل بانسجام.',
      mission: 'مهمتنا ليست إضافة تعقيدات برمجية، بل تبسيط العمليات، وإلغاء الهدر، وتمكين الشركات من النمو المستدام عبر بنية رقمية حديثة.',
      pillars: [
        {
          title: 'هندسة عملية قابلة للتطبيق',
          description: 'نركز على الحلول التي تعالج احتياجات حقيقية وتظهر نتائجها في سير العمل اليومي دون تعقيد غير ضروري.',
        },
        {
          title: 'فهم عميق لمنطق الأعمال',
          description: 'قبل كتابة أي مسار أتمتة، ندرس طبيعة نشاطك وتحدياتك لنبني حلاً يخدم أهدافك التجارية بدقة.',
        },
        {
          title: 'موثوقية تقنية عالية',
          description: 'نبني أنظمة مستقرة، آمنة، وقادرة على العمل المستمر دون انقطاع، مع آليات واضحة لمعالجة الاستثناءات.',
        },
        {
          title: 'أتمتة ذكية ومدروسة',
          description: 'نستثمر تقنيات الذكاء الاصطناعي حيث تحقق قيمة فعلية وميزة تنافسية حقيقية، وليس لمجرد المظاهر.',
        },
        {
          title: 'ذكاء اصطناعي مسؤول',
          description: 'نلتزم بالشفافية الكاملة، وحماية خصوصية بيانات عملائك، ووضع رقابة بشرية على الإجراءات الحساسة.',
        },
        {
          title: 'تطوير وتحسين دائم',
          description: 'الأتمتة ليست خطوة لمرة واحدة؛ نحن نراقب الأداء ونحسن المسارات لمواكبة تطور ونمو أعمالك المستمر.',
        },
      ],
    },
    faq: {
      sectionTag: 'الأسئلة الشائعة',
      headline: 'إجابات مباشرة ومحددة حول حلول الأتمتة',
      description: 'كل ما تحتاج معرفته عن كيفية بدء العمل، وإمكانيات الأنظمة، وطبيعة الشراكة الهندسية.',
      items: [
        {
          question: 'ما هي أتمتة العمليات (Business Automation)؟',
          answer: 'هي استخدام البرمجيات والتقنيات لتنفيذ المهام ومسارات العمل المتكررة تلقائياً بدلاً من القيام بها يدوياً، مثل نقل البيانات بين التطبيقات، وإصدار الفواتير، وإرسال الإشعارات، وإدارة الطلبات.',
        },
        {
          question: 'ما الفرق بين الأتمتة العادية والأتمتة بالذكاء الاصطناعي؟',
          answer: 'الأتمتة العادية تتبع قواعد ثابتة محددة مسبقاً (إذا حدث كذا، افعل كذا). أما الأتمتة بالذكاء الاصطناعي فلديها القدرة على فهم النصوص غير المنظمة، واستخراج المعلومات من الوثائق، وتصنيف المحتوى، والتعامل مع حالات متغيرة بمرونة.',
        },
        {
          question: 'ما هي وكلاء الذكاء الاصطناعي (AI Agents)؟',
          answer: 'وكلاء الذكاء الاصطناعي هم برامج ذكية متخصصة تمت برمجتها لتحقيق أهداف محددة. يستطيع الوكيل التخطيط، واستخدام الأدوات المعتمدة (مثل البحث في قاعدة بيانات أو إرسال بريد أو تعديل طلب)، وتنفيذ مهام متعددة الخطوات تحت إشراف بشري محكم.',
        },
        {
          question: 'ما نوع الشركات التي يمكنها الاستفادة من حلولكم؟',
          answer: 'تستفيد أي مؤسسة تعتمد على مهام متكررة أو تدير حجماً متزايداً من المعاملات والعملاء، وبشكل خاص: المتاجر الإلكترونية، شركات التجزئة، مقدمو الخدمات المهنية والاستشارية، الوكالات العقارية، والشركات الصغيرة والمتوسطة الساعية للتوسع.',
        },
        {
          question: 'هل يمكن ربط الأتمتة مع التطبيقات والأنظمة التي نستخدمها حالياً؟',
          answer: 'نعم بالتأكيد. نقوم بربط أدواتك الحالية مثل Google Workspace، ومحركات التجارة الإلكترونية، ونظم المحاسبة، ومنصات إدارة العملاء (CRM)، والواتساب دون الحاجة لتغيير الأنظمة التي اعتاد عليها فريقك.',
        },
        {
          question: 'كيف يبدأ المشروع معكم وما هي أول خطوة؟',
          answer: 'يبدأ المشروع بجلسة استكشاف نناقش فيها وضعك التشغيلي الحالي والتحديات التي تواجهك. نحدد العمليات الأكثر استنزافاً للوقت، ونضع خطة هندسية واضحة تحدد مسار الأتمتة والنتائج المتوقعة قبل البدء في التنفيذ.',
        },
        {
          question: 'هل تعمل أنظمة الأتمتة ووكلاء الذكاء الاصطناعي على مدار 24/7؟',
          answer: 'نعم. تعمل البنية التحتية المؤتمتة بشكل متواصل طوال اليوم وطوال أيام الأسبوع لمعالجة الطلبات، والاستجابة الفورية للاستفسارات، ومزامنة البيانات في كل ثانية.',
        },
        {
          question: 'كيف يمكن لمؤسستي طلب حل أتمتة من ORVIUM؟',
          answer: 'يمكنك التواصل معنا مباشرة عبر واتساب (+213562679104) أو عبر البريد الإلكتروني (agency.orvium@gmail.com) من خلال الضغط على زر "ناقش مشروعك" في الموقع لبدء المحادثة الفورية وتحديد موعد الجلسة الاستكشافية.',
        },
      ],
    },
    finalCta: {
      headline: 'هل أنت مستعد لجعل أعمالك تعمل بذكاء أكبر؟',
      description: 'دعنا نحدد العمليات التي يمكن تبسيطها، وربطها، وأتمتتها لتوفير الوقت وتسريع وتيرة نمو مؤسستك.',
      primaryCta: 'ابدأ المحادثة الآن',
      secondaryCta: 'تواصل عبر واتساب',
    },
    contactModal: {
      title: 'ابدأ المحادثة مع ORVIUM',
      subtitle: 'اختر وسيلة التواصل المباشرة الأنسب لك وسيقوم فريقنا بالرد عليك ومناقشة تفاصيل مشروعك.',
      whatsappTitle: 'محادثة فورية عبر واتساب',
      whatsappDesc: 'تواصل مباشرة مع فريقنا لمناقشة فكرة مشروعك وتحديد موعد الجلسة الاستكشافية.',
      whatsappAction: 'فتح محادثة واتساب',
      emailTitle: 'مراسلة بالبريد الإلكتروني',
      emailDesc: 'أرسل تفاصيل مشروعك أو طلب الاستشارة مباشرة إلى صندوق البريد الرسمي.',
      emailAction: 'إرسال بريد إلكتروني',
      socialTitle: 'حساباتنا الرسمية على منصات التواصل',
      phoneLabel: 'رقم الهاتف المعتمد',
      copied: 'تم نسخ الرقم',
      copyPhone: 'نسخ الرقم',
      close: 'إغلاق النافذة',
      officialDirectNotice: 'اتصال مباشر وآمن دون الحاجة لتسجيل حساب أو انتظار طويل.',
    },
    footer: {
      tagline: 'نحن نؤتمت. وأنت تنمو.',
      rights: 'جميع الحقوق محفوظة.',
      legalNotice: 'جميع النماذج المعروضة هي نماذج توضيحية مفاهيمية تمثل أطر عمل هندسية لتوضيح قدرات الأتمتة.',
      directContact: 'قنوات التواصل المباشرة',
      socials: 'تابع منصاتنا',
    },
  },

  fr: {
    meta: {
      title: "ORVIUM — Agence d'Ingénierie en Automatisation IA | Nous automatisons. Vous grandissez.",
      description: "ORVIUM conçoit des systèmes d'automatisation intelligents, des agents IA et des flux connectés. Moins de travail manuel. Des opérations plus intelligentes. Une croissance durable.",
    },
    nav: {
      services: 'Services',
      problems: 'Défis',
      industries: 'Secteurs',
      process: 'Méthodologie',
      demonstrations: 'Démonstrations',
      about: 'À propos',
      faq: 'FAQ',
      discussProject: 'Discuter de votre projet',
      menu: 'Menu',
      close: 'Fermer',
      language: 'Langue',
    },
    hero: {
      tagline: 'Nous automatisons. Vous grandissez.',
      headline: "Transformez votre entreprise grâce à l'automatisation intelligente.",
      description: "Nous concevons des systèmes d'automatisation intelligents qui éliminent le travail répétitif, connectent vos outils d'entreprise et aident votre organisation à fonctionner plus efficacement.",
      primaryCta: 'Discuter de votre projet',
      secondaryCta: 'Explorer nos solutions',
      valueProposition: 'Moins de travail manuel. Des opérations plus intelligentes. Une croissance durable.',
      activeNodesLabel: 'Flux connectés actifs en continu',
      liveOrchestration: 'Architecture technique intégrée',
    },
    problems: {
      sectionTag: 'Défis Opérationnels',
      headline: 'Sept freins majeurs que nous résolvons durablement',
      description: "Les processus manuels fragmentés épuisent vos équipes et freinent votre expansion. Nous concevons l'architecture de remplacement.",
      problemLabel: 'Le défi opérationnel',
      impactLabel: 'Impact sur votre organisation',
      solutionLabel: "Opportunité d'ingénierie d'automatisation",
      items: [
        {
          id: 'admin',
          title: 'Travail administratif répétitif',
          problem: 'Saisie manuelle de données, traitement des factures et transfert de dossiers entre tableurs et logiciels.',
          impact: 'Des centaines d’heures perdues chaque mois et un risque accru d’erreurs de saisie.',
          solution: 'Mise en place de pipelines numériques automatisés validant et synchronisant les données en temps réel sans intervention humaine.',
        },
        {
          id: 'crm',
          title: 'Données clients désorganisées',
          problem: 'Informations clients dispersées entre messages WhatsApp, boîtes de réception email et fichiers Excel.',
          impact: 'Perte de prospects qualifiés, retards de suivi et absence de vue consolidée du parcours client.',
          solution: 'Centralisation instantanée capturant chaque contact et demande dans un pipeline CRM structuré.',
        },
        {
          id: 'orders',
          title: 'Gestion manuelle des commandes',
          problem: 'Enregistrement, confirmation et transmission des expéditions effectués manuellement sur plusieurs plateformes.',
          impact: 'Délais de préparation, erreurs d’adresses ou de références, et insatisfaction client.',
          solution: 'Automatisation de bout en bout du cycle de commande, de la validation jusqu’au bordereau d’expédition et à la mise à jour des stocks.',
        },
        {
          id: 'support',
          title: 'Réponse lente aux demandes clients',
          problem: 'Accumulation des questions fréquentes hors des heures de bureau et attente prolongée pour les utilisateurs.',
          impact: 'Baisse du taux de conversion et départ vers des concurrents plus réactifs.',
          solution: 'Déploiement d’assistants IA spécialisés répondant précisément et exécutant des actions 24h/24 et 7j/7.',
        },
        {
          id: 'apps',
          title: 'Applications métier déconnectées',
          problem: 'Isolation entre logiciels de facturation, boutique e-commerce, gestion de stock et service client.',
          impact: 'Doubles saisies, disparités dans les chiffres et friction dans la coordination interne.',
          solution: 'Intégration d’APIs robustes permettant un flux de données fluide et sécurisé entre tous vos outils.',
        },
        {
          id: 'reporting',
          title: 'Rapports chronophages',
          problem: 'Compilation manuelle de données en fin de semaine ou de mois pour produire des bilans de performance.',
          impact: 'Prise de décision tardive basée sur des données obsolètes ou incohérentes.',
          solution: 'Tableaux de bord automatisés agrégeant les métriques en continu et générant des synthèses exécutives ponctuelles.',
        },
        {
          id: 'ops',
          title: 'Processus opérationnels inefficaces',
          problem: 'Absence de documentation automatisée des étapes et multiplication des tâches sans valeur ajoutée.',
          impact: 'Goulots d’étranglement, difficultés lors de l’intégration de nouveaux collaborateurs et qualité irrégulière.',
          solution: 'Réingénierie des flux opérationnels en protocoles standardisés et fiabilisés par le code.',
        },
      ],
    },
    services: {
      sectionTag: 'Nos Services',
      headline: 'Des systèmes conçus pour la précision de vos opérations',
      description: "Nous allions rigueur d'ingénierie logicielle et intelligence artificielle pour hisser l'efficacité de vos processus au plus haut niveau.",
      whatItIsLabel: "De quoi s'agit-il ?",
      problemSolvedLabel: 'Quel problème résout-il ?',
      howItWorksLabel: 'Comment cela fonctionne ?',
      examplesLabel: 'Exemples d’applications concrètes',
      benefitsLabel: 'Bénéfices opérationnels attendus',
      ctaLabel: 'Échanger sur cette solution',
      items: [
        {
          number: '01',
          title: 'Automatisation des processus métier',
          tagline: 'Business Process Automation',
          whatItIs: 'Automatisation complète des tâches répétitives, des flux de transfert de données, des notifications et des processus administratifs sans manipulation manuelle quotidienne.',
          problemSolved: 'Élimine la perte de temps sur des tâches récurrentes et supprime les erreurs de retranscription manuelle entre logiciels.',
          howItWorks: 'Connexion directe des protocoles et mise en place de déclencheurs numériques exécutant des actions définies selon des règles strictes.',
          examples: [
            'Saisie et synchronisation automatisée entre bases de données et ERP',
            'Envoi automatique de notifications et alertes ciblées aux équipes',
            'Génération de factures et écritures comptables préliminaires',
            'Émission et routage régulier de rapports d’activité',
          ],
          benefits: [
            'Jusqu’à 70% de temps économisé sur les tâches répétitives',
            'Zéro erreur de transcription ou d’omission de données',
            'Cycle de traitement réduit de plusieurs heures à quelques secondes',
          ],
        },
        {
          number: '02',
          title: 'Automatisation assistée par IA',
          tagline: 'AI-Powered Automation',
          whatItIs: 'Intégration de modèles d’IA avancés au cœur des processus pour comprendre, classer, extraire et analyser des données textuelles et documentaires complexes.',
          problemSolved: 'Résout l’incapacité des automatisations rigides traditionnelles à traiter des informations non structurées (PDFs, courriels libres, requêtes atypiques).',
          howItWorks: 'Extraction sémantique des données clés depuis des documents variés, contrôle de conformité, et injection directe dans vos logiciels métier.',
          examples: [
            'Traitement intelligent de factures et bons de commande avec extraction précise',
            'Tri et acheminement automatique des correspondances vers le bon service',
            'Synthèse de volumineux dossiers techniques et extraction de clauses',
            'Contrôle qualité et vérification de conformité documentaire',
          ],
          benefits: [
            'Capacité de traitement documentaire instantanée et continue',
            'Lecture et indexation sans effort de centaines de demandes quotidiennes',
            'Recentrage de vos spécialistes sur l’analyse à haute valeur ajoutée',
          ],
        },
        {
          number: '03',
          title: 'Ingénierie d’Agents IA',
          tagline: 'AI Agent Engineering',
          whatItIs: 'Développement d’agents IA spécialisés capables d’utiliser des outils autorisés, de poursuivre des objectifs précis et d’exécuter des séquences d’actions sous supervision humaine stricte.',
          problemSolved: 'Comble le besoin d’interventions humaines permanentes pour des tâches de recherche, de coordination et d’actions multi-outils.',
          howItWorks: 'Définition d’un périmètre de permissions claires ; l’agent interprète l’objectif, planifie ses étapes, et appelle les APIs nécessaires en toute sécurité.',
          examples: [
            'Assistant d’entreprise interrogeant les bases de connaissances internes',
            'Agent de support modifiant directement une adresse ou un statut de commande',
            'Agent de planification coordonnant les créneaux d’agendas sans conflit',
            'Agent de veille assurant le suivi logistique auprès des transporteurs',
          ],
          benefits: [
            'Prise en charge immédiate de scénarios multi-étapes 24h/24',
            'Exécution rigoureuse conforme aux directives préalablement définies',
            'Supervision humaine et traçabilité intégrale de chaque décision',
          ],
        },
      ],
    },
    industries: {
      sectionTag: 'Solutions Sectorielles',
      headline: 'Une ingénierie adaptée aux exigences de votre secteur',
      description: 'Des architectures modulaires conçues pour relever les défis opérationnels propres à votre domaine.',
      items: [
        {
          id: 'ecommerce',
          title: 'E-commerce',
          description: 'Automatisation des flux de commandes, gestion des stocks multi-canaux, confirmations client et coordination logistique.',
          useCases: [
            'Synchronisation instantanée entre boutique en ligne, entrepôt et transporteurs',
            'Notifications automatiques du statut d’expédition par WhatsApp et SMS',
            'Traitement fluide des demandes de retour selon les critères prédéfinis',
            'Mise à jour en temps réel des stocks sur l’ensemble des canaux de vente',
          ],
          diagramTitle: 'Architecture du cycle commande et logistique',
        },
        {
          id: 'retail',
          title: 'Commerce de Détail (Retail)',
          description: 'Connexion des points de vente physiques au stock central, gestion des réassorts et consolidation multi-boutiques.',
          useCases: [
            'Alertes de rupture de stock et génération automatique d’ordres de réapprovisionnement',
            'Consolidation des ventes journalières de tous les magasins sur un tableau unique',
            'Animation de programmes de fidélité et offres ciblées selon l’historique d’achat',
            'Numérisation et classement direct des justificatifs et factures de caisse',
          ],
          diagramTitle: 'Architecture réseau magasin & entrepôt central',
        },
        {
          id: 'services',
          title: 'Services Professionnels & Cabinets',
          description: 'Gestion des prospects, signature de conventions, planification de consultations et suivi des facturations.',
          useCases: [
            'Onboarding client automatisé avec collecte et vérification des pièces justificatives',
            'Génération automatisée de propositions d’honoraires et contrats types',
            'Suivi des échéances et relances cordiales et programmées des impayés',
            'Synchronisation des disponibilités d’agendas pour les rendez-vous clients',
          ],
          diagramTitle: 'Flux d’acquisition et gestion client',
        },
        {
          id: 'realestate',
          title: 'Immobilier & Promotion',
          description: 'Qualification des acquéreurs et locataires, planification des visites et gestion documentaire des mandats.',
          useCases: [
            'Qualification immédiate des leads provenant des annonces et réseaux sociaux',
            'Réservation automatique de créneaux de visite affectés aux négociateurs',
            'Production et transmission instantanée de fiches techniques PDF aux prospects',
            'Alertes d’échéances de baux et rappels d’appels de loyers',
          ],
          diagramTitle: 'Pipeline de qualification et coordination visites',
        },
        {
          id: 'smb',
          title: 'PME & Entreprises en Croissance (SMBs)',
          description: 'Création d’un socle opérationnel moderne permettant de rivaliser avec les grandes structures sans surcharger vos équipes.',
          useCases: [
            'Connexion des boîtes emails et WhatsApp au CRM d’entreprise',
            'Circuits d’approbation et validation administrative interne automatisés',
            'Rapports d’activité réguliers synthétisant trésorerie et productivité',
            'Classement et archivage automatique des documents comptables et légaux',
          ],
          diagramTitle: 'Architecture interconnectée PME',
        },
      ],
    },
    process: {
      sectionTag: 'Méthodologie',
      headline: 'Un parcours rigoureux en cinq étapes structurées',
      description: 'Une démarche d’ingénierie assurant clarté des objectifs, robustesse technique et transition opérationnelle sereine.',
      steps: [
        {
          number: '01',
          title: 'Découverte (Discovery)',
          description: 'Compréhension de votre entreprise, de vos outils existants et de vos enjeux opérationnels quotidiens.',
          detail: 'Échange approfondi pour cartographier vos processus actuels et repérer les déperditions de temps.',
          deliverable: 'Cartographie des flux actuels et diagnostic opérationnel initial',
        },
        {
          number: '02',
          title: 'Analyse (Analysis)',
          description: 'Identification précise des processus automatisables et évaluation du gain de temps et de rentabilité.',
          detail: 'Priorisation des flux selon leur fréquence, leur criticité et leur retour sur investissement.',
          deliverable: 'Rapport d’opportunités d’automatisation et plan des priorités',
        },
        {
          number: '03',
          title: 'Architecture (Architecture)',
          description: 'Conception technique de la solution, des connexions API, du transit des données et de la sécurité.',
          detail: 'Élaboration de schémas techniques déterminant les déclencheurs, les règles de contrôle et la résilience.',
          deliverable: 'Schéma d’architecture technique et protocole de flux de données',
        },
        {
          number: '04',
          title: 'Implémentation (Implementation)',
          description: 'Construction des scénarios d’automatisation, interconnexion des logiciels et phase de tests rigoureux.',
          detail: 'Développement en environnement de test, simulation de cas limites et déploiement maîtrisé.',
          deliverable: 'Système d’automatisation opérationnel, testé et documenté',
        },
        {
          number: '05',
          title: 'Optimisation (Optimization)',
          description: 'Suivi de la performance en production, maintenance continue et évolution selon votre croissance.',
          detail: 'Surveillance des métriques d’exécution et ajustements proactifs réguliers pour accompagner votre échelle.',
          deliverable: 'Rapports d’efficacité opérationnelle et support technique dédié',
        },
      ],
    },
    demonstrations: {
      badge: 'Démonstrations de Concepts (Concept Demonstrations)',
      sectionTag: 'Cas Pratiques Révélateurs',
      headline: 'Comment l’automatisation se matérialise sur le terrain ?',
      description: 'Exemples d’architectures illustrant la manière dont nos solutions répondent à des scénarios opérationnels types (démonstrations conceptuelles).',
      problemLabel: 'Problématique traitée',
      solutionLabel: 'Solution d’ingénierie proposée',
      technologiesLabel: 'Technologies & intégrations mobilisées',
      benefitsLabel: 'Bénéfices opérationnels anticipés',
      workflowLabel: 'Flux logique automatisé',
      items: [
        {
          id: 'smart-order',
          title: 'Gestion Intelligente des Commandes',
          category: 'E-commerce & Logistique',
          problem: 'L’équipe passe plusieurs heures par jour à retranscrire manuellement les commandes entre la boutique, le stock et les transporteurs.',
          solution: 'Système automatisé capturant la commande instantanément, vérifiant la disponibilité, émettant le bon d’expédition et informant le client.',
          workflow: [
            'Capture de la commande validée sur la boutique en ligne',
            'Vérification en temps réel du stock et statut de paiement',
            'Émission immédiate du bordereau avec le transporteur',
            'Notification automatique de suivi par WhatsApp au client',
          ],
          technologies: ['APIs E-commerce', 'Plateformes logistiques partenaires', 'API WhatsApp Business', 'Bases de données de stock'],
          benefits: ['Traitement réduit de 25 minutes à 5 secondes par commande', 'Zéro erreur de saisie d’adresse ou de quantité', 'Baisse de 80% des demandes de suivi auprès du service client'],
        },
        {
          id: 'lead-management',
          title: 'Qualification et Gestion Automatisée des Leads',
          category: 'Ventes & Développement Commercial',
          problem: 'Les demandes affluent par WhatsApp et réseaux sociaux, mais les opportunités sont perdues par manque de rapidité de qualification.',
          solution: 'Pipeline automatisé recevant chaque prospect, posant des questions de qualification ciblées, l’enregistrant dans le CRM et alertant l’équipe commerciale.',
          workflow: [
            'Réception d’une demande via formulaire ou WhatsApp',
            'Qualification automatique selon budget, besoin et calendrier',
            'Création instantanée de la fiche prospect dans le CRM',
            'Alerte et assignation directe au chargé commercial concerné',
          ],
          technologies: ['Logiciels CRM d’entreprise', 'Moteurs de règles de qualification', 'Connecteurs de messagerie instantanée', 'Systèmes de notification d’équipe'],
          benefits: ['Prise en charge du prospect en moins de 30 secondes', 'Filtrage des demandes non qualifiées en amont', 'Hausse significative du taux de conversion commerciale'],
        },
        {
          id: 'support-agent',
          title: 'Assistant Support Client par Intelligence Artificielle',
          category: 'Service Client & Assistance',
          problem: 'Surcharge quotidienne avec des centaines de requêtes récurrentes (horaires, modalités d’échange, adresses) monopolisant les équipes.',
          solution: 'Agent IA spécialisé entraîné exclusivement sur les connaissances de l’entreprise, répondant avec courtoisie et effectuant des actions courantes sécurisées.',
          workflow: [
            'Réception de la question client formulée en langage naturel',
            'Recherche sémantique ciblée dans la documentation officielle',
            'Formulation d’une réponse claire, précise et référencée',
            'Passage de relais au conseiller humain pour les cas complexes',
          ],
          technologies: ['Modèles de langage avancés (LLMs)', 'Génération augmentée par récupération (RAG)', 'APIs de messagerie multi-canal', 'Système d’escalade humaine'],
          benefits: ['Résolution immédiate de 70% des questions répétitives', 'Disponibilité continue 24h/24 sans interruption', 'Homogénéité et rigueur des réponses transmises'],
        },
        {
          id: 'automated-reporting',
          title: 'Rapports d’Activité Automatisés',
          category: 'Direction & Pilotage',
          problem: 'Des journées entières consacrées à compiler les chiffres de multiples filiales ou logiciels pour les réunions de direction.',
          solution: 'Pipeline de données extrayant les métriques, les unifiant et produisant un rapport exécutif prêt pour les décideurs à date fixe.',
          workflow: [
            'Extraction programmée des données financières et de vente',
            'Nettoyage et réconciliation des chiffres dans le moteur d’analyse',
            'Génération d’une synthèse visuelle élégante et commentée',
            'Distribution automatique par email sécurisé aux dirigeants',
          ],
          technologies: ['Pipelines d’intégration de données (ETL)', 'Moteurs d’analyse automatisés', 'Systèmes de distribution email', 'Tableaux de bord de direction'],
          benefits: ['Élimination complète des journées de saisie manuelle', 'Indicateurs fiables à 100% sans risque de formule erronée', 'Visibilité opérationnelle claire pour des décisions éclairées'],
        },
      ],
    },
    about: {
      sectionTag: 'À Propos d’ORVIUM',
      headline: 'Une ingénierie concrète au service de résultats mesurables',
      manifesto: 'ORVIUM a été fondée pour être le partenaire d’ingénierie qui permet aux entreprises de passer d’opérations manuelles fastidieuses à des systèmes intelligents et connectés.',
      mission: 'Notre mission n’est pas d’ajouter de la complexité logicielle, mais de simplifier vos opérations, d’éliminer les gaspillages et de favoriser une croissance durable.',
      pillars: [
        {
          title: 'Ingénierie pratique et pragmatique',
          description: 'Nous concevons des solutions qui répondent à des besoins concrets et démontrent leur valeur dans le travail quotidien.',
        },
        {
          title: 'Compréhension métier approfondie',
          description: 'Avant la moindre ligne d’automatisation, nous étudions votre activité et vos flux pour bâtir une solution sur mesure.',
        },
        {
          title: 'Fiabilité technique absolue',
          description: 'Nous construisons des systèmes stables, sécurisés et pérennes, assortis de protocoles clairs de gestion des exceptions.',
        },
        {
          title: 'Automatisation intelligente et ciblée',
          description: 'Nous mobilisons l’intelligence artificielle là où elle crée un avantage concurrentiel tangible, sans effet de mode.',
        },
        {
          title: 'Intelligence artificielle responsable',
          description: 'Nous veillons à la confidentialité de vos données et maintenons un contrôle humain sur chaque opération sensible.',
        },
        {
          title: 'Accompagnement et amélioration continue',
          description: 'L’automatisation est un levier vivant : nous suivons vos systèmes et les adaptons au fur et à mesure de votre montée en charge.',
        },
      ],
    },
    faq: {
      sectionTag: 'Foire Aux Questions',
      headline: 'Des réponses claires à vos questions sur l’automatisation',
      description: 'L’essentiel sur notre façon de collaborer, le potentiel de nos systèmes et le déroulement d’un projet.',
      items: [
        {
          question: 'Qu’est-ce que l’automatisation des processus métier ?',
          answer: 'Il s’agit de confier à des logiciels l’exécution programmée de tâches et de flux récurrents (transferts de données entre applications, facturation, notifications, gestion des commandes) pour remplacer les manipulations manuelles répétitives.',
        },
        {
          question: 'Quelle différence entre automatisation classique et automatisation par IA ?',
          answer: 'L’automatisation classique applique des règles conditionnelles rigides (si X alors Y). L’automatisation assistée par IA sait interpréter des textes non structurés, extraire du sens de documents variés, classer des contenus et s’adapter à des variations contextuelles.',
        },
        {
          question: 'Qu’est-ce qu’un Agent IA (AI Agent) ?',
          answer: 'Un agent IA est un composant logiciel intelligent doté d’objectifs définis. Il peut analyser une situation, planifier ses étapes, solliciter des outils agréés (recherche dans une base, envoi d’un message, mise à jour d’un dossier) et mener à bien une mission sous supervision humaine.',
        },
        {
          question: 'Quelles entreprises peuvent bénéficier de vos solutions ?',
          answer: 'Toute entreprise gérant un volume croissant de données et de clients : commerces électroniques, distributeurs, cabinets de conseil et prestataires de services, agences immobilières et PME souhaitant accroître leur capacité opérationnelle.',
        },
        {
          question: 'Nos outils et logiciels actuels peuvent-ils être connectés ?',
          answer: 'Absolument. Nous relions vos outils existants (Google Workspace, ERP, CRM, plateformes e-commerce, WhatsApp, logiciels de facturation) via leurs APIs, sans bouleverser les habitudes de vos équipes.',
        },
        {
          question: 'Comment démarre un projet et quelle est la première démarche ?',
          answer: 'Nous commençons par une session d’exploration pour comprendre vos processus actuels et vos points de blocage. Nous définissons ensuite un plan d’ingénierie précis précisant les flux à automatiser et les gains visés avant tout déploiement.',
        },
        {
          question: 'Les systèmes d’automatisation fonctionnent-ils 24h/24 ?',
          answer: 'Oui. Les flux automatisés et les agents opèrent en continu 24 heures sur 24 et 7 jours sur 7, traitant les demandes et synchronisant les informations instantanément, même en dehors des horaires de travail.',
        },
        {
          question: 'Comment mon entreprise peut-elle solliciter ORVIUM ?',
          answer: 'Vous pouvez nous joindre directement sur WhatsApp (+213562679104) ou par email (agency.orvium@gmail.com) en cliquant sur le bouton « Discuter de votre projet » pour débuter un échange et planifier une session d’exploration.',
        },
      ],
    },
    finalCta: {
      headline: 'Êtes-vous prêt à rendre votre entreprise plus intelligente ?',
      description: 'Identifions ensemble les processus qui peuvent être simplifiés, connectés et automatisés pour libérer du temps et stimuler votre croissance.',
      primaryCta: 'Démarrer une conversation',
      secondaryCta: 'Contacter sur WhatsApp',
    },
    contactModal: {
      title: 'Échanger avec ORVIUM',
      subtitle: 'Sélectionnez le canal de communication direct de votre choix pour échanger avec notre équipe technique.',
      whatsappTitle: 'Conversation directe WhatsApp',
      whatsappDesc: 'Contactez directement notre équipe pour évoquer votre projet et convenir d’une session d’exploration.',
      whatsappAction: 'Ouvrir WhatsApp',
      emailTitle: 'Courriel officiel',
      emailDesc: 'Adressez-nous vos besoins ou votre demande de consultation directement sur notre messagerie officielle.',
      emailAction: 'Envoyer un courriel',
      socialTitle: 'Nos comptes officiels sur les réseaux',
      phoneLabel: 'Numéro officiel direct',
      copied: 'Numéro copié !',
      copyPhone: 'Copier le numéro',
      close: 'Fermer la fenêtre',
      officialDirectNotice: 'Prise de contact directe et confidentielle, sans formulaire fictif ni attente superflue.',
    },
    footer: {
      tagline: 'Nous automatisons. Vous grandissez.',
      rights: 'Tous droits réservés.',
      legalNotice: 'Tous les projets présentés dans la section démonstrations sont des architectures conceptuelles illustrant le potentiel d’automatisation.',
      directContact: 'Canaux de contact direct',
      socials: 'Suivez nos canaux',
    },
  },

  en: {
    meta: {
      title: 'ORVIUM — AI Automation Engineering Agency | We Automate. You Grow.',
      description: 'ORVIUM designs intelligent automation systems, AI agents, and connected business workflows. Less manual work. Smarter operations. Sustainable growth.',
    },
    nav: {
      services: 'Services',
      problems: 'Problems We Solve',
      industries: 'Industries',
      process: 'How We Work',
      demonstrations: 'Concept Demos',
      about: 'About',
      faq: 'FAQ',
      discussProject: 'Discuss Your Project',
      menu: 'Menu',
      close: 'Close',
      language: 'Language',
    },
    hero: {
      tagline: 'We automate. You grow.',
      headline: 'Transform Your Business with Intelligent Automation.',
      description: 'We design intelligent automation systems that eliminate repetitive work, connect your business tools, and help your organization operate more efficiently.',
      primaryCta: 'Discuss Your Project',
      secondaryCta: 'Explore Our Solutions',
      valueProposition: 'Less manual work. Smarter operations. Sustainable growth.',
      activeNodesLabel: 'Connected workflows operating continuously',
      liveOrchestration: 'Integrated engineering infrastructure',
    },
    problems: {
      sectionTag: 'Problems We Solve',
      headline: 'Seven operational bottlenecks we solve at the root',
      description: 'Disconnected manual operations drain team energy and constrain organizational scale. We build the connected alternative.',
      problemLabel: 'The operational problem',
      impactLabel: 'Impact on your organization',
      solutionLabel: 'Automation engineering opportunity',
      items: [
        {
          id: 'admin',
          title: 'Repetitive administrative work',
          problem: 'Manual data entry, invoice copying, and transferring records between spreadsheets and disparate software tools.',
          impact: 'Hundreds of hours lost each month in routine busywork alongside heightened exposure to human arithmetic errors.',
          solution: 'Automated data processing pipelines that validate, sanitize, and synchronize information in real time without human intervention.',
        },
        {
          id: 'crm',
          title: 'Disorganized customer information',
          problem: 'Customer records scattered across WhatsApp chats, email inboxes, and fragmented spreadsheet tabs.',
          impact: 'Lost leads, sluggish response follow-ups, and the absence of a unified historical timeline for customer accounts.',
          solution: 'Centralized omnichannel synchronization that consolidates inquiries, contacts, and logs into a single structured pipeline.',
        },
        {
          id: 'orders',
          title: 'Manual order management',
          problem: 'Entering orders, verifying payments, and copying delivery details across shipping providers by hand.',
          impact: 'Processing backlogs, costly fulfillment mistakes with addresses or quantities, and frustrated customer expectations.',
          solution: 'End-to-end automation of the order lifecycle from checkout trigger to carrier dispatch slip and live inventory sync.',
        },
        {
          id: 'support',
          title: 'Slow customer response',
          problem: 'Inbound questions piling up outside business hours with visitors waiting hours or days for basic answers.',
          impact: 'Lost conversion momentum as prospective buyers turn to responsive competitors.',
          solution: 'Specialized AI assistants trained on verified knowledge bases that resolve questions and execute standard actions 24/7.',
        },
        {
          id: 'apps',
          title: 'Disconnected business applications',
          problem: 'Isolated accounting software, e-commerce stores, inventory tools, and customer desks operating in silos.',
          impact: 'Duplicated effort, mismatched balances between departments, and friction across internal handoffs.',
          solution: 'Integration engineering linking APIs so structured data flows effortlessly and reliably between systems.',
        },
        {
          id: 'reporting',
          title: 'Time-consuming reporting',
          problem: 'Manually scraping and pasting numbers across tools at the end of each week or month to build management slides.',
          impact: 'Delayed decision-making based on stale figures that lag behind actual operational reality.',
          solution: 'Automated data pipelines that continuously aggregate KPIs and dispatch synthesized executive briefings on schedule.',
        },
        {
          id: 'ops',
          title: 'Inefficient operational processes',
          problem: 'Lack of automated process documentation and redundant steps embedded in recurring daily workflows.',
          impact: 'Operational bottlenecks, steep onboarding curves for new team members, and unpredictable output quality.',
          solution: 'Re-engineering workflows into programmatic, documented protocols enforced automatically by code.',
        },
      ],
    },
    services: {
      sectionTag: 'Our Services',
      headline: 'Engineered systems built for operational precision',
      description: 'We combine rigorous software engineering and artificial intelligence to elevate business process efficiency to its highest standard.',
      whatItIsLabel: 'What is it?',
      problemSolvedLabel: 'What problem does it solve?',
      howItWorksLabel: 'How does it work technically?',
      examplesLabel: 'Practical business examples',
      benefitsLabel: 'Expected operational benefits',
      ctaLabel: 'Discuss this solution',
      items: [
        {
          number: '01',
          title: 'Business Process Automation',
          tagline: 'Workflow Orchestration & Operations',
          whatItIs: 'Comprehensive automation of repetitive tasks, data synchronization, notifications, and operational workflows without requiring daily manual input.',
          problemSolved: 'Eliminates time wasted on routine administrative tasks and eradicates data re-entry mistakes between platforms.',
          howItWorks: 'Connects application endpoints through event triggers and programmatic logic pipelines that execute defined actions based on verified rules.',
          examples: [
            'Automated data synchronization between ERPs and external tools',
            'Scheduled notifications and operational alerts to teams and clients',
            'Automated invoice generation and core accounting reconciliation',
            'Routine report compilation and automated email distribution',
          ],
          benefits: [
            'Saves up to 70% of staff time spent on repetitive administration',
            'Zero human transcription or data transfer errors',
            'Reduces task cycle times from hours to fractions of a second',
          ],
        },
        {
          number: '02',
          title: 'AI-Powered Automation',
          tagline: 'Cognitive Data & Document Processing',
          whatItIs: 'Integrating advanced AI models into operational pipelines to understand, classify, extract, and analyze unstructured information at scale.',
          problemSolved: 'Overcomes the limitations of rigid traditional rule engines when handling messy unstructured documents, emails, and inputs.',
          howItWorks: 'Extracts structured semantic data from PDFs, images, and messages, cross-checks against validation rules, and pushes clean records to core tools.',
          examples: [
            'Intelligent invoice processing with high-precision line-item extraction',
            'Automated inbound email triage, categorization, and routing',
            'Automated contract and document summarization for operational reviews',
            'Content moderation and inquiry classification for customer queues',
          ],
          benefits: [
            'High-velocity processing of complex unstructured documents',
            'Effortlessly handles hundreds of incoming files and inquiries daily',
            'Frees specialized staff to concentrate on strategic decision-making',
          ],
        },
        {
          number: '03',
          title: 'AI Agent Engineering',
          tagline: 'Autonomous Multi-Step Business Agents',
          whatItIs: 'Developing specialized AI agents capable of using approved tools, pursuing objective-driven tasks, and executing multi-step workflows under strict human supervision.',
          problemSolved: 'Removes the need for human personnel to constantly act as manual intermediaries for multi-step research, coordination, and tool execution.',
          howItWorks: 'Configured with scoped permissions and goal definitions; the agent evaluates incoming tasks, coordinates actions, and invokes approved system APIs safely.',
          examples: [
            'Internal business assistant retrieving verified company knowledge for staff',
            'Customer support agent updating orders, booking returns, or modifying records',
            'Calendar coordination agent scheduling meetings without scheduling conflicts',
            'Logistics monitoring agent tracking shipments and communicating with couriers',
          ],
          benefits: [
            'Instant 24/7 execution of multi-step business procedures',
            'Disciplined actions strictly bounded by pre-set operational policies',
            'Transparent audit logs and seamless escalation to human supervisors',
          ],
        },
      ],
    },
    industries: {
      sectionTag: 'Industry Solutions',
      headline: 'Architectures customized to your industry dynamics',
      description: 'Domain-specific automation blueprints built to solve the unique operational pressures of your business model.',
      items: [
        {
          id: 'ecommerce',
          title: 'E-commerce',
          description: 'Automating online store orders, inventory syncing, delivery dispatch, customer communications, and return processing.',
          useCases: [
            'Real-time order synchronization between e-commerce platform, warehouse, and couriers',
            'Automated delivery status notifications via WhatsApp and SMS',
            'Rule-based return and exchange processing without human bottleneck',
            'Multi-channel inventory synchronization preventing stockouts and overselling',
          ],
          diagramTitle: 'Order Fulfillment & Logistics Flow',
        },
        {
          id: 'retail',
          title: 'Retail',
          description: 'Connecting point-of-sale systems to central inventory, automating supplier replenishment, and consolidating branch reporting.',
          useCases: [
            'Low-stock threshold alerts with pre-drafted supplier purchase orders',
            'Consolidation of multi-branch daily sales into a single executive dashboard',
            'Automated customer loyalty tier calculations and targeted rewards',
            'Digital archiving and receipt scanning into central accounting',
          ],
          diagramTitle: 'Multi-Branch & Central Warehouse Architecture',
        },
        {
          id: 'services',
          title: 'Professional Services',
          description: 'Client onboarding pipelines, automated fee proposal generation, consultation scheduling, and receivable tracking.',
          useCases: [
            'Automated client onboarding with guided intake document collection',
            'Dynamic contract and scope document generation from CRM records',
            'Automated payment milestone tracking with polite scheduled reminders',
            'Frictionless calendar scheduling synced with consultant availability',
          ],
          diagramTitle: 'Client Intake & Service Delivery Architecture',
        },
        {
          id: 'realestate',
          title: 'Real Estate',
          description: 'Buyer qualification, automated viewing coordination, digital listing distribution, and lease renewal tracking.',
          useCases: [
            'Immediate inbound buyer qualification from ad campaigns and portals',
            'Self-service property viewing calendar linked to agent schedules',
            'Automated property PDF brochure generation and instant delivery',
            'Lease expiration notifications with automated renewal documentation',
          ],
          diagramTitle: 'Buyer Qualification & Viewing Pipeline',
        },
        {
          id: 'smb',
          title: 'Small & Medium Businesses (SMBs)',
          description: 'Building a modern digital operational backbone that enables lean teams to operate with the capability of large enterprises.',
          useCases: [
            'Connecting email, WhatsApp, and spreadsheets into a unified CRM pipeline',
            'Automated internal approval chains for purchases and requests',
            'Consolidated weekly executive summaries on cash flow and throughput',
            'Systematic digital document categorization and record keeping',
          ],
          diagramTitle: 'Connected Operational Backbone for Growth',
        },
      ],
    },
    process: {
      sectionTag: 'How We Work',
      headline: 'A disciplined five-step engineering journey',
      description: 'A structured methodology that guarantees requirement clarity, technical resilience, and seamless operational adoption.',
      steps: [
        {
          number: '01',
          title: 'Discovery',
          description: 'Understanding your business model, current tool stack, and daily operational bottlenecks.',
          detail: 'An in-depth inquiry session to map existing processes and identify where time and revenue leak.',
          deliverable: 'Current state process map & diagnostic assessment',
        },
        {
          number: '02',
          title: 'Analysis',
          description: 'Pinpointing high-leverage automation candidates and evaluating expected efficiency and ROI.',
          detail: 'Prioritizing workflows by frequency, cost impact, and technical feasibility.',
          deliverable: 'Automation opportunity roadmap & ROI prioritization grid',
        },
        {
          number: '03',
          title: 'Architecture',
          description: 'Designing the technical framework, API bridges, data contracts, and security boundaries.',
          detail: 'Formulating rigorous architecture diagrams detailing triggers, logic paths, and fallbacks.',
          deliverable: 'Technical architecture specification & data flow blueprint',
        },
        {
          number: '04',
          title: 'Implementation',
          description: 'Building automation pipelines, integrating systems, and conducting end-to-end edge-case testing.',
          detail: 'Staged development in isolated sandboxes, edge-case simulation, and safe staged deployment.',
          deliverable: 'Fully operational, tested, and documented automation system',
        },
        {
          number: '05',
          title: 'Optimization',
          description: 'Monitoring live system telemetry, ensuring stability, and refining workflows as your business scales.',
          detail: 'Continuous tracking of execution metrics with scheduled iterations to match growing operational scale.',
          deliverable: 'Operational performance analytics & continuous technical support',
        },
      ],
    },
    demonstrations: {
      badge: 'Concept Demonstrations',
      sectionTag: 'Engineering Blueprints',
      headline: 'How intelligent automation works in real business scenarios',
      description: 'Architectural walkthroughs showing how integrated tools and AI models solve recurring operational challenges (clearly labeled concept demonstrations).',
      problemLabel: 'The problem addressed',
      solutionLabel: 'Proposed engineering architecture',
      technologiesLabel: 'Integration categories & technologies',
      benefitsLabel: 'Expected operational benefits',
      workflowLabel: 'Automated logic flow',
      items: [
        {
          id: 'smart-order',
          title: 'Smart Order Management',
          category: 'E-commerce & Logistics',
          problem: 'Teams spend hours every day hand-copying orders between the storefront, delivery carrier portals, and stock spreadsheets.',
          solution: 'An automated workflow that ingests verified checkouts instantly, audits stock levels, generates the carrier dispatch label, and alerts the customer.',
          workflow: [
            'Order recorded on e-commerce storefront',
            'Instant inventory validation and payment audit',
            'Shipping label automatically generated via carrier API',
            'Tracking link dispatched via WhatsApp to the customer',
          ],
          technologies: ['E-commerce APIs', 'Carrier & Delivery APIs', 'WhatsApp Business API', 'Central Inventory Database'],
          benefits: ['Reduces per-order processing from 25 minutes to 5 seconds', 'Zero address transcription or reference errors', 'Reduces customer tracking inquiry volume by 80%'],
        },
        {
          id: 'lead-management',
          title: 'Automated Lead Management',
          category: 'Sales & Business Development',
          problem: 'Inbound inquiries arrive across WhatsApp, forms, and social messages, but opportunities go cold due to slow initial triage and response.',
          solution: 'An automated pipeline that receives the lead instantly, runs qualification logic, creates a CRM record, and alerts the appropriate sales manager.',
          workflow: [
            'Inbound inquiry received via WhatsApp or web intake',
            'Automated qualification based on budget and urgency criteria',
            'Structured deal record created inside the central CRM',
            'Instant notification routed to the matching account executive',
          ],
          technologies: ['Enterprise CRM APIs', 'Qualification Logic Engines', 'Instant Messaging Connectors', 'Team Notification Webhooks'],
          benefits: ['First response delivered to prospective client in under 30 seconds', 'Pre-filters unqualified inquiries before reaching senior sales reps', 'Measurably lifts the lead-to-opportunity conversion rate'],
        },
        {
          id: 'support-agent',
          title: 'AI Customer Support Assistant',
          category: 'Customer Operations',
          problem: 'Repetitive questions about opening hours, return policies, and status checks overwhelm support staff and cause long wait times.',
          solution: 'A specialized AI agent grounded exclusively in verified business knowledge that delivers accurate answers and executes safe standard actions.',
          workflow: [
            'Natural language inquiry received across chat channel',
            'Semantic retrieval against verified company knowledge base',
            'Accurate, polite answer generated with source citations',
            'Automated escalation to human staff when edge cases arise',
          ],
          technologies: ['Advanced Language Models (LLMs)', 'Retrieval-Augmented Generation (RAG)', 'Customer Messaging APIs', 'Human-in-the-Loop Escalation'],
          benefits: ['Instantly resolves 70% of repetitive Tier-1 customer questions', '24/7 availability with consistent tone and verified accuracy', 'Frees support agents to handle complex client escalations'],
        },
        {
          id: 'automated-reporting',
          title: 'Automated Business Reporting',
          category: 'Operations & Management',
          problem: 'Finance and operational leads spend days at the end of each month manually compiling numbers across multiple tools to create slide decks.',
          solution: 'A scheduled data pipeline that pulls metrics from disparate sources, normalizes figures, and outputs an executive briefing delivered on time.',
          workflow: [
            'Scheduled extraction from sales, expenses, and operations tools',
            'Data cleaning and reconciliation in a central analytics engine',
            'Executive summary generated with automated visual charts',
            'Automated delivery via secure email and dashboard briefing',
          ],
          technologies: ['Data Pipeline & ETL Connectors', 'Analytics & Synthesis Engines', 'Automated Email Systems', 'Executive Dashboards'],
          benefits: ['Eliminates entire days of manual data aggregation', '100% consistent figures free of broken spreadsheet formulas', 'Actionable operational transparency delivered punctually'],
        },
      ],
    },
    about: {
      sectionTag: 'About ORVIUM',
      headline: 'Practical engineering delivering measurable transformation',
      manifesto: 'ORVIUM exists to help businesses transition from repetitive manual operations to intelligent, connected systems that operate in harmony.',
      mission: 'Our focus is not adding software vanity or buzzwords, but simplifying operations, removing waste, and enabling sustainable organizational growth through resilient engineering.',
      pillars: [
        {
          title: 'Practical Engineering',
          description: 'We prioritize straightforward, maintainable solutions that address real business requirements and prove their value immediately in daily operations.',
        },
        {
          title: 'Business Understanding',
          description: 'Before writing a single line of automation logic, we thoroughly study your revenue drivers and operational pain points.',
        },
        {
          title: 'Technical Reliability',
          description: 'We construct stable, secure, fault-tolerant systems with explicit exception-handling protocols designed for continuous uptime.',
        },
        {
          title: 'Intelligent Automation',
          description: 'We deploy artificial intelligence strictly where it unlocks demonstrable business advantages and operational velocity, avoiding superficial trends.',
        },
        {
          title: 'Responsible AI',
          description: 'We uphold total data confidentiality, enforce strict human-in-the-loop safeguards on sensitive actions, and reject black-box opacity.',
        },
        {
          title: 'Continuous Improvement',
          description: 'Automation is an evolving operational asset; we continuously monitor telemetry and optimize pipelines as your organization scales.',
        },
      ],
    },
    faq: {
      sectionTag: 'Frequently Asked Questions',
      headline: 'Clear answers regarding our automation engineering services',
      description: 'Everything you need to know about our approach, technical capabilities, and how to get started.',
      items: [
        {
          question: 'What is business automation?',
          answer: 'Business automation is the application of software and integration technology to execute repetitive, rule-based processes automatically—such as moving data between tools, issuing invoices, dispatching notifications, and managing order flows—without daily manual intervention.',
        },
        {
          question: 'What is the difference between standard automation and AI automation?',
          answer: 'Standard automation follows rigid, predetermined rules (if event A occurs, execute action B). AI-powered automation can understand unstructured text, extract structured data from varied document layouts, classify content, and adapt flexibly to varying inputs.',
        },
        {
          question: 'What are AI agents?',
          answer: 'AI agents are specialized software programs engineered to achieve defined objectives. An agent can plan steps, evaluate conditions, utilize approved tools (like querying a database, drafting an email, or updating an order record), and complete multi-step tasks under human supervision.',
        },
        {
          question: 'Which businesses can benefit from your services?',
          answer: 'Any organization running repetitive manual tasks or managing growing volumes of customer transactions: e-commerce businesses, retailers, professional advisory firms, real estate agencies, and growing SMBs seeking scalable operations.',
        },
        {
          question: 'Can our existing applications and tools be connected?',
          answer: 'Yes. We connect your existing software stack (including Google Workspace, e-commerce engines, accounting systems, CRMs, WhatsApp, and proprietary tools) via secure APIs without forcing your team to change familiar software.',
        },
        {
          question: 'How does a project begin and what is the first step?',
          answer: 'Every project begins with a Discovery Session where we review your current operations and bottlenecks. We identify the highest-leverage automation opportunities and present a clear engineering roadmap and expected benefits before implementation starts.',
        },
        {
          question: 'Can automation systems and AI agents operate 24/7?',
          answer: 'Yes. Our automated infrastructure and AI agents run continuously 24 hours a day, 7 days a week, processing tasks, answering inquiries, and syncing data without downtime.',
        },
        {
          question: 'How can a business request a solution from ORVIUM?',
          answer: 'You can reach out directly via WhatsApp (+213562679104) or email (agency.orvium@gmail.com) by clicking "Discuss Your Project" anywhere on the site to start a conversation and schedule your Discovery Session.',
        },
      ],
    },
    finalCta: {
      headline: 'Ready to Make Your Business Work Smarter?',
      description: "Let's identify the processes that can be simplified, connected, and automated to free up your team and accelerate sustainable growth.",
      primaryCta: 'Start a Conversation',
      secondaryCta: 'Contact via WhatsApp',
    },
    contactModal: {
      title: 'Start a Conversation with ORVIUM',
      subtitle: 'Choose your preferred direct communication channel to connect with our engineering team.',
      whatsappTitle: 'Direct WhatsApp Conversation',
      whatsappDesc: 'Connect immediately with our team to discuss your project requirements and schedule a discovery session.',
      whatsappAction: 'Open WhatsApp Chat',
      emailTitle: 'Official Email Inquiry',
      emailDesc: 'Send project specifications or consultation requests directly to our official inbox.',
      emailAction: 'Send Email',
      socialTitle: 'Official Social Channels',
      phoneLabel: 'Verified Direct Phone',
      copied: 'Number copied!',
      copyPhone: 'Copy Number',
      close: 'Close Modal',
      officialDirectNotice: 'Direct, secure communication with no accounts, fake forms, or unnecessary delays.',
    },
    footer: {
      tagline: 'We automate. You grow.',
      rights: 'All rights reserved.',
      legalNotice: 'All portfolio items featured in the Concept Demonstrations section represent architectural engineering frameworks to illustrate automation capabilities.',
      directContact: 'Direct Channels',
      socials: 'Follow ORVIUM',
    },
  },
};
