let canvas;

// מאגר התמונות והמדבקות שלנו מחולק לקטגוריות
const assetsDB = {
    backgrounds: {
        'flowers': ['assets/backgrounds/flowers/flower1.jpg', 'assets/backgrounds/flowers/flower2.jpg', 'assets/backgrounds/flowers/flower3.jpg', 'assets/backgrounds/flowers/flower4.jpg', 'assets/backgrounds/flowers/flower5.jpg', 'assets/backgrounds/flowers/flower6.jpg', 'assets/backgrounds/flowers/flower7.jpg', 'assets/backgrounds/flowers/flower8.jpg', 'assets/backgrounds/flowers/flower9.jpg', 'assets/backgrounds/flowers/flower10.jpg', 'assets/backgrounds/flowers/flower11.jpg', 'assets/backgrounds/flowers/flower12.jpg', 'assets/backgrounds/flowers/flower13.jpg', 'assets/backgrounds/flowers/flower14.jpg', 'assets/backgrounds/flowers/flower15.jpg', 'assets/backgrounds/flowers/flower16.jpg', 'assets/backgrounds/flowers/flower17.jpg', 'assets/backgrounds/flowers/flower18.jpg', 'assets/backgrounds/flowers/flower19.jpg', 'assets/backgrounds/flowers/flower20.jpg', 'assets/backgrounds/flowers/flower21.jpg', 'assets/backgrounds/flowers/flower22.jpg', 'assets/backgrounds/flowers/flower23.jpg', 'assets/backgrounds/flowers/flower24.jpg', 'assets/backgrounds/flowers/flower25.jpg', 'assets/backgrounds/flowers/flower26.jpg', 'assets/backgrounds/flowers/flower27.jpg', 'assets/backgrounds/flowers/flower28.jpg'], // דוגמה
        'religion': ['assets/backgrounds/religion/dat1.jpg', 'assets/backgrounds/religion/dat2.jpg', 'assets/backgrounds/religion/dat3.jpg', 'assets/backgrounds/religion/dat4.png', 'assets/backgrounds/religion/dat5.jpg', 'assets/backgrounds/religion/dat6.jpg', 'assets/backgrounds/religion/dat7.jpg', 'assets/backgrounds/religion/dat8.jpg', 'assets/backgrounds/religion/dat9.jpg', 'assets/backgrounds/religion/dat10.jpg', 'assets/backgrounds/religion/dat11.jpg', 'assets/backgrounds/religion/dat12.jpg', 'assets/backgrounds/religion/dat13.jpg', 'assets/backgrounds/religion/dat14.jpg', 'assets/backgrounds/religion/dat15.jpg', 'assets/backgrounds/religion/dat16.jpg', 'assets/backgrounds/religion/dat17.png', 'assets/backgrounds/religion/dat18.jpg', 'assets/backgrounds/religion/dat19.jpg', 'assets/backgrounds/religion/dat20.jpg', 'assets/backgrounds/religion/dat21.jpg', 'assets/backgrounds/religion/dat22.jpg', 'assets/backgrounds/religion/dat23.png', 'assets/backgrounds/religion/dat24.jpg', 'assets/backgrounds/religion/dat25.jpg', 'assets/backgrounds/religion/dat26.jpg', 'assets/backgrounds/religion/dat27.jpg', 'assets/backgrounds/religion/dat28.png', 'assets/backgrounds/religion/dat29.jpg', 'assets/backgrounds/religion/dat30.jpg', 'assets/backgrounds/religion/dat31.jpg'],
        'hearts': ['assets/backgrounds/hearts/heart1.jpg', 'assets/backgrounds/hearts/heart2.jpg', 'assets/backgrounds/hearts/heart3.jpg', 'assets/backgrounds/hearts/heart4.jpg', 'assets/backgrounds/hearts/heart5.jpg', 'assets/backgrounds/hearts/heart6.jpg', 'assets/backgrounds/hearts/heart7.jpg', 'assets/backgrounds/hearts/heart8.jpg', 'assets/backgrounds/hearts/heart9.jpg', 'assets/backgrounds/hearts/heart10.jpg', 'assets/backgrounds/hearts/heart11.jpg', 'assets/backgrounds/hearts/heart12.png', 'assets/backgrounds/hearts/heart13.jpg', 'assets/backgrounds/hearts/heart14.jpg', 'assets/backgrounds/hearts/heart15.jpg', 'assets/backgrounds/hearts/heart16.jpg', 'assets/backgrounds/hearts/heart17.jpg', 'assets/backgrounds/hearts/heart18.jpg', 'assets/backgrounds/hearts/heart19.jpg'],
        'sea': [ 'assets/backgrounds/sea/sea1.jpg', 'assets/backgrounds/sea/sea2.jpg', 'assets/backgrounds/sea/sea3.jpg', 'assets/backgrounds/sea/sea4.jpg', 'assets/backgrounds/sea/sea5.jpg', 'assets/backgrounds/sea/sea6.jpg', 'assets/backgrounds/sea/sea7.jpg', 'assets/backgrounds/sea/sea8.jpg', 'assets/backgrounds/sea/sea9.jpg', 'assets/backgrounds/sea/sea10.jpg', 'assets/backgrounds/sea/sea11.jpg', 'assets/backgrounds/sea/sea12.jpg', 'assets/backgrounds/sea/sea13.jpg', 'assets/backgrounds/sea/sea14.jpg', 'assets/backgrounds/sea/sea15.jpg',],
        'israel': [ 'assets/backgrounds/israel/israel1.jpg', 'assets/backgrounds/israel/israel2.jpg', 'assets/backgrounds/israel/israel3.jpg', 'assets/backgrounds/israel/israel4.jpg', 'assets/backgrounds/israel/israel5.jpg', 'assets/backgrounds/israel/israel6.jpg', 'assets/backgrounds/israel/israel7.jpg', 'assets/backgrounds/israel/israel8.jpg', 'assets/backgrounds/israel/israel9.jpg', 'assets/backgrounds/israel/israel10.jpg', 'assets/backgrounds/israel/israel11.jpg', 'assets/backgrounds/israel/israel12.jpg', 'assets/backgrounds/israel/israel13.jpg', 'assets/backgrounds/israel/israel14.jpg', 'assets/backgrounds/israel/israel15.jpg', 'assets/backgrounds/israel/israel16.jpg', 'assets/backgrounds/israel/israel17.jpg', 'assets/backgrounds/israel/israel18.jpg', 'assets/backgrounds/israel/israel19.jpg', 'assets/backgrounds/israel/israel20.jpg', 'assets/backgrounds/israel/israel21.jpg', 'assets/backgrounds/israel/israel22.jpg',],
        'vintage': [ 'assets/backgrounds/vintage/shana1.jpg', 'assets/backgrounds/vintage/shana2.jpg', 'assets/backgrounds/vintage/shana3.jpg', 'assets/backgrounds/vintage/shana4.jpg', 'assets/backgrounds/vintage/shana5.jpg', 'assets/backgrounds/vintage/shana6.jpg', 'assets/backgrounds/vintage/shana7.jpg', 'assets/backgrounds/vintage/shana8.jpg', 'assets/backgrounds/vintage/shana9.jpg', 'assets/backgrounds/vintage/shana10.jpg',],
        'women-children': [ 'assets/backgrounds/women-children/kid1.jpg', 'assets/backgrounds/women-children/kid2.jpg', 'assets/backgrounds/women-children/kid3.jpg', 'assets/backgrounds/women-children/kid4.jpg', 'assets/backgrounds/women-children/kid5.jpg', 'assets/backgrounds/women-children/kid6.jpg', 'assets/backgrounds/women-children/kid7.png', 'assets/backgrounds/women-children/kid8.jpg', 'assets/backgrounds/women-children/kid9.jpg', 'assets/backgrounds/women-children/kid10.png',],
        'other': [ 'assets/backgrounds/other/other1.jpg', 'assets/backgrounds/other/other2.jpg', 'assets/backgrounds/other/other3.png', 'assets/backgrounds/other/other4.jpg', 'assets/backgrounds/other/other5.jpg', 'assets/backgrounds/other/other6.jpg', 'assets/backgrounds/other/other7.jpg', 'assets/backgrounds/other/other8.jpg', 'assets/backgrounds/other/other9.png', 'assets/backgrounds/other/other10.png',]
    },
    stickers: {
        'flowers': [ 'assets/stickers/flowers/stickyflower1.png', 'assets/stickers/flowers/stickyflower2.png', 'assets/stickers/flowers/stickyflower3.png', 'assets/stickers/flowers/stickyflower4.png', 'assets/stickers/flowers/stickyflower5.png', 'assets/stickers/flowers/stickyflower6.png', 'assets/stickers/flowers/stickyflower7.png', 'assets/stickers/flowers/stickyflower8.png', 'assets/stickers/flowers/stickyflower9.png', 'assets/stickers/flowers/stickyflower10.png', 'assets/stickers/flowers/stickyflower11.png', 'assets/stickers/flowers/stickyflower12.png', 'assets/stickers/flowers/stickyflower13.png', 'assets/stickers/flowers/stickyflower14.png', 'assets/stickers/flowers/stickyflower15.png', 'assets/stickers/flowers/stickyflower16.png', 'assets/stickers/flowers/stickyflower17.png', 'assets/stickers/flowers/stickyflower18.png',], // דוגמה
        'hearts': [ 'assets/stickers/hearts/stickyheart1.png', 'assets/stickers/hearts/stickyheart2.png', 'assets/stickers/hearts/stickyheart3.png', 'assets/stickers/hearts/stickyheart4.png', 'assets/stickers/hearts/stickyheart5.png', 'assets/stickers/hearts/stickyheart6.png', 'assets/stickers/hearts/stickyheart7.png', 'assets/stickers/hearts/stickyheart8.png', 'assets/stickers/hearts/stickyheart9.png', 'assets/stickers/hearts/stickyheart10.png', 'assets/stickers/hearts/stickyheart11.png', 'assets/stickers/hearts/stickyheart12.png', 'assets/stickers/hearts/stickyheart13.png', 'assets/stickers/hearts/stickyheart14.png', 'assets/stickers/hearts/stickyheart15.png', 'assets/stickers/hearts/stickyheart16.png', 'assets/stickers/hearts/stickyheart17.png', 'assets/stickers/hearts/stickyheart18.png',],
        'religion': [ 'assets/stickers/religion/god1.png', 'assets/stickers/religion/god2.png', 'assets/stickers/religion/god3.png', 'assets/stickers/religion/god4.png', 'assets/stickers/religion/god5.png', 'assets/stickers/religion/god6.png', 'assets/stickers/religion/god7.png', 'assets/stickers/religion/god8.png', 'assets/stickers/religion/god9.png', 'assets/stickers/religion/god10.png', 'assets/stickers/religion/god11.png', 'assets/stickers/religion/god12.png', 'assets/stickers/religion/god13.png', 'assets/stickers/religion/god14.png', 'assets/stickers/religion/god15.png', 'assets/stickers/religion/god16.png', 'assets/stickers/religion/god17.png', 'assets/stickers/religion/god18.png', 'assets/stickers/religion/god19.png', 'assets/stickers/religion/god20.png', 'assets/stickers/religion/god21.png', 'assets/stickers/religion/god22.png', 'assets/stickers/religion/god23.png', 'assets/stickers/religion/god24.png', 'assets/stickers/religion/god25.png', 'assets/stickers/religion/god26.png', 'assets/stickers/religion/god27.png',],
        'glitter': [ 'assets/stickers/glitter/spark1.png', 'assets/stickers/glitter/spark2.png', 'assets/stickers/glitter/spark3.png', 'assets/stickers/glitter/spark4.png', 'assets/stickers/glitter/spark5.png', 'assets/stickers/glitter/spark6.png', 'assets/stickers/glitter/spark7.png', 'assets/stickers/glitter/spark8.png', 'assets/stickers/glitter/spark9.png', 'assets/stickers/glitter/spark10.png', 'assets/stickers/glitter/spark11.png', 'assets/stickers/glitter/spark12.png', 'assets/stickers/glitter/spark13.png', 'assets/stickers/glitter/spark14.png',],
        'israel': [ 'assets/stickers/israel/flag1.png', 'assets/stickers/israel/flag2.png', 'assets/stickers/israel/flag3.png', 'assets/stickers/israel/flag4.png', 'assets/stickers/israel/flag5.png', 'assets/stickers/israel/flag6.png', 'assets/stickers/israel/flag7.png',]
    }
};

// אתחול הקנווס בטעינת העמוד
window.onload = function() {
    canvas = new fabric.Canvas('greeting-canvas', {
        backgroundColor: '#ffffff',
        selection: true
    });

    // פותר את הבעיה: טוען אוטומטית את התמונות של פרחים בפתיחת האתר!
    const firstBgBtn = document.querySelector('#tab-backgrounds .sub-btn');
    if(firstBgBtn) {
        filterAssets('bg', 'flowers', firstBgBtn);
    }

    // טוען את תמונת הדיאגרמה הראשונה
    renderDiagram(0);

    // פתיחת פופאפ קרדיטים
    document.getElementById('credits-btn').onclick = () => {
        document.getElementById('credits-modal').style.display = 'flex';
    };
};

// ניווט בין דפים
function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function closeCredits() {
    document.getElementById('credits-modal').style.display = 'none';
}

// החלפת לשוניות באדיטור
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(`tab-${tabName}`).classList.add('active');
}

// הוספת טקסט לקנווס
function addTextToCanvas() {
    const textVal = document.getElementById('text-input').value || 'שבת שלום';
    const font = document.getElementById('font-family').value;
    const color = document.getElementById('text-color').value;
    const stroke = document.getElementById('stroke-color').value;

    const text = new fabric.Text(textVal, {
        left: 150,
        top: 200,
        fontFamily: font,
        fill: color,
        stroke: stroke,
        strokeWidth: 1,
        fontSize: 40,
        direction: 'rtl'
    });

    canvas.add(text);
    canvas.setActiveObject(text);
}

// הוספת חתימה
function addSignature() {
    const name = document.getElementById('signature-input').value;
    if(!name) return;

    const signature = new fabric.Text(`באהבה, ${name}`, {
        left: 200,
        top: 400,
        fontFamily: 'Arial',
        fill: '#000000',
        stroke: '#ffffff',
        strokeWidth: 0.6, // העובי הוקטן
        fontSize: 26,
        direction: 'rtl'
    });

    canvas.add(signature);
    canvas.setActiveObject(signature);
}

// הגדרת רקע לקנווס - חכם (חותך את התמונה בלי לעוות אותה)
function setCanvasBackground(imgUrl) {
    fabric.Image.fromURL(imgUrl, function(img) {
        // חישוב יחס ההגדלה/הקטנה כדי לכסות את כל הריבוע בדיוק
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        
        img.set({
            originX: 'center',
            originY: 'center',
            left: canvas.width / 2,
            top: canvas.height / 2,
            scaleX: scale,
            scaleY: scale
        });
        
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    });
}
// הוספת מדבקה לקנווס
function addSticker(imgUrl) {
    fabric.Image.fromURL(imgUrl, function(img) {
        img.scaleToWidth(120);
        img.set({ left: 180, top: 180 });
        canvas.add(img);
        canvas.setActiveObject(img);
    });
}

// הורדת התמונה המוכנה
function downloadImage() {
    const dataURL = canvas.toDataURL({
        format: 'png',
        quality: 1.0
    });
    const link = document.createElement('a');
    link.download = 'shabbat-shalom.png';
    link.href = dataURL;
    link.click();
}

// ביטול פעולה (חזרה אחורה)
function undoCanvas() {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
        canvas.remove(activeObject);
    }
}

// הדגמה של טעינת אסטים
function loadSampleAssets() {
    const bgGrid = document.getElementById('bg-grid');
    const sampleBgs = [
        'https://via.placeholder.com/200/FFB6C1/000000?text=פרחים',
        'https://via.placeholder.com/200/ADD8E6/000000?text=שמיים'
    ];

    bgGrid.innerHTML = sampleBgs.map(url => 
        `<img src="${url}" class="asset-item" onclick="setCanvasBackground('${url}')">`
    ).join('');
}

// תרשימים לדף המחקר
function initCharts() {
    const ctx1 = document.getElementById('colorChart').getContext('2d');
    new Chart(ctx1, {
        type: 'pie',
        data: {
            labels: ['זהב/צהוב', 'ורוד/אדום', 'כחול', 'ירוק'],
            datasets: [{ data: [40, 30, 20, 10], backgroundColor: ['#f1c40f', '#e74c3c', '#3498db', '#2ecc71'] }]
        }
    });
}

// ====== הוספת כפתור "איקס" למחיקה ישירה מהקנווס ======
const deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='24px' height='24px' viewBox='0 0 24 24'%3E%3Ccircle fill='%23FF0000' cx='12' cy='12' r='12'/%3E%3Cpath fill='%23FFFFFF' d='M16.24,14.83l-1.41,1.41L12,13.41l-2.83,2.83l-1.41-1.41L10.59,12L7.76,9.17l1.41-1.41L12,10.59l2.83-2.83l1.41,1.41L13.41,12L16.24,14.83z'/%3E%3C/svg%3E";
const img = document.createElement('img');
img.src = deleteIcon;

fabric.Object.prototype.controls.deleteControl = new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetY: -10,
    offsetX: 10,
    cursorStyle: 'pointer',
    mouseUpHandler: deleteObject,
    render: renderIcon,
    cornerSize: 24
});

function deleteObject(eventData, transform) {
    const target = transform.target;
    const canvas = target.canvas;
    canvas.remove(target);
    canvas.requestRenderAll();
}

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
    const size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.drawImage(img, -size / 2, -size / 2, size, size);
    ctx.restore();
}

// פונקציה לניווט בתתי-התפריטים ושליפת התמונות מהמאגר
function filterAssets(type, category, btnElement) {
    // 1. עדכון עיצוב הכפתור הלחוץ
    const buttons = btnElement.parentElement.querySelectorAll('.sub-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    // 2. בחירת אזור התצוגה (רקעים או מדבקות)
    const grid = document.getElementById(type === 'bg' ? 'bg-grid' : 'sticker-grid');
    const dbType = type === 'bg' ? 'backgrounds' : 'stickers';
    
    // 3. שליפת התמונות מהמאגר שיצרנו למעלה
    const images = assetsDB[dbType][category];

    // 4. הצגת התמונות על המסך
    if (images && images.length > 0) {
        grid.innerHTML = images.map(url => {
            if (type === 'bg') {
                return `<img src="${url}" class="asset-item" onclick="setCanvasBackground('${url}')">`;
            } else {
                return `<img src="${url}" class="asset-item" onclick="addSticker('${url}')">`;
            }
        }).join('');
    } else {
        grid.innerHTML = `<div style="text-align:center; width:100%; padding:20px;">
                            בקרוב יעלו תמונות לקטגוריה זו...
                          </div>`;
    }
}
// ====== פופאפ "הברכה הממוצעת" ======
function openAverageModal() {
    document.getElementById('average-modal').style.display = 'flex';
}

function closeAverageModal() {
    document.getElementById('average-modal').style.display = 'none';
}

// =========================================================
// ====== מאגר הדיאגרמות לדף הסטטיסטיקה (קובצי PNG) ======
// =========================================================

// כאן את צריכה להזין את הנתיב לתמונות הדיאגרמות שתיצרי
const diagramsDB = [
    'assets/diagrams/diagram1.png', 
    'assets/diagrams/diagram2.png',
    'assets/diagrams/diagram3.png',
    'assets/diagrams/diagram4.png',
    'assets/diagrams/diagram5.png',
    'assets/diagrams/diagram6.png',
    'assets/diagrams/diagram7.png',
    'assets/diagrams/diagram8.png',
    'assets/diagrams/diagram9.png',
    'assets/diagrams/diagram10.png',
    'assets/diagrams/diagram11.png',
    'assets/diagrams/diagram12.png'
];

let currentDiagramIndex = 0;

// מציג את הדיאגרמה הנוכחית על המסך
function renderDiagram(index) {
    const imgElement = document.getElementById('diagram-img');
    if(diagramsDB.length > 0 && imgElement) {
        imgElement.src = diagramsDB[index];
    }
}

// מעבר לדיאגרמה הבאה
function nextDiagram() {
    currentDiagramIndex++;
    if (currentDiagramIndex >= diagramsDB.length) {
        currentDiagramIndex = 0;
    }
    renderDiagram(currentDiagramIndex);
}

// מעבר לדיאגרמה הקודמת
function prevDiagram() {
    currentDiagramIndex--;
    if (currentDiagramIndex < 0) {
        currentDiagramIndex = diagramsDB.length - 1;
    }
    renderDiagram(currentDiagramIndex);
}