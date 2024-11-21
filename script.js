
// إظهار رسالة حب بعد 3 ثواني من تحميل الصفحة
window.onload = function() {
    setTimeout(function() {
        alert("أنتِ أغلى من في حياتي يا Oumaima! أحبك إلى ما لا نهاية!");
    }, 3000); // 3000 ملي ثانية = 3 ثواني
}

// التأثير على النصوص عند التمرير
let message = document.querySelector('.message');
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        message.style.color = "#ff6347"; // تغيير اللون إلى اللون الأحمر الفاتح عند التمرير
        message.style.transform = "scale(1.1)";
        message.style.transition = "all 0.5s ease-in-out";
    } else {
        message.style.color = "#333"; // العودة إلى اللون الأصلي
        message.style.transform = "scale(1)";
    }
});

// تأثير على صورة الحب عند الضغط عليها
let photo = document.querySelector('.photo img');
photo.addEventListener('click', function() {
    photo.style.transform = "scale(1.2)";
    photo.style.transition = "all 0.3s ease-in-out";
    setTimeout(function() {
        photo.style.transform = "scale(1)";
    }, 300); // إرجاع الصورة لحجمها الأصلي بعد 0.3 ثانية
});

// تشغيل أغنية خاصة عند تحميل الصفحة
let audio = document.querySelector('audio');
window.onload = function() {
    audio.play(); // تشغيل الأغنية تلقائيًا عند تحميل الصفحة
}

// إضافة تأثير موسيقي عند التمرير على الصورة
photo.addEventListener('mouseover', function() {
    audio.play(); // تشغيل الموسيقى عند التمرير فوق الصورة
});
