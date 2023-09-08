const fs = require("fs");

const courses = [
  [
    40102,
    1,
    1,
    "آز سخت‌افزار",
    "علیرضا اجلالی",
    "چهارشنبه 13 تا 16",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40103,
    1,
    1,
    "آز معماری کامپیوتر",
    "حمید سربازی آزاد",
    "چهارشنبه 9 تا 12",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40103,
    2,
    1,
    "آز معماری کامپیوتر",
    "حمید سربازی آزاد",
    "چهارشنبه 13 تا 16",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40103,
    3,
    1,
    "آز معماری کامپیوتر",
    "حمید سربازی آزاد",
    "دوشنبه 13 تا 16",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40103,
    4,
    1,
    "آز معماری کامپیوتر",
    "حمید سربازی آزاد",
    "شنبه 13 تا 16",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40124,
    1,
    3,
    "مبانی مدارهای الکتریکی و الکترونیکی",
    "سمیه کوهی",
    "شنبه و دوشنبه 10:30 تا 12",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40126,
    1,
    3,
    "ساختار و زبان کامپیوتر",
    "حمید سربازی آزاد",
    "یک‌شنبه و سه‌شنبه 10:30 تا 12",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40126,
    2,
    3,
    "ساختار و زبان کامپیوتر",
    "امیرحسین جهانگیر",
    "یک‌شنبه و سه‌شنبه 10:30 تا 12",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40181,
    1,
    3,
    "آمار و احتمال مهندسی",
    "امیر نجفی",
    "شنبه و دوشنبه 13:30 تا 15",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40203,
    1,
    1,
    "آز طراحی سیستم‌های دیجیتال",
    "علیرضا اجلالی",
    "چهارشنبه 9 تا 12",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40203,
    2,
    1,
    "آز طراحی سیستم‌های دیجیتال",
    "علیرضا اجلالی",
    "شنبه 13 تا 16",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40203,
    3,
    1,
    "آز طراحی سیستم‌های دیجیتال",
    "محسن انصاری",
    "چهارشنبه 13 تا 16",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40203,
    4,
    1,
    "آز طراحی سیستم‌های دیجیتال",
    "محسن انصاری",
    "دوشنبه 9 تا 12",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40206,
    1,
    1,
    "آز مدارهای منطقی",
    "محسن انصاری",
    "چهارشنبه 9 تا 12",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40206,
    2,
    1,
    "آز مدارهای منطقی",
    "شاهین حسابی",
    "چهارشنبه 13 تا 16",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40206,
    3,
    1,
    "آز مدارهای منطقی",
    "محسن انصاری",
    "دوشنبه 13 تا 16",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40206,
    4,
    1,
    "آز مدارهای منطقی",
    "شاهین حسابی",
    "یک‌شنبه 13 تا 16",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40206,
    5,
    1,
    "آز مدارهای منطقی",
    "شاهین حسابی",
    "سه‌شنبه 13 تا 16",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40206,
    6,
    1,
    "آز مدارهای منطقی",
    "محسن انصاری",
    "شنبه 13 تا 16",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40211,
    1,
    2,
    "زبان تخصصی کامپیوتر",
    "ساشا مهدوی هزاوهء",
    "دوشنبه 13:30 تا 16:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40211,
    2,
    2,
    "زبان تخصصی کامپیوتر",
    "ساشا مهدوی هزاوهء",
    "چهارشنبه 9 تا 12",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40211,
    3,
    2,
    "زبان تخصصی کامپیوتر",
    "ساشا مهدوی هزاوهء",
    "چهارشنبه 13:30 تا 16:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40212,
    1,
    3,
    "مدارهای منطقی",
    "لاله ارشدی",
    "شنبه و دوشنبه 9 تا 10:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40215,
    1,
    3,
    "محاسبات عددی",
    "سمیرا حسین قربان",
    "شنبه و دوشنبه 16:30 تا 18",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40221,
    1,
    2,
    "ارائه مطالب علمی و فنی",
    "امیرحسین جهانگیر",
    "دوشنبه 8:30 تا 10:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40221,
    2,
    2,
    "ارائه مطالب علمی و فنی",
    "حسین پیوندی",
    "یک‌شنبه 13 تا 15",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40223,
    1,
    3,
    "طراحی سیستم‌های دیجیتال",
    "سیاوش بیات سرمدی",
    "شنبه و دوشنبه 9 تا 10:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40242,
    1,
    3,
    "سیگنال‌ها و سیستم‌ها",
    "حسین صامتی",
    "یک‌شنبه و سه‌شنبه 10:30 تا 12",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40242,
    2,
    3,
    "سیگنال‌ها و سیستم‌ها",
    "محمدتقی منظوری شلمانی",
    "یک‌شنبه و سه‌شنبه 13:30 تا 15",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40244,
    1,
    3,
    "برنامه‌سازی پیشرفته",
    "حمیدرضا حسینخانی",
    "شنبه و دوشنبه 16:30 تا 18",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40254,
    1,
    3,
    "ساختمان داده‌ها و الگوریتم‌ها",
    "محمد علی آبام، محمدرضا بهرامی",
    "یک‌شنبه و سه‌شنبه 9 تا 10:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40282,
    1,
    3,
    "جبر خطی",
    "حمیدرضا ربیعی، مریم رمضانی",
    "یک‌شنبه و سه‌شنبه 13:30 تا 15",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40323,
    1,
    3,
    "معماری کامپیوتر",
    "لاله ارشدی",
    "شنبه و دوشنبه 10:30 تا 12",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40324,
    1,
    3,
    "بازیابی پیشرفته اطلاعات",
    "حمید بیگی",
    "شنبه و دوشنبه 9 تا 10:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40343,
    1,
    3,
    "انتقال داده‌ها",
    "حسین پیوندی",
    "یک‌شنبه و سه‌شنبه 10:30 تا 12",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40344,
    1,
    3,
    "مبانی بینایی سه‌بعدی کامپیوتر",
    "شهره کسائی",
    "یک‌شنبه و سه‌شنبه 13:30 تا 15",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40347,
    1,
    3,
    "آداب فناوری اطلاعات",
    "سیدابراهیم ابطحی",
    "یک‌شنبه و سه‌شنبه 9 تا 10:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40353,
    1,
    3,
    "طراحی VLSI",
    "شاهین حسابی",
    "شنبه و دوشنبه 15 تا 16:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40354,
    1,
    3,
    "طراحی الگوریتم‌ها",
    "حمید ضرابی زاده",
    "یک‌شنبه و سه‌شنبه 10:30 تا 12",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40364,
    1,
    3,
    "طراحی زبان‌های برنامه‌سازی",
    "محمد ایزدی",
    "یک‌شنبه و سه‌شنبه 13:30 تا 15",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40384,
    1,
    3,
    "طراحی پایگاه داده‌ها",
    "مرتضی امینی",
    "یک‌شنبه و سه‌شنبه 9 تا 10:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40384,
    2,
    3,
    "طراحی پایگاه داده‌ها",
    "مهدی دادبخش",
    "یک‌شنبه و سه‌شنبه 15 تا 16:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [40402, 1, 1, "آز VLSI", "شاهین حسابی", "چهارشنبه 9 تا 12", "", "", 0, 5, 3],
  [
    40404,
    1,
    1,
    "آز مهندسی نرم‌افزار",
    "سیدحسن میریان حسین آبادی",
    "شنبه 16:30 تا 19",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40408,
    1,
    1,
    "آز سیستم‌های عامل",
    "حمید بیگی",
    "چهارشنبه 9 تا 12",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40408,
    2,
    1,
    "آز سیستم‌های عامل",
    "حمید بیگی",
    "چهارشنبه 13 تا 16",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40414,
    1,
    3,
    "طراحی کامپایلرها",
    "غلامرضا قاسم ثانی",
    "یک‌شنبه و سه‌شنبه 10:30 تا 12",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40414,
    2,
    3,
    "طراحی کامپایلرها",
    "سمانه حسینمردی",
    "شنبه و دوشنبه 16:30 تا 18",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40415,
    1,
    3,
    "نظریه زبان‌ها و ماشین‌ها",
    "محمد ایزدی",
    "یک‌شنبه و سه‌شنبه 16:30 تا 18",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40415,
    2,
    3,
    "نظریه زبان‌ها و ماشین‌ها",
    "مهدی دولتی",
    "شنبه و دوشنبه 16:30 تا 18",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40416,
    1,
    1,
    "آز شبکه‌های کامپیوتری",
    "بردیا صفائی",
    "چهارشنبه 9 تا 12",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40416,
    2,
    1,
    "آز شبکه‌های کامپیوتری",
    "بردیا صفائی",
    "چهارشنبه 13 تا 16",
    "",
    "",
    0,
    5,
    3,
  ],
  [
    40417,
    1,
    3,
    "هوش مصنوعی",
    "محمد حسین رهبان",
    "یک‌شنبه و سه‌شنبه 10:30 تا 12",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40417,
    2,
    3,
    "هوش مصنوعی",
    "مهدیه سلیمانی باغشاه",
    "یک‌شنبه و سه‌شنبه 15 تا 16:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40418,
    1,
    3,
    "تحلیل و طراحی سیستم‌ها",
    "علیرضا آقامحمدی",
    "یک‌شنبه و سه‌شنبه 9 تا 10:30",
    "",
    "",
    0,
    6,
    3,
  ],
  [
    40418,
    2,
    3,
    "تحلیل و طراحی سیستم‌ها",
    "میثم نظریانی",
    "یک‌شنبه و سه‌شنبه 10:30 تا 12",
    "",
    "",
    0,
    6,
    3,
  ],
  [
    40419,
    1,
    3,
    "برنامه‌سازی وب",
    "محمد نظری",
    "شنبه و دوشنبه 13:30 تا 15",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40424,
    1,
    3,
    "سیستم‌های عامل",
    "حسین اسدی",
    "شنبه و دوشنبه 15 تا 16:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40424,
    2,
    3,
    "سیستم‌های عامل",
    "مهدی دادبخش",
    "یک‌شنبه و سه‌شنبه 16:30 تا 18",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40432,
    1,
    3,
    "رایانش چندهسته‌ای",
    "هاجر فلاحتی",
    "یک‌شنبه و سه‌شنبه 9 تا 10:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40438,
    1,
    3,
    "تجارت الکترونیکی",
    "سعید ناری",
    "شنبه و دوشنبه 15 تا 16:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40441,
    1,
    3,
    "امنیت داده و شبکه",
    "مرتضی امینی، مهدی خرازی، کامبیز میزانیان",
    "یک‌شنبه و سه‌شنبه 10:30 تا 12",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40443,
    1,
    3,
    "شبکه‌های کامپیوتری",
    "مهدی جعفری سیاوشانی",
    "شنبه و دوشنبه 9 تا 10:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40443,
    2,
    3,
    "شبکه‌های کامپیوتری",
    "کامبیز میزانیان",
    "یک‌شنبه و سه‌شنبه 15 تا 16:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40453,
    1,
    3,
    "سیستم‌های بی‌درنگ",
    "سپیده صفری",
    "یک‌شنبه و سه‌شنبه 13:30 تا 15",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40462,
    1,
    3,
    "سیستم‌‌های نهفته",
    "محسن انصاری",
    "یک‌شنبه و سه‌شنبه 15 تا 16:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40474,
    1,
    3,
    "مهندسی نرم‌افزار",
    "مهران ریواده",
    "شنبه و دوشنبه 10:30 تا 12",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40474,
    2,
    3,
    "مهندسی نرم‌افزار",
    "مهران ریواده",
    "شنبه و دوشنبه 13:30 تا 15",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40475,
    1,
    3,
    "ایجاد چابک نرم‌افزار",
    "رامان رامسین",
    "شنبه و دوشنبه 10:30 تا 12",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40477,
    1,
    3,
    "یادگیری ماشین",
    "مهدی جعفری سیاوشانی",
    "شنبه و دوشنبه 15 تا 16:30",
    "",
    "",
    1,
    6,
    3,
  ],
  [
    40494,
    1,
    3,
    "مقدمه‌ای بر بیوانفورماتیک",
    "سعیده اکبری رکن آبادی، نیلوفر رازانی",
    "شنبه و دوشنبه 15 تا 16:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40495,
    1,
    3,
    "زیست‌شناسی سلولی و مولکولی",
    "حمیدرضا کلهر",
    "شنبه و دوشنبه 10:30 تا 12",
    "",
    "",
    0,
    6,
    3,
  ],
  [
    40533,
    1,
    3,
    "سیستم‌های عامل پیشرفته",
    "حسین اسدی",
    "شنبه و دوشنبه 16:30 تا 18",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40548,
    1,
    3,
    "سیستم‌های پشتیبانی تصمیم‌گیری",
    "جعفر حبیبی، میثم نظریانی",
    "یک‌شنبه و سه‌شنبه 9 تا 10:30",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40552,
    1,
    3,
    "ژنومیک محاسباتی",
    "ابوالفضل مطهری",
    "شنبه و دوشنبه 13:30 تا 15",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40561,
    1,
    3,
    "پردازش هوشمند تصاویر زیست پزشکی",
    "محمد حسین رهبان",
    "یک‌شنبه و سه‌شنبه 15 تا 16:30",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40616,
    1,
    3,
    "بینایی پیشرفته سه‌بعدی کامپیوتر",
    "شهره کسائی",
    "یک‌شنبه و سه‌شنبه 10:30 تا 12",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40632,
    1,
    3,
    "طراحی سیستم‌های تحمل‌پذیر اشکال",
    "علیرضا اجلالی",
    "یک‌شنبه و سه‌شنبه 13:30 تا 15",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40634,
    1,
    3,
    "شبیه‌سازی کامپیوتری",
    "بردیا صفائی",
    "یک‌شنبه و سه‌شنبه 13:30 تا 15",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40634,
    2,
    3,
    "شبیه‌سازی کامپیوتری",
    "حسین پیوندی",
    "یک‌شنبه و سه‌شنبه 15 تا 16:30",
    "",
    "",
    0,
    0,
    3,
  ],
  [
    40637,
    1,
    3,
    "برنامه‌ریزی در هوش مصنوعی",
    "غلامرضا قاسم ثانی",
    "یک‌شنبه و سه‌شنبه 15 تا 16:30",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40646,
    1,
    3,
    "معماری نرم‌افزار",
    "جعفر حبیبی",
    "یک‌شنبه و سه‌شنبه 10:30 تا 12",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40661,
    1,
    3,
    "نظریه سیستم‌های توزیع‌شده",
    "محمد ایزدی",
    "یک‌شنبه و سه‌شنبه 10:30 تا 12",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40676,
    1,
    3,
    "نظریه اطلاعات و کدینگ",
    "ابوالفضل مطهری",
    "شنبه و دوشنبه 10:30 تا 12",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40685,
    1,
    3,
    "الگوریتم‌های تصادفی",
    "محمد علی آبام",
    "یک‌شنبه و سه‌شنبه 10:30 تا 12",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40688,
    1,
    3,
    "مهندسی نیازمندی‌های نرم‌افزار",
    "مهران ریواده",
    "شنبه و دوشنبه 7:30 تا 9",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40693,
    1,
    3,
    "شبکه‌های کامپیوتری پیشرفته",
    "کامبیز میزانیان",
    "یک‌شنبه و سه‌شنبه 13:30 تا 15",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40695,
    1,
    3,
    "فرآیندهای تصادفی",
    "حمیدرضا ربیعی",
    "یک‌شنبه و سه‌شنبه 10:30 تا 12",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40719,
    1,
    3,
    "یادگیری ژرف",
    "حمید بیگی",
    "شنبه و دوشنبه 10:30 تا 12",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40723,
    1,
    3,
    "معماری پیشرفته کامپیوتر",
    "امیرحسین جهانگیر",
    "یک‌شنبه و سه‌شنبه 9 تا 10:30",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40724,
    1,
    3,
    "متدولوژی‌های ایجاد نرم‌افزار",
    "رامان رامسین",
    "شنبه و دوشنبه 13:30 تا 15",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40734,
    1,
    3,
    "امنیت پایگاه داده‌ها",
    "رسول جلیلی",
    "یک‌شنبه و سه‌شنبه 10:30 تا 12",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40745,
    1,
    3,
    "توصیف و وارسی برنامه‌ها",
    "سیدحسن میریان حسین آبادی",
    "شنبه و دوشنبه 9 تا 10:30",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40753,
    1,
    3,
    "آزمون‌پذیری",
    "شاهین حسابی",
    "شنبه و دوشنبه 9 تا 10:30",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40763,
    1,
    3,
    "پردازش علائم دیجیتال",
    "محمدتقی منظوری شلمانی",
    "یک‌شنبه و سه‌شنبه 9 تا 10:30",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40765,
    1,
    3,
    "الگوریتم‌های پیشرفته",
    "محمد قدسی، مهدی صفرنژاد بروجنی",
    "یک‌شنبه و سه‌شنبه 9 تا 10:30",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40815,
    1,
    3,
    "سامانه‌های نرم‌افزاری امن",
    "مهدی خرازی",
    "یک‌شنبه و سه‌شنبه 9 تا 10:30",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40817,
    1,
    3,
    "امنیت شبکه پیشرفته",
    "سیدامیر مهدی صادق زاده مسگر",
    "یک‌شنبه و سه‌شنبه 15 تا 16:30",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40819,
    1,
    3,
    "شبکه‌های داده‌ای سیار",
    "سیاوش بیات سرمدی",
    "شنبه و دوشنبه 7:30 تا 9",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40820,
    1,
    3,
    "رمزنگاری کاربردی",
    "معصومه کوچک شوشتری",
    "یک‌شنبه و سه‌شنبه 15 تا 16:30",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40824,
    1,
    3,
    "ارزیابی کارایی کامپیوترها",
    "مهدی دولتی",
    "شنبه و دوشنبه 15 تا 16:30",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40828,
    1,
    3,
    "آزمون نرم‌افزار",
    "سیدحسن میریان حسین آبادی",
    "شنبه و دوشنبه 10:30 تا 12",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40833,
    1,
    3,
    "بازشناسی گفتار",
    "حسین صامتی",
    "یک‌شنبه و سه‌شنبه 13:30 تا 15",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40834,
    1,
    3,
    "الگوریتم‌های تقریبی",
    "حمید ضرابی زاده",
    "یک‌شنبه و سه‌شنبه 13:30 تا 15",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40843,
    1,
    3,
    "مفاهیم پیشرفته معماری کامپیوتر",
    "هاجر فلاحتی",
    "یک‌شنبه و سه‌شنبه 13:30 تا 15",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40844,
    1,
    3,
    "مفاهیم پیشرفته در معماری کامپیوتر ۲",
    "محسن انصاری",
    "یک‌شنبه و سه‌شنبه 10:30 تا 12",
    "عنوان درس: سامانه‌های رایا-فیزیکی",
    "",
    2,
    6,
    3,
  ],
  [
    40853,
    1,
    3,
    "شبکه‌های میان‌ارتباطی",
    "حمید سربازی آزاد",
    "یک‌شنبه و سه‌شنبه 15 تا 16:30",
    "",
    "",
    2,
    6,
    3,
  ],
  [
    40877,
    1,
    3,
    "مفاهیم پیشرفته در شبکه‌های کامپیوتری",
    "بردیا صفائی",
    "یک‌شنبه و سه‌شنبه 10:30 تا 12",
    "عنوان درس: سیستم‌های نهفته تحت شبکه",
    "",
    2,
    6,
    3,
  ],
  [
    40956,
    1,
    3,
    "مفاهیم پیشرفته در هوش مصنوعی ۲",
    "احسان الدین عسگری، محمد حسین رهبان، مهدیه سلیمانی باغشاه",
    "یک‌شنبه و سه‌شنبه 9 تا 10:30",
    "عنوان درس: مدل‌های زبانی بزرگ",
    "",
    2,
    6,
    3,
  ],
];

const ttt = [
  "چهارشنبه 13 تا 15",
  "دوشنبه 15 تا 17",
  "شنبه 10:30 تا 12:30",
  "دوشنبه 10:30 تا 12:30",
  "سه‌شنبه 8 تا 10",
  "شنبه 13 تا 15",
  "یک‌شنبه 13 تا 15",
  "سه‌شنبه 10:30 تا 12:30",
  "شنبه 15 تا 17",
  "یک‌شنبه 10:30 تا 12:30",
  "دوشنبه 13 تا 15",
  "دوشنبه 8 تا 10",
  "چهارشنبه 10 تا 12",
  "چهارشنبه 8 تا 10",
  "دوشنبه 17 تا 19",
  "یک‌شنبه 15 تا 17",
  "",
  "سه‌شنبه 13 تا 15",
  "سه‌شنبه 15 تا 17",
  "شنبه 8 تا 10",
  "یک‌شنبه 8 تا 10",

  "شنبه و دوشنبه 15 تا 16:30",
  "شنبه و دوشنبه 13:30 تا 15",
  "یک‌شنبه و سه‌شنبه 13:30 تا 15",
  "یک‌شنبه و سه‌شنبه 15 تا 16:30",
  "چهارشنبه 15 تا 17",
  "شنبه و دوشنبه 9 تا 10:30",
  "یک‌شنبه و سه‌شنبه 10:30 تا 12",
  "یک‌شنبه و سه‌شنبه 9 تا 10:30",
  "شنبه و دوشنبه 10:30 تا 12",
  "دوشنبه 7 تا 9",
  "شنبه 7 تا 9، شنبه 13 تا 15",
  "یک‌شنبه 15:30 تا 17",
  "یک‌شنبه و سه‌شنبه 13 تا 14:30",
  "سه‌شنبه 16:30 تا 18",
  "شنبه و دوشنبه 7:30 تا 9",
  "شنبه و دوشنبه 10:30 تا 12:30",
  "شنبه و دوشنبه 16:30 تا 18",
  "چهارشنبه 8 تا 11",
  "چهارشنبه 13 تا 16",
  "شنبه 13 تا 15، یک‌شنبه و سه‌شنبه 13:30 تا 15",
  "یک‌شنبه و سه‌شنبه 13:30 تا 15، چهارشنبه 10:30 تا 12:30",
  "چهارشنبه 8 تا 12:30",
  "یک‌شنبه 7 تا 9",
  "یک‌شنبه و سه‌شنبه 7:30 تا 9",
  "یک‌شنبه و سه‌شنبه 16:30 تا 18",
  "دوشنبه 16:30 تا 18",
  "دوشنبه 7:30 تا 10:30",
  "شنبه و دوشنبه 8:30 تا 10:30",
  "یک‌شنبه و سه‌شنبه 10:30 تا 12:30",

  "یک‌شنبه 7:30 تا 10:30",
  "یک‌شنبه 13:30 تا 15:30",
  "شنبه 7:30 تا 10:30",
  "شنبه 10:30 تا 13:30",
  "سه‌شنبه 10:30 تا 13:30",
  "چهارشنبه 10:30 تا 13:30",
  "شنبه 13 تا 16",
  "یک‌شنبه 13 تا 16",
  "دوشنبه 13 تا 16",
  "سه‌شنبه 7:30 تا 10:30",
  "سه‌شنبه 13:30 تا 16:30",
  "چهارشنبه 7:30 تا 10:30",
  "چهارشنبه 13:30 تا 16:30",
  "یک‌شنبه 7 تا 10:30",
  "یک‌شنبه 10:30 تا 14",
  "یک‌شنبه 16:30 تا 20",
  "سه‌شنبه 9 تا 12:30",
  "دوشنبه 7 تا 10:30",
  "چهارشنبه 7 تا 10:30",
  "شنبه 13 تا 16:30",
  "سه‌شنبه 16:30 تا 20",

  "شنبه و دوشنبه 15 تا 17",
  "یک‌شنبه و سه‌شنبه 8 تا 10",
  "یک‌شنبه و سه‌شنبه 13 تا 15",
  "شنبه و دوشنبه 8 تا 10",
  "یک‌شنبه و سه‌شنبه 15 تا 17",
  "دوشنبه و چهارشنبه 13:30 تا 15",
  "دوشنبه و چهارشنبه 8 تا 10",

  "سه‌شنبه 13 تا 16",
  "دوشنبه 13 تا 19",
  "سه‌شنبه 13 تا 19",
  "شنبه 12:30 تا 13:30، شنبه 13:30 تا 18:30",
  "شنبه 12:30 تا 13:30، یک‌شنبه 13:30 تا 18:30",
  "شنبه 13:30 تا 16:30، سه‌شنبه 13 تا 15",
  "چهارشنبه 9 تا 12",
  "شنبه 13 تا 19",
  "یک‌شنبه 13 تا 19",
  "شنبه 13:30 تا 15، شنبه 15 تا 16:30",
  "سه‌شنبه 16:30 تا 18:30",
  "چهارشنبه 7:30 تا 9، چهارشنبه 9 تا 10:30",
  "دوشنبه 13:30 تا 15، دوشنبه 15 تا 16:30",
  "شنبه 10 تا 12",
  "شنبه 13:30 تا 15:30",

  "یک‌شنبه 10 تا 12",
  "دوشنبه 15:30 تا 17:30",
  "شنبه 15:30 تا 17:30",
  "یک‌شنبه 8:30 تا 10:30",
  "یک‌شنبه 15:30 تا 17:30",
  "دوشنبه 8:30 تا 10:30",
  "دوشنبه 13:30 تا 15:30",
  "سه‌شنبه 13:30 تا 15:30",
  "سه‌شنبه 15:30 تا 17:30",
  "چهارشنبه 8:30 تا 10:30",
  "چهارشنبه 10:30 تا 12:30",
  "سه‌شنبه 8:30 تا 10:30",
  "سه‌شنبه 14 تا 16",
  "سه‌شنبه 16 تا 18",
  "چهارشنبه 8:30 تا 12:30",
  "یک‌شنبه 13:30 تا 17:30",
  "شنبه و دوشنبه 13 تا 14:30",
  "شنبه و دوشنبه 13 تا 15",
  "چهارشنبه 13:30 تا 17:30",
  "سه‌شنبه 15 تا 16:30، سه‌شنبه 16:30 تا 21",
  "چهارشنبه 9 تا 13",
  "شنبه و دوشنبه 11 تا 12:30",
  "یک‌شنبه و سه‌شنبه 12:30 تا 14",
  "یک‌شنبه و سه‌شنبه 17 تا 19",
  "شنبه 13:30 تا 17:30",
  "یک‌شنبه 8:30 تا 12:30",

  "سه‌شنبه 15 تا 16:30",
  "چهارشنبه 8 تا 9:30",
  "سه‌شنبه 13 تا 15، سه‌شنبه 15 تا 17",
  "چهارشنبه 15 تا 16:30",
  "یک‌شنبه و سه‌شنبه 15 تا 16",
  "چهارشنبه 14 تا 16",

  "چهارشنبه 15 تا 18",
  "شنبه و دوشنبه 15:30 تا 17",
  "یک‌شنبه 13 تا 15:30",
  "چهارشنبه 13 تا 15:30",
  "شنبه 8:30 تا 10:30",
  "پنج‌شنبه 9 تا 12",
  "یک‌شنبه 16 تا 19",
  "دوشنبه 13:30 تا 16:30",
  "شنبه و دوشنبه 16 تا 17:30",
  "سه‌شنبه 9 تا 10:30، سه‌شنبه 10:30 تا 12",

  "یک‌شنبه و سه‌شنبه 15:30 تا 17",
  "یک‌شنبه 13:30 تا 16:30",
  "یک‌شنبه 16:30 تا 19:30",
  "دوشنبه 16:30 تا 19:30",
  "سه‌شنبه 16:30 تا 19:30",
  "شنبه 13:30 تا 16:30",
  "شنبه 16:30 تا 19:30",
  "شنبه و دوشنبه 17 تا 18:30",
  "شنبه 15 تا 18",
  "چهارشنبه 10 تا 13",
  "یک‌شنبه و سه‌شنبه 9 تا 10",
  "چهارشنبه 16:30 تا 19:30",
  "شنبه 10:30 تا 12:30، دوشنبه 10:30 تا 13:30",
  "یک‌شنبه 13 تا 15، سه‌شنبه 13 تا 16",
  "یک‌شنبه 13 تا 15، دوشنبه 13 تا 16",
  "شنبه 13 تا 15، دوشنبه 12 تا 15",
  "یک‌شنبه و سه‌شنبه 17 تا 18:30",
  "یک‌شنبه 13:30 تا 14:30",

  "شنبه 10:30 تا 13، دوشنبه 10:30 تا 12",
  "یک‌شنبه و سه‌شنبه 10:30 تا 13",
  "شنبه و دوشنبه 10:30 تا 13",
  "شنبه 12:30 تا 15",
  "دوشنبه 12:30 تا 15",
  "دوشنبه 15 تا 18",
  "یک‌شنبه 16:30 تا 18:30",

  "دوشنبه 9 تا 12",
  "شنبه 16:30 تا 19",
];

const tttt = [];

const time = [
  [{ start: 13, end: 15 }],
  [{ start: 15, end: 17 }],
  [{ start: 10.5, end: 12.5 }],
  [{ start: 10.5, end: 12.5 }],
  [{ start: 8, end: 10 }],
  [{ start: 13, end: 15 }],
  [{ start: 13, end: 15 }],
  [{ start: 10.5, end: 12.5 }],
  [{ start: 15, end: 17 }],
  [{ start: 10.5, end: 12.5 }],
  [{ start: 13, end: 15 }],
  [{ start: 8, end: 10 }],
  [{ start: 10, end: 12 }],
  [{ start: 8, end: 10 }],
  [{ start: 17, end: 19 }],
  [{ start: 15, end: 17 }],
  [{ start: 0, end: 0 }],
  [{ start: 13, end: 15 }],
  [{ start: 15, end: 17 }],
  [{ start: 8, end: 10 }],
  [{ start: 8, end: 10 }],

  [
    { start: 15, end: 16.5 },
    { start: 15, end: 16.5 },
  ],
  [
    { start: 13.5, end: 15 },
    { start: 13.5, end: 15 },
  ],
  [
    { start: 13.5, end: 15 },
    { start: 13.5, end: 15 },
  ],
  [
    { start: 15, end: 16.5 },
    { start: 15, end: 16.5 },
  ],
  [{ start: 15, end: 17 }],
  [
    { start: 9, end: 10.5 },
    { start: 9, end: 10.5 },
  ],
  [
    { start: 10.5, end: 12 },
    { start: 10.5, end: 12 },
  ],
  [
    { start: 9, end: 10.5 },
    { start: 9, end: 10.5 },
  ],
  [
    { start: 10.5, end: 12 },
    { start: 10.5, end: 12 },
  ],
  [{ start: 7, end: 9 }],
  [
    { start: 7, end: 9 },
    { start: 13, end: 15 },
  ],
  [{ start: 15.5, end: 17 }],
  [
    { start: 13, end: 14.5 },
    { start: 13, end: 14.5 },
  ],
  [{ start: 16.5, end: 18 }],
  [
    { start: 7.5, end: 9 },
    { start: 7.5, end: 9 },
  ],
  [
    { start: 10.5, end: 12.5 },
    { start: 10.5, end: 12.5 },
  ],
  [
    { start: 16.5, end: 18 },
    { start: 16.5, end: 18 },
  ],
  [{ start: 8, end: 11 }],
  [{ start: 13, end: 16 }],
  [
    { start: 13, end: 15 },
    { start: 13.5, end: 15 },
    { start: 13.5, end: 15 },
  ],
  [
    { start: 13.5, end: 15 },
    { start: 13.5, end: 15 },
    { start: 10.5, end: 12.5 },
  ],
  [{ start: 8, end: 12.5 }],
  [{ start: 7, end: 9 }],
  [
    { start: 7.5, end: 9 },
    { start: 7.5, end: 9 },
  ],
  [
    { start: 16.5, end: 18 },
    { start: 16.5, end: 18 },
  ],
  [{ start: 16.5, end: 18 }],
  [{ start: 7.5, end: 10.5 }],
  [
    { start: 8.5, end: 10.5 },
    { start: 8.5, end: 10.5 },
  ],
  [
    { start: 10.5, end: 12.5 },
    { start: 10.5, end: 12.5 },
  ],

  [{ start: 7.5, end: 10.5 }],
  [{ start: 13.5, end: 15.5 }],
  [{ start: 7.5, end: 10.5 }],
  [{ start: 10.5, end: 13.5 }],
  [{ start: 10.5, end: 13.5 }],
  [{ start: 10.5, end: 13.5 }],
  [{ start: 13, end: 16 }],
  [{ start: 13, end: 16 }],
  [{ start: 13, end: 16 }],
  [{ start: 7.5, end: 10.5 }],
  [{ start: 13.5, end: 16.5 }],
  [{ start: 7.5, end: 10.5 }],
  [{ start: 13.5, end: 16.5 }],
  [{ start: 7, end: 10.5 }],
  [{ start: 10.5, end: 14 }],
  [{ start: 16.5, end: 20 }],
  [{ start: 9, end: 12.5 }],
  [{ start: 7, end: 10.5 }],
  [{ start: 7, end: 10.5 }],
  [{ start: 13, end: 16.5 }],
  [{ start: 16.5, end: 20 }],

  [
    { start: 15, end: 17 },
    { start: 15, end: 17 },
  ],
  [
    { start: 8, end: 10 },
    { start: 8, end: 10 },
  ],
  [
    { start: 13, end: 15 },
    { start: 13, end: 15 },
  ],
  [
    { start: 8, end: 10 },
    { start: 8, end: 10 },
  ],
  [
    { start: 15, end: 17 },
    { start: 15, end: 17 },
  ],
  [
    { start: 13.5, end: 15 },
    { start: 13.5, end: 15 },
  ],
  [
    { start: 8, end: 10 },
    { start: 8, end: 10 },
  ],

  [{ start: 13, end: 16 }],
  [{ start: 13, end: 19 }],
  [{ start: 13, end: 19 }],
  [
    { start: 12.5, end: 13.5 },
    { start: 13.5, end: 18.5 },
  ],
  [
    { start: 12.5, end: 13.5 },
    { start: 13.5, end: 18.5 },
  ],
  [
    { start: 13.5, end: 16.5 },
    { start: 13, end: 15 },
  ],
  [{ start: 9, end: 12 }],
  [{ start: 13, end: 19 }],
  [{ start: 13, end: 19 }],
  [
    { start: 13.5, end: 15 },
    { start: 15, end: 16.5 },
  ],
  [{ start: 16.5, end: 18.5 }],
  [
    { start: 7.5, end: 9 },
    { start: 9, end: 10.5 },
  ],
  [
    { start: 13.5, end: 15 },
    { start: 15, end: 16.5 },
  ],
  [{ start: 10, end: 12 }],
  [{ start: 13.5, end: 15.5 }],

  [{ start: 10, end: 12 }],
  [{ start: 15.5, end: 17.5 }],
  [{ start: 15.5, end: 17.5 }],
  [{ start: 8.5, end: 10.5 }],
  [{ start: 15.5, end: 17.5 }],
  [{ start: 8.5, end: 10.5 }],
  [{ start: 13.5, end: 15.5 }],
  [{ start: 13.5, end: 15.5 }],
  [{ start: 15.5, end: 17.5 }],
  [{ start: 8.5, end: 10.5 }],
  [{ start: 10.5, end: 12.5 }],
  [{ start: 8.5, end: 10.5 }],
  [{ start: 14, end: 16 }],
  [{ start: 16, end: 18 }],
  [{ start: 8.5, end: 12.5 }],
  [{ start: 13.5, end: 17.5 }],
  [
    { start: 13, end: 14.5 },
    { start: 13, end: 14.5 },
  ],
  [
    { start: 13, end: 15 },
    { start: 13, end: 15 },
  ],
  [
    { start: 13.5, end: 17.5 },
    { start: 13.5, end: 17.5 },
  ],
  [
    { start: 15, end: 16.5 },
    { start: 16.5, end: 21 },
  ],
  [{ start: 9, end: 13 }],
  [
    { start: 11, end: 12.5 },
    { start: 11, end: 12.5 },
  ],
  [
    { start: 12.5, end: 14 },
    { start: 12.5, end: 14 },
  ],
  [
    { start: 17, end: 19 },
    { start: 17, end: 19 },
  ],
  [{ start: 13.5, end: 17.5 }],
  [{ start: 8.5, end: 12.5 }],

  [{ start: 15, end: 16.5 }],
  [{ start: 8, end: 9.5 }],
  [
    { start: 13, end: 15 },
    { start: 15, end: 17 },
  ],
  [{ start: 15, end: 16.5 }],
  [
    { start: 15, end: 16 },
    { start: 15, end: 16 },
  ],
  [{ start: 14, end: 16 }],

  [{ start: 15, end: 18 }],
  [
    { start: 15.5, end: 17 },
    { start: 15.5, end: 17 },
  ],
  [{ start: 13, end: 15.5 }],
  [{ start: 13, end: 15.5 }],
  [{ start: 8.5, end: 10.5 }],
  [{ start: 9, end: 12 }],
  [{ start: 16, end: 19 }],
  [{ start: 13.5, end: 16.5 }],
  [
    { start: 16, end: 17.5 },
    { start: 16, end: 17.5 },
  ],
  [
    { start: 9, end: 10.5 },
    { start: 10.5, end: 12 },
  ],

  [
    { start: 15.5, end: 17 },
    { start: 15.5, end: 17 },
  ],
  [{ start: 13.5, end: 16.5 }],
  [{ start: 16.5, end: 19.5 }],
  [{ start: 16.5, end: 19.5 }],
  [{ start: 16.5, end: 19.5 }],
  [{ start: 13.5, end: 16.5 }],
  [{ start: 16.5, end: 19.5 }],
  [
    { start: 17, end: 18.5 },
    { start: 17, end: 18.5 },
  ],
  [{ start: 15, end: 18 }],
  [{ start: 10, end: 13 }],
  [
    { start: 9, end: 10 },
    { start: 9, end: 10 },
  ],
  [{ start: 16.5, end: 19.5 }],
  [
    { start: 10.5, end: 12.5 },
    { start: 10.5, end: 13.5 },
  ],
  [
    { start: 13, end: 15 },
    { start: 13, end: 16 },
  ],
  [
    { start: 13, end: 15 },
    { start: 13, end: 16 },
  ],
  [
    { start: 13, end: 15 },
    { start: 12, end: 15 },
  ],
  [
    { start: 17, end: 18.5 },
    { start: 17, end: 18.5 },
  ],
  [{ start: 13.5, end: 14.5 }],

  [
    { start: 10.5, end: 13 },
    { start: 10.5, end: 12 },
  ],
  [
    { start: 10.5, end: 13 },
    { start: 10.5, end: 13 },
  ],
  [
    { start: 10.5, end: 13 },
    { start: 10.5, end: 13 },
  ],
  [{ start: 12.5, end: 15 }],
  [{ start: 12.5, end: 15 }],
  [{ start: 15, end: 18 }],
  [{ start: 16.5, end: 18.5 }],

  [{ start: 9, end: 12 }],
  [{ start: 16.5, end: 19 }],
];
const day = [
  [4],
  [2],
  [0],
  [2],
  [3],
  [0],
  [1],
  [3],
  [0],
  [1],
  [2],
  [2],
  [4],
  [4],
  [2],
  [1],
  [-1],
  [3],
  [3],
  [0],
  [1],

  [0, 2],
  [0, 2],
  [1, 3],
  [1, 3],
  [4],
  [0, 2],
  [1, 3],
  [1, 3],
  [0, 2],
  [2],
  [0, 0],
  [1],
  [1, 3],
  [3],
  [0, 2],
  [0, 2],
  [0, 2],
  [4],
  [4],
  [0, 1, 3],
  [1, 3, 4],
  [4],
  [1],
  [1, 3],
  [1, 3],
  [2],
  [2],
  [0, 2],
  [1, 3],

  [1],
  [1],
  [0],
  [0],
  [3],
  [4],
  [0],
  [1],
  [2],
  [3],
  [3],
  [4],
  [4],
  [1],
  [1],
  [1],
  [3],
  [2],
  [4],
  [0],
  [3],

  [0, 2],
  [1, 3],
  [1, 3],
  [0, 2],
  [1, 3],
  [2, 4],
  [2, 4],

  [3],
  [2],
  [3],
  [0, 0],
  [0, 1],
  [0, 3],
  [4],
  [0],
  [1],
  [0, 0],
  [3],
  [4, 4],
  [2, 2],
  [0],
  [0],

  [1],
  [2],
  [0],
  [1],
  [1],
  [2],
  [2],
  [3],
  [3],
  [4],
  [4],
  [3],
  [3],
  [3],
  [4],
  [1],
  [0, 2],
  [0, 2],
  [4],
  [3, 3],
  [4],
  [0, 2],
  [1, 3],
  [1, 3],
  [0],
  [1],

  [3],
  [4],
  [3, 4],
  [4],
  [1, 3],
  [4],

  [4],
  [0, 2],
  [1],
  [4],
  [0],
  [5],
  [1],
  [2],
  [0, 2],
  [3, 3],

  [1, 3],
  [1],
  [1],
  [2],
  [3],
  [0],
  [0],
  [0, 2],
  [0],
  [4],
  [1, 3],
  [4],
  [0, 2],
  [1, 3],
  [1, 2],
  [0, 2],
  [1, 3],
  [1],

  [0, 2],
  [1, 3],
  [0, 2],
  [0],
  [2],
  [2],
  [1],

  [2],
  [0],
];

console.log(tttt.filter((element) => ttt.includes(element)));
console.log(ttt.length, day.length, time.length);

const data1 = courses
  .map((c) => c[5])
  .filter((value, index, array) => {
    return array.indexOf(value) === index;
  });

const data2 = courses.map((course) => {
  return {
    ID: course[0] * 100 + course[1],
    No: course[0],
    GNo: course[1],
    unit: course[2],
    name: course[3],
    professor: course[4],
    days: day[ttt.indexOf(course[5])],
    time: time[ttt.indexOf(course[5])],
    days2: course[5],
  };
});

fs.writeFile("src/data/file.json", JSON.stringify(data2), (err) => {
  if (err) throw err;
});
