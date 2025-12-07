// src/utils/visitorCounter.js
export const getVisitorStats = () => {
  const key = 'edulearn_visitors';
  const now = new Date();
  const today = now.toDateString();
  
  let data = JSON.parse(localStorage.getItem(key) || '{}');
  
  if (data.lastVisit !== today) {
    data.count = (data.count || 0) + 1;
    data.lastVisit = today;
    data.history = data.history || [];
    data.history.push({ date: today, count: 1 });
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  // Simulasi data historis (30 hari)
  const history = data.history || [];
  const last30Days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dayStr = date.toDateString();
    const dayData = history.find(h => h.date === dayStr);
    return {
      date: dayStr,
      count: dayData ? dayData.count : Math.floor(Math.random() * 5) + 1
    };
  }).reverse();

  return {
    total: data.count || 1,
    today: data.lastVisit === today ? (data.history?.slice(-1)[0]?.count || 1) : 0,
    history: last30Days
  };
};
