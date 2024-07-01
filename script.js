document.addEventListener('DOMContentLoaded', function() {
    const currentTimeElem = document.getElementById('current-time');
    const currentDayElem = document.getElementById('current-day');
  
    function updateTime() {
      const now = new Date();
      currentTimeElem.textContent = `Current Time (UTC): ${now.toUTCString().split(' ')[4]}`;
      currentDayElem.textContent = `Current Day: ${now.toLocaleDateString('en-US', { weekday: 'long' })}`;
    }
  
    updateTime();
    setInterval(updateTime, 1000);
  });
  