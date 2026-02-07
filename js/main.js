/* ================================
   中国招聘考试信息聚合平台 - JavaScript
   ================================ */

// 省份数据配置
const provinceData = {
    civil: [
        { name: '北京', url: 'https://rsj.beijing.gov.cn/' },
        { name: '上海', url: 'https://rsj.sh.gov.cn/' },
        { name: '天津', url: 'https://hrss.tj.gov.cn/' },
        { name: '重庆', url: 'http://rlsbj.cq.gov.cn/' },
        { name: '广东', url: 'http://hrss.gd.gov.cn/' },
        { name: '江苏', url: 'http://jshrss.jiangsu.gov.cn/' },
        { name: '浙江', url: 'https://rlsbt.zj.gov.cn/' },
        { name: '山东', url: 'http://hrss.shandong.gov.cn/' },
        { name: '河南', url: 'https://hrss.henan.gov.cn/' },
        { name: '四川', url: 'http://rst.sc.gov.cn/' },
        { name: '湖北', url: 'http://rst.hubei.gov.cn/' },
        { name: '湖南', url: 'http://rst.hunan.gov.cn/' },
        { name: '福建', url: 'http://rst.fujian.gov.cn/' },
        { name: '安徽', url: 'http://hrss.ah.gov.cn/' },
        { name: '河北', url: 'http://rst.hebei.gov.cn/' },
        { name: '陕西', url: 'http://rst.shaanxi.gov.cn/' },
        { name: '山西', url: 'http://rst.shanxi.gov.cn/' },
        { name: '江西', url: 'http://rst.jiangxi.gov.cn/' },
        { name: '辽宁', url: 'http://rst.ln.gov.cn/' },
        { name: '吉林', url: 'http://hrss.jl.gov.cn/' },
        { name: '黑龙江', url: 'http://hrss.hlj.gov.cn/' },
        { name: '广西', url: 'http://rst.gxzf.gov.cn/' },
        { name: '云南', url: 'http://hrss.yn.gov.cn/' },
        { name: '贵州', url: 'http://rst.guizhou.gov.cn/' },
        { name: '海南', url: 'http://hrss.hainan.gov.cn/' },
        { name: '甘肃', url: 'http://rst.gansu.gov.cn/' },
        { name: '青海', url: 'http://rst.qinghai.gov.cn/' },
        { name: '内蒙古', url: 'http://rst.nmg.gov.cn/' },
        { name: '宁夏', url: 'http://rst.nx.gov.cn/' },
        { name: '新疆', url: 'http://rst.xinjiang.gov.cn/' },
        { name: '西藏', url: 'http://hrss.xizang.gov.cn/' }
    ],
    public: [
        { name: '北京', url: 'https://rsj.beijing.gov.cn/' },
        { name: '上海', url: 'https://rsj.sh.gov.cn/' },
        { name: '天津', url: 'https://hrss.tj.gov.cn/' },
        { name: '重庆', url: 'http://rlsbj.cq.gov.cn/' },
        { name: '广东', url: 'http://hrss.gd.gov.cn/' },
        { name: '江苏', url: 'http://jshrss.jiangsu.gov.cn/' },
        { name: '浙江', url: 'https://rlsbt.zj.gov.cn/' },
        { name: '山东', url: 'http://hrss.shandong.gov.cn/' },
        { name: '河南', url: 'https://hrss.henan.gov.cn/' },
        { name: '四川', url: 'http://rst.sc.gov.cn/' },
        { name: '湖北', url: 'http://rst.hubei.gov.cn/' },
        { name: '湖南', url: 'http://rst.hunan.gov.cn/' },
        { name: '福建', url: 'http://rst.fujian.gov.cn/' },
        { name: '安徽', url: 'http://hrss.ah.gov.cn/' },
        { name: '河北', url: 'http://rst.hebei.gov.cn/' },
        { name: '陕西', url: 'http://rst.shaanxi.gov.cn/' },
        { name: '山西', url: 'http://rst.shanxi.gov.cn/' },
        { name: '江西', url: 'http://rst.jiangxi.gov.cn/' },
        { name: '辽宁', url: 'http://rst.ln.gov.cn/' },
        { name: '吉林', url: 'http://hrss.jl.gov.cn/' },
        { name: '黑龙江', url: 'http://hrss.hlj.gov.cn/' },
        { name: '广西', url: 'http://rst.gxzf.gov.cn/' },
        { name: '云南', url: 'http://hrss.yn.gov.cn/' },
        { name: '贵州', url: 'http://rst.guizhou.gov.cn/' },
        { name: '海南', url: 'http://hrss.hainan.gov.cn/' },
        { name: '甘肃', url: 'http://rst.gansu.gov.cn/' },
        { name: '青海', url: 'http://rst.qinghai.gov.cn/' },
        { name: '内蒙古', url: 'http://rst.nmg.gov.cn/' },
        { name: '宁夏', url: 'http://rst.nx.gov.cn/' },
        { name: '新疆', url: 'http://rst.xinjiang.gov.cn/' },
        { name: '西藏', url: 'http://hrss.xizang.gov.cn/' }
    ],
    teacher: [
        { name: '北京', url: 'https://www.bjedu.gov.cn/' },
        { name: '上海', url: 'https://edu.sh.gov.cn/' },
        { name: '天津', url: 'http://jy.tj.gov.cn/' },
        { name: '重庆', url: 'http://jw.cq.gov.cn/' },
        { name: '广东', url: 'http://edu.gd.gov.cn/' },
        { name: '江苏', url: 'http://jyt.jiangsu.gov.cn/' },
        { name: '浙江', url: 'http://jyt.zj.gov.cn/' },
        { name: '山东', url: 'http://edu.shandong.gov.cn/' },
        { name: '河南', url: 'http://jyt.henan.gov.cn/' },
        { name: '四川', url: 'http://edu.sc.gov.cn/' },
        { name: '湖北', url: 'http://jyt.hubei.gov.cn/' },
        { name: '湖南', url: 'http://jyt.hunan.gov.cn/' },
        { name: '福建', url: 'http://jyt.fujian.gov.cn/' },
        { name: '安徽', url: 'http://jyt.ah.gov.cn/' },
        { name: '河北', url: 'http://jyt.hebei.gov.cn/' },
        { name: '陕西', url: 'http://jyt.shaanxi.gov.cn/' },
        { name: '山西', url: 'http://jyt.shanxi.gov.cn/' },
        { name: '江西', url: 'http://jyt.jiangxi.gov.cn/' },
        { name: '辽宁', url: 'http://jyt.ln.gov.cn/' },
        { name: '吉林', url: 'http://jyt.jl.gov.cn/' },
        { name: '黑龙江', url: 'http://jyt.hlj.gov.cn/' },
        { name: '广西', url: 'http://jyt.gxzf.gov.cn/' },
        { name: '云南', url: 'http://jyt.yn.gov.cn/' },
        { name: '贵州', url: 'http://jyt.guizhou.gov.cn/' },
        { name: '海南', url: 'http://edu.hainan.gov.cn/' },
        { name: '甘肃', url: 'http://jyt.gansu.gov.cn/' },
        { name: '青海', url: 'http://jyt.qinghai.gov.cn/' },
        { name: '内蒙古', url: 'http://jyt.nmg.gov.cn/' },
        { name: '宁夏', url: 'http://jyt.nx.gov.cn/' },
        { name: '新疆', url: 'http://jyt.xinjiang.gov.cn/' },
        { name: '西藏', url: 'http://jyt.xizang.gov.cn/' }
    ]
};

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    initTime();
    initParticles();
    initTabs();
    initProvinceGrids();
    initSearch();
    initFavorites();
    initBackToTop();
});

// 更新时间
function initTime() {
    function updateTime() {
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            weekday: 'short'
        };
        const timeStr = now.toLocaleString('zh-CN', options);
        document.getElementById('currentTime').textContent = '🕐 ' + timeStr;
    }
    updateTime();
    setInterval(updateTime, 60000);
}

// 粒子背景
function initParticles() {
    const container = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

// 标签页切换
function initTabs() {
    const tabs = document.querySelectorAll('.category-tab');
    const panels = document.querySelectorAll('.panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // 更新标签状态
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 更新面板显示
            panels.forEach(p => p.classList.remove('active'));
            document.getElementById('panel-' + category).classList.add('active');
        });
    });
}

// 生成省份网格
function initProvinceGrids() {
    renderProvinceGrid('civilProvinceGrid', provinceData.civil);
    renderProvinceGrid('publicProvinceGrid', provinceData.public);
    renderProvinceGrid('teacherProvinceGrid', provinceData.teacher);
}

function renderProvinceGrid(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = data.map(province => `
        <a href="${province.url}" target="_blank" class="province-link" data-name="${province.name}">
            ${province.name}
        </a>
    `).join('');
}

// 搜索功能
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const filterTags = document.querySelectorAll('.filter-tag');
    
    // 回车搜索
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // 筛选标签
    filterTags.forEach(tag => {
        tag.addEventListener('click', function() {
            filterTags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            applyFilter(filter);
        });
    });
}

function performSearch() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!query) return;
    
    // 搜索所有链接卡片和省份链接
    const allLinks = document.querySelectorAll('.link-card, .province-link');
    let foundCount = 0;
    
    allLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        const matches = text.includes(query);
        
        if (matches) {
            link.style.display = '';
            link.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.5)';
            foundCount++;
        } else {
            link.style.display = 'none';
        }
    });
    
    // 显示所有面板以便查看搜索结果
    document.querySelectorAll('.panel').forEach(p => p.classList.add('active'));
    
    // 显示搜索结果提示
    showToast(`找到 ${foundCount} 个相关结果`);
}

function applyFilter(filter) {
    const tabs = document.querySelectorAll('.category-tab');
    const panels = document.querySelectorAll('.panel');
    
    // 重置搜索状态
    document.querySelectorAll('.link-card, .province-link').forEach(link => {
        link.style.display = '';
        link.style.boxShadow = '';
    });
    
    if (filter === 'all') {
        // 显示第一个面板
        panels.forEach((p, i) => p.classList.toggle('active', i === 0));
        tabs.forEach((t, i) => t.classList.toggle('active', i === 0));
    } else {
        const categoryMap = {
            'civil': 'civil',
            'public': 'public',
            'soe': 'soe',
            'teacher': 'teacher'
        };
        
        const category = categoryMap[filter];
        if (category) {
            panels.forEach(p => p.classList.remove('active'));
            document.getElementById('panel-' + category).classList.add('active');
            
            tabs.forEach(t => {
                t.classList.toggle('active', t.dataset.category === category);
            });
        }
    }
}

// 收藏功能
function initFavorites() {
    const fab = document.getElementById('favoriteFab');
    
    fab.addEventListener('click', toggleFavorites);
    
    // 加载已保存的收藏
    loadFavorites();
}

function toggleFavorites() {
    const panel = document.getElementById('favoritesPanel');
    panel.classList.toggle('active');
}

function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    renderFavorites(favorites);
}

function renderFavorites(favorites) {
    const list = document.getElementById('favoritesList');
    
    if (favorites.length === 0) {
        list.innerHTML = '<p class="empty-tip">暂无收藏，点击链接卡片右上角的 ☆ 添加收藏</p>';
        return;
    }
    
    list.innerHTML = favorites.map((fav, index) => `
        <div class="favorite-item">
            <span>${fav.icon || '🔗'}</span>
            <a href="${fav.url}" target="_blank" style="color: inherit; text-decoration: none; flex: 1;">
                ${fav.title}
            </a>
            <button class="remove-fav" onclick="removeFavorite(${index})">✕</button>
        </div>
    `).join('');
}

function addFavorite(title, url, icon) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    // 检查是否已存在
    if (favorites.some(f => f.url === url)) {
        showToast('已在收藏夹中');
        return;
    }
    
    favorites.push({ title, url, icon });
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites(favorites);
    showToast('收藏成功');
}

function removeFavorite(index) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites(favorites);
    showToast('已取消收藏');
}

// 返回顶部
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    
    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Toast提示
function showToast(message) {
    // 移除已有的toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
        padding: 12px 24px;
        border-radius: 30px;
        font-size: 14px;
        z-index: 1000;
        animation: toastIn 0.3s ease, toastOut 0.3s ease 2s forwards;
    `;
    
    // 添加动画样式
    if (!document.querySelector('#toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            @keyframes toastIn {
                from { opacity: 0; transform: translateX(-50%) translateY(20px); }
                to { opacity: 1; transform: translateX(-50%) translateY(0); }
            }
            @keyframes toastOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 2500);
}

// 右键菜单添加收藏（为链接卡片添加）
document.addEventListener('contextmenu', function(e) {
    const linkCard = e.target.closest('.link-card');
    if (linkCard) {
        e.preventDefault();
        
        const title = linkCard.querySelector('h4')?.textContent || '未知链接';
        const url = linkCard.href;
        const icon = linkCard.querySelector('.card-icon')?.textContent || '🔗';
        
        addFavorite(title, url, icon);
    }
});
