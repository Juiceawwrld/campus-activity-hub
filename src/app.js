const activities = [
  { id: 1, title: '英语口语能力提升训练营', tag: '学习成长', date: '09月24日 22:00', place: '线上 · 每周日晚 19:00', source: '校学生会', sourceType: 'orange-chip', state: '报名中', stateType: 'pending', intro: '系统提升表达能力与临场沟通技巧，适合希望在课堂展示和活动主持中更自信的同学。', time: '2026年09月20日–24日 19:00', location: '线上会议室', color: 'orange' },
  { id: 2, title: 'AI 应用与前沿分享会', tag: '学院通知', date: '09月19日 19:00', place: '信息楼 · 报告厅', source: '计算机学院', sourceType: 'blue-chip', state: '即将开始', stateType: 'pending', intro: '围绕 AI 工具在学习与科研中的真实应用展开分享，现场将演示多个高频工作流。', time: '2026年09月19日 19:00–20:30', location: '信息楼报告厅', color: 'purple' },
  { id: 3, title: '大学生创新创业项目招募', tag: '竞赛招募', date: '09月22日 18:00', place: '线上提交', source: '创新创业中心', sourceType: 'green-chip', state: '报名中', stateType: 'pending', intro: '面向全校招募创新创业项目成员，欢迎产品、设计、开发与运营方向的同学加入。', time: '2026年09月22日 18:00 截止', location: '线上报名', color: 'green' },
  { id: 4, title: '数学建模经验分享会', tag: '学习成长', date: '已结束', place: '数学楼 · 201', source: '数学学院', sourceType: 'blue-chip', state: '已结束', stateType: 'closed', intro: '优秀队伍分享备赛方法、建模思路与论文写作经验，适合对数学建模感兴趣的同学。', time: '2026年09月18日 19:30–21:00', location: '数学楼 201', color: 'orange' },
  { id: 5, title: '校园公益志愿活动', tag: '社团活动', date: '09月27日 08:30', place: '校内集合', source: '青年志愿者协会', sourceType: 'orange-chip', state: '报名中', stateType: 'pending', intro: '参与校园公益服务，完成签到后可获得志愿服务时长记录。活动全天开展，可按需报名。', time: '2026年09月27日 08:30–17:00', location: '校内集合点', color: 'green' },
  { id: 6, title: 'Web 前端技术学习小组', tag: '学习成长', date: '09月23日', place: '线上 · 6 周', source: '软件部', sourceType: 'green-chip', state: '招募中', stateType: 'pending', intro: '从 HTML、CSS 到现代前端框架，和一群同学一起完成一个真正可以使用的校园工具。', time: '2026年09月23日起 · 每周三 19:30', location: '线上协作空间', color: 'purple' },
  { id: 7, title: 'AI 应用创新挑战赛', tag: '竞赛招募', date: '09月21日 18:00', place: '线上报名', source: '软件部', sourceType: 'green-chip', state: '报名中', stateType: 'pending', intro: '2–4 人组队，将一个真实的校园问题做成可用的 AI 产品，优秀作品将在十月集中展示。', time: '2026年09月21日 18:00 报名截止', location: '线上报名', color: 'blue' },
  { id: 8, title: '校园实用工具共创招募', tag: '竞赛招募', date: '长期开放', place: '线上协作', source: '学生创新中心', sourceType: 'green-chip', state: '长期开放', stateType: 'pending', intro: '一起做一些真正会被同学使用的校园小工具，适合想积累项目经验的开发与产品同学。', time: '长期招募', location: '线上协作空间', color: 'orange' },
  { id: 9, title: '社会实践训练营通知', tag: '学院通知', date: '09月21日 19:30', place: '实验楼 A402', source: '团委实践部', sourceType: 'orange-chip', state: '已报名', stateType: 'pending', intro: '面向已报名同学的第一次集中培训，请携带学生证按时到场。', time: '2026年09月21日 19:30–21:00', location: '实验楼 A402', color: 'purple' },
  { id: 10, title: '前端开发交流会', tag: '学习成长', date: '09月19日 15:00', place: '实验楼 A201', source: '软件部', sourceType: 'green-chip', state: '进行中', stateType: 'pending', intro: '前端同学的轻量交流与作品展示，欢迎带上你的问题、作品或好奇心。', time: '2026年09月19日 15:00–16:30', location: '实验楼 A201', color: 'blue' },
  { id: 11, title: '大学生科研经验分享', tag: '学习成长', date: '09月21日 19:00', place: '图书馆 · 多功能厅', source: '科研处', sourceType: 'blue-chip', state: '报名中', stateType: 'pending', intro: '分享如何寻找课题、联系导师以及开始第一个科研项目，适合低年级同学参加。', time: '2026年09月21日 19:00–20:30', location: '图书馆多功能厅', color: 'green' },
  { id: 12, title: '全国高校编程挑战赛', tag: '竞赛招募', date: '10月05日 23:59', place: '线上报名', source: '教务处', sourceType: 'blue-chip', state: '报名中', stateType: 'pending', intro: '面向本科生的编程挑战赛，具体赛程以主办方后续通知为准。', time: '2026年10月05日 23:59 报名截止', location: '线上报名', color: 'purple' },
  { id: 13, title: '实验室科研助理招募', tag: '竞赛招募', date: '09月21日', place: '实验楼 · 3F', source: '计算机学院', sourceType: 'blue-chip', state: '招募中', stateType: 'pending', intro: '协助实验室开展真实科研工作，欢迎对人工智能与软件工程感兴趣的同学申请。', time: '2026年09月21日 截止', location: '实验楼 3F', color: 'orange' },
  { id: 14, title: 'Git 与 GitHub 实战工作坊', tag: '学习成长', date: '09月21日 19:00', place: '图书馆 · B203', source: '软件部 · 官方通知', sourceType: 'green-chip', state: '即将开始', stateType: 'pending', intro: '从第一次提交到团队协作，带你建立一套真正可复用的版本管理习惯。', time: '2026年09月21日 19:00–20:30', location: '图书馆 B203', color: 'blue' },
  { id: 15, title: 'AI 应用创意挑战', tag: '竞赛招募', date: '09月23日 23:59', place: '线上提交', source: '软件部', sourceType: 'green-chip', state: '报名中', stateType: 'pending', intro: '先提交问题与方案，再把一个想法做成真正能用的产品，个人或组队均可参加。', time: '2026年09月23日 23:59 方案截止', location: '线上提交', color: 'purple' },
  { id: 16, title: '校园影像志愿者招募', tag: '社团活动', date: '长期开放', place: '校内活动现场', source: '融媒体中心', sourceType: 'orange-chip', state: '招募中', stateType: 'pending', intro: '记录校园活动中的真实瞬间，需自备基础影像设备并按要求参与活动。', time: '长期招募', location: '校内活动现场', color: 'orange' },
  { id: 17, title: 'Python 编程学习资料合集', tag: '学习成长', date: '09月22日', place: '线上共享', source: '软件部', sourceType: 'green-chip', state: '已更新', stateType: 'pending', intro: '课程、练习与项目资料的长期整理，适合 Python 入门与想继续深入的同学。', time: '2026年09月22日 更新', location: '线上共享空间', color: 'green' },
  { id: 18, title: '网络安全兴趣小组', tag: '社团活动', date: '09月19日 19:30', place: '信息楼 · 404', source: '网络安全社', sourceType: 'orange-chip', state: '报名中', stateType: 'pending', intro: '从 CTF、Web 安全到安全意识，一起在真实案例里学习有趣的网络安全知识。', time: '2026年09月19日 19:30 起', location: '信息楼 404', color: 'purple' },
  { id: 19, title: '学生创新项目路演观摩', tag: '学院通知', date: '09月20日 14:30', place: '创新中心 · 1F', source: '创新创业中心', sourceType: 'green-chip', state: '报名中', stateType: 'pending', intro: '现场观摩学生项目路演，了解从想法到产品的完整过程，座位有限。', time: '2026年09月20日 14:30–16:00', location: '创新中心 1F', color: 'blue' },
  { id: 20, title: '创新创业项目团队说明会', tag: '竞赛招募', date: '09月22日 18:00', place: '线上会议', source: '创新创业中心', sourceType: 'green-chip', state: '报名中', stateType: 'pending', intro: '为准备组队与申报项目的同学说明流程、分工与提交要求。', time: '2026年09月22日 18:00', location: '线上会议室', color: 'orange' },
  { id: 21, title: '学院 AI 产品作品展', tag: '学院通知', date: '09月20日 19:00', place: '教学楼 B203', source: '计算机学院', sourceType: 'blue-chip', state: '报名中', stateType: 'pending', intro: '展示学院同学完成的 AI 产品作品，欢迎全校同学到场体验与交流。', time: '2026年09月20日 19:00–21:00', location: '教学楼 B203', color: 'purple' },
  { id: 22, title: '学生周末羽毛球约练', tag: '社团活动', date: '09月20日 16:00', place: '体育馆 · 2号场', source: '学生自发活动', sourceType: 'orange-chip', state: '名额 6/8', stateType: 'pending', intro: '周末轻松约练，AA 场地费，按报名顺序确认名额。', time: '2026年09月20日 16:00 起', location: '体育馆 2号场', color: 'green' },
  { id: 23, title: '学生会 AI 工具培训招募', tag: '社团活动', date: '09月21日', place: '线上社群', source: '学生会', sourceType: 'orange-chip', state: '报名中', stateType: 'pending', intro: '面向学生会成员的 AI 工具培训，欢迎对效率工具和内容创作感兴趣的同学。', time: '2026年09月21日 起', location: '线上社群', color: 'blue' },
  { id: 24, title: '校园兼职与权益说明会', tag: '学院通知', date: '09月21日', place: '学生事务中心', source: '学生事务处', sourceType: 'blue-chip', state: '信息待确认', stateType: 'closed', intro: '围绕校园兼职、合同与权益保护进行说明，重要时间地点待官方确认。', time: '时间待确认', location: '地点待确认', color: 'orange' },
  { id: 25, title: '学生会周边产品试用交流', tag: '社团活动', date: '时间待确认', place: '地点待确认', source: '学生会', sourceType: 'orange-chip', state: '信息不完整', stateType: 'closed', intro: '学生会周边产品的试用与意见收集，活动时间和地点尚未补充。', time: '时间待确认', location: '地点待确认', color: 'purple' },
  { id: 26, title: '学院校园实践交流会', tag: '学院通知', date: '09月21日 15:00', place: '线上会议', source: '计算机学院', sourceType: 'blue-chip', state: '报名中', stateType: 'pending', intro: '面向全校同学的校园实践交流，围绕学习与实践经验展开分享。', time: '2026年09月21日 15:00', location: '线上会议室', color: 'green' }
];

const STORAGE_KEYS = {
  favorites: 'campus-activity-hub:favorites',
  reminders: 'campus-activity-hub:reminders'
};

function readStoredSet(key, fallback) {
  try {
    const stored = JSON.parse(localStorage.getItem(key) || 'null');
    return Array.isArray(stored) ? new Set(stored.map(Number)) : new Set(fallback);
  } catch {
    return new Set(fallback);
  }
}

function persistSet(key, values) {
  localStorage.setItem(key, JSON.stringify([...values]));
}

let favorites = readStoredSet(STORAGE_KEYS.favorites, [3, 6, 11, 14, 17, 21]);
let reminders = readStoredSet(STORAGE_KEYS.reminders, []);
let activeCategory = 'all';
let activeQuickFilter = null;
let activeView = 'overview';
let toastTimer;

const body = document.querySelector('#activity-body');
const emptyState = document.querySelector('#empty-state');
const searchInput = document.querySelector('#search-input');
const drawer = document.querySelector('#event-drawer');
const backdrop = document.querySelector('#drawer-backdrop');

function filteredActivities() {
  const term = searchInput.value.trim().toLowerCase();
  return activities.filter((item) => {
    const textMatch = !term || [item.title, item.tag, item.place, item.source, item.intro].join(' ').toLowerCase().includes(term);
    const categoryMatch = activeCategory === 'all' || item.tag === activeCategory;
    const favoriteMatch = activeView !== 'favorites' || favorites.has(item.id);
    const deadlineMatch = activeQuickFilter !== 'deadline' || (item.stateType !== 'closed' && !['长期开放', '时间待确认'].includes(item.date));
    return textMatch && categoryMatch && favoriteMatch && deadlineMatch;
  });
}

function renderActivities() {
  const list = filteredActivities();
  const visible = list.slice(0, 6);
  body.innerHTML = visible.map((item) => `<tr data-id="${item.id}">
    <td><input type="checkbox" aria-label="选择 ${item.title}" /></td>
    <td><div class="event-title-cell"><span class="event-color ${item.color}"></span><div class="event-copy"><strong>${item.title}</strong><span>${item.tag}</span></div></div></td>
    <td><div class="time-copy"><strong>${item.date}</strong><span>${item.place}</span></div></td>
    <td><span class="source-chip ${item.sourceType}">${item.source}</span></td>
    <td><span class="state-label ${item.stateType}">${item.state}</span></td>
    <td><button class="save-button ${favorites.has(item.id) ? 'is-saved' : ''}" data-save="${item.id}" aria-label="${favorites.has(item.id) ? '取消收藏' : '收藏'}">${favorites.has(item.id) ? '♥' : '♡'}</button><button class="row-menu open-event" data-id="${item.id}" aria-label="查看详情">···</button></td>
  </tr>`).join('');
  emptyState.classList.toggle('hidden', list.length !== 0);
  emptyState.style.display = list.length === 0 ? 'flex' : '';
  document.querySelector('#result-count').textContent = list.length ? `显示 1–${Math.min(6, list.length)} 条，共 ${list.length} 条活动` : '没有匹配的活动';
  document.querySelector('#favorite-count').textContent = favorites.size;
  document.querySelector('#stat-favorites').innerHTML = `${String(favorites.size).padStart(2, '0')} <small>项</small>`;
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  document.querySelector('#toast-message').textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

function openDrawer(id) {
  const item = activities.find((activity) => activity.id === Number(id));
  if (!item) return;
  document.querySelector('#drawer-category').textContent = item.tag;
  document.querySelector('#drawer-title').textContent = item.title;
  document.querySelector('#drawer-intro').textContent = item.intro;
  document.querySelector('#drawer-time').textContent = item.time;
  document.querySelector('#drawer-location').textContent = item.location;
  document.querySelector('#drawer-source').textContent = item.source;
  document.querySelector('#drawer-save').textContent = favorites.has(item.id) ? '♥ 已收藏' : '♡ 收藏';
  document.querySelector('#drawer-save').dataset.id = item.id;
  document.querySelector('#drawer-reminder').dataset.id = item.id;
  drawer.classList.add('is-open'); backdrop.classList.add('is-open'); drawer.setAttribute('aria-hidden', 'false');
}

function closeDrawer() { drawer.classList.remove('is-open'); backdrop.classList.remove('is-open'); drawer.setAttribute('aria-hidden', 'true'); }

function setView(view) {
  activeView = view;
  document.querySelectorAll('.nav-item').forEach((button) => button.classList.toggle('is-active', button.dataset.view === view));
  const title = view === 'favorites' ? '我的收藏' : view === 'events' ? '活动库' : view === 'reminders' ? '提醒中心' : '概览';
  document.querySelector('#page-title').textContent = title;
  if (view === 'favorites') { document.querySelector('#activity-section').scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  renderActivities();
}

document.addEventListener('click', (event) => {
  const openButton = event.target.closest('.open-event');
  if (openButton) { openDrawer(openButton.dataset.id); return; }
  const saveButton = event.target.closest('[data-save]');
  if (saveButton) { const id = Number(saveButton.dataset.save); favorites.has(id) ? favorites.delete(id) : favorites.add(id); persistSet(STORAGE_KEYS.favorites, favorites); renderActivities(); showToast(favorites.has(id) ? '已加入收藏' : '已取消收藏'); return; }
  const navButton = event.target.closest('.nav-item');
  if (navButton) { setView(navButton.dataset.view); return; }
  const viewButton = event.target.closest('[data-view="events"]');
  if (viewButton) { setView('events'); document.querySelector('#activity-section').scrollIntoView({ behavior: 'smooth' }); return; }
  const quickButton = event.target.closest('.quick-filter');
  if (quickButton) { const map = { school: '学院通知', activity: '社团活动', contest: '竞赛招募' }; searchInput.value = ''; if (quickButton.dataset.filter === 'deadline') { activeQuickFilter = 'deadline'; activeCategory = 'all'; document.querySelector('#category-filter').firstChild.textContent = '即将截止 '; } else { activeQuickFilter = null; activeCategory = map[quickButton.dataset.filter]; document.querySelector('#category-filter').firstChild.textContent = `${activeCategory} `; } renderActivities(); document.querySelector('#activity-section').scrollIntoView({ behavior: 'smooth' }); return; }
  const categoryButton = event.target.closest('[data-category]');
  if (categoryButton) { activeQuickFilter = null; activeCategory = categoryButton.dataset.category; document.querySelector('#category-filter').firstChild.textContent = `${categoryButton.textContent} `; document.querySelector('#category-menu').classList.add('hidden'); renderActivities(); return; }
  if (event.target.closest('#category-filter')) { document.querySelector('#category-menu').classList.toggle('hidden'); return; }
  if (!event.target.closest('#category-menu')) document.querySelector('#category-menu').classList.add('hidden');
  if (event.target.closest('#drawer-close') || event.target === backdrop) { closeDrawer(); return; }
  if (event.target.closest('#drawer-save')) { const id = Number(event.target.closest('#drawer-save').dataset.id); favorites.has(id) ? favorites.delete(id) : favorites.add(id); persistSet(STORAGE_KEYS.favorites, favorites); renderActivities(); openDrawer(id); showToast(favorites.has(id) ? '已加入收藏' : '已取消收藏'); return; }
  const reminderButton = event.target.closest('#drawer-reminder');
  if (reminderButton) { const id = Number(reminderButton.dataset.id); reminders.add(id); persistSet(STORAGE_KEYS.reminders, reminders); showToast('已加入提醒，活动开始前会通知你'); return; }
  if (event.target.closest('#create-reminder')) { showToast('请先打开活动详情，再加入对应提醒'); return; }
});

searchInput.addEventListener('input', renderActivities);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeDrawer(); });
renderActivities();
