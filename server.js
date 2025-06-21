const express = require("express");
const axios =require('axios')
const path = require("path");
const fs = require("fs");
const jsdom  = require("jsdom");
const PORT = process.env.PORT || 5003;

const app = express();
const headers = {
Accept: 'application/json',
'Content-Type': 'application/json',
};
app.get("/", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/")
.replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

res.send(data)
});
});


app.get("/home", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "رئيسية المتوسط | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/")
.replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

res.send(data)
});
});


app.get("/magazine", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "رئيسية المتوسط | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/")
.replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

res.send(data)
});
});

app.get("/about", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "عن المتوسط | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/")
.replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

res.send(data)
});
});


app.get("/books", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "كتب المتوسط | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/books")
.replace(/__IMAGE__/g, "https://almutawassit.it/almutawassit.png");

res.send(data)
});
});


app.get("/featured", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "آخر إصدارات المتوسط | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/featured")
.replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

res.send(data)
});
});

app.get("/books_by_category", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "الأصناف | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/books_by_category")
.replace(/__IMAGE__/g, "https://almutawassit.it/almutawassit.png");

res.send(data)
});
});

app.get("/books_by_series", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "السلاسل | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/books_by_series")
.replace(/__IMAGE__/g, "https://almutawassit.it/almutawassit.png");

res.send(data)
});
});

app.get("/furthercoming", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "يأتي قريبا | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/furthercoming")
.replace(/__IMAGE__/g, "https://almutawassit.it/almutawassit.png");

res.send(data)
});
});

app.get("/ourWriters/writers", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "كتاب المتوسط | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/ourWriters/writers")
.replace(/__IMAGE__/g, "https://almutawassit.it/almutawassit.png");

res.send(data)
});
});

app.get("/author/:id", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", async (err, data) => {
if (err) {
return console.log(err);
}

const dataR =  await axios
.get(`https://admin.almutawassit.it/api/authors/${req.params.id}`, { headers })
.then(result => {
return result;
})
data = data
.replace(/__TITLE__/g, dataR.data.name)
.replace(/__DESCRIPTION__/g, dataR.data.author_bio)
.replace(/__KEYWORDS__/g,dataR.data.name )
.replace(/__IMAGE__/g, "https://dfu1q19hvvqvl.cloudfront.net/"+dataR.data.image)
.replace(/__URL__/g, "https://almutawassit.it/author/"+ dataR.data.id);

res.send(data)
});
});


app.get("/ourWriters/publishConditions", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "أنشر معنا | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/ourWriters/publishConditions")
.replace(/__IMAGE__/g, "https://almutawassit.it/almutawassit.png");

res.send(data)
});
});


app.get("/videos", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "فيديو المتوسط | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/videos")
.replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

res.send(data)
});
});


app.get("/podcast", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "بودكاست المتوسط | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/podcast")
.replace(/__IMAGE__/g, "https://almutawassit.it/almutawassit.png");

res.send(data)
});
});

app.get("/events", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "نشاطات المتوسط | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/events")
.replace(/__IMAGE__/g, "https://almutawassit.it/almutawassit.png");

res.send(data)
});
});


app.get("/blog", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "مدونة المتوسط | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/blog")
.replace(/__IMAGE__/g, "https://almutawassit.it/almutawassit.png");

res.send(data)
});
});


app.get("/ourProjects/divineComedy", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "الكوميديا الإلهية | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "بدأت منشورات المتوسط العمل على إعادة إنتاج ترجمة حسن عثمان لكتاب \"الكوميديا الإلهية\" لـ دانتي أليغييري، حيث كلَّفت لجنة علمية من كبار الأكاديميين والمترجمين المتخصصين في ترجمة ونقل التراث بين اللغتين الإيطالية والعربية، ببدء العمل على المشروع.")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/ourProjects/divineComedy")
.replace(/__IMAGE__/g, "https://almutawassit.it/static/media/comedy-min.e3419654.jpg");

res.send(data)
});
});

app.get("/ourProjects/translationForum", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "ملتقى الترجمة والأدب العالمي نحو مأسسة الفعل الثقافي | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "أطلقت منشورات المتوسط فكرة تنظيم ملتقى للترجمة عام 2016، حيث عقدت سنته الأولى في مدينة ميلانو الإيطالية، وكان هدفها هو تسليط الضوء على الترجمة بوصفها نشاطاً ثقافياً ومؤسساً وفاعلاً في أي عملية تبادل ثقافي وبين ثقافي.")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/ourProjects/translationForum")
.replace(/__IMAGE__/g, "https://almutawassit.it/static/media/conf-min.064a6708.jpg");

res.send(data)
});
});

app.get("/ourProjects/arabCultureFestivalInMilan", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "مهرجان الثقافة العربية في ميلانو | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "مهرجان الثقافة العربية في ميلانو هو مهرجان سنوي تُنظمه الجامعة الكاثوليكية في ميلانو ربيع كلَّ عام، وتسعى من خلاله المتوسط الشريك الأساسي في التنظيم، إلى خلق فضاءٍ أدبي وفني مفتوح بين المبدعين العرب والأجانب وبين طلبة الجامعة والتجارب الإبداعية العربية في شتّى المجالات.")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/ourProjects/arabCultureFestivalInMilan")
.replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

res.send(data)
});
});

app.get("/ourProjects/literatureIsStronger", (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
return console.log(err);
}

data = data
.replace(/__TITLE__/g, "الأدب أقوى | منشورات المتوسط")
.replace(/__DESCRIPTION__/g, "الأدب أقوى هي مبادرة ثقافية تهدف إلى مدِّ جسرٍ معرفيٍّ بين الكاتب والكتاب في فلسطين وخارجها، مما يتيح المجال لتجاوز الكثير من العقبات والعراقيل التي يفرضها الاحتلال الصهيوني للحيلولة دون وصول الكتاب العربي إلى فلسطين، والتي يسعى من خلالها إلى تعميق الحصار والعزل الثقافي بين فلسطين وبعدها العربي والإنساني.")
.replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
.replace(/__URL__/g, "https://almutawassit.it/ourProjects/literatureIsStronger")
.replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

res.send(data)
});
});


app.get("/book/:id",  (req, res) => {

const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", async (err, data) => {
if (err) {
return console.log(err);
}

const dataR =  await axios
.get(`https://admin.almutawassit.it/api/books/${req.params.id}`, { headers })
.then(result => {
return result;
})
const desc = new jsdom.JSDOM(dataR.data.description)
data = data
.replace(/__TITLE__/g, dataR.data.title)
.replace(/__DESCRIPTION__/g,desc.window.document.querySelector("p") ? desc.window.document.querySelector("p").textContent :
(desc.window.document.querySelector("div") ? desc.window.document.querySelector("div").textContent : "" ))
.replace(/__KEYWORDS__/g, dataR.data.tags.map(word => {
return  word.name.en
}))
.replace(/__IMAGE__/g, "https://dfu1q19hvvqvl.cloudfront.net/"+dataR.data.cover)
.replace(/__URL__/g, "https://almutawassit.it/book/"+ dataR.data.id);

res.send(data)
});

});



app.get("/singlePost/:id",  (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", async (err, data) => {
if (err) {
return console.log(err);
}

const dataR =  await axios
.get(`https://admin.almutawassit.it/api/articles/${req.params.id}`, { headers })
.then(result => {
return result;
})
const desc = new jsdom.JSDOM(dataR.data.body)

data = data
.replace(/__TITLE__/g, dataR.data.title)
.replace(/__DESCRIPTION__/g, desc.window.document.querySelector("p") ? desc.window.document.querySelector("p").textContent :
(desc.window.document.querySelector("div") ? desc.window.document.querySelector("div").textContent : "" ))
.replace(/__KEYWORDS__/g, dataR.data.tags.map(word => {
return  word.name.en
}))
.replace(/__IMAGE__/g, "https://dfu1q19hvvqvl.cloudfront.net/"+dataR.data.image)
.replace(/__URL__/g, "https://almutawassit.it/singlePost/"+ dataR.data.id);

res.send(data)
});

});


app.get("/singlePodcast/:id",  (req, res) => {
const filePath = path.resolve(__dirname, "./build", "index.html");
fs.readFile(filePath, "utf8", async (err, data) => {
if (err) {
return console.log(err);
}

const dataR =  await axios
.get(`https://admin.almutawassit.it/api/podcast/${req.params.id}`, { headers })
.then(result => {
return result;
})
const desc = new jsdom.JSDOM(dataR.data.podcast.description)
console.log(dataR.data.podcast.image)
data = data
.replace(/__TITLE__/g, dataR.data.podcast.title)
.replace(/__DESCRIPTION__/g,desc.window.document.querySelector("p") ? desc.window.document.querySelector("p").textContent :
(desc.window.document.querySelector("div") ? desc.window.document.querySelector("div").textContent : "" ))
.replace(/__KEYWORDS__/g,  dataR.data.podcast.title)
.replace(/__IMAGE__/g, "https://dfu1q19hvvqvl.cloudfront.net/"+dataR.data.podcast.image)
.replace(/__URL__/g, "https://almutawassit.it/singlePodcast/"+ dataR.data.podcast.id);

res.send(data)
});

});




app.use(express.static(path.resolve(__dirname, "./build")))

app.listen(PORT, () => {
console.log(`Server is listening on port ${PORT}`)
})
